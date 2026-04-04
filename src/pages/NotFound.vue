<template>
  <div class="min-h-screen bg-gray-950 flex flex-col items-center justify-center text-center px-6">
    <p class="text-primary text-xs font-semibold tracking-widest uppercase mb-4">404</p>
    <h1 class="text-4xl font-bold text-white mb-3">Page not found</h1>
    <p class="text-gray-400 text-sm max-w-sm mb-8">
      The page you're looking for doesn't exist or may have been moved.
    </p>
    <div class="flex items-center gap-4">
      <RouterLink
        to="/"
        class="px-6 py-2.5 bg-primary text-white text-sm rounded-full hover:bg-primary/90 transition-all"
      >
        Go home
      </RouterLink>
      <RouterLink
        to="/help"
        class="px-6 py-2.5 text-gray-400 text-sm border border-white/10 rounded-full hover:border-white/30 hover:text-white transition-all"
      >
        Get help
      </RouterLink>
    </div>
  </div>
</template>
