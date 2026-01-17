export const navItems = [
  { label: 'Try-On Studio', href: '#try-on', hasMenu: true },
  { label: 'Wardrobe Q&A', href: '#wardrobe', hasMenu: true },
  { label: 'Pricing', href: '#pricing', hasMenu: false }
] as const

export const socials = [
  { label: 'GitHub', href: '#', icon: 'github' },
  { label: 'X', href: '#', icon: 'x' },
  { label: 'Discord', href: '#', icon: 'discord' }
] as const

export type SocialIconName = (typeof socials)[number]['icon']
