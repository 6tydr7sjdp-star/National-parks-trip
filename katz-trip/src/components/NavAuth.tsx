'use client'

import { useRouter } from 'next/navigation'

export default function NavAuth({ isFamily }: { isFamily: boolean }) {
  const router = useRouter()

  async function signOut() {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/')
    router.refresh()
  }

  if (!isFamily) return null

  return (
    <li>
      <button type="button" className="nav-auth-btn" onClick={signOut}>
        Sign out
      </button>
    </li>
  )
}
