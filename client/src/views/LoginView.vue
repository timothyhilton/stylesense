<script setup lang="ts">
import { SignIn } from '@clerk/vue'
</script>

<template>
  <div class="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div class="absolute top-10 left-10 w-64 h-64 bg-primary-light/10 dark:bg-primary-dark/5 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-10 right-10 w-64 h-64 bg-secondary-light/10 dark:bg-secondary-dark/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
    </div>

    <div class="w-full max-w-md space-y-8 flex flex-col items-center z-10">
       <div class="text-center mb-4">
          <h2 class="text-3xl font-display font-bold text-text-primary-light dark:text-text-primary-dark tracking-tight">Welcome Back</h2>
          <p class="mt-2 text-text-muted-light dark:text-text-muted-dark">Sign in to continue your journey.</p>
       </div>

       <div class="bg-white/80 dark:bg-surface-dark/80 backdrop-blur-xl p-8 rounded-3xl border border-white/50 dark:border-gray-700/50 shadow-2xl w-full flex justify-center">
         <SignIn
          redirectUrl="/dashboard"
          signUpUrl="/signup"
          :appearance="{
            elements: {
              rootBox: 'w-full',
              card: 'shadow-none bg-transparent p-0',
              headerTitle: 'hidden',
              headerSubtitle: 'hidden',
              formButtonPrimary: 'bg-primary-light/10 dark:bg-primary-dark/10 hover:bg-primary-light/20 dark:hover:bg-primary-dark/20 text-primary-light dark:text-primary-dark !shadow-none',
              footerActionLink: 'text-primary-light dark:text-primary-dark hover:text-primary-light/80 dark:hover:text-primary-dark/80',
              formFieldInput: 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-text-primary-light dark:text-text-primary-dark focus:ring-primary-light dark:focus:ring-primary-dark',
              formFieldLabel: 'text-text-muted-light dark:text-text-muted-dark',
              dividerLine: 'bg-gray-200 dark:bg-gray-700',
              dividerText: 'text-text-muted-light dark:text-text-muted-dark',
              socialButtonsBlockButton: 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-text-primary-light dark:text-text-primary-dark hover:bg-gray-50 dark:hover:bg-gray-700',
              socialButtonsBlockButtonText: 'text-text-primary-light dark:text-text-primary-dark',
              footer: 'hidden'
            }
          }"
         />
       </div>
       
       <RouterLink to="/" class="text-sm text-text-muted-light dark:text-text-muted-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors flex items-center gap-1 group">
          <span class="group-hover:-translate-x-1 transition-transform">←</span> Back to Home
       </RouterLink>
    </div>
  </div>
</template>