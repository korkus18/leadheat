# CLAUDE.md — LeadHeat

Read this entire file before writing any code. It is the authoritative reference for how this
project is structured, how it works, and how code should be written.

---

## What this project does

LeadHeat automates LinkedIn pre-engagement. Before a user sends an outreach message to a
prospect, LeadHeat has already been building familiarity — commenting on relevant posts,
liking content, publishing aligned posts — so the prospect recognises the user's name.

The core abstraction is the **Heat Score** (0–100): a computed readiness metric that tells
the user when a prospect is warm enough to message. Everything in the system exists to
move Heat Scores upward and to surface the right moment for outreach.

Pipeline:
```
Lead import → Scrape & profile → Build Topic Graph → Run engagement cycles → Compute Heat Score → Alert user
```

---

## Monorepo structure

```
leadheat/
├── apps/
│   ├── web/                  ← Landing page (Nuxt 3, public, SSR)
│   ├── app/                  ← Product dashboard (Vue 3 SPA, authenticated)
│   └── api/                  ← REST API (FastAPI, async)
├── packages/
│   └── types/                ← Shared TypeScript types
│       ├── src/
│       │   ├── lead.ts
│       │   ├── heat-score.ts
│       │   ├── interaction.ts
│       │   ├── topic-graph.ts
│       │   └── index.ts
│       └── package.json
├── workers/
│   ├── scraping/             ← LinkedIn data extraction
│   │   ├── profile.py        ← Full profile scrape
│   │   ├── feed.py           ← Prospect's feed + interactions
│   │   └── proxy.py          ← Proxy rotation logic
│   ├── engagement/           ← Automated LinkedIn actions
│   │   ├── liker.py          ← Strategic likes
│   │   ├── commenter.py      ← AI-generated comments
│   │   └── poster.py         ← User profile post scheduling
│   ├── scoring/              ← Heat Score computation
│   │   ├── scorer.py         ← Main scoring pipeline
│   │   └── features.py       ← Feature extraction for scoring model
│   ├── celery_app.py         ← Celery instance + queue config
│   └── tasks.py              ← All task definitions (entry points)
├── CLAUDE.md
└── leadheat-brand.md
```

### Why Nuxt for landing, Vue for app
`apps/web` needs SSR for SEO — it is public-facing. `apps/app` is behind auth, SEO is
irrelevant, SPA is fine and simpler. Both share types from `packages/types`. The API serves
both.

---

## Tech stack with versions

### `apps/web`
- Nuxt 3 (latest stable)
- TypeScript 5
- Tailwind CSS 3
- Inter via Google Fonts

### `apps/app`
- Vue 3 (Composition API only — never Options API)
- TypeScript 5 (strict mode)
- Vite
- Pinia (state management)
- Vue Router 4
- Tailwind CSS 3
- Lucide Vue Next (icons)
- @tanstack/vue-query (server state, data fetching)

### `apps/api`
- Python 3.11+
- FastAPI 0.110+
- Pydantic v2 (not v1 — migration-sensitive, syntax differs)
- SQLAlchemy 2.0 async
- asyncpg (async PostgreSQL driver)
- Supabase Python client (auth verification)
- python-jose (JWT)
- httpx (async HTTP client)

