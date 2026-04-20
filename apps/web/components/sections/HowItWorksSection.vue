<script setup lang="ts">
import { User, Flame, Send, ChevronDown } from 'lucide-vue-next'
import { markRaw, ref } from 'vue'

const activeStep = ref<number | null>(null)

function toggleStep(index: number) {
  activeStep.value = activeStep.value === index ? null : index
}

const steps = [
  {
    number:     '01',
    icon:       markRaw(User),
    iconColor:  '#7C3AED',
    iconBg:     'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(124,58,237,0.05))',
    iconBorder: '1px solid rgba(124,58,237,0.3)',
    stepGlow:   'rgba(124,58,237,0.6)',
    iconShadow: '0 0 24px rgba(124,58,237,0.4)',
    align:      'start' as const,
    title:      'Import your prospects',
    body:       'Add a LinkedIn URL, paste a CSV, or connect Clay or Apollo. LeadHeat builds a full behavioral profile: what they read, post, and care about.',
    delay:      0,
  },
  {
    number:     '02',
    icon:       markRaw(Flame),
    iconColor:  '#EC4899',
    iconBg:     'linear-gradient(135deg, rgba(236,72,153,0.2), rgba(236,72,153,0.05))',
    iconBorder: '1px solid rgba(236,72,153,0.3)',
    stepGlow:   'rgba(236,72,153,0.5)',
    iconShadow: '0 0 24px rgba(236,72,153,0.4)',
    align:      'end' as const,
    title:      'LeadHeat warms them up',
    body:       "AI generates strategic comments, likes, and posts aligned to the prospect's topics. You appear in their feed — naturally, repeatedly, without looking automated.",
    delay:      100,
  },
  {
    number:     '03',
    icon:       markRaw(Send),
    iconColor:  '#F97316',
    iconBg:     'linear-gradient(135deg, rgba(249,115,22,0.2), rgba(249,115,22,0.05))',
    iconBorder: '1px solid rgba(249,115,22,0.3)',
    stepGlow:   'rgba(249,115,22,0.5)',
    iconShadow: '0 0 24px rgba(249,115,22,0.4)',
    align:      'start' as const,
    title:      "Message them when they're ready",
    body:       "Heat Score tracks familiarity in real time. When it hits 70+, LeadHeat alerts you: the prospect knows who you are. Now you're no longer a stranger.",
    delay:      200,
  },
]

const spineColors = ['#7C3AED', '#EC4899', '#F97316']
</script>

