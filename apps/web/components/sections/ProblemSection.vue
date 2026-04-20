<script setup lang="ts">
const stats = [
  {
    number:      '1–5%',
    label:       'average reply rate on cold LinkedIn outreach',
    countTo:     '5',
    countFormat: '1–5%',
  },
  {
    number:      '0',
    label:       'existing tools that build awareness before outreach',
  },
  {
    number:      '7 sec',
    label:       'before a prospect decides to ignore your message',
    countTo:     '7',
    countFormat: '7 sec',
  },
]
</script>

<template>
  <section class="section-fade-top px-6 md:px-12" style="padding-top: 96px; padding-bottom: 96px;">
    <div class="max-w-[960px] mx-auto text-center">
      <div class="animate-up"><SectionLabel text="The problem" /></div>

      <h2
        class="text-lh-text font-semibold mt-4 animate-up"
        style="font-size: 28px; letter-spacing: -0.01em; line-height: 1.2;"
        data-delay="50"
      >
        Cold outreach fails for one reason.
      </h2>

      <p
        class="text-lh-secondary mx-auto mt-4 animate-up"
        style="font-size: 16px; line-height: 1.7; max-width: 600px;"
        data-delay="100"
      >
        Prospects don't respond to strangers. They respond to people they've seen before —
        in their feed, in the same conversations, on topics they care about.
        Most outbound starts too late. By the time you message them, you're still a stranger.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
        <div
          v-for="(stat, i) in stats"
          :key="stat.number"
          class="card-hover text-left animate-up"
          :style="`background: #08090E; border: 0.5px solid #1E2535; border-radius: 10px; padding: 24px;`"
          :data-delay="i * 100"
        >
          <div
            class="font-bold gradient-text"
            style="font-size: 64px; line-height: 1.0; filter: drop-shadow(0 0 16px rgba(236, 72, 153, 0.3));"
            v-bind="stat.countTo ? { 'data-count-to': stat.countTo, 'data-count-format': stat.countFormat } : {}"
          >
            {{ stat.number }}
          </div>
          <p class="text-lh-secondary mt-3" style="font-size: 14px; line-height: 1.5;">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
