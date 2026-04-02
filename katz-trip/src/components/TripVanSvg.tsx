import type { CSSProperties } from 'react'

/** Playful retro camper van — inline SVG, no external asset */
export default function TripVanSvg({
  className,
  style,
}: {
  className?: string
  style?: CSSProperties
}) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 120 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M8 38h62c2 0 4 1 5 3l10 18c1 2 3 3 5 3h22c3 0 5-2 5-5V42c0-2-2-4-4-4H92"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 38V28c0-3 3-6 6-6h38c4 0 7 3 8 7l4 9h16"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M52 16 L68 22 L76 38"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
      <circle cx="28" cy="52" r="10" fill="var(--sand-dark, #f5ead8)" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="28" cy="52" r="4" fill="var(--navy, #1a2744)" opacity="0.35" />
      <circle cx="72" cy="52" r="10" fill="var(--sand-dark, #f5ead8)" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="72" cy="52" r="4" fill="var(--navy, #1a2744)" opacity="0.35" />
      <circle cx="96" cy="52" r="9" fill="var(--sand-dark, #f5ead8)" stroke="currentColor" strokeWidth="2.2" />
      <path d="M18 24h22v10H18z" fill="var(--sky-bg, #e8edf8)" stroke="currentColor" strokeWidth="2" />
      <path
        d="M38 10c3-2 8-1 10 2l6 14H40l-4-10c-1-3 1-5 4-6h-2z"
        fill="var(--gold, #c8a050)"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </svg>
  )
}
