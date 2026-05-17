import Link from 'next/link'
import styles from './SecretDogLogin.module.css'

/** Discrete link to /login; looks like a harmless pet doodle. */
export default function SecretDogLogin() {
  return (
    <Link
      href="/login"
      className={styles.btn}
      aria-label="Open"
      title=""
    >
      <svg
        className={styles.dog}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <ellipse cx="32" cy="38" rx="18" ry="14" fill="#c4a574" />
        <ellipse cx="32" cy="36" rx="14" ry="10" fill="#e8d4b8" />
        <circle cx="32" cy="22" r="14" fill="#c4a574" />
        <circle cx="32" cy="24" r="11" fill="#e8d4b8" />
        <ellipse cx="22" cy="14" rx="6" ry="9" fill="#a67c52" transform="rotate(-25 22 14)" />
        <ellipse cx="42" cy="14" rx="6" ry="9" fill="#a67c52" transform="rotate(25 42 14)" />
        <circle cx="28" cy="22" r="2.2" fill="#3d2914" />
        <circle cx="36" cy="22" r="2.2" fill="#3d2914" />
        <ellipse cx="32" cy="28" rx="3" ry="2" fill="#8b6914" />
        <path
          d="M18 48c-4 6-2 12 6 12h16c8 0 10-6 6-12"
          stroke="#a67c52"
          strokeWidth="2"
          fill="#c4a574"
        />
        <ellipse cx="24" cy="52" rx="3" ry="2" fill="#e8d4b8" />
        <ellipse cx="40" cy="52" rx="3" ry="2" fill="#e8d4b8" />
      </svg>
    </Link>
  )
}
