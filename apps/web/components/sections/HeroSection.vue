<script setup lang="ts">
import { ArrowDown, MessageSquare, Heart, FileText } from 'lucide-vue-next'
import { markRaw, ref, onMounted, onUnmounted, reactive } from 'vue'

const allActivities = [
  { icon: markRaw(MessageSquare), iconColor: '#A78BFA', text: "Commented on Sarah Chen's post about PLG strategy",      time: '2m ago' },
  { icon: markRaw(Heart),         iconColor: '#EC4899', text: "Liked Marcus Reid's article on outbound automation",      time: '8m ago' },
  { icon: markRaw(FileText),      iconColor: '#F97316', text: "Published post on LinkedIn: 'Cold outreach is broken'",   time: '23m ago' },
  { icon: markRaw(MessageSquare), iconColor: '#A78BFA', text: "Commented on Aiko Tanaka's post about growth loops",      time: '1h ago' },
  { icon: markRaw(Heart),         iconColor: '#EC4899', text: "Liked Sarah Chen's post about SaaS metrics",              time: '2h ago' },
]

const activityItems = ref([...allActivities])
const newItemIndex = ref<number | null>(null)

const cardOffset = reactive({ x: 0, y: 0 })

function handlePageMouseMove(e: MouseEvent) {
  if (window.matchMedia('(hover: none)').matches) return
  cardOffset.x = (e.clientX / window.innerWidth - 0.5) * 12
  cardOffset.y = (e.clientY / window.innerHeight - 0.5) * 8
}

let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  window.addEventListener('mousemove', handlePageMouseMove)
  timer = setInterval(() => {
    const arr = activityItems.value.slice()
    const last = arr.pop()!
    arr.unshift(last)
    activityItems.value = arr
    newItemIndex.value = 0
    setTimeout(() => { newItemIndex.value = null }, 500)
  }, 3000)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handlePageMouseMove)
  if (timer) clearInterval(timer)
})

const prospects = [
  { initials: 'SC', avatarBg: 'linear-gradient(135deg, #7C3AED, #EC4899)', name: 'Sarah Chen',  role: 'Head of Growth',  score: 84, fill: '84%', scoreColor: '#A78BFA' },
  { initials: 'MR', avatarBg: 'linear-gradient(135deg, #EC4899, #F97316)', name: 'Marcus Reid', role: 'VP Sales',         score: 61, fill: '61%', scoreColor: '#EC4899' },
  { initials: 'AT', avatarBg: 'linear-gradient(135deg, #475569, #1E2535)', name: 'Aiko Tanaka', role: 'Growth Lead',      score: 38, fill: '38%', scoreColor: '#8B9AB0' },
]

