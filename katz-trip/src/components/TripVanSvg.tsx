import type { CSSProperties } from 'react'

/**
 * Mercedes Sprinter–class high-roof van side profile: tall box, short nose,
 * rectangular glass, sliding-door rail — facing right along the road.
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
      viewBox="0 0 200 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <title>Sprinter-style van facing east</title>

      <ellipse cx="98" cy="86" rx="72" ry="5" fill="#1a2744" opacity="0.09" />

      {/* Wheels — rear slightly inboard of tall body */}
      <circle cx="46" cy="72" r="10.5" fill="#141414" stroke="#0a0a0a" strokeWidth="1" />
      <circle cx="46" cy="72" r="6.5" fill="none" stroke="#6b6b6b" strokeWidth="1.6" />
      <circle cx="46" cy="72" r="2.8" fill="#3a3a3a" />
      <circle cx="124" cy="72" r="10.5" fill="#141414" stroke="#0a0a0a" strokeWidth="1" />
      <circle cx="124" cy="72" r="6.5" fill="none" stroke="#6b6b6b" strokeWidth="1.6" />
      <circle cx="124" cy="72" r="2.8" fill="#3a3a3a" />

      {/* Rocker / side skirt */}
      <path
        d="M 18 68 H 168 L 172 74 H 14 Z"
        fill="#2a2f38"
        stroke="#1a1e24"
        strokeWidth="0.8"
      />

      {/* Main body — tall slab */}
      <path
        d="M 22 70
           V 30
           H 132
           L 154 32
           L 170 42
           L 176 58
           L 176 70
           H 22 Z"
        fill="#eef1f4"
        stroke="#1e252c"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />

      {/* Roof edge highlight */}
      <path
        d="M 24 30 H 130 L 151 31"
        stroke="#ffffff"
        strokeWidth="1.2"
        opacity="0.85"
        strokeLinecap="round"
      />

      {/* Cargo side windows */}
      <rect x="34" y="38" width="22" height="14" rx="1.5" fill="#1a2430" stroke="#0d1218" strokeWidth="1" />
      <rect x="38" y="41" width="14" height="6" rx="0.5" fill="#2d3d52" opacity="0.45" />
      <rect x="62" y="38" width="22" height="14" rx="1.5" fill="#1a2430" stroke="#0d1218" strokeWidth="1" />
      <rect x="66" y="41" width="14" height="6" rx="0.5" fill="#2d3d52" opacity="0.4" />
      <rect x="90" y="38" width="22" height="14" rx="1.5" fill="#1a2430" stroke="#0d1218" strokeWidth="1" />
      <rect x="94" y="41" width="14" height="6" rx="0.5" fill="#2d3d52" opacity="0.35" />

      {/* Sliding door seam + rail */}
      <path
        d="M 116 32 V 68"
        stroke="#1e252c"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M 118 66 H 128"
        stroke="#4a5560"
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* Cab side glass */}
      <path
        d="M 134 34 L 150 36 L 154 50 L 132 50 Z"
        fill="#1a2430"
        stroke="#0d1218"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path d="M 138 38 L 147 39 L 149 46 L 136 45 Z" fill="#2d4055" opacity="0.35" />

      {/* Windshield — nearly vertical */}
      <path
        d="M 152 34 L 166 40 L 168 56 L 156 52 Z"
        fill="#152028"
        stroke="#0a0e12"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path d="M 156 40 L 163 42 L 164 50 L 158 48 Z" fill="#253648" opacity="0.3" />

      {/* Short hood */}
      <path
        d="M 166 40 L 178 44 L 180 58 L 168 56 Z"
        fill="#dfe3e8"
        stroke="#1e252c"
        strokeWidth="1"
        strokeLinejoin="round"
      />

      {/* Grille */}
      <path
        d="M 178 46 L 186 48 L 186 62 L 178 60 Z"
        fill="#252a30"
        stroke="#12151a"
        strokeWidth="0.8"
      />
      <path d="M 180 50 H 184 M 180 54 H 184 M 180 58 H 184" stroke="#5a6570" strokeWidth="0.65" />

      {/* Headlamp cluster */}
      <rect x="184" y="48" width="5" height="7" rx="1" fill="#f4f6f8" stroke="#1a1a1a" strokeWidth="0.85" />
      <rect x="185" y="50" width="2.5" height="3" rx="0.4" fill="#dde2e8" />

      {/* Front bumper step */}
      <path
        d="M 172 64 L 190 66 L 190 74 L 170 72 Z"
        fill="#c5cad1"
        stroke="#6a7078"
        strokeWidth="1"
        strokeLinejoin="round"
      />

      {/* Rear vertical + taillamp */}
      <path d="M 22 30 V 70" stroke="#1e252c" strokeWidth="2" strokeLinecap="round" />
      <rect x="15" y="38" width="5" height="10" rx="1" fill="#3a1818" stroke="#241010" strokeWidth="0.6" />
      <rect x="16" y="39" width="3" height="3" rx="0.3" fill="#c43a2e" />

      {/* Mirror */}
      <path
        d="M 158 36 L 162 34 L 164 40 L 160 42 Z"
        fill="#9aa3aa"
        stroke="#5a6168"
        strokeWidth="0.6"
      />

      {/* Subtle side rub stripe */}
      <path
        d="M 26 58 H 112"
        stroke="#c8cdd4"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.9"
      />

      <text
        x="52"
        y="56"
        fill="#3d4854"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="5.5"
        fontWeight="600"
        letterSpacing="0.02em"
      >
        Katz Trip
      </text>
    </svg>
  )
}
