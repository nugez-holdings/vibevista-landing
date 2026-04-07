<template>
  <div class="max-w-3xl mx-auto px-6">

    <div class="mb-12">
      <p class="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Support</p>
      <h1 class="text-4xl font-bold text-white mb-4">Help &amp; FAQ</h1>
      <p class="text-gray-400">Find answers to common questions or reach out to our team.</p>
    </div>

    <!-- Category filters -->
    <div class="flex flex-wrap gap-2 mb-10">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="activeCategory = cat"
        class="px-4 py-2 rounded-full text-sm transition-all"
        :class="activeCategory === cat
          ? 'bg-primary text-white'
          : 'bg-white/5 text-gray-400 hover:text-white border border-white/10'"
      >
        {{ cat }}
      </button>
    </div>

    <!-- FAQ accordion -->
    <div class="space-y-3 mb-16">
      <div
        v-for="faq in filteredFaqs"
        :key="faq.question"
        class="border border-white/10 rounded-xl overflow-hidden"
      >
        <button
          @click="toggle(faq.question)"
          class="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
        >
          <span class="text-white text-sm font-medium pr-4">{{ faq.question }}</span>
          <span class="text-gray-500 text-lg flex-shrink-0 transition-transform" :class="open === faq.question ? 'rotate-45' : ''">+</span>
        </button>
        <div v-if="open === faq.question" class="px-5 pb-5">
          <p class="text-gray-400 text-sm leading-relaxed">{{ faq.answer }}</p>
        </div>
      </div>
    </div>

    <!-- Still need help -->
    <div class="bg-white/5 border border-white/10 rounded-2xl p-8 text-center space-y-4">
      <h2 class="text-white font-semibold text-lg">Still need help?</h2>
      <p class="text-gray-500 text-sm">Our support team responds within 24 hours.</p>
      <a href="mailto:support@vibevista.com" class="inline-flex items-center px-6 py-2.5 bg-primary text-white rounded-full text-sm hover:bg-primary/90 transition-all">
        Contact Support
      </a>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const categories = ['All', 'Account', 'Listings', 'Payments', 'Privacy', 'Technical']
const activeCategory = ref('All')
const open = ref<string | null>(null)

const toggle = (question: string) => {
  open.value = open.value === question ? null : question
}

const faqs = [
  {
    category: 'Account',
    question: 'How do I create an account?',
    answer: 'Click "Sign Up" on the homepage, fill in your details, and verify your email address. The process takes less than a minute.',
  },
  {
    category: 'Account',
    question: 'I forgot my password. How do I reset it?',
    answer: 'Click "Sign In" then "Forgot Password". Enter your email and we\'ll send you a reset link valid for 60 minutes.',
  },
  {
    category: 'Account',
    question: 'How do I delete my account?',
    answer: 'Go to Settings → Account → Delete Account. This permanently removes your profile and all associated data. The action is irreversible.',
  },
  {
    category: 'Account',
    question: 'Can I change my username?',
    answer: 'Yes, you can update your username from your profile settings at any time, subject to availability.',
  },
  {
    category: 'Listings',
    question: 'How do I post a music gig or job listing?',
    answer: 'From your dashboard, click "Create Listing", fill in the details about the gig or opportunity, set your requirements, and publish. Listings are visible to all VibeVista members.',
  },
  {
    category: 'Listings',
    question: 'How long does a listing stay active?',
    answer: 'Listings are active for 30 days by default. You can extend, edit, or close them at any time from your dashboard.',
  },
  {
    category: 'Payments',
    question: 'What payment methods are accepted?',
    answer: 'We use Paystack for payment processing, which supports cards (Visa, Mastercard), bank transfers, and USSD payments depending on your region.',
  },
  {
    category: 'Payments',
    question: 'Can I get a refund?',
    answer: 'Refunds are evaluated case by case. Contact support@vibevista.com within 7 days of a charge with your transaction reference.',
  },
  {
    category: 'Privacy',
    question: 'Who can see my profile?',
    answer: 'Your public profile (name, photo, bio, speciality) is visible to all logged-in users. Your email, phone number, and private details are never shown publicly.',
  },
  {
    category: 'Privacy',
    question: 'How do I request my data?',
    answer: 'Visit our Privacy Center and submit a data export request. We\'ll compile and send your data within 30 days.',
  },
  {
    category: 'Technical',
    question: 'The app isn\'t loading properly. What should I do?',
    answer: 'Try clearing your browser cache and cookies, then reload. If the issue persists, try a different browser or contact support@vibevista.com with details of the problem.',
  },
  {
    category: 'Technical',
    question: 'I\'m not receiving email notifications. What\'s wrong?',
    answer: 'Check your spam/junk folder first. Then verify your notification settings in your account. If emails are still missing, contact support with your registered email address.',
  },
]

const filteredFaqs = computed(() =>
  activeCategory.value === 'All'
    ? faqs
    : faqs.filter(f => f.category === activeCategory.value)
)
</script>
