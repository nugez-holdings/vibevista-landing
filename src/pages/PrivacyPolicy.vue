<template>
  <div class="max-w-3xl mx-auto px-6">

    <div class="mb-12">
      <p class="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Legal</p>
      <h1 class="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
      <p class="text-gray-500 text-sm">Last updated: January 1, 2025</p>
    </div>

    <div class="space-y-10 text-gray-400 leading-relaxed">

      <section v-for="section in sections" :key="section.title" class="space-y-3">
        <h2 class="text-xl font-semibold text-white">{{ section.title }}</h2>
        <p v-for="(para, i) in section.paragraphs" :key="i">{{ para }}</p>
        <ul v-if="section.items" class="list-disc list-inside space-y-1 text-gray-500 pl-2">
          <li v-for="item in section.items" :key="item">{{ item }}</li>
        </ul>
      </section>

      <section class="space-y-3">
        <h2 class="text-xl font-semibold text-white">Contact Us</h2>
        <p>If you have questions about this Privacy Policy, please contact us at
          <a href="mailto:privacy@vibevista.com" class="text-primary hover:underline">privacy@vibevista.com</a>.
        </p>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
const sections = [
  {
    title: '1. Information We Collect',
    paragraphs: [
      'We collect information you provide directly to us when you create an account, update your profile, or communicate with other users.',
    ],
    items: [
      'Account information: name, username, email address, password',
      'Profile information: bio, photo, location, speciality, genres',
      'Usage data: pages visited, features used, time spent',
      'Device information: IP address, browser type, operating system',
      'Communications: messages you send through the platform',
    ],
  },
  {
    title: '2. How We Use Your Information',
    paragraphs: [
      'We use the information we collect to provide, maintain, and improve our services.',
    ],
    items: [
      'Create and manage your account',
      'Connect you with other musicians and opportunities',
      'Send you notifications and updates relevant to your activity',
      'Process payments for premium features',
      'Detect and prevent fraud and abuse',
      'Comply with legal obligations',
    ],
  },
  {
    title: '3. Information Sharing',
    paragraphs: [
      'We do not sell your personal information. We may share your information in the following circumstances:',
    ],
    items: [
      'With other users as part of normal platform functionality (your public profile)',
      'With service providers who assist us in operating the platform (e.g. Cloudinary for media, Pusher for real-time features)',
      'When required by law or to protect rights and safety',
      'In connection with a merger, acquisition, or sale of assets',
    ],
  },
  {
    title: '4. Data Retention',
    paragraphs: [
      'We retain your personal information for as long as your account is active or as needed to provide services. You may request deletion of your account and associated data at any time by contacting us.',
    ],
  },
  {
    title: '5. Security',
    paragraphs: [
      'We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.',
    ],
  },
  {
    title: '6. Your Rights',
    paragraphs: [
      'Depending on your location, you may have the right to access, correct, or delete your personal information. To exercise these rights, contact us at privacy@vibevista.com.',
    ],
  },
  {
    title: '7. Changes to This Policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time. We will notify you of significant changes by email or through the platform. Your continued use of VibeVista after changes become effective constitutes acceptance of the updated policy.',
    ],
  },
]
</script>
