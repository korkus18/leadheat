<script setup lang="ts">
import { TrendingDown, Clock, SearchX, Inbox, ChevronRight } from 'lucide-vue-next'
import { ref, computed } from 'vue'

const activeRow    = ref<null | 1 | 2 | 3>(null)
const hasInteracted  = ref(false)
const showReplyBadge = ref(false)
let replyBadgeTimer: ReturnType<typeof setTimeout> | null = null

const inboxMessages = [
  {
    initials: 'AK',
    name:     'Adam K.',
    subject:  'Quick question',
    preview:  "Hey, I noticed you're in sales — we help teams like...",
    time:     '2h',
    isYou:    false,
    row:      1 as const,
  },
  {
    initials: 'ML',
    name:     'Marketing Lead',
    subject:  'Partnership opportunity',
    preview:  'Hi there! We help B2B companies increase their pipeline...',
    time:     '4h',
    isYou:    false,
    row:      2 as const,
  },
  {
    initials: 'SJ',
    name:     'Sarah J.',
    subject:  'Hey — saw your post about outbound',
    preview:  "That insight on warm outreach was spot on. Curious if...",
    time:     '1d',
    isYou:    true,
    row:      3 as const,
  },
]

const rightContent = computed(() => {
  switch (activeRow.value) {
    case 1: return {
      headline:  'What if he already knew you?',
      subtext:   'With LeadHeat, Adam saw your name 6 times this week — in his feed, in conversations he follows. Your message lands warm.',
      stat1Warm: true,
    }
    case 2: return {
      headline:      'Same pitch. Different result.',
      subtext:       'You commented on their SaaS growth post last week. They recognized your name. Reply rate? 4× higher.',
      stat2AltLabel: true,
    }
    case 3: return {
      headline: 'She actually replied.',
      subtext:  "LeadHeat placed you in Sarah's feed 8 days before you messaged. By the time you reached out, you weren't a stranger.",
    }
    default: return null
  }
})

function getRowOpacity(row: 1 | 2 | 3): number {
  if (activeRow.value === null) return 1
  return activeRow.value === row ? 1 : 0.4
}

function rowStyle(msg: typeof inboxMessages[0]) {
  const isActive = activeRow.value === msg.row
  return {
    padding:      '12px 16px',
    borderBottom: '0.5px solid #1E2535',
    transition:   'background 150ms ease, box-shadow 150ms ease, opacity 200ms ease',
    cursor:       'pointer',
    background:   isActive ? '#161C26' : (msg.isYou ? 'rgba(124,58,237,0.04)' : 'transparent'),
    boxShadow:    isActive ? 'inset 2px 0 0 #7C3AED' : 'none',
    opacity:      getRowOpacity(msg.row),
  }
}

function onRowEnter(row: 1 | 2 | 3) {
  activeRow.value = row
  hasInteracted.value = true
  if (row === 3) {
    replyBadgeTimer = setTimeout(() => { showReplyBadge.value = true }, 400)
  }
}

function onRowLeave() {
  activeRow.value = null
  if (replyBadgeTimer !== null) {
    clearTimeout(replyBadgeTimer)
    replyBadgeTimer = null
  }
  showReplyBadge.value = false
}
</script>

