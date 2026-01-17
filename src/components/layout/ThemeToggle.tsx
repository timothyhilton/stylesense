import { useEffect, useMemo, useState } from 'react'
import { getActiveTheme, initTheme, toggleTheme, type Theme } from '../../lib/theme'

export default function ThemeToggle() {
  const [theme, setThemeState] = useState<Theme>('light')

  useEffect(() => {
    initTheme()
    setThemeState(getActiveTheme())
  }, [])

  const icon = useMemo(() => (theme === 'dark' ? 'sun' : 'moon'), [theme])
  const label = useMemo(
    () => (theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'),
    [theme],
  )

  return (
    <button
      className="h-[42px] w-[42px] rounded-full border-0 bg-transparent text-[color:var(--text)] grid place-items-center cursor-pointer hover:bg-[color:var(--hover)]"
      type="button"
      aria-label={label}
      onClick={() => setThemeState(toggleTheme())}
    >
      {icon === 'moon' ? (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M21 13.2A8.2 8.2 0 1 1 10.8 3a6.5 6.5 0 0 0 10.2 10.2z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" stroke="currentColor" strokeWidth="2" />
          <path d="M12 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 20v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M4.93 4.93 6.34 6.34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M17.66 17.66 19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M2 12h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 12h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M4.93 19.07 6.34 17.66" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M17.66 6.34 19.07 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}
    </button>
  )
}
