<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { getStoredTheme, getSystemTheme, getActiveTheme, setTheme, toggleTheme, type Theme } from '../../lib/theme'

const theme = ref<Theme>('light')

const icon = computed(() => (theme.value === 'dark' ? 'sun' : 'moon'))
const label = computed(() => (theme.value === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'))

function syncFromDom() {
  theme.value = getActiveTheme()
}

function onToggle() {
  theme.value = toggleTheme()
}

onMounted(() => {
  const stored = getStoredTheme()
  setTheme(stored ?? getSystemTheme())
  syncFromDom()
})
</script>

<template>
  <button class="iconButton" type="button" :aria-label="label" @click="onToggle">
    <svg v-if="icon === 'moon'" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 13.2A8.2 8.2 0 1 1 10.8 3a6.5 6.5 0 0 0 10.2 10.2z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linejoin="round"
      />
    </svg>
    <svg v-else viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
        stroke="currentColor"
        stroke-width="2"
      />
      <path d="M12 2v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <path d="M12 20v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <path d="M4.93 4.93 6.34 6.34" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <path d="M17.66 17.66 19.07 19.07" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <path d="M2 12h2" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <path d="M20 12h2" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <path d="M4.93 19.07 6.34 17.66" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      <path d="M17.66 6.34 19.07 4.93" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
    </svg>
  </button>
</template>

<style scoped>
.iconButton {
  width: 42px;
  height: 42px;
  border-radius: 999px;
  border: 0;
  background: transparent;
  color: var(--text);
  display: grid;
  place-items: center;
  cursor: pointer;
}

.iconButton:hover {
  background: var(--hover);
}

.iconButton svg {
  width: 20px;
  height: 20px;
}
</style>
