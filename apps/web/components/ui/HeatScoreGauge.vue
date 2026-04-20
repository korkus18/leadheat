<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'

const props = withDefaults(defineProps<{
  score: number
  animated?: boolean
}>(), {
  animated: true,
})

const RADIUS = 110
const STROKE = 10
const SVG_SIZE = 280
const CENTER = SVG_SIZE / 2
const CIRCUMFERENCE = Math.PI * RADIUS

const displayScore = ref(0)
const dashOffset = computed(() => {
  const filled = (displayScore.value / 100) * CIRCUMFERENCE
  return CIRCUMFERENCE - filled
})

const statusLabel = computed(() => {
  if (displayScore.value < 20) return { text: 'Cold',    color: '#475569' }
  if (displayScore.value < 40) return { text: 'Warming', color: '#8B9AB0' }
  if (displayScore.value < 70) return { text: 'Active',  color: '#EC4899' }
  return                              { text: 'Ready',   color: '#7C3AED' }
})

const showPulse = computed(() => displayScore.value >= 70)

const gradientId = `gauge-gradient-${Math.random().toString(36).slice(2)}`

onMounted(() => {
  if (!props.animated) {
    displayScore.value = props.score
    return
  }
  const start = performance.now()
  const duration = 1200
  const target = props.score

  function step(now: number) {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    displayScore.value = Math.round(eased * target)
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
})

watch(() => props.score, (newScore) => {
  if (!props.animated) { displayScore.value = newScore; return }
  const start = performance.now()
  const duration = 180
  const from = displayScore.value

  function step(now: number) {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 2)
    displayScore.value = Math.round(from + (newScore - from) * eased)
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
})
</script>

<template>
  <div class="flex flex-col items-center">
    <svg
      :width="SVG_SIZE"
      :height="SVG_SIZE / 2 + 10"
      :viewBox="`0 0 ${SVG_SIZE} ${SVG_SIZE / 2 + 10}`"
      overflow="visible"
    >
      <defs>
        <linearGradient :id="gradientId" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stop-color="#7C3AED" />
          <stop offset="50%"  stop-color="#EC4899" />
          <stop offset="100%" stop-color="#F97316" />
        </linearGradient>
      </defs>

      <!-- Background arc -->
      <path
        :d="`M ${CENTER - RADIUS} ${CENTER} A ${RADIUS} ${RADIUS} 0 0 1 ${CENTER + RADIUS} ${CENTER}`"
        fill="none"
        stroke="#1E2535"
        :stroke-width="STROKE"
        stroke-linecap="round"
      />

      <!-- Filled arc -->
      <path
        :d="`M ${CENTER - RADIUS} ${CENTER} A ${RADIUS} ${RADIUS} 0 0 1 ${CENTER + RADIUS} ${CENTER}`"
        fill="none"
        :stroke="`url(#${gradientId})`"
        :stroke-width="STROKE"
        stroke-linecap="round"
        :stroke-dasharray="CIRCUMFERENCE"
        :stroke-dashoffset="dashOffset"
        style="transition: stroke-dashoffset 0.05s linear;"
      />
    </svg>

    <!-- Score number -->
    <div class="flex flex-col items-center -mt-4">
      <div class="flex items-center gap-2">
        <span class="font-bold leading-none text-lh-text" style="font-size: 64px;">
          {{ displayScore }}
        </span>
        <span
          v-if="showPulse"
          class="w-2 h-2 rounded-full bg-lh-violet animate-pulse"
        />
      </div>
      <span class="text-[11px] font-semibold tracking-[0.08em] uppercase mt-1" :style="{ color: statusLabel.color }">
        {{ statusLabel.text }}
      </span>
      <span class="text-[11px] font-semibold tracking-[0.08em] uppercase text-lh-muted mt-0.5">
        Heat Score
      </span>
    </div>
  </div>
</template>
