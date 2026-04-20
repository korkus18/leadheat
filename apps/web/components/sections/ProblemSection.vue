<script setup lang="ts">
import { TrendingDown, Clock, SearchX, Inbox } from 'lucide-vue-next'
import { markRaw } from 'vue'

const stats = [
  {
    number: '1–5%',
    icon:   markRaw(TrendingDown),
    label:  'reply rate on cold LinkedIn outreach',
    delay:  200,
  },
  {
    number: '7 sec',
    icon:   markRaw(Clock),
    label:  'before a prospect decides to ignore you',
    delay:  280,
  },
  {
    number: '0',
    icon:   markRaw(SearchX),
    label:  'tools that build awareness before outreach',
    delay:  360,
  },
]

const inboxMessages = [
  {
    initials: 'AK',
    name:     'Adam K.',
    subject:  'Quick question',
    preview:  "Hey, I noticed you're in sales — we help teams like...",
    time:     '2h',
    isYou:    false,
  },
  {
    initials: 'ML',
    name:     'Marketing Lead',
    subject:  'Partnership opportunity',
    preview:  'Hi there! We help B2B companies increase their pipeline...',
    time:     '4h',
    isYou:    false,
  },
  {
    initials: 'SJ',
    name:     'Sarah J.',
    subject:  'Hey — saw your post about outbound',
    preview:  "That insight on warm outreach was spot on. Curious if...",
    time:     '1d',
    isYou:    true,
  },
]
</script>

<template>
  <section class="section-fade-top px-6 md:px-12" style="padding-top: 96px; padding-bottom: 96px;">
    <div class="mx-auto" style="max-width: 1100px;">
      <div class="flex flex-col md:flex-row gap-12 md:gap-12 items-start">

        <!-- LEFT: Fake LinkedIn inbox (55%) -->
        <div class="animate-up w-full md:w-[55%]" data-delay="0">
          <p style="font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #475569; margin-bottom: 12px;">
            Your prospect's inbox this week
          </p>

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
                class="flex items-start gap-3"
                :style="`
                  padding: 12px 16px;
                  border-bottom: 0.5px solid #1E2535;
                  ${msg.isYou ? 'background: rgba(124,58,237,0.04);' : 'opacity: 0.45;'}
                `"
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
                    <span :style="`font-size: 13px; font-weight: 600; color: ${msg.isYou ? '#F0F2F5' : '#8B9AB0'};`">
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
                </div>

                <!-- "You" badge for recognized sender -->
                <div v-if="msg.isYou" style="flex-shrink: 0; margin-top: 2px;">
                  <span style="font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #7C3AED; background: rgba(124,58,237,0.12); padding: 2px 6px; border-radius: 4px; border: 0.5px solid rgba(124,58,237,0.3);">
                    You
                  </span>
                </div>
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

          <h2
            class="text-lh-text animate-up"
            style="font-size: clamp(28px, 3.5vw, 40px); font-weight: 700; letter-spacing: -0.02em; line-height: 1.1; margin-top: 16px;"
            data-delay="100"
          >
            You're one of <span class="gradient-text">47.</span>
          </h2>

          <p
            class="text-lh-secondary animate-up"
            style="font-size: 15px; line-height: 1.7; margin-top: 14px;"
            data-delay="150"
          >
            Prospects get 50+ cold DMs a week. They reply to the ones from people they
            <em>recognize</em> — someone they've seen in their feed. Cold outreach skips
            that step entirely.
          </p>

          <div class="flex flex-col" style="gap: 16px; margin-top: 32px;">
            <div
              v-for="stat in stats"
              :key="stat.number"
              class="flex items-center gap-4 animate-up"
              :data-delay="stat.delay"
            >
              <div
                class="flex items-center justify-center shrink-0"
                style="width: 40px; height: 40px; border-radius: 8px; background: rgba(124,58,237,0.08); border: 0.5px solid rgba(124,58,237,0.2);"
              >
                <component :is="stat.icon" :size="16" :stroke-width="1.5" style="color: #7C3AED;" />
              </div>
              <div>
                <div class="gradient-text" style="font-size: 22px; font-weight: 700; letter-spacing: -0.02em; line-height: 1;">
                  {{ stat.number }}
                </div>
                <p style="font-size: 13px; color: #8B9AB0; margin-top: 2px; line-height: 1.4;">
                  {{ stat.label }}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
