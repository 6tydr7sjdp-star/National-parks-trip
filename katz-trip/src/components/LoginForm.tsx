'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent, useState } from 'react'
import styles from './LoginForm.module.css'

export default function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const next = searchParams.get('next') || '/'
  const [passcode, setPasscode] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passcode }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error ?? 'Sign in failed')
        return
      }
      router.push(next)
      router.refresh()
    } catch {
      setError('Could not reach the server')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label className={styles.label} htmlFor="passcode">
        Family passcode
      </label>
      <input
        id="passcode"
        className={styles.input}
        type="password"
        autoComplete="current-password"
        value={passcode}
        onChange={(e) => setPasscode(e.target.value)}
        placeholder="Enter passcode"
        required
      />
      {error ? <p className={styles.error}>{error}</p> : null}
      <button className={styles.btn} type="submit" disabled={loading}>
        {loading ? 'Signing in...' : 'Sign in as family'}
      </button>
    </form>
  )
}
