<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Footer from '@/components/Footer.vue'
import NavBar from '@/components/NavBar.vue'

// Ticker content
const tickerItems = [
  '97% of people listen to music daily',
  'Music reduces stress by up to 65%',
  'There are over 1.3 billion musicians worldwide',
  'The average person listens to 4+ hours of music per day',
  'Music improves focus and productivity by 15%',
  'Over 100,000 new songs are uploaded online every day',
  'Playing an instrument increases IQ by up to 7 points',
  'Music therapy is used in 30+ countries as clinical treatment',
]

// Animated stat counters
const stats = ref([
  { label: 'Musicians', target: 320000, display: '0', suffix: 'K' },
  { label: 'Job listings', target: 47000, display: '0', suffix: 'K' },
  // { label: 'Countries', target: 120, display: '0', suffix: '+' },
  // { label: 'Genres', target: 80, display: '0', suffix: '+' },
])

let observer: IntersectionObserver | null = null

const animateCounter = (stat: typeof stats.value[0]) => {
  const duration = 2000
  const start = Date.now()
  const tick = () => {
    const elapsed = Date.now() - start
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    const current = Math.floor(eased * stat.target)
    stat.display = stat.suffix === 'K'
      ? (current / 1000).toFixed(current >= 1000 ? 0 : 1)
      : String(current)
    if (progress < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

onMounted(() => {
  const el = document.getElementById('stats-section')
  if (el) {
    observer = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) {
        stats.value.forEach(animateCounter)
        observer?.disconnect()
      }
    }, { threshold: 0.3 })
    observer.observe(el)
  }
})

onUnmounted(() => observer?.disconnect())

const genres = [
  { name: 'Drums', icon: new URL('@/assets/drum-kit.svg', import.meta.url).href },
  { name: 'Vocals', icon: new URL('@/assets/microphone.svg', import.meta.url).href },
  { name: 'Guitar', icon: new URL('@/assets/guitar.svg', import.meta.url).href },
  { name: 'Keyboard', icon: new URL('@/assets/piano-keys.svg', import.meta.url).href },
  { name: 'Orchestra', icon: new URL('@/assets/orchestra.svg', import.meta.url).href },
  { name: 'Percussion', icon: new URL('@/assets/percussion.svg', import.meta.url).href },
  { name: 'Bass', icon: new URL('@/assets/guitar.svg', import.meta.url).href },
  { name: 'Production', icon: new URL('@/assets/bookmark.svg', import.meta.url).href },
  { name: 'Events', icon: new URL('@/assets/event.svg', import.meta.url).href },
  { name: 'Coaching', icon: new URL('@/assets/contractor.svg', import.meta.url).href },
  { name: 'Services', icon: new URL('@/assets/shopping_bag.svg', import.meta.url).href },
  { name: 'Gospel', icon: new URL('@/assets/world.svg', import.meta.url).href },
]

const steps = [
  {
    number: '01',
    title: 'Create your profile',
    description: 'Set up your musician profile in minutes. Add your speciality, genres, location, and a bio that tells your story.',
    color: 'text-primary',
    border: 'border-primary/20',
    bg: 'bg-primary/5',
  },
  {
    number: '02',
    title: 'Browse opportunities',
    description: 'Discover gigs, collaborations, events, and products tailored to your instrument and style.',
    color: 'text-blue-400',
    border: 'border-blue-500/20',
    bg: 'bg-blue-500/5',
  },
  {
    number: '03',
    title: 'Connect and grow',
    description: 'Join groups, message musicians, attend events, and build a sustainable career from your craft.',
    color: 'text-emerald-400',
    border: 'border-emerald-500/20',
    bg: 'bg-emerald-500/5',
  },
]

