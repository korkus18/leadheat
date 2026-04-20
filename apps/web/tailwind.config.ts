import type { Config } from 'tailwindcss'

export default {
  content: ['./components/**/*.vue', './pages/**/*.vue', './app.vue'],
  theme: {
    extend: {
      colors: {
        'lh-bg':        '#08090E',
        'lh-surface':   '#0E1117',
        'lh-elevated':  '#161C26',
        'lh-border':    '#1E2535',
        'lh-text':      '#F0F2F5',
        'lh-secondary': '#8B9AB0',
        'lh-muted':     '#475569',
        'lh-violet':    '#7C3AED',
        'lh-pink':      '#EC4899',
        'lh-orange':    '#F97316',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
} satisfies Config
