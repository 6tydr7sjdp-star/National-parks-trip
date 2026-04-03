'use client'

import itineraryStyles from '@/app/itinerary/page.module.css'
import DayCard from '@/components/DayCard'
import type { Day } from '@/data/trip'
import { TRIP_DATE_RANGE_LABEL, tripTagline } from '@/data/trip'
import { useTripDays } from '@/hooks/useTripDays'
import Link from 'next/link'
import styles from './ItineraryClient.module.css'

export default function ItineraryClient({ serverDays }: { serverDays: Day[] }) {
  const { days, hasLocalEdits } = useTripDays(serverDays)

  return (
    <div className={itineraryStyles.wrap}>
      <div className={itineraryStyles.pageHeader}>
        <h1 className={itineraryStyles.pageTitle}>Itinerary</h1>
        <p className={itineraryStyles.pageSub}>
          {tripTagline.calendarDays} days · {TRIP_DATE_RANGE_LABEL}
        </p>
      </div>

      <div className={styles.toolbar}>
        <Link href="/itinerary/edit" className={styles.editBtn}>
          Edit itinerary
        </Link>
        {hasLocalEdits && (
          <span className={styles.hint}>Showing edits saved on this device.</span>
        )}
      </div>

      {hasLocalEdits && (
        <p className={styles.banner}>
          Changes stay in this browser only. Everyone else still sees the default trip until you update{' '}
          <code className={styles.code}>src/data/trip.ts</code> and deploy.
        </p>
      )}

      <div className={itineraryStyles.jumpLinks}>
        {days.map((d: Day) => (
          <a key={d.id} href={`#day-${d.id}`} className={itineraryStyles.jumpLink}>
            <span>{d.icon}</span>
            <span>Day {d.id}</span>
          </a>
        ))}
      </div>

      <div className={itineraryStyles.dayList}>
        {days.map((day, i) => (
          <div
            key={day.id}
            className={itineraryStyles.dayRow}
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <DayCard day={day} />
          </div>
        ))}
      </div>
    </div>
  )
}
