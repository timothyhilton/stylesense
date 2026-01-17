import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import { fileURLToPath, URL } from 'url'

import tailwindcss from '@tailwindcss/vite'
import { cloudflare } from '@cloudflare/vite-plugin'

const config = defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    conditions: ['browser', 'module', 'import'],
  },
  optimizeDeps: {
    exclude: [
      '@tanstack/devtools',
      '@tanstack/devtools-ui',
      '@tanstack/devtools-utils',
      '@tanstack/ai-devtools-core',
      '@tanstack/react-ai-devtools',
      '@tanstack/react-devtools',
      '@tanstack/react-query-devtools',
      '@tanstack/react-router-devtools',
    ],
    esbuildOptions: {
      platform: 'browser',
      conditions: ['browser', 'module', 'import'],
      alias: {
        'solid-js/web': fileURLToPath(new URL('./node_modules/solid-js/web/dist/web.js', import.meta.url)),
      },
    },
  },
  plugins: [
    devtools(),
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
})

export default config
