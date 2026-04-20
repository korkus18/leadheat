<template>
  <section
    id="demo"
    class="section-fade-bottom relative overflow-hidden px-6 md:px-12 text-center"
    style="padding-top: 120px; padding-bottom: 120px;"
  >
    <!-- Ambient glow -->
    <div
      class="absolute pointer-events-none"
      style="bottom: -20%; left: 50%; transform: translateX(-50%); width: 700px; height: 500px; background: radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, rgba(236,72,153,0.08) 50%, transparent 70%); filter: blur(60px); z-index: 0;"
    />

    <div class="relative max-w-[640px] mx-auto" style="z-index: 1;">
      <h2
        class="text-lh-text font-semibold animate-up"
        style="font-size: 28px; letter-spacing: -0.01em; line-height: 1.2;"
      >
        Your prospects are ignoring your messages.<br />
        Let's fix that.
      </h2>

      <p
        class="text-lh-secondary mt-4 animate-up"
        style="font-size: 16px; line-height: 1.7;"
        data-delay="50"
      >
        Book a 20-minute demo. We'll show you exactly how LeadHeat works
        and set up your first prospect list.
      </p>

      <div class="mt-8 animate-up" data-delay="100">
        <div class="gradient-border-wrap" style="border-radius: 10px; display: inline-block;">
          <GradientButton label="Book a demo" size="lg" href="#demo" />
        </div>
      </div>

      <p class="mt-4 text-[13px] text-lh-muted animate-up" data-delay="150">
        No commitment. No credit card.
      </p>
    </div>
  </section>
</template>