const testimonials = [
  {
    quote: 'VibeVista connected me with a recording studio in Lagos within 48 hours of signing up. I have landed three sessions since.',
    name: 'Tunde A.',
    role: 'Session Drummer',
    location: 'Lagos, Nigeria',
    initials: 'TA',
    color: 'bg-blue-300',
  },
  {
    quote: 'Finding a vocal coach who specialises in gospel was almost impossible before VibeVista. Now I have weekly sessions with someone who truly gets it.',
    name: 'Amara O.',
    role: 'Soprano Vocalist',
    location: 'Abuja, Nigeria',
    initials: 'AO',
    color: 'bg-yellow-400',
  },
  {
    quote: 'I posted a listing for a keyboardist and had five quality applications in two days. The platform just works.',
    name: 'Chidi E.',
    role: 'Music Director',
    location: 'Port Harcourt, Nigeria',
    initials: 'CE',
    color: 'bg-gray-800',
  },
]

const features = [
  { icon: new URL('@/assets/dollar_tablet.svg', import.meta.url).href, title: 'Music Gigs', description: 'Explore job ads posted by bands, recording studios, event organizers, and music schools.' },
  { icon: new URL('@/assets/share_tablet.svg', import.meta.url).href, title: 'Connect', description: 'Network with music enthusiasts from diverse backgrounds. Your next creative partner is here.' },
  { icon: new URL('@/assets/like_tablet.svg', import.meta.url).href, title: 'Join Groups', description: 'Collaborate and create magic with like-minded musicians by joining or creating groups.' },
  { icon: new URL('@/assets/book_tablet.svg', import.meta.url).href, title: 'Learn', description: 'Empower your musical journey — instruments, production, music theory and more.' },
  // { icon: new URL('@/assets/calendar_tablet.svg', import.meta.url).href, title: 'Events', description: 'Stay updated on gigs, concerts, conferences, and festivals near you and nationwide.' },
  // { icon: new URL('@/assets/bullhorn_tablet.svg', import.meta.url).href, title: 'Advertise', description: 'Reach a targeted audience. Promote your gear, studio, or music services.' },
]

const musicalFacts = [
  { stat: '97%', description: 'of people worldwide listen to music every single day' },
  { stat: '65%', description: 'reduction in stress levels reported by regular music listeners' },
  { stat: '1.3B', description: 'musicians and music practitioners exist across the globe' },
  { stat: '4hrs', description: 'average daily music listening time per person globally' },
]
</script>

