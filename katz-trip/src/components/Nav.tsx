'use client'
import { TRIP_DATE_RANGE_LABEL } from '@/data/trip'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Trip' },
  { href: '/itinerary', label: 'Itinerary' },
]

export default function Nav() {
  const pathname = usePathname()
  return (
    <nav className="nav">
      <div className="nav-brand">
        Katz Trip <span>{TRIP_DATE_RANGE_LABEL}</span>
      </div>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l.href}>
            <Link href={l.href} className={pathname === l.href ? 'active' : ''}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
