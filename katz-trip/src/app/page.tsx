import ItineraryOverview from '@/components/ItineraryOverview'
import VanTracker from '@/components/VanTracker'
import Link from 'next/link'
import { TRIP_CALENDAR_YEAR, days, sharedPhotoAlbumUrl, tripTagline } from '@/data/trip'
import PhotoAlbumCta from '@/components/PhotoAlbumCta'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.wrap}>
      <section className={styles.stripHero}>
        <p className={styles.stripEyebrow}>
          Katz family · {tripTagline.calendarDays}-day loop · Summer {TRIP_CALENDAR_YEAR}
        </p>
        <h1 className={styles.stripTitle}>Western road trip</h1>
        <p className={styles.stripDates}>May 30 – June 12 · May the van find good campsites</p>
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

      <VanTracker serverDays={days} />
    </div>
  )
}
