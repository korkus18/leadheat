<script setup lang="ts">
defineProps<{
  label: string
  href?: string
  size?: 'sm' | 'md' | 'lg'
}>()
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :class="[
      'btn-shimmer inline-flex items-center justify-center font-semibold text-white cursor-pointer border-0',
      size === 'sm'  ? 'px-4 py-2.5 text-[13px] rounded-[6px]' :
      size === 'lg'  ? 'px-12 py-4 text-[17px] rounded-[8px]' :
                       'px-6 py-3 text-[15px] rounded-[6px]',
    ]"
  >
    {{ label }}
  </component>
</template>
