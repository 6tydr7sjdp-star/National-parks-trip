import Link from 'next/link'
import { days, sharedPhotoAlbumUrl, stops } from '@/data/trip'
import PhotoAlbumCta from '@/components/PhotoAlbumCta'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.wrap}>

      {/* Hero */}
      <section className={styles.hero}>
        <p className={styles.heroEyebrow}>Katz Family · Summer 2025</p>
        <h1 className={styles.heroTitle}>The Grand<br />Western Loop</h1>
        <p className={styles.heroDates}>May 30 – June 12 · 13 Days · 6 Stops</p>
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
      <section className={styles.gridSection}>
        <h2 className={styles.sectionTitle}>All Days</h2>
        <div className={styles.dayGrid}>
          {days.map((d, i) => (
            <Link
              key={d.id}
              href={`/itinerary#day-${d.id}`}
              className={styles.dayTile}
              style={{ animationDelay: `${i * 30}ms` }}
            >
              <div className={styles.dayTileTop}>
                <span className={styles.dayTileIcon}>{d.icon}</span>
                <span className={`badge badge-${d.badgeColor}`}>{d.badge}</span>
              </div>
              <p className={styles.dayTileNum}>Day {d.id}</p>
              <p className={styles.dayTileDate}>{d.date}</p>
              <p className={styles.dayTileTitle}>{d.title}</p>
              <p className={styles.dayTileLoc}>{d.location}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsSection}>
        {[
          { val: '13', label: 'Days on the road' },
          { val: '6', label: 'National parks' },
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
