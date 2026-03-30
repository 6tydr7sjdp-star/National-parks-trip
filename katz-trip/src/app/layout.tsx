import type { Metadata } from 'next'
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
      </body>
    </html>
  )
}