### `workers/`
- Celery 5 with Redis broker
- Python 3.11+
- Playwright (browser automation — LinkedIn requires JS, requests won't work)
- openai SDK (GPT-4o for comment generation + text-embedding-3-small)
- numpy (feature vectors for Heat Score)

### Infrastructure
- Supabase — PostgreSQL 15 + pgvector + auth + storage
- Redis — Celery broker + result backend + cache
- Vercel — `apps/web` deploy
- Railway — `apps/api` + `workers/` deploy

---

## Database schema

All tables in Supabase (PostgreSQL 15). UUIDs everywhere. Timestamps always UTC.

```sql
-- Users are managed by Supabase Auth.
-- This table extends auth.users with app-specific data.
CREATE TABLE profiles (
  id           uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  full_name    text,
  linkedin_url text,
  plan         text NOT NULL DEFAULT 'free',  -- free | pro | agency
  created_at   timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE leads (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id         uuid NOT NULL REFERENCES profiles ON DELETE CASCADE,
  linkedin_url    text NOT NULL,
  full_name       text,
  headline        text,
  company         text,
  location        text,
  avatar_url      text,
  heat_score      int NOT NULL DEFAULT 0 CHECK (heat_score BETWEEN 0 AND 100),
  status          text NOT NULL DEFAULT 'queued',
  -- queued | scraping | warming | ready | contacted | paused | done
  scrape_error    text,
  last_scraped_at timestamptz,
  created_at      timestamptz NOT NULL DEFAULT now(),
  updated_at      timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, linkedin_url)
);

CREATE TABLE topic_graphs (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id      uuid NOT NULL REFERENCES leads ON DELETE CASCADE,
  topics       jsonb NOT NULL DEFAULT '{"high": [], "medium": [], "low": []}',
  -- topics shape:
  -- {
  --   "high":   [{ "label": "string", "confidence": 0.0-1.0, "source_posts": ["url"] }],
  --   "medium": [...],
  --   "low":    [...]
  -- }
  embedding    vector(1536),  -- pgvector, from text-embedding-3-small
  model        text NOT NULL DEFAULT 'gpt-4o',
  computed_at  timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE interactions (
  id                  uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id             uuid NOT NULL REFERENCES leads ON DELETE CASCADE,
  user_id             uuid NOT NULL REFERENCES profiles ON DELETE CASCADE,
  type                text NOT NULL,  -- like | comment | post
  linkedin_post_url   text,
  content             text,           -- comment text or post text
  executed_at         timestamptz,
  seen_by_prospect    boolean NOT NULL DEFAULT false,
  seen_confirmed_at   timestamptz,
  status              text NOT NULL DEFAULT 'pending',
  -- pending | executed | failed | skipped
  error               text,
  created_at          timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE heat_score_history (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id     uuid NOT NULL REFERENCES leads ON DELETE CASCADE,
  score       int NOT NULL CHECK (score BETWEEN 0 AND 100),
  delta       int NOT NULL DEFAULT 0,
  factors     jsonb,
  -- factors shape:
  -- {
  --   "visibility_hits": 12,
  --   "topic_match": 0.82,
  --   "reciprocal_engagement": 2,
  --   "recency_weight": 0.9,
  --   "activity_timing": 0.7
  -- }
  recorded_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE engagement_cycles (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id     uuid NOT NULL REFERENCES leads ON DELETE CASCADE,
  week_start  date NOT NULL,
  plan        jsonb NOT NULL,  -- daily scheduled actions
  completed   boolean NOT NULL DEFAULT false,
  created_at  timestamptz NOT NULL DEFAULT now()
);
```

### Required indexes
```sql
CREATE INDEX ON leads (user_id, status);
CREATE INDEX ON leads (user_id, heat_score DESC);
CREATE INDEX ON interactions (lead_id, executed_at DESC);
CREATE INDEX ON heat_score_history (lead_id, recorded_at DESC);
CREATE INDEX ON topic_graphs USING ivfflat (embedding vector_cosine_ops);
```

---

## API structure (`apps/api`)

```
apps/api/
├── main.py               ← FastAPI app init, middleware, router mounting
├── config.py             ← Settings via pydantic-settings
├── database.py           ← AsyncSession factory, get_db dependency
├── auth.py               ← Supabase JWT verification, get_current_user
├── routers/
│   ├── leads.py
│   ├── interactions.py
│   ├── heat_score.py
│   ├── topic_graph.py
│   └── auth.py
├── models/               ← SQLAlchemy ORM models
│   ├── lead.py
│   ├── interaction.py
│   └── heat_score.py
├── schemas/              ← Pydantic request/response schemas
│   ├── base.py           ← ApiResponse envelope
│   ├── lead.py
│   ├── interaction.py
│   └── heat_score.py
└── services/
    ├── lead_service.py
    └── queue_service.py  ← Enqueuing Celery tasks
```

### Response envelope — always use this, never return raw objects
```python
# schemas/base.py
from typing import Generic, TypeVar, Optional
from pydantic import BaseModel

T = TypeVar("T")

class ApiResponse(BaseModel, Generic[T]):
    data: Optional[T] = None
    error: Optional[str] = None
    meta: Optional[dict] = None

# Usage
@router.get("/{lead_id}", response_model=ApiResponse[LeadResponse])
async def get_lead(lead_id: UUID, ...):
    lead = await lead_service.get(lead_id)
    return ApiResponse(data=LeadResponse.model_validate(lead))
```

### Auth dependency
```python
# auth.py
from fastapi import Depends, HTTPException, Header
from supabase import create_client
from uuid import UUID

async def get_current_user(authorization: str = Header(...)) -> UUID:
    token = authorization.removeprefix("Bearer ")
    try:
        user = supabase.auth.get_user(token)
        return UUID(user.user.id)
    except Exception:
        raise HTTPException(status_code=401, detail="Invalid token")
```

### Pydantic v2 patterns — use v2 syntax only
```python
# schemas/lead.py
from pydantic import BaseModel, HttpUrl, field_validator
from uuid import UUID
from datetime import datetime

class LeadCreate(BaseModel):
    linkedin_url: HttpUrl

    @field_validator("linkedin_url")
    @classmethod
    def must_be_linkedin(cls, v: HttpUrl) -> HttpUrl:
        if "linkedin.com/in/" not in str(v):
            raise ValueError("Must be a LinkedIn profile URL")
        return v

class LeadResponse(BaseModel):
    id: UUID
    linkedin_url: str
    full_name: str | None
    heat_score: int
    status: str
    created_at: datetime

    model_config = {"from_attributes": True}  # replaces orm_mode from v1
```

---

## Workers (`workers/`)

### Celery setup
```python
# workers/celery_app.py
from celery import Celery

app = Celery(
    "leadheat",
    broker="redis://localhost:6379/0",
    backend="redis://localhost:6379/1",
    include=["workers.tasks"],
)

app.conf.task_routes = {
    "workers.tasks.scrape_lead":        {"queue": "scraping"},
    "workers.tasks.run_engagement":     {"queue": "engagement"},
    "workers.tasks.compute_heat_score": {"queue": "scoring"},
}

app.conf.task_serializer = "json"
app.conf.result_expires = 3600
```

### Task definitions
```python
# workers/tasks.py
from workers.celery_app import app

@app.task(bind=True, max_retries=3, default_retry_delay=300)
def scrape_lead(self, lead_id: str) -> dict:
    try:
        return scrape_linkedin_profile(lead_id)
    except Exception as exc:
        raise self.retry(exc=exc)

@app.task(bind=True, max_retries=2)
def run_engagement(self, lead_id: str, cycle_id: str) -> dict:
    ...

@app.task
def compute_heat_score(lead_id: str) -> int:
    return compute_score(lead_id)
```

### Enqueuing from the API
```python
# services/queue_service.py
from workers.tasks import scrape_lead, compute_heat_score

def enqueue_scrape(lead_id: str) -> str:
    task = scrape_lead.apply_async(args=[lead_id], queue="scraping")
    return task.id
```

### Proxy rotation
```python
# workers/scraping/proxy.py
import random, os

def get_proxy() -> dict:
    pool = [
        {"host": h, "port": p, "user": u, "pass": pw}
        for entry in os.environ["PROXY_LIST"].split(",")
        for h, p, u, pw in [entry.split(":")]
    ]
    proxy = random.choice(pool)
    return {
        "server":   f"http://{proxy['host']}:{proxy['port']}",
        "username": proxy["user"],
        "password": proxy["pass"],
    }
```

### Playwright scraping pattern
```python
# workers/scraping/profile.py
from playwright.async_api import async_playwright
from workers.scraping.proxy import get_proxy
import asyncio, random

async def scrape_profile(linkedin_url: str) -> dict:
    proxy = get_proxy()
    async with async_playwright() as p:
        browser = await p.chromium.launch(proxy=proxy)
        context = await browser.new_context(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) ...",
            locale="en-US",
        )
        page = await context.new_page()

        await asyncio.sleep(random.uniform(2, 6))        # human delay pre-nav
        await page.goto(linkedin_url, wait_until="networkidle")
        await page.evaluate("window.scrollTo(0, document.body.scrollHeight * 0.3)")
        await asyncio.sleep(random.uniform(1, 3))        # human reading pause

        data = await page.evaluate("() => ({ name: document.title })")
        await browser.close()
        return data
```

### Safe-mode limits — never exceed without explicit user config
```python
# workers/engagement/limits.py
LIMITS = {
    "likes_per_prospect_per_day_max":   7,
    "likes_per_prospect_per_day_min":   3,
    "comments_per_prospect_per_day":    1,
    "posts_per_user_per_week":          1,
    "min_delay_between_actions_sec":    120,   # 2 min
    "max_delay_between_actions_sec":    900,   # 15 min
}
```

---

## Heat Score algorithm

Recomputed after every engagement cycle. Range: 0–100.

```python
# workers/scoring/features.py
def extract_features(lead_id: str) -> dict:
    return {
        "visibility_hits_7d":     count_recent_interactions(lead_id, days=7),
        "visibility_hits_30d":    count_recent_interactions(lead_id, days=30),
        "topic_match_score":      compute_topic_alignment(lead_id),    # 0.0–1.0
        "reciprocal_engagement":  count_prospect_reactions(lead_id),   # liked/commented back
        "recency_weight":         compute_recency_decay(lead_id),
        "activity_gap_days":      days_since_last_interaction(lead_id),
    }

# workers/scoring/scorer.py
def compute_score(features: dict) -> int:
    score = (
        features["visibility_hits_7d"]    * 4  +
        features["visibility_hits_30d"]   * 1  +
        features["topic_match_score"]     * 25 +
        features["reciprocal_engagement"] * 15 +
        features["recency_weight"]        * 10 +
        max(0, 10 - features["activity_gap_days"])
    )
    return min(100, max(0, round(score)))
```

### Score thresholds
```python
# workers/scoring/thresholds.py
THRESHOLD_LIKES_ONLY    = (20, 40)
THRESHOLD_COMMENTS      = (40, 70)
THRESHOLD_READY         = 70       # triggers "send DM" alert to user
```

---

## Vue app structure (`apps/app`)

```
apps/app/src/
├── main.ts
├── App.vue
├── router/
│   └── index.ts
├── stores/
│   ├── auth.ts          ← useAuthStore
│   ├── leads.ts         ← useLeadsStore
│   └── ui.ts            ← useUiStore (toasts, modals)
├── composables/
│   ├── useApi.ts        ← typed fetch wrapper
│   ├── useLead.ts
│   └── useHeatScore.ts
├── components/
│   ├── ui/              ← Button, Badge, Card, Input (generic)
│   ├── leads/           ← LeadCard, LeadTable, LeadImportModal
│   └── heat-score/      ← HeatScoreGauge, HeatScoreHistory
└── views/
    ├── DashboardView.vue
    ├── LeadsView.vue
    ├── LeadDetailView.vue
    └── SettingsView.vue
```

### Component conventions
```vue
<script setup lang="ts">
import type { Lead } from '@leadheat/types'

const props = defineProps<{
  lead: Lead
  compact?: boolean
}>()

const emit = defineEmits<{
  select: [leadId: string]
}>()
</script>

<template>
  <div class="...">
    ...
  </div>
</template>
```

### Pinia store pattern
```typescript
// stores/leads.ts
import { defineStore } from 'pinia'
import type { Lead } from '@leadheat/types'

export const useLeadsStore = defineStore('leads', () => {
  const leads = ref<Lead[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  const api = useApi()

  async function fetchLeads() {
    loading.value = true
    error.value = null
    try {
      const res = await api.get<Lead[]>('/leads')
      leads.value = res.data
    } catch {
      error.value = 'Failed to load leads'
    } finally {
      loading.value = false
    }
  }

  return { leads, loading, error, fetchLeads }
})
```

### API composable
```typescript
// composables/useApi.ts
export function useApi() {
  const auth = useAuthStore()
  const base = import.meta.env.VITE_API_URL

  async function get<T>(path: string): Promise<{ data: T }> {
    const res = await fetch(`${base}${path}`, {
      headers: { Authorization: `Bearer ${auth.token}` },
    })
    if (!res.ok) throw new Error(await res.text())
    return res.json()
  }

  async function post<T>(path: string, body: unknown): Promise<{ data: T }> {
    const res = await fetch(`${base}${path}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${auth.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    if (!res.ok) throw new Error(await res.text())
    return res.json()
  }

  return { get, post }
}
```

---

## Shared types (`packages/types`)

```typescript
// lead.ts
export interface Lead {
  id: string
  linkedinUrl: string
  fullName: string | null
  headline: string | null
  company: string | null
  heatScore: number        // 0–100
  status: LeadStatus
  createdAt: string        // ISO 8601
  updatedAt: string
}

