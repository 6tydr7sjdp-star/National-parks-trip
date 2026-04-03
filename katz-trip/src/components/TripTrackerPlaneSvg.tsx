import type { CSSProperties } from 'react'

type Variant = 'departure' | 'return'

/**
 * Bold side-profile jet, nose-up — fits viewBox cleanly, reads on light backgrounds.
 */
export default function TripTrackerPlaneSvg({
  className,
  style,
  variant = 'departure',
}: {
  className?: string
  style?: CSSProperties
  variant?: Variant
}) {
  const title =
    variant === 'departure'
      ? 'Commercial jet preparing for takeoff'
      : 'Commercial jet awaiting takeoff'

  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 128 64"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden
    >
      <title>{title}</title>
      <g transform="translate(4,36)">
        <g transform="rotate(-12 56 8)">
          {/* Fuselage */}
          <path
            d="M 8 10 L 88 6 Q 98 6 104 12 L 106 18 Q 106 24 96 26 L 12 28 Q 4 26 4 18 Z"
            fill="#2a3f5c"
            stroke="#152538"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          {/* Highlight */}
          <path
            d="M 14 12 L 80 9 Q 90 9 96 14 L 97 17 Q 96 14 90 12 L 16 15 Z"
            fill="#ffffff"
            opacity="0.22"
          />
          {/* Windows */}
          <path
            d="M 28 10 H 72"
            stroke="#8cb4d8"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeDasharray="3 5"
            opacity="0.9"
          />
          {/* Wing */}
          <path
            d="M 44 26 L 56 40 H 76 L 62 26 Z"
            fill="#1e3248"
            stroke="#152538"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          {/* Tail */}
          <path
            d="M 12 12 L 4 2 L 10 14 Z"
            fill="#243752"
            stroke="#152538"
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
          {/* Cockpit */}
          <path
            d="M 92 8 L 102 10 L 100 20 L 90 18 Z"
            fill="#0f1824"
            stroke="#152538"
            strokeWidth="1"
          />
          {/* Engine */}
          <ellipse cx="58" cy="32" rx="6" ry="4" fill="#1a2838" stroke="#0d121a" strokeWidth="1" />
        </g>
      </g>
    </svg>
  )
}
