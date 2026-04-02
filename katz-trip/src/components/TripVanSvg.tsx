import type { CSSProperties } from 'react'

/**
 * White ProMaster-style camper profile inspired by Native Campervans’ fleet photos:
 * bright body, tinted glass band, low-profile roof hardware, minimal exterior text.
 * https://nativecampervans.com/
 */
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
      viewBox="0 0 170 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <title>White camper van (Native Campervans–style)</title>

      <ellipse cx="85" cy="78" rx="64" ry="5" fill="#1a2744" opacity="0.09" />

      {/* Roof slab + vent / Maxx-fan block */}
      <path
        d="M48 18h92v8H48z"
        fill="#fafaf8"
        stroke="#252525"
        strokeWidth="1.4"
      />
      <rect x="94" y="14" width="22" height="10" rx="2" fill="#efefec" stroke="#252525" strokeWidth="1.1" />

      {/* Cargo box (white) */}
      <rect
        x="44"
        y="24"
        width="94"
        height="32"
        rx="2.5"
        fill="#fafaf8"
        stroke="#1a1a1a"
        strokeWidth="2"
      />

      {/* Cab wedge + hood */}
      <path
        d="M44 24 L36 28 L28 42 L28 50 L44 50 Z"
        fill="#f4f4f0"
        stroke="#1a1a1a"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Windshield */}
      <path
        d="M44 24 L36 28 L30 40 L30 46 L40 46 L44 40 Z"
        fill="#1c2830"
        stroke="#141414"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M34 30 L38 28 L41 42 L32 42 Z" fill="#3a4f5c" opacity="0.35" />

      {/* Full-length tinted band — slider + galley windows */}
      <rect x="48" y="28" width="86" height="13" rx="1" fill="#1c2830" stroke="#101010" strokeWidth="1.2" />
      <rect x="52" y="30" width="34" height="9" rx="0.5" fill="#2d4250" opacity="0.3" />
      <rect x="96" y="30" width="34" height="9" rx="0.5" fill="#2d4250" opacity="0.2" />

      {/* Sliding door seam */}
      <path d="M78 28v13" stroke="#0a0a0a" strokeWidth="0.85" opacity="0.45" />

      {/* Belt line */}
      <path d="M46 43h92" stroke="#1a1a1a" strokeWidth="1.3" strokeLinecap="round" />

      {/* Rear door split */}
      <path d="M130 24v30" stroke="#bdbdb5" strokeWidth="1" strokeDasharray="2.5 3.5" />

      {/* Rocker panel */}
      <path
        d="M26 54h118v2q0 5 -4 5H30q-4 0 -4 -5z"
        fill="#e6e6e1"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Running board */}
      <rect x="54" y="58" width="32" height="2.5" rx="1" fill="#404040" opacity="0.85" />

      {/* Wheels */}
      <circle cx="42" cy="66" r="10" fill="#1e1e1e" stroke="#0a0a0a" strokeWidth="1.5" />
      <circle cx="42" cy="66" r="4.2" fill="#6a6a6a" />
      <circle cx="96" cy="66" r="10" fill="#1e1e1e" stroke="#0a0a0a" strokeWidth="1.5" />
      <circle cx="96" cy="66" r="4.2" fill="#6a6a6a" />
      <circle cx="134" cy="66" r="9.5" fill="#1e1e1e" stroke="#0a0a0a" strokeWidth="1.5" />
      <circle cx="134" cy="66" r="3.8" fill="#6a6a6a" />

      {/* Front corner / bumper + light */}
      <path
        d="M26 50 L26 54"
        stroke="#1a1a1a"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="20" y="44" width="6" height="3.5" rx="1" fill="#f8f6e8" stroke="#1a1a1a" strokeWidth="1" />
    </svg>
  )
}