export type LeadStatus =
  | 'queued' | 'scraping' | 'warming'
  | 'ready' | 'contacted' | 'paused' | 'done'

// heat-score.ts
export interface HeatScoreEntry {
  score: number
  delta: number
  factors: HeatScoreFactors
  recordedAt: string
}

export interface HeatScoreFactors {
  visibilityHits: number
  topicMatch: number          // 0.0–1.0
  reciprocalEngagement: number
  recencyWeight: number
  activityTimingScore: number
}

// interaction.ts
export interface Interaction {
  id: string
  leadId: string
  type: 'like' | 'comment' | 'post'
  linkedinPostUrl: string | null
  content: string | null
  executedAt: string | null
  seenByProspect: boolean
  status: 'pending' | 'executed' | 'failed' | 'skipped'
}

// topic-graph.ts
export interface TopicGraph {
  high:   TopicNode[]
  medium: TopicNode[]
  low:    TopicNode[]
}

export interface TopicNode {
  label: string
  confidence: number    // 0.0–1.0
  sourcePosts: string[]
}
```

---

## Local development

```bash
# 1. Infrastructure
docker compose up -d        # starts Redis + local Postgres

# 2. API
cd apps/api
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000

# 3. Workers (separate terminal)
cd workers
celery -A celery_app worker --queues scraping,engagement,scoring --loglevel=info

