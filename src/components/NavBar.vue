<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const showMobileMenu = ref(false)
</script>

<template>
  <header class="flex justify-between items-center w-full px-8 py-6 z-50 fixed top-0 left-0">
    <!-- Frosted glass background -->
    <div class="absolute inset-0 bg-black/30 backdrop-blur-md border-b border-white/5 -z-10"></div>

    <RouterLink to="/" class="logo">
      <img src="@/assets/brand/logo_white.svg" class="w-28" alt="VibeVista" />
    </RouterLink>

    <!-- Desktop nav -->
    <nav class="hidden md:flex items-center space-x-2">
      <RouterLink to="/about" class="text-gray-400 hover:text-white text-sm px-4 py-2 transition-colors duration-200">About</RouterLink>
      <RouterLink to="/help" class="text-gray-400 hover:text-white text-sm px-4 py-2 transition-colors duration-200">Help</RouterLink>
      <a href="https://vibevista-web.akanbisegun1.workers.dev/auth/login" target="_blank" class="text-white text-sm px-6 py-2.5 rounded-full border border-white/20 hover:border-white/50 transition-all duration-200">Sign In</a>
      <a href="https://vibevista-web.akanbisegun1.workers.dev/auth/register" target="_blank" class="text-white text-sm px-6 py-2.5 rounded-full bg-primary hover:bg-primary/90 transition-all duration-200">Sign Up</a>
    </nav>

    <!-- Mobile hamburger -->
    <button @click="showMobileMenu = true" class="md:hidden text-white focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>

    <!-- Mobile menu -->
    <div
      class="fixed inset-0 z-50 md:hidden transition-all duration-300"
      :class="showMobileMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
    >
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="showMobileMenu = false"></div>
      <nav
        class="absolute top-0 right-0 h-full w-72 bg-gray-950 border-l border-white/10 p-8 flex flex-col transition-transform duration-300"
        :class="showMobileMenu ? 'translate-x-0' : 'translate-x-full'"
      >
        <button @click="showMobileMenu = false" class="self-end text-gray-400 hover:text-white mb-10">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="flex flex-col space-y-6 flex-1">
          <RouterLink @click="showMobileMenu = false" to="/" class="text-lg text-gray-300 hover:text-white transition-colors">Home</RouterLink>
          <RouterLink @click="showMobileMenu = false" to="/about" class="text-lg text-gray-300 hover:text-white transition-colors">About</RouterLink>
          <RouterLink @click="showMobileMenu = false" to="/help" class="text-lg text-gray-300 hover:text-white transition-colors">Help</RouterLink>
        </div>

        <div class="flex flex-col space-y-3">
          <a @click="showMobileMenu = false" href="https://vibevista-web.akanbisegun1.workers.dev/auth/login" target="_blank" class="py-3 text-center text-white border border-white/20 rounded-full text-sm hover:border-white/50 transition-all">Sign In</a>
          <a @click="showMobileMenu = false" href="https://vibevista-web.akanbisegun1.workers.dev/auth/register" target="_blank" class="py-3 text-center text-white bg-primary rounded-full text-sm hover:bg-primary/90 transition-all">Create Account</a>
        </div>
      </nav>
    </div>
  </header>
</template>
