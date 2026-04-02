import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Katz Family Road Trip',
  description: 'May 30 – June 12 · SLC → Bryce → Capitol Reef → Moab → Tetons → Yellowstone',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="page">{children}</main>
        <footer className="site-footer">
          <Link href="/packing">Packing list</Link>
          <span aria-hidden> · </span>
          <Link href="/notes">Notes &amp; album</Link>
        </footer>
      </body>
    </html>
  )
}
