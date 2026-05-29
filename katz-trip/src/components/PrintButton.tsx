'use client'

import styles from './PrintButton.module.css'

export default function PrintButton() {
  return (
    <button
      type="button"
      className={styles.btn}
      onClick={() => window.print()}
    >
      Print / Save as PDF
    </button>
  )
}
