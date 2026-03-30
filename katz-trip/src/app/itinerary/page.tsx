import { days } from '@/data/trip'
import DayCard from '@/components/DayCard'
import styles from './page.module.css'

export default function Itinerary() {
  return (
    <div className={styles.wrap}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Itinerary</h1>
        <p className={styles.pageSub}>13 days · May 30 – June 12</p>
      </div>

      {/* Jump links */}
      <div className={styles.jumpLinks}>
        {days.map(d => (
          <a key={d.id} href={`#day-${d.id}`} className={styles.jumpLink}>
            <span>{d.icon}</span>
            <span>Day {d.id}</span>
          </a>
        ))}
      </div>

      <div className={styles.dayList}>
        {days.map((day, i) => (
          <div
            key={day.id}
            className={styles.dayRow}
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <DayCard day={day} />
          </div>
        ))}
      </div>
    </div>
  )
}
