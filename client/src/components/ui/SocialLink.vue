<script setup lang="ts">
import type { SocialIconName } from '../../lib/links'
import { socialIconPath } from '../../lib/socialIcons'

defineProps<{
  label: string
  href: string
  icon: SocialIconName
}>()
</script>

<template>
  <a class="socialLink" :href="href" :aria-label="label">
    <svg class="socialIcon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path :d="socialIconPath(icon)" />
    </svg>
  </a>
</template>

<style scoped>
.socialLink {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  color: var(--muted);
  text-decoration: none;
}

.socialLink:hover {
  background: var(--hover);
  color: var(--text);
}

.socialIcon {
  width: 18px;
  height: 18px;
}
</style>
