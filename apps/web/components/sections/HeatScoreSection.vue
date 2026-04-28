<script setup lang="ts">
import { ref } from 'vue'

const tiers = [
  { color: '#7C3AED', dotClass: 'threshold-dot-ready', range: '0–40:',  description: 'Likes only. Building initial visibility.' },
  { color: '#EC4899', dotClass: 'threshold-dot-pink',  range: '40–70:', description: 'Contextual commenting. Entering their conversations.' },
  { color: '#F97316', dotClass: 'threshold-dot-orange',range: '70+:',   description: 'Ready. They know you. Send the message.' },
]

const interactiveScore = ref(84)

function handleSectionMouseMove(e: MouseEvent) {
  if (window.matchMedia('(hover: none)').matches) return
  const section = e.currentTarget as HTMLElement
  const rect = section.getBoundingClientRect()
  const y = e.clientY - rect.top
  const progress = 1 - (y / rect.height)
  interactiveScore.value = Math.round(70 + progress * 27)
}

function handleSectionMouseLeave() {
  interactiveScore.value = 84
}

const messageSent = ref(false)
let resetTimer: ReturnType<typeof setTimeout> | null = null

function sendMessage() {
  if (messageSent.value) return
  messageSent.value = true
  resetTimer = setTimeout(() => {
    messageSent.value = false
    resetTimer = null
  }, 2000)
}
</script>

<template>
  <section
    class="section-fade-top px-6 md:px-12"
    style="padding-top: 96px; padding-bottom: 96px;"
    @mousemove="handleSectionMouseMove"
    @mouseleave="handleSectionMouseLeave"
  >
    <div class="max-w-[960px] mx-auto">
      <div class="flex flex-col md:flex-row gap-16 items-center">

        <!-- Left column -->
        <div class="flex-1">
          <div class="animate-up"><SectionLabel text="Heat Score" /></div>

          <h2
            class="text-lh-text font-semibold mt-4 animate-up"
            style="font-size: 28px; letter-spacing: -0.01em; line-height: 1.2;"
            data-delay="50"
          >
            Know exactly when to reach out.
          </h2>

          <p
            class="text-lh-secondary mt-4 animate-up"
            style="font-size: 16px; line-height: 1.7; max-width: 400px;"
            data-delay="100"
          >
            Heat Score (0–100) measures how familiar a prospect is with you.
            It tracks visibility hits, topic alignment, and engagement signals —
            and tells you the optimal moment to send a message.
          </p>

          <div class="flex flex-col gap-4 mt-8 animate-up" data-delay="150">
            <div
              v-for="tier in tiers"
              :key="tier.range"
              class="flex items-start gap-3"
            >
              <div
                class="w-2 h-2 rounded-full shrink-0 mt-1.5"
                :class="tier.dotClass"
                :style="{ backgroundColor: tier.color }"
              />
              <span class="text-lh-secondary" style="font-size: 14px; line-height: 1.5;">
                <strong class="text-lh-text font-semibold">{{ tier.range }}</strong> {{ tier.description }}
              </span>
            </div>
          </div>
        </div>

        <!-- Right column: surface card, fixed size to prevent layout shift -->
        <div
          class="gauge-card-bg flex flex-col items-center animate-up"
          style="border: 0.5px solid #1E2535; border-radius: 16px; padding: 32px; gap: 24px; flex-shrink: 0; width: 340px;"
          data-delay="100"
        >
          <!-- "3 prospects warming" status label above gauge -->
          <div class="flex items-center gap-2">
            <div class="flex items-center gap-1">
              <div class="w-[5px] h-[5px] rounded-full threshold-dot-ready" style="background: #7C3AED;" />
              <div class="w-[5px] h-[5px] rounded-full threshold-dot-pink" style="background: #EC4899;" />
              <div class="w-[5px] h-[5px] rounded-full threshold-dot-orange" style="background: #F97316;" />
            </div>
            <SectionLabel text="3 prospects warming" />
          </div>

          <!-- Gauge with layered ambient glow -->
          <div class="relative flex items-center justify-center" style="width: 300px; height: 220px;">
            <div
              class="absolute pointer-events-none"
              style="inset: -20px; border-radius: 50%; background: radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 60%);"
            />
            <div
              class="absolute pointer-events-none"
              style="inset: 0; background: radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%); filter: blur(20px);"
            />
            <HeatScoreGauge :score="interactiveScore" :animated="true" />
          </div>

          <!-- Alert card — interactive, hover only (no gradient-border-wrap lift) -->
          <div
            class="alert-card"
            :style="`background: #08090E; border: 0.5px solid #1E2535; border-radius: 10px; padding: 16px; width: 200px;${messageSent ? ' cursor: default;' : ''}`"
          >
            <div class="flex items-center gap-2 mb-1">
              <div class="ready-indicator" />
              <p class="text-lh-text font-medium" style="font-size: 13px; line-height: 1.4;">
                Sarah Chen is ready to contact
              </p>
            </div>
            <p class="text-lh-muted" style="font-size: 12px; line-height: 1.4; margin-left: 14px;">
              Heat Score crossed 70 · 2 hours ago
            </p>
            <div class="mt-3">
              <button
                class="w-full font-semibold text-[13px] px-4 py-2 rounded-[6px] transition-all duration-200"
                :style="messageSent
                  ? 'background: rgba(34,197,94,0.2); border: 1px solid #22c55e; color: #22c55e; cursor: default;'
                  : 'background: linear-gradient(90deg, #7C3AED, #EC4899, #F97316); border: none; color: white; cursor: pointer;'"
                @click.stop="sendMessage"
              >
                {{ messageSent ? '✓ Message scheduled' : 'Send message' }}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
