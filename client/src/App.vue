<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/layout/Navbar.vue'
</script>

<template>
  <div class="min-h-screen bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark font-sans transition-colors duration-200">
    <Navbar />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
/* Global styles can also go here or in style.css */
</style>
