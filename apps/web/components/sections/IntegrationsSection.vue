<script setup lang="ts">
const integrations = [
  { name: 'Clay',        monogram: 'Cl' },
  { name: 'Apollo',      monogram: 'Ap' },
  { name: 'Leadspicker', monogram: 'Ls' },
  { name: 'Lemlist',     monogram: 'Lm' },
  { name: 'Instantly',   monogram: 'In' },
  { name: 'HubSpot',     monogram: 'Hs' },
]

const marqueeItems = [...integrations, ...integrations]
const marqueeItemsReverse = [
  ...integrations.slice(3), ...integrations.slice(0, 3),
  ...integrations.slice(3), ...integrations.slice(0, 3),
]
</script>

<template>
  <section class="bg-lh-bg px-6 md:px-12" style="padding-top: 80px; padding-bottom: 80px;">
    <div class="max-w-[960px] mx-auto text-center">
      <div class="animate-up"><SectionLabel text="Integrations" /></div>

      <h2
        class="text-lh-text font-semibold mt-4 animate-up"
        style="font-size: 28px; letter-spacing: -0.01em; line-height: 1.2;"
        data-delay="50"
      >
        Fits into your existing stack.
      </h2>

      <p
        class="text-lh-secondary mx-auto mt-3 animate-up"
        style="font-size: 16px; line-height: 1.7; max-width: 480px;"
        data-delay="100"
      >
        LeadHeat layers between your leadgen and outreach tools.
        No migration. No workflow changes.
      </p>

      <!-- Double marquee rows -->
      <div class="integrations-overflow mt-12 animate-up" data-delay="150">
        <div class="flex flex-col" style="gap: 12px;">

          <!-- Row 1: left to right -->
          <div class="integrations-track">
            <div
              v-for="(tool, i) in marqueeItems"
              :key="`r1-${tool.name}-${i}`"
              class="flex flex-col items-center gap-3 shrink-0"
            >
              <div
                class="integration-tile flex items-center justify-center"
                style="width: 80px; height: 80px; background: #0E1117; border: 0.5px solid #1E2535; border-radius: 10px;"
              >
                <span
                  class="gradient-text"
                  style="font-size: 20px; font-weight: 700; letter-spacing: -0.02em;"
                >{{ tool.monogram }}</span>
              </div>
              <span class="text-[12px] text-lh-muted">{{ tool.name }}</span>
            </div>
          </div>

          <!-- Row 2: right to left, slower, dimmer, offset -->
          <div class="integrations-track-reverse">
            <div
              v-for="(tool, i) in marqueeItemsReverse"
              :key="`r2-${tool.name}-${i}`"
              class="flex flex-col items-center gap-3 shrink-0"
            >
              <div
                class="integration-tile flex items-center justify-center"
                style="width: 80px; height: 80px; background: #0E1117; border: 0.5px solid #1E2535; border-radius: 10px;"
              >
                <span
                  class="gradient-text"
                  style="font-size: 20px; font-weight: 700; letter-spacing: -0.02em;"
                >{{ tool.monogram }}</span>
              </div>
              <span class="text-[12px] text-lh-muted">{{ tool.name }}</span>
            </div>
          </div>

        </div>
      </div>

      <p class="mt-8 text-[13px] text-lh-muted animate-up" data-delay="200">
        CSV import and manual entry also supported
      </p>
    </div>
  </section>
</template>
