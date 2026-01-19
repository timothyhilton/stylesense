import { Link } from '@tanstack/react-router'
import { SignedIn, SignedOut } from '@clerk/clerk-react'
import { navItems } from '../../lib/links'
import HeaderUser from '../../integrations/clerk/header-user'
import ThemeToggle from './ThemeToggle'

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 bg-[color-mix(in_srgb,var(--bg)_92%,transparent)] backdrop-blur-[10px]">
      <div className="mx-auto grid max-w-[1120px] grid-cols-[1fr_auto_1fr] items-center gap-3 px-6 py-5 max-[820px]:grid-cols-[1fr_1fr]">
        <Link className="inline-flex items-center no-underline text-[color:var(--text)]" to="/">
          <span className="font-[family-name:var(--ui-font)] font-semibold tracking-[-0.02em]">stylesense</span>
        </Link>

        <nav
          className="justify-self-center flex items-center gap-7 font-[family-name:var(--ui-font)] font-medium text-[color:var(--text)] max-[820px]:hidden"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              className="inline-flex items-center gap-2 no-underline text-inherit opacity-90 hover:opacity-100"
              href={item.href}
            >
              <span>{item.label}</span>
              {item.hasMenu ? (
                <svg className="h-4 w-4 opacity-70" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : null}
            </a>
          ))}
        </nav>

        <div className="justify-self-end inline-flex items-center gap-3.5">
          <ThemeToggle />
          <HeaderUser />
          <SignedOut>
            <Link
              className="inline-flex items-center gap-3 rounded-2xl bg-[color:var(--cta-primary-bg)] px-[22px] py-4 font-[family-name:var(--ui-font)] font-semibold text-[color:var(--cta-primary-fg)] no-underline shadow-[var(--shadow-strong)] hover:brightness-[1.04]"
              to="/sign-up"
            >
              <span>Sign up</span>
              <svg className="h-[18px] w-[18px]" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M8 5l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </SignedOut>
          <SignedIn>
            <Link
              className="inline-flex items-center gap-3 rounded-2xl bg-[color:var(--cta-primary-bg)] px-[22px] py-4 font-[family-name:var(--ui-font)] font-semibold text-[color:var(--cta-primary-fg)] no-underline shadow-[var(--shadow-strong)] hover:brightness-[1.04]"
              to="/dashboard"
            >
              <span>Dashboard</span>
              <svg className="h-[18px] w-[18px]" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M8 5l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </SignedIn>
        </div>
      </div>
    </header>
  )
}
