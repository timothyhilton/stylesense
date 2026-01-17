import { socials } from '../../lib/links'
import SocialLink from '../ui/SocialLink'

export default function LandingHero() {
  return (
    <main className="px-6 pt-[86px] pb-[58px]">
      <div className="mx-auto max-w-[980px] text-center">
        <h1
          className="m-0 font-normal tracking-[-0.04em] text-[color:var(--text)] leading-[0.95] text-[clamp(64px,8vw,126px)]"
          style={{ fontFamily: 'var(--display-font)' }}
        >
          <span className="block">try on outfits</span>
          <span className="block">
            with <span className="italic text-[color:var(--accent)]">ai</span>
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-[720px] text-base leading-relaxed font-medium text-[color:var(--muted)]">
          Upload photos of your clothes, generate realistic try-ons, and ask questions about your wardrobe. Find what
          matches, what’s missing, and what to wear next.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            className="inline-flex items-center gap-3 rounded-2xl bg-[color:var(--cta-primary-bg)] px-[22px] py-4 font-semibold text-[color:var(--cta-primary-fg)] no-underline shadow-[var(--shadow-strong)] hover:brightness-[1.04]"
            href="#try-on"
          >
            <span>Start a try-on</span>
            <svg className="h-[18px] w-[18px]" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M8 5l5 5-5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            className="inline-flex items-center gap-2.5 rounded-2xl border border-[color:var(--border)] bg-[color:var(--cta-secondary-bg)] px-[22px] py-4 font-semibold text-[color:var(--text)] no-underline hover:bg-[color:var(--cta-secondary-bg-hover)]"
            href="#wardrobe"
          >
            <span>Ask your wardrobe</span>
          </a>
        </div>

        <div className="mt-9 flex justify-center gap-3.5" aria-label="Social links">
          {socials.map((s) => (
            <SocialLink key={s.label} label={s.label} href={s.href} icon={s.icon} />
          ))}
        </div>

        <section
          id="try-on"
          className="mx-auto mt-11 max-w-[860px] rounded-[18px] border border-[color:var(--border)] bg-[color-mix(in_srgb,var(--bg)_82%,transparent)] px-[18px] py-[18px] text-left backdrop-blur-[8px]"
        >
          <h2 className="m-0 font-bold tracking-[-0.02em] text-[color:var(--text)]">Try-On Studio</h2>
          <p className="mt-2.5 mb-0 font-medium leading-relaxed text-[color:var(--muted)]">
            Upload a garment photo, pick your model photo, and generate variations. Keep your favorites, compare
            side-by-side, and export ready-to-share images.
          </p>
        </section>

        <section
          id="wardrobe"
          className="mx-auto mt-11 max-w-[860px] rounded-[18px] border border-[color:var(--border)] bg-[color-mix(in_srgb,var(--bg)_82%,transparent)] px-[18px] py-[18px] text-left backdrop-blur-[8px]"
        >
          <h2 className="m-0 font-bold tracking-[-0.02em] text-[color:var(--text)]">Wardrobe Q&amp;A</h2>
          <p className="mt-2.5 mb-0 font-medium leading-relaxed text-[color:var(--muted)]">
            Ask: “What can I wear with these pants?”, “Build me a capsule for a trip”, or “What am I missing for winter?”
            It answers using what you’ve uploaded.
          </p>
        </section>

        <section
          id="pricing"
          className="mx-auto mt-11 max-w-[860px] rounded-[18px] border border-[color:var(--border)] bg-[color-mix(in_srgb,var(--bg)_82%,transparent)] px-[18px] py-[18px] text-left backdrop-blur-[8px]"
        >
          <h2 className="m-0 font-bold tracking-[-0.02em] text-[color:var(--text)]">Pricing</h2>
          <p className="mt-2.5 mb-0 font-medium leading-relaxed text-[color:var(--muted)]">
            Simple credits for try-ons. Unlimited wardrobe questions. Upgrade when you’re ready.
          </p>
        </section>
      </div>
    </main>
  )
}