<template>
  <div class="bg-gray-950 min-h-screen text-white overflow-x-hidden">
    <NavBar />

    <!-- Hero -->
    <section id="hero" class="relative min-h-screen flex items-center px-6 sm:px-12 pt-24">
      <div class="absolute left-[-200px] top-[-100px] w-[800px] h-[800px] rounded-full border border-gray-800/50 border-dashed pointer-events-none" />
      <div class="absolute left-[50px] top-[50px] w-[500px] h-[500px] rounded-full border border-gray-800/30 border-dashed pointer-events-none" />
      <div class="absolute right-[-100px] top-[-50px] w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div class="absolute left-[200px] bottom-[100px] w-[300px] h-[300px] rounded-full bg-blue-900/10 blur-3xl pointer-events-none" />

      <div class="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-16 relative z-10">
        <div class="flex flex-col space-y-8 max-w-xl">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full w-fit">
            <span class="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span class="text-primary text-xs font-medium">Now in beta — join free</span>
          </div>

          <h1 class="hero-title text-6xl sm:text-8xl text-gray-300 font-bold leading-none tracking-tight">
            V<span class="italic font-light">ibes</span> on <br /><em class="font-light">vibes</em>
          </h1>

          <p class="hero-sub text-gray-400 text-lg leading-relaxed">
            A world built for the music minds. Connect with musicians, discover gigs, join groups, and grow your career — all in one place.
          </p>

          <div class="hero-cta flex items-center space-x-4">
            <a href="https://vibevista-web.akanbisegun1.workers.dev/auth/register" target="_blank" class="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              Join Free
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <RouterLink to="/about" class="text-sm text-gray-400 hover:text-white transition-colors underline underline-offset-4">Learn more</RouterLink>
          </div>

          <div id="stats-section" class="hero-stats grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/5">
            <div v-for="stat in stats" :key="stat.label" class="space-y-1">
              <p class="text-2xl font-bold text-white tabular-nums">{{ stat.display }}{{ stat.suffix }}</p>
              <p class="text-gray-500 text-xs">{{ stat.label }}</p>
            </div>
          </div>
        </div>

        <div class="hero-images relative hidden md:flex items-start space-x-4 flex-shrink-0">
          <div class="w-56 h-80 rounded-[100px] border-2 border-white/20 p-1 overflow-hidden shadow-2xl">
            <img src="@/assets/images/hero_img.jpg" alt="Musician" class="w-full h-full object-cover rounded-[100px]" />
          </div>
          <div class="flex flex-col justify-between space-y-4 pt-10">
            <div class="bg-gray-900 border border-white/10 w-32 h-32 flex flex-col justify-center items-center rounded-full text-center px-3 shadow-xl">
              <span class="text-2xl font-bold text-white">97%</span>
              <span class="text-xs text-gray-500 mt-1 leading-tight">of people love listening to music</span>
            </div>
            <div class="w-32 h-48 rounded-[80px] overflow-hidden border border-white/10 shadow-xl">
              <img src="@/assets/images/microphone-and-filter.jpg" alt="Microphone" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ticker -->
    <div class="py-4 bg-primary/10 border-y border-primary/20 overflow-hidden">
      <div class="ticker-track flex gap-16 whitespace-nowrap">
        <span v-for="(item, i) in [...tickerItems, ...tickerItems]" :key="i" class="text-xs text-primary/80 font-medium tracking-wide flex-shrink-0 flex items-center gap-3">
          <span class="w-1 h-1 rounded-full bg-primary inline-block" />{{ item }}
        </span>
      </div>
    </div>

    <!-- Genre strip -->
    <section class="py-16 px-6 border-b border-white/5">
      <div class="max-w-5xl mx-auto">
        <p class="text-center text-gray-500 text-xs tracking-widest uppercase mb-8">For every kind of musician</p>
        <div class="flex flex-wrap justify-center gap-3">
          <div v-for="genre in genres" :key="genre.name" class="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full hover:border-primary/40 hover:bg-primary/5 transition-all cursor-default group">
             <img :src="genre.icon" :alt="genre.name" class="w-4 h-4" />
            <span class="text-sm text-gray-400 group-hover:text-white transition-colors">{{ genre.name }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="py-24 px-6">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-16 space-y-3">
          <p class="text-primary text-xs font-semibold tracking-widest uppercase">Simple by design</p>
          <h2 class="text-4xl font-bold text-white">How VibeVista works</h2>
          <p class="text-gray-400 max-w-lg mx-auto">From sign-up to your first gig in three steps.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 relative">
          <div class="hidden md:block absolute top-12 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-gradient-to-r from-primary/30 via-blue-500/30 to-emerald-500/30" />
          <div v-for="step in steps" :key="step.number" class="relative flex flex-col items-center text-center space-y-4 p-8 rounded-2xl border bg-white/5 transition-colors" :class="[step.border, step.bg]">
            <div class="w-14 h-14 rounded-full bg-gray-900 border border-white/10 flex items-center justify-center z-10">
              <span class="font-bold text-lg font-mono" :class="step.color">{{ step.number }}</span>
            </div>
            <h3 class="text-white font-semibold text-lg">{{ step.title }}</h3>
            <p class="text-gray-400 text-sm leading-relaxed">{{ step.description }}</p>
          </div>
        </div>

        <div class="text-center mt-12">
          <RouterLink to="/register" class="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            Get started — it's free
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Banner -->
    <section class="py-16 px-6 bg-white/[0.03] border-y border-white/5 text-center">
      <p class="text-gray-600 text-xs tracking-widest uppercase mb-4">Our promise</p>
      <h2 class="text-3xl md:text-5xl font-bold text-white">Built for musicians,&nbsp;<span class="text-primary italic font-light">by musicians</span></h2>
    </section>

    <!-- Features -->
    <section id="features" class="relative py-24 px-6 overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-center bg-fixed opacity-10" />
      <div class="absolute inset-0 bg-gray-950/80" />
      <div class="relative z-10 max-w-5xl mx-auto">
        <div class="text-center mb-16 space-y-3">
          <p class="text-primary text-xs font-semibold tracking-widest uppercase">What you get</p>
          <h2 class="text-4xl font-bold text-white">Everything in one place</h2>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div v-for="feature in features" :key="feature.title" class="backdrop-blur-md bg-gray-900/70 border border-white/10 rounded-2xl p-6 space-y-3 hover:border-primary/30 transition-all group">
            <img :src="feature.icon" :alt="feature.title" class="w-12 h-12" />
            <h3 class="font-semibold text-white group-hover:text-primary transition-colors">{{ feature.title }}</h3>
            <p class="text-gray-400 text-sm leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-24 px-6">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-16 space-y-3">
          <p class="text-primary text-xs font-semibold tracking-widest uppercase">Early community</p>
          <h2 class="text-4xl font-bold text-white">What musicians are saying</h2>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="t in testimonials" :key="t.name" class="bg-white/5 border border-white/10 rounded-2xl p-7 space-y-5 flex flex-col hover:border-white/20 transition-colors">
            <div class="flex gap-1">
              <svg v-for="i in 5" :key="i" class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <p class="text-gray-300 text-sm leading-relaxed flex-1">"{{ t.quote }}"</p>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0" :class="t.color">{{ t.initials }}</div>
              <div>
                <p class="text-white text-sm font-medium">{{ t.name }}</p>
                <p class="text-gray-500 text-xs">{{ t.role }} · {{ t.location }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Musical facts -->
    <section class="py-16 px-6 bg-white/[0.02] border-y border-white/5">
      <div class="max-w-5xl mx-auto">
        <p class="text-center text-gray-600 text-xs tracking-widest uppercase mb-10">Did you know?</p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div v-for="fact in musicalFacts" :key="fact.stat" class="text-center space-y-2 p-5 rounded-xl border border-white/5">
            <p class="text-3xl font-bold text-primary">{{ fact.stat }}</p>
            <p class="text-gray-500 text-xs leading-relaxed">{{ fact.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-28 px-6 text-center relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div class="relative z-10 max-w-2xl mx-auto space-y-6">
        <h2 class="text-4xl md:text-5xl font-bold text-white leading-tight">Your vibe is <span class="text-primary italic">waiting</span></h2>
        <p class="text-gray-400 text-lg">Join the community. Find your next gig. Build something musical.</p>
        <div class="flex flex-col sm:flex-row justify-center gap-4 pt-2">
          <RouterLink to="/register" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
            Create Free Account
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </RouterLink>
          <RouterLink to="/login" class="inline-flex items-center justify-center px-8 py-4 text-white border border-white/20 rounded-full hover:border-white/40 transition-all">
            Sign In
          </RouterLink>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<style scoped>
.hero-title { animation: slideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.hero-title::first-letter { color: #df6221; font-weight: 800; }
.hero-sub { opacity: 0; animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards; }
.hero-cta { opacity: 0; animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards; }
.hero-stats { opacity: 0; animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.7s forwards; }
.hero-images { opacity: 0; animation: slideFromRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards; }

#features {
  background-image: url('@/assets/images/feature_banner.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

@keyframes slideIn {
  from { transform: translateY(-30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
@keyframes fadeUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
@keyframes slideFromRight {
  from { transform: translateX(40px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

.ticker-track {
  animation: ticker 40s linear infinite;
}
.ticker-track:hover { animation-play-state: paused; }

@keyframes ticker {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
</style>
