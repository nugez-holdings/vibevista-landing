<script setup lang="ts">
import { useCookieConsent } from '@/composables/useCookieConsent'

const { hasConsented, accept, reject } = useCookieConsent()
</script>

<template>
  <Transition name="slide-up">
    <div
      v-if="!hasConsented()"
      class="fixed bottom-0 left-0 right-0 z-50 px-6 py-5 bg-gray-900 border-t border-white/10 shadow-2xl"
    >
      <div class="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p class="text-gray-400 text-sm leading-relaxed max-w-2xl">
          We use cookies to keep you signed in and improve your experience.
          See our
          <RouterLink to="/cookies" class="text-primary hover:underline underline-offset-2">Cookie Policy</RouterLink>
          for details.
        </p>
        <div class="flex items-center gap-3 flex-shrink-0">
          <button
            @click="reject"
            class="px-5 py-2 text-sm text-gray-400 border border-white/10 rounded-full hover:border-white/30 hover:text-white transition-all"
          >
            Reject
          </button>
          <button
            @click="accept"
            class="px-5 py-2 text-sm text-white bg-primary rounded-full hover:bg-primary/90 transition-all"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