<template>
  <section class="section-fade-top px-6 md:px-12" style="padding-top: 96px; padding-bottom: 96px;">
    <div class="mx-auto" style="max-width: 1100px;">
      <div class="flex flex-col md:flex-row gap-12 md:gap-12 items-start">

        <!-- LEFT: Fake LinkedIn inbox (55%) -->
        <div class="animate-up w-full md:w-[55%]" data-delay="0">

          <!-- Label row with hover hint -->
          <div class="flex items-center justify-between" style="margin-bottom: 12px;">
            <p style="font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #475569;">
              Your prospect's inbox this week
            </p>
            <Transition name="fade-badge">
              <span v-if="activeRow === null" style="font-size: 10px; color: #475569; font-style: italic;">
                ← hover a message
              </span>
            </Transition>
          </div>

          <div style="background: #0E1117; border: 0.5px solid #1E2535; border-radius: 12px; overflow: hidden;">
            <!-- Card header -->
            <div class="flex items-center justify-between" style="padding: 14px 16px; border-bottom: 0.5px solid #1E2535;">
              <div class="flex items-center gap-2">
                <Inbox :size="14" :stroke-width="1.5" style="color: #8B9AB0;" />
                <span style="font-size: 13px; font-weight: 600; color: #F0F2F5;">Inbox</span>
              </div>
              <span style="font-size: 11px; font-weight: 600; background: rgba(239,68,68,0.12); color: #F87171; padding: 2px 8px; border-radius: 10px; border: 0.5px solid rgba(239,68,68,0.25);">
                47 unread
              </span>
            </div>

            <!-- Inbox rows -->
            <div>
              <div
                v-for="msg in inboxMessages"
                :key="msg.name"
                class="flex items-center gap-3"
                :style="rowStyle(msg)"
                @mouseenter="onRowEnter(msg.row)"
                @mouseleave="onRowLeave"
              >
                <!-- Avatar -->
                <div
                  class="flex items-center justify-center shrink-0"
                  :style="`
                    width: 32px; height: 32px; border-radius: 50%;
                    background: ${msg.isYou ? 'rgba(124,58,237,0.15)' : '#161C26'};
                    border: 0.5px solid ${msg.isYou ? 'rgba(124,58,237,0.35)' : '#1E2535'};
                    font-size: 11px; font-weight: 700;
                    color: ${msg.isYou ? '#A78BFA' : '#475569'};
                  `"
                >
                  {{ msg.initials }}
                </div>

                <!-- Content -->
                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between gap-2">
                    <span
                      :style="`
                        font-size: 13px; font-weight: 600;
                        transition: color 150ms ease;
                        color: ${activeRow === msg.row || msg.isYou ? '#F0F2F5' : '#8B9AB0'};
                      `"
                    >
                      {{ msg.name }}
                    </span>
                    <span style="font-size: 11px; color: #475569; flex-shrink: 0;">{{ msg.time }}</span>
                  </div>
                  <div :style="`font-size: 12px; font-weight: 600; color: ${msg.isYou ? '#C4B5FD' : '#475569'}; margin-top: 1px;`">
                    {{ msg.subject }}
                  </div>
                  <div style="font-size: 12px; color: #475569; margin-top: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                    {{ msg.preview }}
                  </div>

                  <!-- Reply badge: delayed 400ms, immediate exit -->
                  <Transition name="fade-badge">
                    <div
                      v-if="msg.row === 3 && showReplyBadge"
                      class="flex items-center gap-1.5"
                      style="margin-top: 5px;"
                    >
                      <div style="width: 6px; height: 6px; border-radius: 50%; background: #22c55e; flex-shrink: 0;" />
                      <span style="font-size: 11px; color: #22c55e; font-weight: 600;">Replied · 2h ago</span>
                    </div>
                  </Transition>
                </div>

                <!-- "You" badge for recognized sender -->
                <div v-if="msg.isYou" style="flex-shrink: 0;">
                  <span style="font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #7C3AED; background: rgba(124,58,237,0.12); padding: 2px 6px; border-radius: 4px; border: 0.5px solid rgba(124,58,237,0.3);">
                    You
                  </span>
                </div>

                <!-- Chevron hint -->
                <ChevronRight
                  :size="14"
                  :stroke-width="1.5"
                  :style="`
                    flex-shrink: 0;
                    transition: color 150ms ease, transform 150ms ease;
                    color: ${activeRow === msg.row ? '#7C3AED' : '#1E2535'};
                    transform: ${activeRow === msg.row ? 'translateX(3px)' : 'translateX(0)'};
                  `"
                />
              </div>

              <!-- Overflow row -->
              <div class="flex items-center justify-center" style="padding: 10px 16px; opacity: 0.3;">
                <span style="font-size: 12px; color: #475569;">44 more messages — all ignored</span>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT: Headline + stats (45%) -->
        <div class="flex flex-col w-full md:w-[45%]" style="padding-top: 4px;">
          <div class="animate-up" data-delay="50">
            <SectionLabel text="The problem" />
          </div>

          <!-- Dynamic content block: fades on hover change -->
          <div class="animate-up" style="position: relative; margin-top: 16px; min-height: 380px;" data-delay="100">
            <Transition name="fade" mode="out-in">
              <div :key="activeRow ?? 'default'">

                <!-- Headline (clamped to 2 lines to prevent layout shift) -->
                <h2
                  class="text-lh-text"
                  style="
                    font-size: clamp(28px, 3.5vw, 40px);
                    font-weight: 700;
                    letter-spacing: -0.02em;
                    line-height: 1.1;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                  "
                >
                  <template v-if="!rightContent">
                    You're one of <span class="gradient-text">47.</span><span class="blink-bar" />
                  </template>
                  <template v-else>{{ rightContent.headline }}</template>
                </h2>

                <!-- Subtext -->
                <p class="text-lh-secondary" style="font-size: 15px; line-height: 1.7; margin-top: 14px;">
                  <template v-if="!rightContent">
                    Prospects get 50+ cold DMs a week. They reply to the ones from people they
                    <em>recognize</em> — someone they've seen in their feed. Cold outreach skips
                    that step entirely.
                  </template>
                  <template v-else>{{ rightContent.subtext }}</template>
                </p>

                <!-- Interaction hint — disappears after first hover -->
                <p
                  v-if="!hasInteracted"
                  style="font-size: 13px; color: #475569; font-style: italic; margin-top: 10px;"
                >
                  Hover a message to see what changes with LeadHeat →
                </p>

                <!-- Stats -->
                <div class="flex flex-col" style="gap: 16px; margin-top: 32px;">

                  <!-- Stat 1: 1–5% (warm override on row 1 hover) -->
                  <div class="flex items-center gap-4">
                    <div class="flex items-center justify-center shrink-0"
                      style="width: 40px; height: 40px; border-radius: 8px; background: rgba(124,58,237,0.08); border: 0.5px solid rgba(124,58,237,0.2);">
                      <TrendingDown :size="16" :stroke-width="1.5" style="color: #7C3AED;" />
                    </div>
                    <div>
                      <template v-if="rightContent?.stat1Warm">
                        <div class="flex items-center gap-2">
                          <span style="font-size: 18px; font-weight: 700; letter-spacing: -0.02em; line-height: 1; color: #475569; text-decoration: line-through;">1–5%</span>
                          <span class="gradient-text" style="font-size: 22px; font-weight: 700; letter-spacing: -0.02em; line-height: 1;">8–15%</span>
                        </div>
                        <p style="font-size: 13px; color: #8B9AB0; margin-top: 2px; line-height: 1.4;">reply rate with warm outreach</p>
                      </template>
                      <template v-else>
                        <div class="gradient-text" style="font-size: 22px; font-weight: 700; letter-spacing: -0.02em; line-height: 1;">1–5%</div>
                        <p style="font-size: 13px; color: #8B9AB0; margin-top: 2px; line-height: 1.4;">reply rate on cold LinkedIn outreach</p>
                      </template>
                    </div>
                  </div>

                  <!-- Stat 2: 7 sec (label swaps on row 2 hover) -->
                  <div class="flex items-center gap-4">
                    <div class="flex items-center justify-center shrink-0"
                      style="width: 40px; height: 40px; border-radius: 8px; background: rgba(124,58,237,0.08); border: 0.5px solid rgba(124,58,237,0.2);">
                      <Clock :size="16" :stroke-width="1.5" style="color: #7C3AED;" />
                    </div>
                    <div>
                      <div class="gradient-text" style="font-size: 22px; font-weight: 700; letter-spacing: -0.02em; line-height: 1;">7 sec</div>
                      <p style="font-size: 13px; color: #8B9AB0; margin-top: 2px; line-height: 1.4;">
                        {{ rightContent?.stat2AltLabel ? "They don't ignore people they recognize." : 'before a prospect decides to ignore you' }}
                      </p>
                    </div>
                  </div>

                  <!-- Stat 3: 0 -->
                  <div class="flex items-center gap-4">
                    <div class="flex items-center justify-center shrink-0"
                      style="width: 40px; height: 40px; border-radius: 8px; background: rgba(124,58,237,0.08); border: 0.5px solid rgba(124,58,237,0.2);">
                      <SearchX :size="16" :stroke-width="1.5" style="color: #7C3AED;" />
                    </div>
                    <div>
                      <div class="gradient-text" style="font-size: 22px; font-weight: 700; letter-spacing: -0.02em; line-height: 1;">0</div>
                      <p style="font-size: 13px; color: #8B9AB0; margin-top: 2px; line-height: 1.4;">tools that build awareness before outreach</p>
                    </div>
                  </div>

                </div>
              </div>
            </Transition>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  position: absolute;
  width: 100%;
}

.fade-badge-enter-active,
.fade-badge-leave-active {
  transition: opacity 150ms ease;
}
.fade-badge-enter-from,
.fade-badge-leave-to {
  opacity: 0;
}

@keyframes blink-cursor {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
.blink-bar {
  display: inline-block;
  width: 2px;
  height: 0.75em;
  background: #7C3AED;
  vertical-align: middle;
  margin-left: 6px;
  border-radius: 1px;
  animation: blink-cursor 1s ease-in-out infinite;
}
</style>
