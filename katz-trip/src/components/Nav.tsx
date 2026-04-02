'use client'
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
        Katz Trip <span>May 30 – June 12</span>
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
