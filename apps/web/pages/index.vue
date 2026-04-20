<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // ── Scroll entrance animations ──────────────────────────────────────────
  const elements = document.querySelectorAll<HTMLElement>('.animate-up')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.unobserve(el)
        }
      })
    },
    { threshold: 0.15 },
  )

  elements.forEach((el) => {
    const delay = el.dataset.delay ?? '0'
    el.style.opacity = '0'
    el.style.transform = 'translateY(40px)'
    el.style.transition = `opacity 600ms ease-out ${delay}ms, transform 600ms ease-out ${delay}ms`
    observer.observe(el)
  })

  // ── Stat counter animations ──────────────────────────────────────────────
  const countEls = document.querySelectorAll<HTMLElement>('[data-count-to]')

  const countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const el = entry.target as HTMLElement
        const target = parseInt(el.dataset.countTo ?? '0')
        const format = el.dataset.countFormat ?? String(target)
        if (target === 0) return

        countObserver.unobserve(el)

        const start = performance.now()
        const duration = 800

        function step(now: number) {
          const elapsed = now - start
          const progress = Math.min(elapsed / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          const current = Math.round(eased * target)

          if (progress < 1) {
            el.textContent = format.replace(String(target), String(current))
            requestAnimationFrame(step)
          } else {
            el.textContent = format
          }
        }
        requestAnimationFrame(step)
      })
    },
    { threshold: 0.5 },
  )

  countEls.forEach(el => countObserver.observe(el))
})
</script>

<template>
  <div class="bg-lh-bg">
    <NavBar />
    <main>
      <HeroSection />
      <ProblemSection />

      <!-- Glow separator -->
      <div style="height: 1px; background: linear-gradient(90deg, transparent, rgba(124,58,237,0.4), rgba(236,72,153,0.3), transparent); margin: 0;" />

      <HowItWorksSection />
      <HeatScoreSection />
      <IntegrationsSection />
      <FinalCtaSection />
    </main>
    <Footer />
  </div>
</template>
