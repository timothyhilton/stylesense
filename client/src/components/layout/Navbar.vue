<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/vue'
import { Menu, X } from 'lucide-vue-next'
import ThemeToggle from './ThemeToggle.vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <nav class="sticky top-0 z-50 w-full border-b border-gray-200/50 dark:border-gray-800/50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-xl transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <RouterLink to="/" class="flex items-center gap-2 group">
             <span class="font-display text-xl font-bold text-text-primary-light dark:text-text-primary-dark tracking-tight group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors">stylesense</span>
          </RouterLink>
        </div>
        
        
        <!-- Right Side Actions -->
        <div class="hidden md:block">
            <div class="ml-4 flex items-center gap-6">
                <!-- Desktop Navigation -->
                <div class="hidden md:block">
                  <div class="flex items-baseline gap-4">
                    
                      <!-- Protected Dashboard Link -->
                      <SignedIn>
                        <RouterLink to="/dashboard" class="text-sm font-medium text-text-muted-light dark:text-text-muted-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors">Dashboard</RouterLink>
                    </SignedIn>
                  </div>
                </div>

             <div class="h-6 w-px bg-gray-200 dark:bg-gray-700"></div>

             <ThemeToggle />
             
             <!-- Auth State -->
             <SignedOut>
               <SignInButton mode="modal">
                 <button class="text-sm font-medium text-text-muted-light dark:text-text-muted-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors cursor-pointer">Log in</button>
               </SignInButton>
               <SignUpButton mode="modal">
                 <button class="bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark px-5 py-2 rounded-full text-sm font-medium hover:bg-primary-light/20 dark:hover:bg-primary-dark/20 transition-all cursor-pointer">Get Started</button>
               </SignUpButton>
             </SignedOut>

             <SignedIn>
               <UserButton
                :appearance="{
                  elements: {
                    avatarBox: 'w-9 h-9'
                  }
                }"
               />
             </SignedIn>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="-mr-2 flex md:hidden">
          <button @click="toggleMobileMenu" class="inline-flex items-center justify-center p-2 rounded-md text-text-muted-light dark:text-text-muted-dark hover:text-text-primary-light dark:hover:text-text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-light">
            <span class="sr-only">Open main menu</span>
            <Menu v-if="!isMobileMenuOpen" class="block h-6 w-6" aria-hidden="true" />
            <X v-else class="block h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="isMobileMenuOpen" class="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark">
      <div class="px-4 pt-4 pb-4 space-y-2">
        <RouterLink to="/" @click="isMobileMenuOpen = false" class="block px-3 py-2 rounded-lg text-base font-medium text-text-primary-light dark:text-text-primary-dark hover:bg-gray-50 dark:hover:bg-gray-800/50">Home</RouterLink>
         <SignedIn>
            <RouterLink to="/dashboard" @click="isMobileMenuOpen = false" class="block px-3 py-2 rounded-lg text-base font-medium text-text-primary-light dark:text-text-primary-dark hover:bg-gray-50 dark:hover:bg-gray-800/50">Dashboard</RouterLink>
        </SignedIn>
      </div>
      <div class="pt-4 pb-6 border-t border-gray-200 dark:border-gray-800 px-4">
        <div class="flex flex-col gap-4">
           <div class="flex items-center justify-between">
                <span class="text-sm font-medium text-text-muted-light dark:text-text-muted-dark">Theme</span>
                <ThemeToggle />
           </div>
           
           <div class="flex flex-col gap-3 mt-2">
              <SignedOut>
                  <SignInButton mode="modal">
                     <button class="w-full py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium text-text-primary-light dark:text-text-primary-dark hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">Log in</button>
                  </SignInButton>
                   <SignUpButton mode="modal">
                     <button class="w-full py-2.5 rounded-lg bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark text-sm font-medium hover:bg-primary-light/20 dark:hover:bg-primary-dark/20 transition-colors cursor-pointer">Get Started</button>
                  </SignUpButton>
              </SignedOut>
              <SignedIn>
                  <div class="flex items-center gap-3 px-3 py-2">
                    <UserButton />
                    <span class="text-sm text-text-muted-light dark:text-text-muted-dark">Account Settings</span>
                  </div>
              </SignedIn>
           </div>
        </div>
      </div>
    </div>
  </nav>
</template>