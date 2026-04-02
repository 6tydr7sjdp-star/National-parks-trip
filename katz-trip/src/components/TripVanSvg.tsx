import type { CSSProperties } from 'react'

/**
 * Matches Native Campervans fleet look: white high-roof ProMaster, heavy matte-black
 * lower cladding + wheel arches, steel wheels / silver caps, solid white cargo shell,
 * cab glass only, slider seam, small NATIVE mountain badge.
 * Ref: https://nativecampervans.com/
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
      viewBox="0 0 186 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <title>White ProMaster camper (Native-style)</title>

      <ellipse cx="92" cy="82" rx="68" ry="5.5" fill="#1a2744" opacity="0.08" />

      {/* Matte black lower cladding + arch dips over wheels */}
      <path
        d="M 18 52
           L 36 52
           Q 46 68 58 52
           L 88 52
           Q 100 68 112 52
           L 128 52
           Q 138 68 150 52
           L 162 52
           L 162 78
           L 18 78 Z"
        fill="#2d2d2d"
        stroke="#161616"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />

      {/* Front bumper (black plastic) */}
      <path d="M 14 48 L14 76 L26 76 L26 52 Z" fill="#242424" stroke="#111" strokeWidth="1" />

      {/* High roof (white) */}
      <path
        d="M 44 14 H 144 L 152 16 V 20 H 46 Z"
        fill="#ffffff"
        stroke="#1f1f1f"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <rect x="98" y="10" width="26" height="11" rx="2" fill="#ecece8" stroke="#252525" strokeWidth="1.1" />

      {/* Solid white cargo — no windows rear of slider (per Native builds) */}
      <rect
        x="80"
        y="20"
        width="72"
        height="30"
        fill="#ffffff"
        stroke="#1f1f1f"
        strokeWidth="1.8"
      />

      {/* Cab + front door (white) — everything forward of slider */}
      <path
        d="M 80 20 L 46 20 L 32 26 L 22 42 L 20 52 L 80 48 Z"
        fill="#ffffff"
        stroke="#1f1f1f"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* Windshield */}
      <path
        d="M 80 20 L 46 20 L 34 26 L 28 38 L 28 45 L 74 44 L 80 36 Z"
        fill="#1a242c"
        stroke="#0a0a0a"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M 42 22 L 52 20 L 62 38 L 36 36 Z" fill="#344854" opacity="0.32" />

      {/* Script name on front door (white panel, below windshield) */}
      <text
        x="54"
        y="45"
        fill="#1a1a1a"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="5"
        fontStyle="italic"
      >
        Katz Trip
      </text>

      {/* Sliding door seam */}
      <path d="M 80 20 V 48" stroke="#a8a89e" strokeWidth="1.4" />
      <path d="M 81 20 V 48" stroke="#ffffff" strokeWidth="0.45" opacity="0.55" />

      {/* Rear barn doors */}
      <path d="M 144 20 V 48" stroke="#bdbdb5" strokeWidth="1" strokeDasharray="2.5 3" />

      {/* NATIVE badge: mountain + word (rear panel) */}
      <g transform="translate(108, 26)" aria-hidden="true">
        <rect x="0" y="0" width="40" height="12" rx="1.5" fill="#fff" stroke="#1a1a1a" strokeWidth="0.9" />
        <path
          d="M 3.5 9 L 7 2.5 L 10 5.5 L 13.5 1.5 L 17.5 9 Z"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="0.8"
          strokeLinejoin="round"
        />
        <text
          x="20"
          y="8.5"
          fill="#1a1a1a"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="5.5"
          fontWeight="700"
          letterSpacing="0.06em"
        >
          NATIVE
        </text>
      </g>

      {/* Black steel wheels + chrome/silver hubcaps */}
      <circle cx="46" cy="67" r="11" fill="#121212" stroke="#050505" strokeWidth="1.5" />
      <circle cx="46" cy="67" r="3.8" fill="#d4d4d0" stroke="#9c9c98" strokeWidth="0.55" />
      <circle cx="100" cy="67" r="11" fill="#121212" stroke="#050505" strokeWidth="1.5" />
      <circle cx="100" cy="67" r="3.8" fill="#d4d4d0" stroke="#9c9c98" strokeWidth="0.55" />
      <circle cx="140" cy="67" r="10.5" fill="#121212" stroke="#050505" strokeWidth="1.5" />
      <circle cx="140" cy="67" r="3.5" fill="#d4d4d0" stroke="#9c9c98" strokeWidth="0.55" />

      {/* Headlight */}
      <rect x="12" y="44" width="6" height="4.5" rx="1.2" fill="#f7f4e4" stroke="#1a1a1a" strokeWidth="1" />
    </svg>
  )
}
