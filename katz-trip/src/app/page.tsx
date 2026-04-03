import ItineraryOverview from '@/components/ItineraryOverview'
import VanTracker from '@/components/VanTracker'
import Link from 'next/link'
import {
  TRIP_CALENDAR_YEAR,
  TRIP_DATE_RANGE_LABEL,
  days,
  sharedPhotoAlbumUrl,
  tripTagline,
} from '@/data/trip'
import PhotoAlbumCta from '@/components/PhotoAlbumCta'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.wrap}>
      <VanTracker serverDays={days} layout="top" />

      <section className={styles.stripHero}>
        <p className={styles.stripEyebrow}>
          Katz family · {tripTagline.calendarDays}-day loop · Summer {TRIP_CALENDAR_YEAR}
        </p>
        <h1 className={styles.stripTitle}>Western road trip</h1>
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
        <PhotoAlbumCta tripUrl={sharedPhotoAlbumUrl} />
      </section>

      <ItineraryOverview />
    </div>
  )
}
