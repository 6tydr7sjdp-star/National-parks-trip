import type { CSSProperties } from 'react'

/**
 * 1970s full-size van side profile (think G-series / shag-wagon era): harvest gold,
 * faux-wood lower, chrome bumpers, round headlights, porthole windows — facing
 * right so the nose points along the road (left → right).
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
      <title>1970s-style van facing east</title>

      <ellipse cx="98" cy="86" rx="72" ry="5" fill="#1a2744" opacity="0.09" />

      {/* Rear wheels + front wheel (behind some body layers) */}
      <circle cx="52" cy="68" r="11" fill="#1a1a1a" stroke="#0a0a0a" strokeWidth="1.2" />
      <circle cx="52" cy="68" r="7.5" fill="none" stroke="#f0e6d4" strokeWidth="2" />
      <circle cx="52" cy="68" r="3.5" fill="#d4c4a8" stroke="#8a7a60" strokeWidth="0.5" />
      <circle cx="108" cy="68" r="11" fill="#1a1a1a" stroke="#0a0a0a" strokeWidth="1.2" />
      <circle cx="108" cy="68" r="7.5" fill="none" stroke="#f0e6d4" strokeWidth="2" />
      <circle cx="108" cy="68" r="3.5" fill="#d4c4a8" stroke="#8a7a60" strokeWidth="0.5" />
      <circle cx="156" cy="68" r="10.5" fill="#1a1a1a" stroke="#0a0a0a" strokeWidth="1.2" />
      <circle cx="156" cy="68" r="7" fill="none" stroke="#f0e6d4" strokeWidth="1.8" />
      <circle cx="156" cy="68" r="3.2" fill="#d4c4a8" stroke="#8a7a60" strokeWidth="0.5" />

      {/* Faux-wood panel + lower body (70s strip) */}
      <path
        d="M 24 50
           Q 38 46 52 50
           Q 80 44 108 50
           Q 130 46 148 52
           L 172 54
           L 172 74
           L 24 74 Z"
        fill="#5c3d2e"
        stroke="#3d2818"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* Fake wood grain lines */}
      <path d="M 28 58 H 138" stroke="#4a3020" strokeWidth="0.6" opacity="0.7" />
      <path d="M 32 64 H 132" stroke="#4a3020" strokeWidth="0.6" opacity="0.5" />
      <path d="M 30 70 H 128" stroke="#4a3020" strokeWidth="0.6" opacity="0.45" />

      {/* Cream roof / upper cap */}
      <path
        d="M 26 24
           Q 24 20 28 18
           L 158 14
           Q 172 14 176 22
           L 178 28
           L 26 30 Z"
        fill="#f2ead8"
        stroke="#2a2418"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />

      {/* Main harvest-gold body */}
      <path
        d="M 26 30
           L 178 28
           L 176 48
           L 172 50
           L 148 48
           Q 130 44 108 48
           Q 80 42 52 48
           Q 38 44 26 48 Z"
        fill="#c9a227"
        stroke="#2a2418"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      {/* Wavy 70s accent stripe */}
      <path
        d="M 30 40 Q 70 36 110 40 T 165 38"
        fill="none"
        stroke="#fff8e8"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M 32 43 Q 72 39 112 43 T 168 41"
        fill="none"
        stroke="#8b4513"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.35"
      />

      {/* Round “porthole” side windows */}
      <circle cx="58" cy="36" r="6.5" fill="#2a3540" stroke="#1a1a1a" strokeWidth="1.2" />
      <circle cx="58" cy="36" r="3" fill="#4a5c6c" opacity="0.4" />
      <circle cx="88" cy="36" r="6.5" fill="#2a3540" stroke="#1a1a1a" strokeWidth="1.2" />
      <circle cx="88" cy="36" r="3" fill="#4a5c6c" opacity="0.35" />
      <circle cx="118" cy="36" r="6.5" fill="#2a3540" stroke="#1a1a1a" strokeWidth="1.2" />
      <circle cx="118" cy="36" r="3" fill="#4a5c6c" opacity="0.3" />

      {/* Chrome window surrounds (hint) */}
      <circle cx="58" cy="36" r="7.5" fill="none" stroke="#a8a8a8" strokeWidth="0.8" opacity="0.6" />
      <circle cx="88" cy="36" r="7.5" fill="none" stroke="#a8a8a8" strokeWidth="0.8" opacity="0.55" />
      <circle cx="118" cy="36" r="7.5" fill="none" stroke="#a8a8a8" strokeWidth="0.8" opacity="0.5" />

      {/* Windshield — curved bubble */}
      <path
        d="M 158 16 Q 172 18 174 28 L 176 44 L 158 46 L 152 32 Z"
        fill="#1e2830"
        stroke="#0d0d0d"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M 162 22 L 170 24 L 168 40 L 158 38 Z" fill="#3d5060" opacity="0.35" />

      {/* Vertical grille / front face */}
      <path
        d="M 174 38 L 182 40 L 182 52 L 174 50 Z"
        fill="#2a2a2a"
        stroke="#111"
        strokeWidth="1"
      />
      <path d="M 176 41 V 49 M 178 41 V 49 M 180 41 V 49" stroke="#555" strokeWidth="0.6" />

      {/* Round sealed-beam headlights */}
      <circle cx="184" cy="42" r="4" fill="#fffef0" stroke="#1a1a1a" strokeWidth="1.1" />
      <circle cx="184" cy="50" r="4" fill="#fffef0" stroke="#1a1a1a" strokeWidth="1.1" />
      <circle cx="184" cy="42" r="1.8" fill="#e8e4c8" opacity="0.6" />
      <circle cx="184" cy="50" r="1.8" fill="#e8e4c8" opacity="0.6" />

      {/* Front chrome bumper (points right = direction of travel) */}
      <path
        d="M 172 54 L 188 56 L 188 68 L 172 66 Z"
        fill="#b8b8c0"
        stroke="#6a6a70"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M 175 58 H 186" stroke="#d8d8e0" strokeWidth="0.8" opacity="0.7" />

      {/* Rear vertical end + round taillights (back is left) */}
      <path
        d="M 24 24 L 24 74"
        stroke="#2a2418"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="22" cy="38" r="3.5" fill="#c42b1f" stroke="#5c1010" strokeWidth="0.8" />
      <circle cx="22" cy="48" r="3.5" fill="#f0c830" stroke="#8a7020" strokeWidth="0.8" />

      {/* Rear chrome bumper */}
      <path
        d="M 14 62 L 26 60 L 26 72 L 14 74 Z"
        fill="#b8b8c0"
        stroke="#6a6a70"
        strokeWidth="1"
      />

      {/* Side mirror blob */}
      <ellipse cx="150" cy="34" rx="3" ry="4" fill="#a0a0a8" stroke="#4a4a50" strokeWidth="0.8" />

      {/* Groovy script */}
      <text
        x="68"
        y="46"
        fill="#3d2810"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="6"
        fontStyle="italic"
      >
        Katz Trip
      </text>
    </svg>
  )
}
