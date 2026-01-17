<script setup lang="ts">
import { socials } from '../../lib/links'
import SocialLink from '../ui/SocialLink.vue'
</script>

<template>
  <main class="hero">
    <div class="heroInner">
      <h1 class="headline">
        <span class="line">try on outfits</span>
        <span class="line">
          with <span class="accent">ai</span>
        </span>
      </h1>

      <p class="subhead">
        Upload photos of your clothes, generate realistic try-ons, and ask questions about your wardrobe.
        Find what matches, what’s missing, and what to wear next.
      </p>

      <div class="ctaRow">
        <a class="ctaPrimary" href="#try-on">
          <span>Start a try-on</span>
          <svg class="arrow" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M8 5l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
        <a class="ctaSecondary" href="#wardrobe">
          <span>Ask your wardrobe</span>
        </a>
      </div>

      <div class="socialRow" aria-label="Social links">
        <SocialLink v-for="s in socials" :key="s.label" :label="s.label" :href="s.href" :icon="s.icon" />
      </div>

      <section id="try-on" class="section">
        <h2 class="sectionTitle">Try-On Studio</h2>
        <p class="sectionText">
          Upload a garment photo, pick your model photo, and generate variations. Keep your favorites, compare side-by-side,
          and export ready-to-share images.
        </p>
      </section>

      <section id="wardrobe" class="section">
        <h2 class="sectionTitle">Wardrobe Q&amp;A</h2>
        <p class="sectionText">
          Ask: “What can I wear with these pants?”, “Build me a capsule for a trip”, or “What am I missing for winter?”
          It answers using what you’ve uploaded.
        </p>
      </section>

      <section id="pricing" class="section">
        <h2 class="sectionTitle">Pricing</h2>
        <p class="sectionText">
          Simple credits for try-ons. Unlimited wardrobe questions. Upgrade when you’re ready.
        </p>
      </section>
    </div>
  </main>
</template>

<style scoped>
.hero {
  padding: 86px 24px 58px;
}

.heroInner {
  max-width: 980px;
  margin: 0 auto;
  text-align: center;
}

.headline {
  margin: 0;
  font-family: var(--display-font);
  font-weight: 400;
  letter-spacing: -0.04em;
  color: var(--text);
  font-size: clamp(64px, 8vw, 126px);
  line-height: 0.95;
}

.line {
  display: block;
}

.accent {
  font-style: italic;
  color: var(--accent);
}

.subhead {
  margin: 26px auto 0;
  max-width: 720px;
  font-family: var(--ui-font);
  font-size: 16px;
  line-height: 1.55;
  color: var(--muted);
  font-weight: 500;
}

.ctaRow {
  margin-top: 32px;
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.ctaPrimary {
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

.ctaPrimary:hover {
  filter: brightness(1.04);
}

.ctaSecondary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 22px;
  border-radius: 16px;
  background: var(--cta-secondary-bg);
  color: var(--text);
  text-decoration: none;
  font-family: var(--ui-font);
  font-weight: 600;
  border: 1px solid var(--border);
}

.ctaSecondary:hover {
  background: var(--cta-secondary-bg-hover);
}

.arrow {
  width: 18px;
  height: 18px;
}

.socialRow {
  margin-top: 36px;
  display: flex;
  justify-content: center;
  gap: 14px;
}

.section {
  margin: 44px auto 0;
  max-width: 860px;
  padding: 18px 18px;
  border-radius: 18px;
  border: 1px solid var(--border);
  background: color-mix(in srgb, var(--bg) 82%, transparent);
  backdrop-filter: blur(8px);
  text-align: left;
}

.sectionTitle {
  margin: 0;
  font-family: var(--ui-font);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text);
}

.sectionText {
  margin: 10px 0 0;
  font-family: var(--ui-font);
  font-weight: 520;
  color: var(--muted);
  line-height: 1.6;
}

@media (max-width: 820px) {
  .hero {
    padding-top: 64px;
  }
}
</style>
