'use client'

import homeStyles from '@/app/page.module.css'
import type { Day } from '@/data/trip'
import { useTripDays } from '@/hooks/useTripDays'
import Link from 'next/link'

export default function HomeDayGrid({ serverDays }: { serverDays: Day[] }) {
  const { days } = useTripDays(serverDays)

  return (
    <section className={homeStyles.gridSection}>
      <h2 className={homeStyles.sectionTitle}>All Days</h2>
      <p className={homeStyles.dayGridMeta}>
        <Link href="/itinerary/edit" className={homeStyles.inlineLink}>
          Edit itinerary
        </Link>
        <span className={homeStyles.dayGridMetaSep}>·</span>
        <span>saves on this device</span>
      </p>
      <div className={homeStyles.dayGrid}>
        {days.map((d: Day, i: number) => (
          <Link
            key={d.id}
            href={`/itinerary#day-${d.id}`}
            className={homeStyles.dayTile}
            style={{ animationDelay: `${i * 30}ms` }}
          >
            <div className={homeStyles.dayTileTop}>
              <span className={homeStyles.dayTileIcon}>{d.icon}</span>
              <span className={`badge badge-${d.badgeColor}`}>{d.badge}</span>
            </div>
            <p className={homeStyles.dayTileNum}>Day {d.id}</p>
            <p className={homeStyles.dayTileDate}>{d.date}</p>
            <p className={homeStyles.dayTileTitle}>{d.title}</p>
            <p className={homeStyles.dayTileLoc}>{d.location}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
