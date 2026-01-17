import { createApp } from 'vue'
import './style.css'
import '@fontsource-variable/bricolage-grotesque/index.css'
import App from './App.vue'
import { clerkPlugin } from '@clerk/vue'
import { initTheme } from './lib/theme'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

initTheme()

const app = createApp(App)
app.use(clerkPlugin, { publishableKey: PUBLISHABLE_KEY })
app.mount('#app')