function scrollToHowItWorks() {
  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToDemo = () => {
  const el = document.getElementById('demo')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section class="relative bg-lh-bg overflow-hidden px-6 md:px-12" style="padding-top: 100px; padding-bottom: 96px;">
    <!-- Ambient glow -->
    <div
      class="absolute pointer-events-none"
      style="top: 10%; left: 50%; transform: translateX(-50%); width: 600px; height: 300px; background: radial-gradient(ellipse, rgba(124,58,237,0.2) 0%, rgba(236,72,153,0.08) 50%, transparent 70%); filter: blur(60px); z-index: 0;"
    />

    <div class="relative max-w-[800px] mx-auto text-center" style="z-index: 1;">
      <div class="animate-up">
        <SectionLabel text="AI Pre-Engagement Engine" />
      </div>

      <h1
        class="text-lh-text font-bold mt-4 animate-up"
        style="font-size: clamp(42px, 6vw, 72px); letter-spacing: -0.03em; line-height: 1.0;"
        data-delay="50"
      >
        Stop sending messages<br />
        to people who don't
        <span class="gradient-word">know</span>
        you.
      </h1>

      <p
        class="text-lh-secondary mx-auto mt-6 animate-up"
        style="font-size: 18px; line-height: 1.7; max-width: 540px;"
        data-delay="100"
      >
        LeadHeat builds familiarity with your prospects before you send a single message.
        Automated comments, likes, and content — so your outreach lands warm.
      </p>

      <div class="flex flex-wrap items-center justify-center gap-4 mt-10 animate-up" data-delay="150">
        <GradientButton label="Book a demo" size="lg" @click="scrollToDemo" />
        <button
          class="flex items-center gap-2 text-lh-text font-medium transition-all duration-200 ease-out hover:border-lh-violet"
          style="background: transparent; border: 0.5px solid #1E2535; border-radius: 6px; padding: 14px 24px; font-size: 15px; cursor: pointer;"
          @click="scrollToHowItWorks"
        >
          See how it works
          <ArrowDown :size="16" :stroke-width="1.5" />
        </button>
      </div>

      <p class="mt-12 text-[13px] text-lh-muted animate-up" data-delay="200">
        Used by sales teams running LinkedIn outbound
      </p>

      <!-- Card label -->
      <div class="mt-10 mb-4 animate-up" data-delay="220">
        <SectionLabel text="LeadHeat dashboard — live preview" />
      </div>

      <!-- Two-panel mock UI card -->
      <div
        :style="{
          transition: 'transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          transform: `translateX(${cardOffset.x}px) translateY(${cardOffset.y}px)`,
        }"
      >
      <div class="mx-auto animate-up hero-card-float" style="max-width: 900px;" data-delay="250">
        <div class="gradient-border-wrap">
          <div style="background: #0E1117; border-radius: 15px; overflow: hidden; box-shadow: inset 0 1px 0 0 rgba(124,58,237,0.15);">
            <div class="flex flex-col md:flex-row">

              <!-- Left panel: Activity feed -->
              <div class="md:w-[58%]" style="background: #08090E; border-bottom: 0.5px solid #1E2535;">
                <div style="border-right: 0.5px solid #1E2535; height: 100%;">
                  <!-- Panel header -->
                  <div class="flex items-center justify-between px-4 py-3" style="border-bottom: 0.5px solid #1E2535;">
                    <SectionLabel text="Live activity" />
                    <div class="flex items-center gap-1.5">
                      <div class="ready-indicator" />
                      <span style="font-size: 12px; color: #22c55e; font-weight: 500;">Running</span>
                    </div>
                  </div>

                  <!-- Activity items with flash on new top item -->
                  <div
                    v-for="(item, i) in activityItems"
                    :key="item.text"
                    class="activity-row flex items-center gap-3 px-4"
                    :class="{ 'feed-new-item': i === newItemIndex }"
                    style="padding-top: 10px; padding-bottom: 10px;"
                    :style="i < activityItems.length - 1 ? 'border-bottom: 0.5px solid #1E2535;' : ''"
                  >
                    <!-- Icon circle -->
                    <div
                      class="flex items-center justify-center shrink-0"
                      style="width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.04);"
                    >
                      <component
                        :is="item.icon"
                        :size="14"
                        :stroke-width="1.5"
                        :style="{ color: item.iconColor }"
                      />
                    </div>
                    <!-- Text -->
                    <span
                      class="text-lh-secondary flex-1 overflow-hidden"
                      style="font-size: 14px; white-space: nowrap; text-overflow: ellipsis; overflow: hidden;"
                    >{{ item.text }}</span>
                    <!-- Time -->
                    <span class="shrink-0 ml-2 text-lh-muted" style="font-size: 11px;">{{ item.time }}</span>
                  </div>
                </div>
              </div>

              <!-- Right panel: Prospects -->
              <div class="md:w-[42%]" style="padding: 16px;">
                <!-- Panel header -->
                <div class="flex items-center justify-between mb-3">
                  <SectionLabel text="Prospects" />
                  <div class="flex items-center gap-1.5">
                    <div class="ready-indicator" />
                    <span
                      class="text-[11px] font-semibold"
                      style="background: rgba(124,58,237,0.12); color: #A78BFA; padding: 2px 8px; border-radius: 4px;"
                    >
                      3 warming
                    </span>
                  </div>
                </div>

                <!-- Prospect rows -->
                <div
                  v-for="(p, i) in prospects"
                  :key="p.initials"
                  class="flex items-center gap-2 py-2"
                  :style="i < prospects.length - 1 ? 'border-bottom: 0.5px solid #1E2535;' : ''"
                >
                  <div
                    class="flex items-center justify-center shrink-0"
                    :style="`width: 28px; height: 28px; border-radius: 50%; background: ${p.avatarBg};`"
                  >
                    <span style="font-size: 11px; font-weight: 600; color: white;">{{ p.initials }}</span>
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="text-lh-text font-medium truncate" style="font-size: 12px;">{{ p.name }}</div>
                    <div class="text-lh-muted truncate" style="font-size: 10px;">{{ p.role }}</div>
                  </div>
                  <div class="shrink-0 flex flex-col items-end gap-1" style="width: 64px;">
                    <div style="width: 64px; height: 4px; background: #1E2535; border-radius: 2px; overflow: hidden;">
                      <div :style="`width: ${p.fill}; height: 100%; background: linear-gradient(90deg, #7C3AED, #EC4899, #F97316); border-radius: 2px;`" />
                    </div>
                    <span class="font-semibold" :style="`font-size: 11px; color: ${p.scoreColor};`">{{ p.score }}</span>
                  </div>
                </div>

                <p class="text-lh-muted mt-3" style="font-size: 10px; text-align: right;">
                  Heat Score updates every 24h
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>
