<template>
  <div class="max-w-4xl mx-auto px-6">

    <div class="mb-16">
      <p class="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Your data</p>
      <h1 class="text-4xl font-bold text-white mb-4">Privacy Center</h1>
      <p class="text-gray-400 text-lg max-w-2xl">
        We believe you should have full transparency and control over your personal data. Here's everything you need to know.
      </p>
    </div>

    <!-- Controls grid -->
    <div class="grid sm:grid-cols-2 gap-5 mb-16">
      <div v-for="control in controls" :key="control.title" class="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3 hover:border-primary/30 transition-colors">
        <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl">
          {{ control.icon }}
        </div>
        <h3 class="text-white font-semibold">{{ control.title }}</h3>
        <p class="text-gray-500 text-sm leading-relaxed">{{ control.description }}</p>
        <a v-if="control.action" href="#" class="text-primary text-sm hover:underline inline-flex items-center gap-1">
          {{ control.action }} →
        </a>
      </div>
    </div>

    <!-- Data we collect -->
    <div class="mb-16">
      <h2 class="text-2xl font-semibold text-white mb-6">What data do we collect?</h2>
      <div class="divide-y divide-white/5 border border-white/10 rounded-2xl overflow-hidden">
        <div v-for="item in dataItems" :key="item.category" class="flex items-start gap-4 p-5">
          <span class="text-primary text-lg mt-0.5">{{ item.icon }}</span>
          <div class="space-y-1">
            <p class="text-white text-sm font-medium">{{ item.category }}</p>
            <p class="text-gray-500 text-sm">{{ item.details }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Links to related policies -->
    <div class="grid sm:grid-cols-3 gap-4 mb-16">
      <RouterLink v-for="link in policyLinks" :key="link.to" :to="link.to"
        class="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:border-primary/30 transition-colors group">
        <span class="text-sm text-gray-300 group-hover:text-white transition-colors">{{ link.label }}</span>
        <span class="text-gray-600 group-hover:text-primary transition-colors">→</span>
      </RouterLink>
    </div>

    <!-- Contact DPO -->
    <div class="bg-white/5 border border-white/10 rounded-2xl p-8 text-center space-y-3">
      <h2 class="text-white font-semibold text-lg">Have a privacy concern?</h2>
      <p class="text-gray-500 text-sm">Contact our privacy team directly and we'll respond within 72 hours.</p>
      <a href="mailto:privacy@vibevista.com" class="inline-flex items-center px-6 py-2.5 bg-primary text-white rounded-full text-sm hover:bg-primary/90 transition-all">
        Email privacy@vibevista.com
      </a>
    </div>

  </div>
</template>

<script setup lang="ts">
const controls = [
  {
    icon: '👤',
    title: 'Access your data',
    description: 'Request a full copy of the personal data we hold about you.',
    action: 'Request data export',
  },
  {
    icon: '✏️',
    title: 'Correct your data',
    description: 'Update your profile information at any time from your account settings.',
    action: 'Go to settings',
  },
  {
    icon: '🗑️',
    title: 'Delete your account',
    description: 'Permanently delete your account and all associated data. This action is irreversible.',
    action: 'Request deletion',
  },
  {
    icon: '🔕',
    title: 'Manage notifications',
    description: 'Control what emails and in-app notifications you receive from VibeVista.',
    action: 'Notification settings',
  },
]

const dataItems = [
  { icon: '📧', category: 'Account data', details: 'Name, email address, username, password (hashed), country' },
  { icon: '🎵', category: 'Profile data', details: 'Bio, photo, speciality, genres, location, onboarding preferences' },
  { icon: '📱', category: 'Usage data', details: 'Pages visited, features used, session duration, click patterns' },
  { icon: '🌐', category: 'Device data', details: 'IP address, browser type, operating system, device identifiers' },
  { icon: '💬', category: 'Communications', details: 'Messages sent through the platform, support requests' },
  { icon: '💳', category: 'Payment data', details: 'Transaction records only — card details are never stored by us' },
]

const policyLinks = [
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/cookies', label: 'Cookie Policy' },
  { to: '/terms', label: 'Terms & Conditions' },
]
</script>