<template>
  <section
    id="how-it-works"
    class="hiw-grid-bg px-6 md:px-12"
    style="background-color: #08090E; padding-top: 96px; padding-bottom: 96px;"
  >
    <div class="max-w-[960px] mx-auto text-center">
      <div class="animate-up"><SectionLabel text="How it works" /></div>

      <h2
        class="text-lh-text font-semibold mt-4 animate-up"
        style="font-size: 28px; letter-spacing: -0.01em; line-height: 1.2;"
        data-delay="50"
      >
        From cold prospect to warm contact. Automatically.
      </h2>

      <!-- Mobile: simple flex column -->
      <div class="flex flex-col gap-6 mt-14 text-left md:hidden">
        <div
          v-for="(step, index) in steps"
          :key="step.number"
          class="hiw-step-card animate-up"
          :style="`
            --step-glow: ${step.stepGlow};
            --step-icon-shadow: ${step.iconShadow};
            background: linear-gradient(135deg, #0E1117 0%, #111827 100%);
            border: 0.5px solid ${activeStep === index ? 'rgba(124,58,237,0.5)' : '#1E2535'};
            border-radius: 16px;
            padding: 32px;
            cursor: pointer;
            transition: opacity 200ms ease-out, transform 200ms ease-out, border-color 200ms ease-out;
            opacity: ${activeStep !== null && activeStep !== index ? 0.7 : 1};
          `"
          :data-delay="step.delay"
          @click="toggleStep(index)"
        >
          <div class="flex items-start justify-between mb-4">
            <div class="text-[16px] font-semibold tracking-[0.08em] uppercase text-lh-muted">
              {{ step.number }}
            </div>
            <ChevronDown
              :size="14"
              :style="{
                color: '#475569',
                transition: 'transform 300ms ease-out',
                transform: activeStep === index ? 'rotate(180deg)' : 'rotate(0deg)',
                flexShrink: 0,
                marginTop: '2px',
              }"
            />
          </div>

          <div
            class="step-icon-circle flex items-center justify-center mb-5"
            :style="`width: 72px; height: 72px; border-radius: 50%; background: ${step.iconBg}; border: ${step.iconBorder};`"
          >
            <component :is="step.icon" :size="32" :stroke-width="1.5" :style="{ color: step.iconColor }" />
          </div>

          <h3 class="text-lh-text font-semibold" style="font-size: 20px; letter-spacing: -0.01em; line-height: 1.3;">
            {{ step.title }}
          </h3>
          <p class="text-lh-secondary mt-2" style="font-size: 14px; line-height: 1.7;">
            {{ step.body }}
          </p>

          <!-- Expanded content -->
          <div
            :style="{
              maxHeight: activeStep === index ? '200px' : '0',
              overflow: 'hidden',
              opacity: activeStep === index ? 1 : 0,
              transition: 'max-height 300ms ease-out, opacity 300ms ease-out',
            }"
          >
            <!-- Step 1 expanded -->
            <div v-if="step.number === '01'" class="flex flex-wrap gap-2 mt-4">
              <span v-for="badge in ['LinkedIn URL', 'CSV upload', 'Clay / Apollo']" :key="badge"
                style="font-size: 12px; color: #8B9AB0; border: 0.5px solid #1E2535; padding: 4px 10px; border-radius: 20px;">
                {{ badge }}
              </span>
            </div>
            <!-- Step 2 expanded -->
            <div v-if="step.number === '02'" class="flex flex-col gap-2 mt-4">
              <div style="border-left: 2px solid #7C3AED; padding-left: 8px; font-size: 12px; color: #8B9AB0; line-height: 1.5;">
                💬 Commented on a post about SaaS growth · just now
              </div>
              <div style="border-left: 2px solid #7C3AED; padding-left: 8px; font-size: 12px; color: #8B9AB0; line-height: 1.5;">
                ❤️ Liked a post about outbound strategy · 3m ago
              </div>
            </div>
            <!-- Step 3 expanded -->
            <div v-if="step.number === '03'" class="flex flex-col gap-2 mt-4">
              <div class="flex items-center gap-3">
                <span style="font-size: 11px; color: #475569; width: 90px; flex-shrink: 0;">Cold 0–40</span>
                <div style="flex: 1; height: 4px; background: #1E2535; border-radius: 2px;"><div style="width: 30%; height: 100%; background: #1E2535; border-radius: 2px; border: 0.5px solid #475569;" /></div>
              </div>
              <div class="flex items-center gap-3">
                <span style="font-size: 11px; color: #8B9AB0; width: 90px; flex-shrink: 0;">Warming 40–70</span>
                <div style="flex: 1; height: 4px; background: #1E2535; border-radius: 2px;"><div style="width: 60%; height: 100%; background: #EC4899; border-radius: 2px;" /></div>
              </div>
              <div class="flex items-center gap-3">
                <span style="font-size: 11px; color: #A78BFA; width: 90px; flex-shrink: 0;">Ready 70+</span>
                <div style="flex: 1; height: 4px; background: #1E2535; border-radius: 2px;"><div style="width: 100%; height: 100%; background: linear-gradient(90deg, #7C3AED, #EC4899, #F97316); border-radius: 2px;" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Desktop: CSS Grid with visible spine -->
      <div
        class="hidden md:grid mt-14 text-left"
        style="grid-template-columns: 1fr 40px 1fr; grid-template-rows: auto auto auto; gap: 24px 0;"
      >
        <!-- Spine: column 2, all rows -->
        <div
          class="relative"
          style="grid-column: 2; grid-row: 1 / 4;"
        >
          <!-- Vertical gradient line -->
          <div
            class="absolute pointer-events-none"
            style="left: 50%; transform: translateX(-50%); top: 0; bottom: 0; width: 1px; background: linear-gradient(to bottom, rgba(124,58,237,0.6), rgba(236,72,153,0.5), rgba(249,115,22,0.4));"
          />
          <!-- Dot at 16% -->
          <div class="absolute" style="left: 50%; top: 16%; transform: translate(-50%, -50%);">
            <div class="w-2 h-2 rounded-full" style="background: #7C3AED; box-shadow: 0 0 8px rgba(124,58,237,0.8);" />
          </div>
          <!-- Dot at 50% -->
          <div class="absolute" style="left: 50%; top: 50%; transform: translate(-50%, -50%);">
            <div class="w-2 h-2 rounded-full" style="background: #EC4899; box-shadow: 0 0 8px rgba(236,72,153,0.8);" />
          </div>
          <!-- Dot at 84% -->
          <div class="absolute" style="left: 50%; top: 84%; transform: translate(-50%, -50%);">
            <div class="w-2 h-2 rounded-full" style="background: #F97316; box-shadow: 0 0 8px rgba(249,115,22,0.8);" />
          </div>
        </div>

        <!-- Step cards positioned in grid -->
        <div
          v-for="(step, index) in steps"
          :key="step.number"
          class="hiw-step-card animate-up"
          :style="`
            grid-column: ${step.align === 'end' ? 3 : 1};
            grid-row: ${index + 1};
            ${step.align === 'end' ? 'padding-left: 20px;' : 'padding-right: 20px;'}
            --step-glow: ${step.stepGlow};
            --step-icon-shadow: ${step.iconShadow};
          `"
          :data-delay="step.delay"
        >
          <div
            style="border-radius: 16px; padding: 32px; cursor: pointer;"
            :style="`
              background: linear-gradient(135deg, #0E1117 0%, #111827 100%);
              border: 0.5px solid ${activeStep === index ? 'rgba(124,58,237,0.5)' : '#1E2535'};
              transition: opacity 200ms ease-out, transform 200ms ease-out, border-color 200ms ease-out;
              opacity: ${activeStep !== null && activeStep !== index ? 0.7 : 1};
              transform: ${activeStep !== null && activeStep !== index ? 'scale(0.98)' : 'scale(1)'};
            `"
            @click="toggleStep(index)"
          >
            <div class="flex items-start justify-between mb-4">
              <div class="text-[16px] font-semibold tracking-[0.08em] uppercase text-lh-muted">
                {{ step.number }}
              </div>
              <ChevronDown
                :size="14"
                :style="{
                  color: '#475569',
                  transition: 'transform 300ms ease-out',
                  transform: activeStep === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  flexShrink: 0,
                  marginTop: '2px',
                }"
              />
            </div>

            <div
              class="step-icon-circle flex items-center justify-center mb-5"
              :style="`width: 72px; height: 72px; border-radius: 50%; background: ${step.iconBg}; border: ${step.iconBorder};`"
            >
              <component :is="step.icon" :size="32" :stroke-width="1.5" :style="{ color: step.iconColor }" />
            </div>

            <h3 class="text-lh-text font-semibold" style="font-size: 20px; letter-spacing: -0.01em; line-height: 1.3;">
              {{ step.title }}
            </h3>
            <p class="text-lh-secondary mt-2" style="font-size: 14px; line-height: 1.7;">
              {{ step.body }}
            </p>

            <!-- Expanded content -->
            <div
              :style="{
                maxHeight: activeStep === index ? '200px' : '0',
                overflow: 'hidden',
                opacity: activeStep === index ? 1 : 0,
                transition: 'max-height 300ms ease-out, opacity 300ms ease-out',
              }"
            >
              <div v-if="step.number === '01'" class="flex flex-wrap gap-2 mt-4">
                <span v-for="badge in ['LinkedIn URL', 'CSV upload', 'Clay / Apollo']" :key="badge"
                  style="font-size: 12px; color: #8B9AB0; border: 0.5px solid #1E2535; padding: 4px 10px; border-radius: 20px;">
                  {{ badge }}
                </span>
              </div>
              <div v-if="step.number === '02'" class="flex flex-col gap-2 mt-4">
                <div style="border-left: 2px solid #7C3AED; padding-left: 8px; font-size: 12px; color: #8B9AB0; line-height: 1.5;">
                  💬 Commented on a post about SaaS growth · just now
                </div>
                <div style="border-left: 2px solid #7C3AED; padding-left: 8px; font-size: 12px; color: #8B9AB0; line-height: 1.5;">
                  ❤️ Liked a post about outbound strategy · 3m ago
                </div>
              </div>
              <div v-if="step.number === '03'" class="flex flex-col gap-2 mt-4">
                <div class="flex items-center gap-3">
                  <span style="font-size: 11px; color: #475569; width: 90px; flex-shrink: 0;">Cold 0–40</span>
                  <div style="flex: 1; height: 4px; background: #1E2535; border-radius: 2px;"><div style="width: 30%; height: 100%; background: #1E2535; border-radius: 2px; border: 0.5px solid #475569;" /></div>
                </div>
                <div class="flex items-center gap-3">
                  <span style="font-size: 11px; color: #8B9AB0; width: 90px; flex-shrink: 0;">Warming 40–70</span>
                  <div style="flex: 1; height: 4px; background: #1E2535; border-radius: 2px;"><div style="width: 60%; height: 100%; background: #EC4899; border-radius: 2px;" /></div>
                </div>
                <div class="flex items-center gap-3">
                  <span style="font-size: 11px; color: #A78BFA; width: 90px; flex-shrink: 0;">Ready 70+</span>
                  <div style="flex: 1; height: 4px; background: #1E2535; border-radius: 2px;"><div style="width: 100%; height: 100%; background: linear-gradient(90deg, #7C3AED, #EC4899, #F97316); border-radius: 2px;" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
