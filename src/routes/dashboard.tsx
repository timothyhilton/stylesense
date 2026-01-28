import { getUserIdFn } from '@/lib/s3'
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/dashboard')({ component: DashboardPage })

function DashboardPage() {
  const [clerkServerUser, setClerkServerUser] = useState<boolean | undefined>()

  useEffect(() => {
    getUserIdFn()
      .then(user => setClerkServerUser(user.success))
  }, [])

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
              {clerkServerUser ? "yay" : "bruh"}
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
