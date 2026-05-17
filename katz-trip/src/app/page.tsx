import HomeDayGrid from '@/components/HomeDayGrid'
import ItineraryOverview from '@/components/ItineraryOverview'
import PhotoAlbumCta from '@/components/PhotoAlbumCta'
import VanTracker from '@/components/VanTracker'
import {
  sharedPhotoAlbumUrl,
  TRIP_CALENDAR_YEAR,
  TRIP_DATE_RANGE_LABEL,
  tripTagline,
} from '@/data/trip-meta'
import { getTripForViewer } from '@/lib/tripServer'
import Link from 'next/link'
import styles from './page.module.css'

export default async function Home() {
  const { isFamily, days } = await getTripForViewer()

  if (!isFamily) {
    return (
      <div className={styles.wrap}>
        <VanTracker serverDays={days} layout="top" />
        <section className={styles.stripHero}>
          <p className={styles.stripEyebrow}>
            Katz family · {tripTagline.calendarDays}-day loop · Summer {TRIP_CALENDAR_YEAR}
          </p>
          <h1 className={styles.stripTitle}>National Parks trip</h1>
          <p className={styles.stripDates}>
            {TRIP_DATE_RANGE_LABEL} · Follow the van on the road
          </p>
        </section>
      </div>
    )
  }

  return (
    <div className={styles.wrap}>
      <VanTracker serverDays={days} layout="top" />

      <section className={styles.stripHero}>
        <p className={styles.stripEyebrow}>
          Katz family · {tripTagline.calendarDays}-day loop · Summer {TRIP_CALENDAR_YEAR}
        </p>
        <h1 className={styles.stripTitle}>National Parks trip</h1>
        <p className={styles.stripDates}>
          {TRIP_DATE_RANGE_LABEL} · May the van find good campsites
        </p>
        <div className={styles.stripLinks}>
          <Link href="/itinerary" className={styles.btnPrimary}>
            Full itinerary
          </Link>
          <Link href="/itinerary/edit" className={styles.btnGhost}>
            Edit plan
          </Link>
        </div>
        {sharedPhotoAlbumUrl ? <PhotoAlbumCta tripUrl={sharedPhotoAlbumUrl} /> : null}
      </section>

      <HomeDayGrid serverDays={days} isFamily={isFamily} />

      <ItineraryOverview />
    </div>
  )
}
