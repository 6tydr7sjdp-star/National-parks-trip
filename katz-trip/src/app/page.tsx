import Link from 'next/link'
import { days, sharedPhotoAlbumUrl, stops, tripTagline } from '@/data/trip'
import HomeDayGrid from '@/components/HomeDayGrid'
import PhotoAlbumCta from '@/components/PhotoAlbumCta'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.wrap}>

      {/* Hero */}
      <section className={styles.hero}>
        <p className={styles.heroEyebrow}>Katz Family Road Trip · Summer 2026</p>
        <h1 className={styles.heroTitle}>The Grand<br />Western Loop</h1>
        <p className={styles.heroDates}>
          May 30 – June 12 · {tripTagline.calendarDays} Days · {tripTagline.nationalParks} National Parks · {tripTagline.epicLine}
        </p>
        <div className={styles.heroCta}>
          <Link href="/itinerary" className={styles.btnPrimary}>View Itinerary</Link>
          <Link href="/packing" className={styles.btnSecondary}>Packing List</Link>
        </div>
        <PhotoAlbumCta tripUrl={sharedPhotoAlbumUrl} />
      </section>

      {/* Route strip */}
      <section className={styles.routeSection}>
        <h2 className={styles.sectionTitle}>The Route</h2>
        <div className={styles.routeStrip}>
          {stops.map((stop, i) => (
            <div key={stop.label} className={styles.routeStop}>
              <div className={styles.routeDot} />
              {i < stops.length - 1 && <div className={styles.routeLine} />}
              <p className={styles.routeLabel}>{stop.label}</p>
              <p className={styles.routeDays}>Days {stop.days}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick-glance grid */}
      <HomeDayGrid serverDays={days} />

      {/* Stats */}
      <section className={styles.statsSection}>
        {[
          { val: String(tripTagline.calendarDays), label: 'Days (calendar)' },
          { val: String(tripTagline.nationalParks), label: 'National parks' },
          { val: '2', label: 'Campsites' },
          { val: '1', label: 'Guided tour booked' },
        ].map(s => (
          <div key={s.label} className={styles.stat}>
            <p className={styles.statVal}>{s.val}</p>
            <p className={styles.statLabel}>{s.label}</p>
          </div>
        ))}
      </section>

    </div>
  )
}
