<script setup lang="ts">
import { ref } from 'vue'
import { useAuth, useUser } from '@clerk/vue'

const { getToken } = useAuth()
const { user } = useUser()
const apiData = ref(null)
const loading = ref(false)
const error = ref('')

const callApi = async () => {
  loading.value = true
  error.value = ''
  try {
    const token = await getToken.value()
    const response = await fetch('http://localhost:5010/api/health', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    
    if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`)
    }
    
    apiData.value = await response.json()
  } catch (err: any) {
    error.value = err.message || 'Failed to fetch data'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div class="mb-10">
      <h1 class="text-3xl font-display font-bold text-text-primary-light dark:text-text-primary-dark">
        Hello, {{ user?.firstName || '...' }}
      </h1>
      <p class="mt-2 text-text-muted-light dark:text-text-muted-dark">Welcome to your personalized space.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- API Test Card -->
      <div class="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 hover:shadow-md transition-shadow duration-300">
        <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">System Health</h3>
            <div class="h-2 w-2 rounded-full" :class="apiData ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'"></div>
        </div>
        <p class="text-sm text-text-muted-light dark:text-text-muted-dark mb-6">
          Check the connection to the backend API services.
        </p>
        
        <button
            @click="callApi"
            :disabled="loading"
            class="w-full px-4 py-2.5 rounded-xl bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark font-medium hover:bg-primary-light/20 dark:hover:bg-primary-dark/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {{ loading ? 'Checking...' : 'Check Health' }}
        </button>

        <div v-if="error" class="mt-4 p-3 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm border border-red-100 dark:border-red-900/30">
            {{ error }}
        </div>

        <div v-if="apiData" class="mt-4 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-xs font-mono overflow-auto border border-gray-100 dark:border-gray-700/50">
            <pre>{{ JSON.stringify(apiData, null, 2) }}</pre>
        </div>
      </div>

      <!-- Placeholder Card -->
      <div class="bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 hover:shadow-md transition-shadow duration-300 flex flex-col justify-center items-center text-center border-dashed">
         <div class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4 text-gray-400 dark:text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
         </div>
         <h3 class="text-lg font-bold text-text-primary-light dark:text-text-primary-dark mb-2">Coming Soon</h3>
         <p class="text-sm text-text-muted-light dark:text-text-muted-dark max-w-xs">
           More widgets and features will be added here as we expand the platform.
         </p>
      </div>
    </div>
  </div>
</template>