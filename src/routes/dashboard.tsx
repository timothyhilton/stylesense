import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({ component: DashboardPage })

function DashboardPage() {
  return (
    <>
      <SignedIn>
        <main className="px-6 py-12">
          <div className="mx-auto max-w-[1120px]">
            <h1
              className="text-3xl font-semibold tracking-[-0.02em] text-[color:var(--text)]"
              style={{ fontFamily: 'var(--display-font)' }}
            >
              Dashboard
            </h1>
          </div>
        </main>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  )
}
