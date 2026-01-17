import { socialIconPath } from '../../lib/socialIcons'
import type { SocialIconName } from '../../lib/links'

export default function SocialLink({
  label,
  href,
  icon,
}: {
  label: string
  href: string
  icon: SocialIconName
}) {
  return (
    <a
      className="h-[34px] w-[34px] grid place-items-center rounded-full text-[color:var(--muted)] no-underline hover:bg-[color:var(--hover)] hover:text-[color:var(--text)]"
      href={href}
      aria-label={label}
    >
      <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d={socialIconPath(icon)} />
      </svg>
    </a>
  )
}
