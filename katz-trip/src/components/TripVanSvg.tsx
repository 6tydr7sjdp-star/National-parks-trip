import type { CSSProperties } from 'react'

/**
 * Overland / adventure Sprinter-class van: high-roof silver body, full-length roof rack
 * with forward light bar, side ladder, lifted clearance, off-road bumper and fogs,
 * Mercedes star — side profile facing right.
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
      <title>Overland Sprinter-style van facing east</title>

      <ellipse cx="98" cy="88" rx="76" ry="5.5" fill="#1a2744" opacity="0.1" />

      {/* Wheels — larger off-road tires, lifted */}
      <circle cx="48" cy="74" r="12" fill="#0d0d0d" stroke="#000" strokeWidth="1.2" />
      <circle cx="48" cy="74" r="7.5" fill="none" stroke="#4a4a4a" strokeWidth="2" />
      <circle cx="48" cy="74" r="3.5" fill="#2a2a2a" />
      <circle cx="126" cy="74" r="12" fill="#0d0d0d" stroke="#000" strokeWidth="1.2" />
      <circle cx="126" cy="74" r="7.5" fill="none" stroke="#4a4a4a" strokeWidth="2" />
      <circle cx="126" cy="74" r="3.5" fill="#2a2a2a" />

      {/* Rocker / black trim */}
      <path
        d="M 16 72 L 174 72 L 178 78 L 12 78 Z"
        fill="#1a1e22"
        stroke="#0a0c0e"
        strokeWidth="0.9"
      />

      {/* Body — silver */}
      <path
        d="M 20 72
           V 28
           H 128
           L 152 30
           L 170 40
           L 176 56
           L 176 72
           H 20 Z"
        fill="#d4d8dc"
        stroke="#2a3238"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />

      {/* Roof rack platform */}
      <path
        d="M 26 24 H 132 V 30 H 26 Z"
        fill="#1a1d20"
        stroke="#0f1114"
        strokeWidth="1"
      />
      <path d="M 28 26 H 128" stroke="#3a4048" strokeWidth="0.5" opacity="0.7" />
      {/* Rack LED bar — front lip */}
      <path
        d="M 120 24 H 132 V 27 H 120 Z"
        fill="#f2f6fc"
        stroke="#a8b4c4"
        strokeWidth="0.6"
      />

      {/* Side ladder (rear of cargo area) */}
      <path
        d="M 36 32 V 70 M 42 32 V 70 M 36 38 H 42 M 36 48 H 42 M 36 58 H 42"
        stroke="#14181c"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* Bunk / small rear window */}
      <rect x="24" y="42" width="10" height="8" rx="1" fill="#141a22" stroke="#0a0e12" strokeWidth="0.9" />

      {/* Cargo windows — tinted */}
      <rect x="56" y="40" width="20" height="14" rx="1.5" fill="#121820" stroke="#080c10" strokeWidth="1" />
      <rect x="60" y="43" width="12" height="6" rx="0.5" fill="#1c2838" opacity="0.5" />
      <rect x="82" y="40" width="20" height="14" rx="1.5" fill="#121820" stroke="#080c10" strokeWidth="1" />
      <rect x="86" y="43" width="12" height="6" rx="0.5" fill="#1c2838" opacity="0.45" />

      {/* Sliding door gap */}
      <path d="M 104 30 V 70" stroke="#252b30" strokeWidth="1.2" strokeLinecap="round" />

      {/* Cab glass */}
      <path
        d="M 130 34 L 148 36 L 152 52 L 128 52 Z"
        fill="#121820"
        stroke="#080c10"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path d="M 134 38 L 144 39 L 146 48 L 132 47 Z" fill="#1c2838" opacity="0.4" />

      {/* Windshield */}
      <path
        d="M 150 34 L 166 40 L 168 56 L 154 52 Z"
        fill="#0e141a"
        stroke="#05080a"
        strokeWidth="1"
        strokeLinejoin="round"
      />

      {/* Short hood */}
      <path
        d="M 166 40 L 176 43 L 178 58 L 168 56 Z"
        fill="#c8ccd0"
        stroke="#2a3238"
        strokeWidth="1"
        strokeLinejoin="round"
      />

      {/* Grille + Mercedes star */}
      <path
        d="M 176 46 L 184 47 L 184 64 L 176 62 Z"
        fill="#1f2226"
        stroke="#101214"
        strokeWidth="0.85"
      />
      <circle cx="180" cy="54" r="3.2" fill="none" stroke="#c0c4c8" strokeWidth="0.9" />
      <path
        d="M 180 51.2 L 180 56.8 M 177.4 52.8 L 182.6 55.2 M 177.4 55.2 L 182.6 52.8"
        stroke="#e8eaec"
        strokeWidth="0.65"
        strokeLinecap="round"
      />

      {/* Black off-road bumper */}
      <path
        d="M 168 60 L 192 62 L 194 76 L 166 74 Z"
        fill="#141618"
        stroke="#060708"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      {/* Bumper center LED */}
      <rect x="176" y="65" width="14" height="3" rx="0.8" fill="#eef4ff" opacity="0.95" />
      {/* Amber fogs */}
      <circle cx="170" cy="70" r="2.2" fill="#c2781a" stroke="#5c3a10" strokeWidth="0.6" />
      <circle cx="188" cy="70" r="2.2" fill="#c2781a" stroke="#5c3a10" strokeWidth="0.6" />

      {/* Rear lamp */}
      <rect x="13" y="40" width="5" height="11" rx="1" fill="#2a1010" stroke="#180808" strokeWidth="0.6" />
      <rect x="14" y="41" width="3" height="4" rx="0.3" fill="#b02a24" />

      {/* Mirror */}
      <path
        d="M 156 36 L 160 34 L 162 42 L 158 44 Z"
        fill="#7a8288"
        stroke="#3e454a"
        strokeWidth="0.6"
      />

      <text
        x="58"
        y="62"
        fill="#2e3640"
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
