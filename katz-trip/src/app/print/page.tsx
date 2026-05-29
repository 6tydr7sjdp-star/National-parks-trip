import { redirect } from 'next/navigation'
import { isFamilySession } from '@/lib/auth'
import { days, reservations } from '@/data/trip'
import { driveLegs } from '@/data/drive-legs'
import { TRIP_DATE_RANGE_LABEL, sharedPhotoAlbumUrl, tripTagline } from '@/data/trip-meta'
import PrintButton from '@/components/PrintButton'
import styles from './page.module.css'

export default async function PrintPage() {
  if (!(await isFamilySession())) {
    redirect('/login?next=/print')
  }

  return (
    <div className={styles.wrap}>
      {/* Toolbar -- hidden when printing */}
      <div className={styles.toolbar}>
        <PrintButton />
        <span className={styles.toolbarNote}>
          Opens your browser print dialog. Choose &quot;Save as PDF&quot; to keep a copy.
        </span>
      </div>

      {/* Header */}
      <header className={styles.header}>
        <p className={styles.headerEyebrow}>Katz Family - National Parks Trip 2026</p>
        <h1 className={styles.headerTitle}>Road Trip Playbook</h1>
        <p className={styles.headerMeta}>
          {TRIP_DATE_RANGE_LABEL} - {tripTagline.calendarDays} Days - The Squad - Native Campervans #17067
        </p>
        <p className={styles.headerMeta}>
          katz-trip.vercel.app - Photos: {sharedPhotoAlbumUrl}
        </p>
      </header>

      {/* Reservations */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Reservations at a glance</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>What</th>
              <th className={styles.th}>Dates</th>
              <th className={styles.th}>Confirmation</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((r, i) => (
              <tr key={i} className={i % 2 === 1 ? styles.trAlt : styles.tr}>
                <td className={styles.td}>{r.what}</td>
                <td className={styles.td}>{r.dates}</td>
                <td className={styles.tdConf}>{r.conf}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Day by day */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Day by day</h2>
        <div className={styles.dayList}>
          {days.map((day) => (
            <div key={day.id} className={styles.dayCard}>
              <div className={styles.dayHeader}>
                <span className={styles.dayNum}>Day {day.id} - {day.date}</span>
                <span className={styles.dayTitle}>{day.icon} {day.title}</span>
              </div>
              <p className={styles.dayLocation}>{day.location}</p>

              {day.drive ? (
                <p className={styles.dayMeta}><strong>Drive:</strong> {day.drive}</p>
              ) : null}
              {day.stay ? (
                <p className={styles.dayMeta}><strong>Stay:</strong> {day.stay}</p>
              ) : null}
              {day.campsite ? (
                <p className={styles.dayMeta}><strong>Camp:</strong> {day.campsite}</p>
              ) : null}
              {day.locked ? (
                <p className={styles.dayLocked}>
                  LOCKED: {day.locked.name} - {day.locked.time} - #{day.locked.confirmation}
                </p>
              ) : null}
              {day.confirmation ? (
                <div className={styles.dayConf}>
                  <span className={styles.dayConfLabel}>{day.confLabel ?? 'Confirmation'}:</span>{' '}
                  <span className={styles.dayConfVal}>{day.confirmation.replace(/\n/g, ' | ')}</span>
                </div>
              ) : null}

              <ul className={styles.planList}>
                {day.plan.map((item, i) => (
                  <li key={i} className={styles.planItem}>{item}</li>
                ))}
              </ul>

              {day.goal ? (
                <p className={styles.dayGoal}>&gt; {day.goal}</p>
              ) : null}
              {day.optional ? (
                <p className={styles.dayOptional}>
                  Optional: {day.optional.name}
                  {day.optional.do ? ` -- Do if: ${day.optional.do.join(', ')}` : null}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* Road guide */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Road guide</h2>
        <div className={styles.legList}>
          {driveLegs.map((leg) => (
            <div key={leg.id} className={styles.legCard}>
              <div className={styles.legHeader}>
                <span className={styles.legDay}>Day {leg.day} - {leg.date}</span>
                <span className={styles.legRoute}>{leg.from} {'-->'} {leg.to}</span>
              </div>
              <div className={styles.legStats}>
                <span><strong>Drive:</strong> {leg.duration} ({leg.distance})</span>
                <span><strong>Depart:</strong> {leg.depart}</span>
                <span><strong>Arrive:</strong> {leg.arriveTarget}</span>
              </div>
              <p className={styles.legRouteNote}><strong>Route:</strong> {leg.route}</p>
              <p className={styles.legFuel}>Fuel: {leg.fuelNote}</p>
              {leg.stops.length > 0 ? (
                <p className={styles.legStops}><strong>Stops:</strong> {leg.stops.join(' - ')}</p>
              ) : null}
              {leg.notes ? (
                <p className={styles.legNotes}>{leg.notes}</p>
              ) : null}
              <p className={styles.legMaps}>Maps: {leg.mapsUrl}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className={styles.printFooter}>
        <p>Katz Family - National Parks 2026 - katz-trip.vercel.app</p>
      </footer>
    </div>
  )
}
