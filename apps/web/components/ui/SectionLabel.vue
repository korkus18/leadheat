<script setup lang="ts">
defineProps<{ text: string }>()
</script>

<template>
  <span class="text-[11px] font-semibold tracking-[0.08em] uppercase text-lh-muted">
    {{ text }}
  </span>
</template>
