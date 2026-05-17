'use client'

import NavAuth from '@/components/NavAuth'
import { TRIP_DATE_RANGE_LABEL } from '@/data/trip-meta'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const baseLinks = [{ href: '/', label: 'Trip' }]

export default function Nav({ isFamily }: { isFamily: boolean }) {
  const pathname = usePathname()
  const links = isFamily
    ? [...baseLinks, { href: '/itinerary', label: 'Itinerary' }]
    : baseLinks

  return (
    <nav className="nav">
      <div className="nav-brand">
        Katz Trip <span>{TRIP_DATE_RANGE_LABEL}</span>
        {isFamily ? <span className="nav-family-pill">Family</span> : null}
      </div>
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className={pathname === l.href ? 'active' : ''}>
              {l.label}
            </Link>
          </li>
        ))}
        <NavAuth isFamily={isFamily} />
      </ul>
    </nav>
  )
}
