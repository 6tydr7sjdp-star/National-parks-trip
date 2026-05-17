import Link from 'next/link'
import styles from './GuestBanner.module.css'

export default function GuestBanner() {
  return (
    <div className={styles.banner} role="status">
      <p className={styles.text}>
        Public trip view - progress and general itinerary only. Lodging details and
        confirmations are hidden.
      </p>
      <Link href="/login" className={styles.link}>
        Family sign in
      </Link>
    </div>
  )
}
