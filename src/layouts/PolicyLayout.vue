<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-950 text-white flex flex-col">
    <NavBar />
    <main class="flex-1 pt-28 pb-16">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>