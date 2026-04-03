import type { CSSProperties } from 'react'

/**
 * Short-wheelbase overland Sprinter–style van: high roof, compact cargo bay,
 * roof rack + light bar, side ladder, bumper + fogs, Mercedes star — facing right.
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
      <title>Short Sprinter-style van facing east</title>

      <ellipse cx="86" cy="88" rx="58" ry="5" fill="#1a2744" opacity="0.1" />

      {/* Wheels — closer together (short WB) */}
      <circle cx="50" cy="74" r="10" fill="#0d0d0d" stroke="#000" strokeWidth="1.1" />
      <circle cx="50" cy="74" r="6.2" fill="none" stroke="#4a4a4a" strokeWidth="1.7" />
      <circle cx="50" cy="74" r="2.8" fill="#2a2a2a" />
      <circle cx="106" cy="74" r="10" fill="#0d0d0d" stroke="#000" strokeWidth="1.1" />
      <circle cx="106" cy="74" r="6.2" fill="none" stroke="#4a4a4a" strokeWidth="1.7" />
      <circle cx="106" cy="74" r="2.8" fill="#2a2a2a" />

      <path
        d="M 18 72 L 154 72 L 158 78 L 14 78 Z"
        fill="#1a1e22"
        stroke="#0a0c0e"
        strokeWidth="0.85"
      />

      {/* Main body — shorter length */}
      <path
        d="M 22 72
           V 28
           H 100
           L 120 30
           L 142 38
           L 154 54
           L 158 64
           L 158 72
           H 22 Z"
        fill="#d4d8dc"
        stroke="#2a3238"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />

      {/* Roof rack — proportional to shorter roof */}
      <path
        d="M 26 24 H 104 V 30 H 26 Z"
        fill="#1a1d20"
        stroke="#0f1114"
        strokeWidth="0.95"
      />
      <path d="M 28 26 H 100" stroke="#3a4048" strokeWidth="0.5" opacity="0.7" />
      <path
        d="M 94 24 H 104 V 27 H 94 Z"
        fill="#f2f6fc"
        stroke="#a8b4c4"
        strokeWidth="0.55"
      />

      {/* Ladder */}
      <path
        d="M 34 32 V 70 M 40 32 V 70 M 34 40 H 40 M 34 50 H 40 M 34 60 H 40"
        stroke="#14181c"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      <rect x="24" y="42" width="9" height="7" rx="1" fill="#141a22" stroke="#0a0e12" strokeWidth="0.8" />

      {/* Single wide cargo window */}
      <rect x="52" y="40" width="34" height="14" rx="1.5" fill="#121820" stroke="#080c10" strokeWidth="1" />
      <rect x="58" y="43" width="22" height="6" rx="0.5" fill="#1c2838" opacity="0.48" />

      <path d="M 90 30 V 70" stroke="#252b30" strokeWidth="1.1" strokeLinecap="round" />

      {/* Cab */}
      <path
        d="M 104 34 L 124 36 L 128 50 L 102 50 Z"
        fill="#121820"
        stroke="#080c10"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path d="M 108 38 L 118 39 L 120 46 L 106 45 Z" fill="#1c2838" opacity="0.4" />

      <path
        d="M 126 34 L 140 39 L 142 52 L 128 50 Z"
        fill="#0e141a"
        stroke="#05080a"
        strokeWidth="1"
        strokeLinejoin="round"
      />

      <path
        d="M 140 40 L 150 42 L 152 56 L 142 54 Z"
        fill="#c8ccd0"
        stroke="#2a3238"
        strokeWidth="1"
        strokeLinejoin="round"
      />

      <path
        d="M 150 44 L 158 45 L 160 60 L 150 58 Z"
        fill="#1f2226"
        stroke="#101214"
        strokeWidth="0.8"
      />
      <circle cx="155" cy="52" r="2.8" fill="none" stroke="#c0c4c8" strokeWidth="0.85" />
      <path
        d="M 155 50 L 155 54 M 153 51 L 157 53 M 153 53 L 157 51"
        stroke="#e8eaec"
        strokeWidth="0.55"
        strokeLinecap="round"
      />

      <path
        d="M 144 58 L 164 59 L 166 74 L 142 72 Z"
        fill="#141618"
        stroke="#060708"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <rect x="150" y="63" width="11" height="2.5" rx="0.6" fill="#eef4ff" opacity="0.95" />
      <circle cx="146" cy="68" r="1.9" fill="#c2781a" stroke="#5c3a10" strokeWidth="0.5" />
      <circle cx="160" cy="68" r="1.9" fill="#c2781a" stroke="#5c3a10" strokeWidth="0.5" />

      <rect x="15" y="40" width="5" height="10" rx="1" fill="#2a1010" stroke="#180808" strokeWidth="0.55" />
      <rect x="16" y="41" width="3" height="3.5" rx="0.25" fill="#b02a24" />

      <path
        d="M 130 36 L 134 35 L 135 40 L 131 41 Z"
        fill="#7a8288"
        stroke="#3e454a"
        strokeWidth="0.55"
      />

      <text
        x="50"
        y="62"
        fill="#2e3640"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="5"
        fontWeight="600"
        letterSpacing="0.02em"
      >
        Katz Trip
      </text>
    </svg>
  )
}
