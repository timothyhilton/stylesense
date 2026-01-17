import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import { Link } from '@tanstack/react-router'

export default function HeaderUser() {
  return (
    <>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        <Link
          to="/sign-in"
          className="font-[family-name:var(--ui-font)] font-medium text-[color:var(--text)] no-underline opacity-90 hover:opacity-100"
        >
          Sign in
        </Link>
      </SignedOut>
    </>
  )
}
