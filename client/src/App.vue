<template>
  <div class="page">
    <SiteHeader />
    <LandingHero />
  </div>
</template>

<script setup lang="ts">
import SiteHeader from './components/layout/SiteHeader.vue'
import LandingHero from './components/landing/LandingHero.vue'
</script>

<style scoped>
.page {
  min-height: 100vh;
  width: 100%;
  background: var(--bg);
  color: var(--text);
}
</style>
