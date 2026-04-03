import type { CSSProperties } from 'react'

type Variant = 'departure' | 'return'

/**
 * Side-profile airliner, pitched nose-up — faces right (direction of travel on the strip).
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
      viewBox="0 0 120 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <title>{title}</title>
      {/* Pitched for takeoff; origin ~fuselage center */}
      <g transform="translate(8,44) rotate(-14)">
        {/* Fuselage */}
        <path
          d="M 4 8 Q 4 4 14 2 H 78 Q 88 2 94 8 L 96 12 Q 96 16 88 18 H 16 Q 6 16 4 10 Z"
          fill="#e8eef5"
          stroke="#1e2a3a"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        {/* Cockpit glass */}
        <path
          d="M 82 3 L 92 6 L 90 14 L 80 12 Z"
          fill="#2a3d52"
          stroke="#152028"
          strokeWidth="0.8"
        />
        {/* Wing */}
        <path
          d="M 38 16 L 52 28 H 68 L 56 16 Z"
          fill="#cfd8e4"
          stroke="#1e2a3a"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        {/* Horizontal stabilizer */}
        <path
          d="M 8 10 L 4 14 H 20 L 16 10 Z"
          fill="#b8c4d4"
          stroke="#1e2a3a"
          strokeWidth="0.9"
          strokeLinejoin="round"
        />
        {/* Engines */}
        <ellipse cx="52" cy="20" rx="5" ry="3.5" fill="#3a4555" stroke="#222" strokeWidth="0.8" />
        <ellipse cx="52" cy="20" rx="2.5" ry="1.8" fill="#252b35" />
        {/* Tail fin */}
        <path
          d="M 12 8 L 6 0 L 10 8 Z"
          fill="#dce4ee"
          stroke="#1e2a3a"
          strokeWidth="0.9"
          strokeLinejoin="round"
        />
        {/* Windows */}
        <path
          d="M 28 5 H 72"
          stroke="#1a2432"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeDasharray="2 4"
          opacity="0.55"
        />
      </g>
    </svg>
  )
}