# 4. App
cd apps/app
pnpm install && pnpm dev    # http://localhost:5173

# 5. Landing
cd apps/web
pnpm install && pnpm dev    # http://localhost:3000
```

---

## Error handling rules

### API
```python
# Specific status codes — never generic 500 for logic errors
raise HTTPException(status_code=404, detail="Lead not found")
raise HTTPException(status_code=409, detail="Lead already exists")
raise HTTPException(status_code=422, detail="Invalid LinkedIn URL")

# Never silent catch
# BAD:  except Exception: pass
# GOOD: except Exception as e: logger.error(f"[lead={lead_id}] scrape failed: {e}"); raise
```

### Workers
```python
@app.task(bind=True, max_retries=3, default_retry_delay=300)
def scrape_lead(self, lead_id: str):
    try:
        result = scrape_linkedin_profile(lead_id)
        update_lead_status(lead_id, "warming")
        return result
    except ScrapeRateLimitError as exc:
        update_lead_status(lead_id, "queued")
        raise self.retry(exc=exc, countdown=1800)   # 30 min backoff on rate limit
    except Exception as exc:
        update_lead_status(lead_id, "scrape_error", error=str(exc))
        raise
```

### Frontend — errors are state, not exceptions
```typescript
// Model error as state. Never let it crash the component.
const { leads, loading, error } = useLeadsStore()
```
```html
<div v-if="error">{{ error }}</div>
<div v-else-if="loading" class="skeleton" />
<LeadTable v-else :leads="leads" />
```

---

## Coding rules

1. TypeScript strict mode is on. No `any`. Use `unknown` and narrow, or fix the type.
2. Pydantic v2 syntax only. `model_validate()` not `.from_orm()`. `model_config` not `class Config`.
3. Async everywhere in FastAPI. No sync route handlers, no sync DB calls.
4. Composition API only in Vue. Never Options API, never `this`.
5. No magic numbers. Named constants in `limits.py`, `thresholds.py`, or equivalent TS files.
6. Never log PII. No names, emails, LinkedIn URLs or profile data in logs. Use IDs only.
7. No commented-out code in commits.
8. One concern per file. Router does routing. Service does logic. Model does DB.
9. Tailwind utility classes only. No custom CSS unless Tailwind genuinely cannot do it.
10. Every feature needs at minimum one happy-path test and one error-case test.

---

## Brand rules for UI (full spec in `leadheat-brand.md`)

```
BG:         #08090E / #0E1117 / #161C26
Border:     0.5px solid #1E2535
Text:       #F0F2F5 / #8B9AB0 / #475569
Accent:     #7C3AED (violet, solid UI elements)
Gradient:   linear-gradient(90deg, #7C3AED, #EC4899, #F97316)
Font:       Inter 400/600/700
Icons:      Lucide, 16px, stroke-width 1.5
Shadows:    none — flat design only
Animation:  200ms ease-out
```

Gradient is used only on: CTA buttons, Heat Score gauge fill, highlighted text.
Never as a section background. Never decorative.
