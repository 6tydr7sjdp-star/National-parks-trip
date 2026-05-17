import GuestBanner from '@/components/GuestBanner'
import Nav from '@/components/Nav'
import { TRIP_DATE_RANGE_LABEL } from '@/data/trip-meta'
import { isFamilySession } from '@/lib/auth'
import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'Katz Family Road Trip',
  description: `${TRIP_DATE_RANGE_LABEL} · Provo/Burbank · SLC → red rock → Tetons → Yellowstone`,
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const isFamily = await isFamilySession()

  return (
    <html lang="en">
      <body>
        <Nav isFamily={isFamily} />
        <main className="page">
          {!isFamily ? <GuestBanner /> : null}
          {children}
        </main>
        <footer className="site-footer">
          <Link href="/packing">Packing list</Link>
          <span aria-hidden> · </span>
          <Link href="/notes">Notes &amp; album</Link>
        </footer>
      </body>
    </html>
  )
}
