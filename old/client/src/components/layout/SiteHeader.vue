<script setup lang="ts">
import { navItems } from '../../lib/links'
import ThemeToggle from './ThemeToggle.vue'
</script>

<template>
  <header class="header">
    <div class="headerInner">
      <a class="brand" href="#">
        <span class="brandText">stylesense</span>
      </a>

      <nav class="nav" aria-label="Primary">
        <a v-for="item in navItems" :key="item.label" class="navItem" :href="item.href">
          <span>{{ item.label }}</span>
          <svg v-if="item.hasMenu" class="chev" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
      </nav>

      <div class="actions">
        <ThemeToggle />
        <a class="download" href="#">
          <span>Download</span>
          <svg class="arrow" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M8 5l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: color-mix(in srgb, var(--bg) 92%, transparent);
  backdrop-filter: blur(10px);
}

.headerInner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 20px 24px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 12px;
}

.brand {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.brandText {
  font-family: var(--ui-font);
  font-weight: 600;
  letter-spacing: -0.02em;
}

.nav {
  justify-self: center;
  display: flex;
  align-items: center;
  gap: 28px;
  font-family: var(--ui-font);
  font-weight: 500;
  color: var(--text);
}

.navItem {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: inherit;
  opacity: 0.92;
}

.navItem:hover {
  opacity: 1;
}

.chev {
  width: 16px;
  height: 16px;
  opacity: 0.7;
}

.actions {
  justify-self: end;
  display: inline-flex;
  align-items: center;
  gap: 14px;
}

.download {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 22px;
  border-radius: 16px;
  background: var(--cta-primary-bg);
  color: var(--cta-primary-fg);
  text-decoration: none;
  font-family: var(--ui-font);
  font-weight: 600;
  box-shadow: var(--shadow-strong);
}

.download:hover {
  filter: brightness(1.04);
}

.arrow {
  width: 18px;
  height: 18px;
}

@media (max-width: 820px) {
  .headerInner {
    grid-template-columns: 1fr 1fr;
  }

  .nav {
    display: none;
  }
}
</style>
