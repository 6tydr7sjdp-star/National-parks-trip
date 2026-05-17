import LoginForm from '@/components/LoginForm'
import { isFamilySession } from '@/lib/auth'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { Suspense } from 'react'
import styles from './page.module.css'

export default async function LoginPage() {
  if (await isFamilySession()) redirect('/')

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Enter passcode</h1>
      <Suspense fallback={<p className={styles.sub}>Loading...</p>}>
        <LoginForm />
      </Suspense>
      <p className={styles.back}>
        <Link href="/">Back</Link>
      </p>
    </div>
  )
}
