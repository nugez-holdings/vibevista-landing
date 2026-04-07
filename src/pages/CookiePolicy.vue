<template>
  <div class="max-w-3xl mx-auto px-6">

    <div class="mb-12">
      <p class="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Legal</p>
      <h1 class="text-4xl font-bold text-white mb-4">Cookie Policy</h1>
      <p class="text-gray-500 text-sm">Last updated: January 1, 2025</p>
    </div>

    <div class="space-y-10 text-gray-400 leading-relaxed">

      <section class="space-y-3">
        <h2 class="text-xl font-semibold text-white">What Are Cookies?</h2>
        <p>Cookies are small text files placed on your device when you visit a website. They help the site remember your preferences and understand how you use it.</p>
      </section>

      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-white">Types of Cookies We Use</h2>
        <div class="space-y-4">
          <div v-for="type in cookieTypes" :key="type.name" class="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
            <div class="flex items-center justify-between">
              <h3 class="text-white font-medium">{{ type.name }}</h3>
              <span
                class="text-xs px-3 py-1 rounded-full"
                :class="type.required ? 'bg-primary/20 text-primary' : 'bg-gray-700 text-gray-400'"
              >
                {{ type.required ? 'Required' : 'Optional' }}
              </span>
            </div>
            <p class="text-sm text-gray-500">{{ type.description }}</p>
            <p class="text-xs text-gray-600"><span class="text-gray-500">Examples:</span> {{ type.examples }}</p>
          </div>
        </div>
      </section>

      <section class="space-y-3">
        <h2 class="text-xl font-semibold text-white">Managing Cookies</h2>
        <p>You can control and delete cookies through your browser settings. Note that disabling certain cookies may affect the functionality of VibeVista, including the ability to stay logged in.</p>
        <p>Most browsers allow you to:</p>
        <ul class="list-disc list-inside space-y-1 text-gray-500 pl-2">
          <li>View what cookies are stored</li>
          <li>Delete all or specific cookies</li>
          <li>Block cookies from specific or all sites</li>
          <li>Set preferences for future cookie handling</li>
        </ul>
      </section>

      <section class="space-y-3">
        <h2 class="text-xl font-semibold text-white">Third-Party Cookies</h2>
        <p>Some features use third-party services that may set their own cookies. These include Pusher (real-time features) and Paystack (payment processing). These providers have their own privacy policies governing cookie use.</p>
      </section>

      <section class="space-y-3">
        <h2 class="text-xl font-semibold text-white">Contact</h2>
        <p>Questions about our cookie use? Email us at <a href="mailto:privacy@vibevista.com" class="text-primary hover:underline">privacy@vibevista.com</a>.</p>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
const cookieTypes = [
  {
    name: 'Essential cookies',
    required: true,
    description: 'Necessary for the platform to function. They enable core features like authentication, session management, and security.',
    examples: 'Session token, CSRF token, authentication state',
  },
  {
    name: 'Preference cookies',
    required: false,
    description: 'Remember your settings and choices to personalise your experience.',
    examples: 'Theme preference (dark/light), language setting',
  },
  {
    name: 'Analytics cookies',
    required: false,
    description: 'Help us understand how users interact with VibeVista so we can improve the platform.',
    examples: 'Pages visited, time on site, feature usage',
  },
  {
    name: 'Performance cookies',
    required: false,
    description: 'Collect information about how the platform performs and help us identify issues.',
    examples: 'Error tracking, load times, request monitoring',
  },
]
</script>
