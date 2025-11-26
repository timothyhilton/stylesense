<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center">
    <!-- Background Blobs -->
    <div class="absolute -top-24 -left-24 w-96 h-96 bg-primary-light/20 dark:bg-primary-dark/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-blob"></div>
    <div class="absolute top-0 -right-4 w-72 h-72 bg-secondary-light/20 dark:bg-secondary-dark/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000"></div>
    <div class="absolute -bottom-8 left-20 w-72 h-72 bg-accent-light/20 dark:bg-accent-dark/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-4000"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 flex flex-col items-center text-center z-10">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark text-sm font-medium mb-8 animate-fade-in-up">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light dark:bg-primary-dark opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-primary-light dark:bg-primary-dark"></span>
        </span>
        New Features Available
      </div>

      <h1 class="text-5xl sm:text-7xl md:text-8xl font-display font-bold text-text-primary-light dark:text-text-primary-dark tracking-tight mb-8 leading-[1.1] animate-fade-in-up animation-delay-100">
        Your Wardrobe, <span class="italic text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark dark:to-secondary-dark">Reimagined</span>.
      </h1>
      <p class="mt-6 text-xl sm:text-2xl text-text-muted-light dark:text-text-muted-dark max-w-4xl leading-relaxed animate-fade-in-up animation-delay-200">
        stylesense is your intelligent fashion companion; upload photos, plan outfits, and chat with your wardrobe with clarity and ease.
      </p>
      
      <div class="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
        <RouterLink to="/signup" class="px-8 py-4 rounded-xl bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark font-medium hover:bg-primary-light/20 dark:hover:bg-primary-dark/20 transition-all transform hover:-translate-y-1">
          Get Started
        </RouterLink>
        <a href="#features" class="px-8 py-4 rounded-xl bg-transparent text-text-muted-light dark:text-text-muted-dark font-medium border border-gray-200 dark:border-gray-700 hover:text-text-primary-light dark:hover:text-text-primary-dark hover:border-gray-300 dark:hover:border-gray-600 transition-all">
          Learn More
        </a>
      </div>

      <!-- Abstract Visual Interest -->
      <div class="mt-24 relative w-full animate-fade-in-up animation-delay-500">
        <div class="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark via-transparent to-transparent z-10 h-full w-full pointer-events-none"></div>
        <div class="p-2 bg-white/40 dark:bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/60 dark:border-white/10 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-700 ease-out">
            <div class="w-full aspect-[16/9] bg-gradient-to-br from-surface-light to-gray-50 dark:from-surface-dark dark:to-gray-900 rounded-[1.5rem] flex items-center justify-center overflow-hidden relative border border-gray-100 dark:border-gray-800">
                <!-- Abstract Shapes inside mockup -->
                <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-light/10 rounded-full blur-3xl animate-pulse"></div>
                <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary-light/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
                
                <!-- UI Mockup Elements -->
                <div class="z-20 w-full max-w-3xl p-8 grid grid-cols-3 gap-6 opacity-80">
                   <div class="col-span-2 space-y-4">
                      <div class="h-32 bg-white dark:bg-gray-800 rounded-2xl shadow-sm w-full"></div>
                      <div class="grid grid-cols-2 gap-4">
                         <div class="h-24 bg-white dark:bg-gray-800 rounded-2xl shadow-sm"></div>
                         <div class="h-24 bg-white dark:bg-gray-800 rounded-2xl shadow-sm"></div>
                      </div>
                   </div>
                   <div class="col-span-1 space-y-4">
                      <div class="h-full bg-white dark:bg-gray-800 rounded-2xl shadow-sm"></div>
                   </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-blob {
  animation: blob 7s infinite;
}
.animate-fade-in-up {
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
  transform: translateY(20px);
}
.animation-delay-100 {
  animation-delay: 0.1s;
}
.animation-delay-200 {
  animation-delay: 0.2s;
}
.animation-delay-300 {
  animation-delay: 0.3s;
}
.animation-delay-500 {
  animation-delay: 0.5s;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}

@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
