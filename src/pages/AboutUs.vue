<template>
  <div class="max-w-4xl mx-auto px-6">

    <!-- Page header -->
    <div class="mb-16">
      <p class="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Who we are</p>
      <h1 class="text-5xl font-bold text-white leading-tight mb-6">About VibeVista</h1>
      <p class="text-gray-400 text-lg leading-relaxed max-w-2xl">
        VibeVista is a platform built by musicians, for musicians. We exist to connect musical talent
        with opportunity, community, and knowledge — all in one place.
      </p>
    </div>

    <!-- Mission -->
    <div class="grid md:grid-cols-2 gap-12 mb-20">
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold text-white">Our Mission</h2>
        <p class="text-gray-400 leading-relaxed">
          Music is universal, but opportunity isn't. We're changing that. VibeVista was built to
          democratize access to music gigs, collaborators, mentors, and an audience — regardless of
          where you are in the world or where you are in your career.
        </p>
        <p class="text-gray-400 leading-relaxed">
          Whether you're a session drummer in Lagos, a jazz pianist in London, or a vocal coach in
          Atlanta — VibeVista is your professional home.
        </p>
      </div>
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold text-white">Our Vision</h2>
        <p class="text-gray-400 leading-relaxed">
          A world where every musician has the tools to build a sustainable career from their craft.
          Where talent is discovered on merit, not geography. Where the music community is truly global.
        </p>
      </div>
    </div>

    <!-- Values -->
    <div class="mb-20">
      <h2 class="text-2xl font-semibold text-white mb-10">What we stand for</h2>
      <div class="grid sm:grid-cols-3 gap-6">
        <div v-for="value in values" :key="value.title" class="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
          <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <span class="text-primary text-lg">{{ value.icon }}</span>
          </div>
          <h3 class="text-white font-semibold">{{ value.title }}</h3>
          <p class="text-gray-500 text-sm leading-relaxed">{{ value.description }}</p>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="bg-gradient-to-r from-primary/20 to-transparent border border-primary/20 rounded-2xl p-10 text-center">
      <h2 class="text-2xl font-bold text-white mb-3">Ready to join the community?</h2>
      <p class="text-gray-400 mb-6">Thousands of musicians are already on VibeVista.</p>
      <RouterLink to="/register" class="inline-flex items-center px-8 py-3 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-all">
        Get Started Free
      </RouterLink>
    </div>

  </div>
</template>

<script setup lang="ts">
const values = [
  {
    icon: '🎵',
    title: 'Community first',
    description: 'Every feature we build starts with how it serves musicians and the connections between them.',
  },
  {
    icon: '🔓',
    title: 'Open access',
    description: 'Core features are free. Great music shouldn\'t be locked behind a paywall.',
  },
  {
    icon: '🌍',
    title: 'Global by default',
    description: 'Built with Africa and the world in mind. Every timezone, every genre, every level.',
  },
]
</script>
