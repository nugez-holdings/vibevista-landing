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
        <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl" v-html="control.icon"></div>
        <h3 class="text-white font-semibold">{{ control.title }}</h3>
        <p class="text-gray-500 text-sm leading-relaxed">{{ control.description }}</p>
        <a v-if="control.action" href="https://vibevista-web.akanbisegun1.workers.dev/" target="_blank" class="text-primary text-sm hover:underline inline-flex items-center gap-1">
          {{ control.action }} →
        </a>
      </div>
    </div>

    <!-- Data we collect -->
    <div class="mb-16">
      <h2 class="text-2xl font-semibold text-white mb-6">What data do we collect?</h2>
      <div class="divide-y divide-white/5 border border-white/10 rounded-2xl overflow-hidden">
        <div v-for="item in dataItems" :key="item.category" class="flex items-start gap-4 p-5">
          <span class="text-primary text-lg mt-0.5" v-html="item.icon"></span>
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
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    `,
    title: 'Access your data',
    description: 'Request a full copy of the personal data we hold about you.',
    action: 'Request data export',
  },
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
    `,
    title: 'Correct your data',
    description: 'Update your profile information at any time from your account settings.',
    action: 'Go to settings',
  },
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="3 6 5 6 21 6"/>
        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
        <path d="M10 11v6M14 11v6"/>
        <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
      </svg>
    `,
    title: 'Delete your account',
    description: 'Permanently delete your account and all associated data. This action is irreversible.',
    action: 'Request deletion',
  },
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
      </svg>
    `,
    title: 'Manage notifications',
    description: 'Control what emails and in-app notifications you receive from VibeVista.',
    action: 'Notification settings',
  },
]

const dataItems = [
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    `,
    category: 'Account data',
    details: 'Name, email address, username, password (hashed), country',
  },
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 18V5l12-2v13"/>
        <circle cx="6" cy="18" r="3"/>
        <circle cx="18" cy="16" r="3"/>
      </svg>
    `,
    category: 'Profile data',
    details: 'Bio, photo, speciality, genres, location, onboarding preferences',
  },
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    `,
    category: 'Usage data',
    details: 'Pages visited, features used, session duration, click patterns',
  },
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    `,
    category: 'Device data',
    details: 'IP address, browser type, operating system, device identifiers',
  },
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    `,
    category: 'Communications',
    details: 'Messages sent through the platform, support requests',
  },
  {
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
        <line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    `,
    category: 'Payment data',
    details: 'Transaction records only — card details are never stored by us',
  },
]

const policyLinks = [
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/cookies', label: 'Cookie Policy' },
  { to: '/terms', label: 'Terms & Conditions' },
]
</script>
