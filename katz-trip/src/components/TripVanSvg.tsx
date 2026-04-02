import type { CSSProperties } from 'react'

/**
 * Side-profile camper inspired by Ram ProMaster / rental builds like Native Campervans:
 * tall box, short hood, dark glass band, minimal graphics, low-key sage accent.
 * Not an official logo — personal trip site illustration.
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
      viewBox="0 0 160 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <title>Native-style ProMaster camper van</title>

      {/* Ground shadow */}
      <ellipse cx="78" cy="71" rx="58" ry="4" fill="#1a2744" opacity="0.12" />

      {/* Roof & high-top */}
      <path
        d="M44 20h86v6H44z"
        fill="#d8d8d2"
        stroke="#2a2a2a"
        strokeWidth="1.2"
      />
      <rect x="98" y="16" width="18" height="8" rx="2" fill="#c8c8c2" stroke="#2a2a2a" strokeWidth="1" />

      {/* Main box body — ProMaster slab */}
      <path
        d="M36 26 L118 26 L132 26 Q134 26 134 28 L134 52 L134 56 Q134 60 130 60 L40 60 Q36 60 36 56 L36 30 Q36 26 40 26 Z"
        fill="#ecece8"
        stroke="#1f1f1f"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* Sage accent stripe (outdoorsy rental vibe, not a trademark) */}
      <path d="M42 44h88v3H42z" fill="#5c7a5c" opacity="0.88" />

      {/* Dark glass band — typical conversion windows */}
      <path
        d="M42 30h84v12H42z"
        fill="#1e2a32"
        stroke="#1a1a1a"
        strokeWidth="1.2"
      />
      <path d="M48 32h22v8H48z" fill="#2c3c48" opacity="0.55" />
      <path d="M118 32h6v8h-6z" fill="#2c3c48" opacity="0.4" />

      {/* Cab / short hood */}
      <path
        d="M36 38 L36 30 Q36 22 44 20 L52 20 L52 26 L40 26 Q36 26 36 30 Z"
        fill="#e4e4df"
        stroke="#1f1f1f"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M36 38 L24 40 L20 52 L36 52 Z"
        fill="#243038"
        stroke="#1a1a1a"
        strokeWidth="1.4"
        strokeLinejoin="round"
        opacity="0.95"
      />

      {/* Divider pillar */}
      <path d="M50 26v34" stroke="#1a1a1a" strokeWidth="1.4" strokeLinecap="round" />

      {/* Lower rocker */}
      <path
        d="M36 56 L130 56 L130 60 Q130 62 126 62 L40 62 Q36 62 36 60 Z"
        fill="#3a3a38"
      />

      {/* Wordmark hint — lowercase, quiet like their “no loud graphics” note */}
      <text
        x="62"
        y="51"
        fill="#3d5240"
        fontFamily="var(--font-body, 'DM Sans'), system-ui, sans-serif"
        fontSize="8.5"
        fontWeight="600"
        letterSpacing="0.02em"
      >
        native
      </text>

      {/* Wheels */}
      <circle cx="52" cy="62" r="9" fill="#252525" stroke="#1a1a1a" strokeWidth="1.6" />
      <circle cx="52" cy="62" r="3.5" fill="#4a4a4a" />
      <circle cx="96" cy="62" r="9" fill="#252525" stroke="#1a1a1a" strokeWidth="1.6" />
      <circle cx="96" cy="62" r="3.5" fill="#4a4a4a" />
      <circle cx="124" cy="62" r="9" fill="#252525" stroke="#1a1a1a" strokeWidth="1.6" />
      <circle cx="124" cy="62" r="3.5" fill="#4a4a4a" />

      {/* Barn-door seam */}
      <path d="M120 26v30" stroke="#b0b0a8" strokeWidth="1" strokeDasharray="2 3" opacity="0.9" />

      {/* Headlight */}
      <circle cx="22" cy="46" r="2.5" fill="#f5e6c8" stroke="#1a1a1a" strokeWidth="1" />
    </svg>
  )
}
