<template>
  <div class="max-w-3xl mx-auto px-6">

    <div class="mb-12">
      <p class="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Legal</p>
      <h1 class="text-4xl font-bold text-white mb-4">Terms &amp; Conditions</h1>
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
        <h2 class="text-xl font-semibold text-white">Contact</h2>
        <p>For questions about these Terms, contact us at
          <a href="mailto:legal@vibevista.com" class="text-primary hover:underline">legal@vibevista.com</a>.
        </p>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
const sections = [
  {
    title: '1. Acceptance of Terms',
    paragraphs: [
      'By accessing or using VibeVista, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the platform.',
    ],
  },
  {
    title: '2. Eligibility',
    paragraphs: [
      'You must be at least 13 years old to use VibeVista. By using the platform, you represent that you meet this requirement and that the information you provide is accurate.',
    ],
  },
  {
    title: '3. User Accounts',
    paragraphs: [
      'You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. Notify us immediately of any unauthorised use.',
    ],
    items: [
      'You may not create accounts for others without their consent',
      'One person may not maintain multiple accounts',
      'Account sharing is not permitted',
    ],
  },
  {
    title: '4. Acceptable Use',
    paragraphs: [
      'You agree not to use VibeVista to:',
    ],
    items: [
      'Post content that is illegal, harmful, threatening, or harassing',
      'Impersonate any person or entity',
      'Spam or send unsolicited messages',
      'Scrape or extract data without permission',
      'Attempt to gain unauthorised access to other accounts or systems',
      'Post false or misleading information',
    ],
  },
  {
    title: '5. Content Ownership',
    paragraphs: [
      'You retain ownership of content you post on VibeVista. By posting, you grant us a non-exclusive, worldwide, royalty-free licence to use, display, and distribute your content solely to operate the platform.',
      'We do not claim ownership of your music, photos, or creative work.',
    ],
  },
  {
    title: '6. Payments and Subscriptions',
    paragraphs: [
      'Some features on VibeVista require payment. All fees are stated in the applicable currency at the time of purchase. Payments are processed securely via Paystack. We do not store your card details.',
      'Refunds are evaluated on a case-by-case basis. Contact support@vibevista.com within 7 days of a charge for refund requests.',
    ],
  },
  {
    title: '7. Termination',
    paragraphs: [
      'We reserve the right to suspend or terminate accounts that violate these Terms, engage in harmful behaviour, or at our sole discretion. You may also delete your account at any time from your account settings.',
    ],
  },
  {
    title: '8. Disclaimer of Warranties',
    paragraphs: [
      'VibeVista is provided "as is" without warranties of any kind, either express or implied. We do not guarantee uninterrupted or error-free service.',
    ],
  },
  {
    title: '9. Limitation of Liability',
    paragraphs: [
      'To the fullest extent permitted by law, VibeVista shall not be liable for any indirect, incidental, or consequential damages arising from your use of the platform.',
    ],
  },
  {
    title: '10. Changes to Terms',
    paragraphs: [
      'We may update these Terms at any time. Continued use of the platform after changes constitutes acceptance. We will notify you of material changes via email or in-app notification.',
    ],
  },
]
</script>
