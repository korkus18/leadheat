# LeadHeat — Brand Identity System

## Overview

**Product:** LeadHeat — AI pre-engagement engine for B2B LinkedIn outreach  
**Positioning:** The missing layer between lead generation and outreach  
**Tagline:** Stop cold outreach. Start warm outreach.  
**Core concept:** `LEAD → PRE-ENGAGE → OUTREACH`

---

## Visual Identity

### Direction
- **Style:** Dark-first, sharp with warmth — inspired by Linear/Vercel
- **Feel:** Professional, trustworthy, technological. A serious tool, not a startup toy.
- **Rule:** Precision layout, minimal decoration. Let the gradient do the emotional work — use it sparingly.

### Color Palette

#### Backgrounds
| Name | Hex | Usage |
|------|-----|-------|
| BG Primary | `#08090E` | Page background |
| BG Surface | `#0E1117` | Cards, panels |
| BG Elevated | `#161C26` | Modals, dropdowns, elevated components |
| Border | `#1E2535` | All borders, dividers |

> Note: `#08090E` is not pure black — it has a slight blue tint. This makes the brand gradient read more naturally against it.

#### Text
| Name | Hex | Usage |
|------|-----|-------|
| Text Primary | `#F0F2F5` | Headings, primary content |
| Text Secondary | `#8B9AB0` | Body text, descriptions |
| Text Muted | `#475569` | Labels, placeholders, metadata |

#### Brand Gradient
```
linear-gradient(90deg, #7C3AED, #EC4899, #F97316)
```
| Stop | Hex | Name |
|------|-----|------|
| Start | `#7C3AED` | Violet |
| Mid | `#EC4899` | Pink |
| End | `#F97316` | Orange |

**Gradient usage:** Logo, CTA buttons, active states, Heat Score visualization, highlighted text.  
**Never:** Use gradient as a section background or decorative fill.

#### Solid Accent (from gradient)
- **Violet** `#7C3AED` — primary UI accent: buttons, badges, focus states, active indicators
- **Pink** `#EC4899` — secondary highlight, used rarely
- **Orange** `#F97316` — warning states, "hot" indicators in Heat Score context

---

## Typography

**Font family:** Inter (Google Fonts)  
**Weights used:** 400 (regular), 600 (semibold), 700 (bold)  
**Never use:** weight 300 or 800+

| Role | Size | Weight | Tracking | Line Height |
|------|------|--------|----------|-------------|
| Display | 56px | 700 | -0.03em | 1.05 |
| H1 | 40px | 700 | -0.02em | 1.1 |
| H2 | 28px | 600 | -0.01em | 1.2 |
| H3 | 20px | 600 | -0.01em | 1.3 |
| Body | 16px | 400 | 0 | 1.7 |
| Small | 14px | 400 | 0 | 1.5 |
| Label/caps | 11px | 600 | 0.08em | — |

**Label/caps** are always uppercase and used for section labels, metadata tags, and category indicators.

---

## Design Tokens

| Token | Value |
|-------|-------|
| Border radius (small) | `6px` |
| Border radius (default) | `10px` |
| Border radius (large/card) | `16px` |
| Border style | `0.5px solid #1E2535` |
| Spacing unit | `4px` base — use multiples: 8, 16, 24, 32 |
| Shadows | None — flat design only |
| Animation | `200ms ease-out` |
| Icon set | Lucide icons, 16px, stroke-width 1.5 |

---

## Logo

- **Asset:** Three flame shapes with gradient `#7C3AED → #EC4899 → #F97316`
- **Minimum size:** 24px icon height
- **Clear space:** 1× icon height on all sides
- **On dark background:** White wordmark `#F0F2F5`
- **On light background:** Dark wordmark `#0A0C12`
- **Never:** Recolor, distort, or modify the gradient of the logo

---

## Brand Voice

### Principles
- **Numbers over adjectives.** Claim with data, not enthusiasm.
- **Short sentences.** One idea per sentence.
- **No jargon.** "Reply rates increase" not "enhance conversion velocity."
- **Direct.** State the outcome first, explain second.

### Do / Don't

| Do | Don't |
|----|-------|
| "Reply rates increase 2–5× before you send a single message." | "Revolutionize your outbound with our AI-powered engagement solution." |
| "Heat Score 70+ → send the message. They're ready." | "Our intelligent platform helps you build meaningful connections at scale." |
| "Lidi neodpovídají cizím lidem. LeadHeat tě udělá známým ještě předtím, než pošleš zprávu." | "Pomáháme firmám budovat smysluplné vztahy prostřednictvím inovativních technologií." |
| "3% → 9% reply rate. 10 days." | "Significantly improved outreach performance metrics." |

### Tone by context
- **Landing page:** Bold, outcome-first, short. Every sentence earns its place.
- **Product UI:** Precise, minimal, zero filler. Labels are nouns, not sentences.
- **Outreach/sales:** Warm but direct. Lead with result, not feature.
- **Case studies:** Numbers first, story second.

---

## UI Component Patterns

### Cards
```
background: #0E1117
border: 0.5px solid #1E2535
border-radius: 10px
padding: 16px 20px
```

### Primary CTA Button
```
background: linear-gradient(90deg, #7C3AED, #EC4899, #F97316)
color: #ffffff
border: none
border-radius: 6px
font-size: 14px
font-weight: 600
padding: 10px 20px
```

### Secondary Button
```
background: transparent
border: 0.5px solid #1E2535
color: #F0F2F5
border-radius: 6px
font-size: 14px
font-weight: 500
padding: 10px 20px
hover: background #161C26
```

### Section Label (caps)
```
font-size: 11px
font-weight: 600
letter-spacing: 0.08em
text-transform: uppercase
color: #475569
```

### Heat Score Badge
```
background: rgba(124, 58, 237, 0.12)
color: #A78BFA
font-size: 11px
font-weight: 600
padding: 2px 8px
border-radius: 4px
```

---

## Product Terminology

Use these terms consistently across all surfaces:

| Term | Definition |
|------|-----------|
| **Heat Score** | 0–100 readiness metric measuring prospect familiarity and openness to outreach |
| **Pre-engagement** | The automated layer of visibility-building before any direct message is sent |
| **Topic Graph** | AI-generated map of a prospect's interests, content, and behavioral clusters |
| **Lead warming** | The process of increasing a prospect's Heat Score over time |
| **Visibility hit** | A single automated interaction (comment, like, post) seen by the prospect |

---

## What LeadHeat Is Not

Always be clear about positioning:
- Not a leadgen tool (doesn't find contacts)
- Not an outreach tool (doesn't send DMs)
- Not a social media scheduler (not broadcast, it's targeted)
- Not an engagement bot (no generic AI noise)

LeadHeat sits **between** existing tools — it complements Clay, Apollo, Lemlist, Instantly. It never competes with them.
