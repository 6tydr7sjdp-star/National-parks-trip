import Image from 'next/image'
import Link from 'next/link'
import styles from './SecretDogLogin.module.css'

/** Discrete link to /login; looks like a harmless pet photo. */
export default function SecretDogLogin() {
  return (
    <Link
      href="/login"
      className={styles.btn}
      aria-label="Open"
      title=""
    >
      <Image
        src="/dog-login.png"
        alt=""
        fill
        sizes="(max-width: 600px) 48px, 52px"
        className={styles.photo}
        aria-hidden
      />
    </Link>
  )
}
