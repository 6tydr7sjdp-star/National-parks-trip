'use client'

import { driveLegs } from '@/data/drive-legs'
import styles from './DriveGuide.module.css'

export default function DriveGuide() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Road guide</h2>
      <p className={styles.sub}>
        Every driving leg - departure targets, fuel stops, and Maps links.
      </p>

      <div className={styles.legList}>
        {driveLegs.map((leg) => (
          <article key={leg.id} className={styles.legCard}>
            <div className={styles.legHeader}>
              <div className={styles.legDay}>Day {leg.day} - {leg.date}</div>
              <a
                href={leg.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapsBtn}
              >
                Open in Maps
              </a>
            </div>

            <div className={styles.legRoute}>
              <span className={styles.legFrom}>{leg.from}</span>
              <span className={styles.legArrow}>{'?'}</span>
              <span className={styles.legTo}>{leg.to}</span>
            </div>

            <div className={styles.statRow}>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Drive</span>
                <span className={styles.statVal}>{leg.duration}</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Distance</span>
                <span className={styles.statVal}>{leg.distance}</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Depart</span>
                <span className={styles.statVal}>{leg.depart}</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Arrive by</span>
                <span className={styles.statVal}>{leg.arriveTarget}</span>
              </div>
            </div>

            <div className={styles.routeRow}>
              <span className={styles.routeLabel}>Route</span>
              <span className={styles.routeVal}>{leg.route}</span>
            </div>

            <div className={styles.fuelRow}>
              <span className={styles.fuelIcon}>{'?'}</span>
              <span className={styles.fuelText}>{leg.fuelNote}</span>
            </div>

            {leg.stops.length > 0 ? (
              <div className={styles.stopsRow}>
                <span className={styles.stopsLabel}>Stops</span>
                <ul className={styles.stopList}>
                  {leg.stops.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {leg.notes ? (
              <p className={styles.legNote}>{leg.notes}</p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}
