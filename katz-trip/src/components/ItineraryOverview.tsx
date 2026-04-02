import Link from 'next/link'
import { itineraryOverview, stops, tripTagline } from '@/data/trip'
import styles from './ItineraryOverview.module.css'

export default function ItineraryOverview() {
  return (
    <section className={styles.section} aria-labelledby="overview-heading">
      <h2 id="overview-heading" className={styles.heading}>
        Itinerary overview
      </h2>
      <p className={styles.intro}>{itineraryOverview.intro}</p>

      <div className={styles.phaseGrid}>
        {itineraryOverview.phases.map((p) => (
          <article key={p.label} className={styles.phaseCard}>
            <p className={styles.phaseLabel}>{p.label}</p>
            <h3 className={styles.phaseTitle}>{p.title}</h3>
            <p className={styles.phaseMeta}>
              <span className={styles.phaseDays}>{p.days}</span>
              <span className={styles.phaseSep}>·</span>
              <span>{p.anchor}</span>
            </p>
            <p className={styles.phaseBlurb}>{p.blurb}</p>
          </article>
        ))}
      </div>

      <div className={styles.stops}>
        <h3 className={styles.stopsTitle}>Stops at a glance</h3>
        <ul className={styles.stopList}>
          {stops.map((s) => (
            <li key={s.label} className={styles.stopItem}>
              <span className={styles.stopName}>{s.label}</span>
              <span className={styles.stopDays}>Days {s.days}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className={styles.footerLine}>
        <Link href="/itinerary" className={styles.link}>
          Open full day-by-day itinerary
        </Link>
        <span className={styles.sep}>·</span>
        <span>
          {tripTagline.nationalParks} parks · {tripTagline.calendarDays} calendar days
        </span>
      </p>
    </section>
  )
}
