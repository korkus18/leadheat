<script setup lang="ts">
import { onMounted, ref } from 'vue'

const visible = ref(false)

onMounted(() => {
  setTimeout(() => { visible.value = true }, 100)
})

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div
    class="fixed left-0 right-0 z-50 flex justify-center"
    style="top: 20px; pointer-events: none;"
  >
    <nav
      :class="['nav-pill', { 'nav-pill--visible': visible }]"
      class="flex items-center px-4 py-2 md:px-5 md:py-2.5"
      style="pointer-events: auto; gap: 24px; background: rgba(14, 17, 23, 0.5); backdrop-filter: blur(28px); -webkit-backdrop-filter: blur(28px); border: 0.5px solid rgba(255, 255, 255, 0.08); border-radius: 9999px; box-shadow: 0 8px 32px rgba(0,0,0,0.4);"
    >
      <!-- Logo -->
      <button
        type="button"
        class="flex items-center"
        style="gap: 8px; background: none; border: none; padding: 0; cursor: pointer;"
        @click="scrollToTop"
      >
        <img src="/logo.png" alt="LeadHeat" height="28" style="width: auto; height: 28px; display: block;" />
        <span style="font-size: 15px; font-weight: 700; color: #F0F2F5;">LeadHeat</span>
      </button>

      <!-- Separator -->
      <div class="hidden md:block nav-pill-sep" />

      <!-- Nav links -->
      <div class="hidden md:flex items-center" style="gap: 24px;">
        <button class="nav-pill-link" @click="scrollTo('how-it-works')">How it works</button>
      </div>

      <!-- Separator -->
      <div class="hidden md:block nav-pill-sep" />

      <!-- CTA -->
      <GradientButton label="Book a demo" size="sm" href="#demo" style="border-radius: 9999px; margin-left: 8px;" @click.prevent="scrollTo('demo')" />
    </nav>
  </div>
</template>
