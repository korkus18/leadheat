<script setup lang="ts">
import { ref } from 'vue'
import { CheckCircle } from 'lucide-vue-next'

const email = ref('')
const submitted = ref(false)
const loading = ref(false)
const error = ref('')

async function handleSubmit() {
  if (loading.value) return
  error.value = ''
  const value = email.value.trim()

  const atIndex = value.indexOf('@')
  const dotAfterAt = atIndex >= 0 ? value.indexOf('.', atIndex + 1) : -1
  const validShape =
    atIndex > 0 &&
    dotAfterAt > atIndex + 1 &&
    dotAfterAt < value.length - 1

  if (!validShape) {
    error.value = 'Please enter a valid work email.'
    return
  }

  loading.value = true
  try {
    const res = await fetch('/api/demo-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: value }),
    })
    const data = await res.json() as { success: boolean; error?: string }

    if (data.success) {
      submitted.value = true
    } else {
      error.value = 'Something went wrong. Please try again.'
    }
  } catch {
    error.value = 'Connection error. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>

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
        <Transition name="demo-success" mode="out-in">
          <!-- Form state -->
          <div v-if="!submitted" key="form">
            <form
              class="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-3"
              novalidate
              @submit.prevent="handleSubmit"
            >
              <input
                v-model="email"
                type="email"
                required
                placeholder="Your work email"
                class="demo-email-input"
                :disabled="loading"
                @input="error = ''"
              />
              <GradientButton
                :label="loading ? 'Sending...' : 'Book a demo →'"
                size="lg"
                :disabled="loading"
                :style="loading ? 'opacity: 0.7; cursor: wait;' : ''"
              />
            </form>

            <p
              v-if="error"
              class="mt-2"
              style="color: #EF4444; font-size: 12px; line-height: 1.4;"
            >
              {{ error }}
            </p>
          </div>

          <!-- Success state -->
          <div v-else key="success" class="flex flex-col items-center" style="gap: 6px;">
            <div class="flex items-center" style="gap: 8px;">
              <CheckCircle :size="20" :stroke-width="1.5" style="color: #10B981;" />
              <span style="color: #F0F2F5; font-size: 16px; line-height: 1.4;">
                We'll be in touch within 24 hours.
              </span>
            </div>
            <span style="color: #8B9AB0; font-size: 13px; line-height: 1.4;">
              Check your inbox at {{ email }}
            </span>
          </div>
        </Transition>
      </div>

      <p
        v-if="!submitted"
        class="mt-4 text-[13px] text-lh-muted animate-up"
        data-delay="150"
      >
        No commitment. No credit card.
      </p>
    </div>
  </section>
</template>

<style>
.demo-email-input {
  background: #0E1117;
  border: 0.5px solid #1E2535;
  border-radius: 6px;
  padding: 10px 16px;
  color: #F0F2F5;
  font-size: 14px;
  width: 100%;
  outline: none;
  transition: border-color 150ms ease;
  font-family: inherit;
}
@media (min-width: 768px) {
  .demo-email-input { width: 280px; }
}
.demo-email-input:focus {
  border-color: #7C3AED;
  outline: none;
}
.demo-email-input::placeholder {
  color: #475569;
}

.demo-success-enter-active {
  transition: opacity 300ms ease;
}
.demo-success-enter-from {
  opacity: 0;
}
.demo-success-enter-to {
  opacity: 1;
}
.demo-success-leave-active {
  transition: opacity 150ms ease;
}
.demo-success-leave-to {
  opacity: 0;
}
</style>
