import type { CSSProperties } from 'react'

type Variant = 'departure' | 'return'

/**
 * Light, playful 1980s-inspired jet: pastels, chrome highlights, Memphis energy.
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
      ? 'Retro pastel jet leaving Burbank'
      : 'Retro pastel jet heading home'

  const wingAccent = variant === 'return' ? '#ffb74d' : '#7fdbda'

  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 128 68"
      overflow="visible"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden
    >
      <title>{title}</title>
      <defs>
        <linearGradient id="fuse80s" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff8fc" />
          <stop offset="45%" stopColor="#ffe4f3" />
          <stop offset="100%" stopColor="#d4f4ff" />
        </linearGradient>
        <linearGradient id="stripe80s" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff9ec8" />
          <stop offset="100%" stopColor="#ff7eb3" />
        </linearGradient>
      </defs>

      {/* Shift right so tail + sparkles stay inside when the SVG is flush-left on the strip */}
      <g transform="translate(14,36)">
        <g transform="rotate(-10 60 10)">
          {/* Playful vapor / sparkle — kept in positive x so outline isn’t clipped */}
          <circle cx="4" cy="18" r="2.5" fill="#fff59d" opacity="0.9" />
          <circle cx="0" cy="22" r="1.8" fill="#b2ebf2" opacity="0.85" />
          <path
            d="M 0 24 Q 4 21 8 24 Q 5 27 0 24"
            fill="#e1bee7"
            opacity="0.9"
          />

          {/* Main fuselage — soft jelly bean */}
          <path
            d="M 6 18 Q 6 10 18 8 H 80 Q 94 8 100 14 L 104 22 Q 104 32 92 34 H 22 Q 8 32 6 22 Z"
            fill="url(#fuse80s)"
            stroke="#ffffff"
            strokeWidth="1.85"
            strokeLinejoin="round"
          />
          <path
            d="M 12 22 H 86 Q 92 22 94 26 L 94 28 Q 88 26 14 26 Q 12 24 12 22 Z"
            fill="url(#stripe80s)"
            opacity="0.92"
          />

          {/* Wing — tropical teal / sunset */}
          <path
            d="M 42 32 L 54 48 H 80 L 64 32 Z"
            fill={wingAccent}
            stroke="#ffffff"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M 50 36 L 58 44" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />

          {/* Tail fin — sunshine yellow */}
          <path
            d="M 10 16 L 2 4 L 8 20 Z"
            fill="#fff176"
            stroke="#fdd835"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />

          {/* Cockpit bubble */}
          <path
            d="M 86 10 Q 94 10 98 14 L 96 24 Q 90 22 84 20 Q 82 14 86 10 Z"
            fill="#81d4fa"
            stroke="#ffffff"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <ellipse cx="92" cy="16" rx="3.5" ry="2.5" fill="#b3e5fc" opacity="0.7" />

          {/* Round "porthole" windows */}
          <circle cx="30" cy="16" r="3.2" fill="#4fc3f7" stroke="#ffffff" strokeWidth="1.1" />
          <circle cx="44" cy="15" r="3.2" fill="#4dd0e1" stroke="#ffffff" strokeWidth="1.1" />
          <circle cx="58" cy="14" r="3.2" fill="#64b5f6" stroke="#ffffff" strokeWidth="1.1" />

          {/* Engine pod — soft lavender */}
          <ellipse cx="58" cy="38" rx="7" ry="5" fill="#e1bee7" stroke="#ffffff" strokeWidth="1.3" />
          <ellipse cx="58" cy="38" rx="3.5" ry="2.5" fill="#ce93d8" opacity="0.6" />

          {/* Nose chrome ring */}
          <path
            d="M 98 18 Q 102 22 100 28"
            fill="none"
            stroke="#fce4ec"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      </g>
    </svg>
  )
}
