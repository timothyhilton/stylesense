export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'stylesense.theme'

function isTheme(value: unknown): value is Theme {
  return value === 'light' || value === 'dark'
}

export function getStoredTheme(): Theme | null {
  if (typeof window === 'undefined') return null
  const value = window.localStorage.getItem(STORAGE_KEY)
  return isTheme(value) ? value : null
}

export function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function getActiveTheme(): Theme {
  if (typeof document === 'undefined') return 'light'
  const current = document.documentElement.dataset.theme
  return isTheme(current) ? current : 'light'
}

export function setTheme(theme: Theme) {
  if (typeof document !== 'undefined') document.documentElement.dataset.theme = theme
  if (typeof window !== 'undefined') window.localStorage.setItem(STORAGE_KEY, theme)
}

export function initTheme() {
  const stored = getStoredTheme()
  const theme = stored ?? getSystemTheme()
  setTheme(theme)
  return theme
}

export function toggleTheme() {
  const current = getActiveTheme()
  const next: Theme = current === 'dark' ? 'light' : 'dark'
  setTheme(next)
  return next
}
