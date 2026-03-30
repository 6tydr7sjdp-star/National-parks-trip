import { Day } from '@/data/trip'
import styles from './DayCard.module.css'

export default function DayCard({ day }: { day: Day }) {
  return (
    <article className={styles.card} id={`day-${day.id}`}>

      {/* Header */}
      <div className={styles.header}>
        <span className={styles.icon}>{day.icon}</span>
        <div className={styles.headerText}>
          <div className={styles.meta}>Day {day.id} · {day.date}</div>
          <h2 className={styles.title}>{day.title}</h2>
          <div className={styles.location}>{day.location}</div>
        </div>
        <span className={`badge badge-${day.badgeColor} ${styles.badge}`}>{day.badge}</span>
      </div>

      {/* Body */}
      <div className={styles.body}>

        {/* Info row */}
        {(day.stay || day.campsite || day.drive) && (
          <div className={styles.infoRow}>
            {day.stay && (
              <div className={styles.infoBlock}>
                <p className={styles.infoLabel}>Stay</p>
                <p className={styles.infoVal}>{day.stay}</p>
              </div>
            )}
            {day.campsite && (
              <div className={styles.infoBlock}>
                <p className={styles.infoLabel}>Campsite</p>
                <p className={styles.infoVal}>{day.campsite}</p>
              </div>
            )}
            {day.drive && (
              <div className={styles.infoBlock}>
                <p className={styles.infoLabel}>Drive</p>
                <p className={styles.infoVal}>{day.drive}</p>
              </div>
            )}
          </div>
        )}

        {/* Locked tour */}
        {day.locked && (
          <div className={styles.lockedBlock}>
            <span className={styles.lockIcon}>🔒</span>
            <div>
              <p className={styles.lockedName}>{day.locked.name}</p>
              <p className={styles.lockedMeta}>{day.locked.time} · Confirmation: <strong>{day.locked.confirmation}</strong></p>
            </div>
          </div>
        )}

        {/* Plan */}
        <div className={styles.planSection}>
          <p className={styles.sectionLabel}>Plan</p>
          <ul className={styles.planList}>
            {day.plan.map((item, i) => (
              <li key={i} className={styles.planItem}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Optional */}
        {day.optional && (
          <div className={styles.optionalBlock}>
            <p className={styles.optionalLabel}>⭐ Optional</p>
            <p className={styles.optionalName}>{day.optional.name}</p>
            {(day.optional.do?.length || day.optional.skip?.length) && (
              <div className={styles.ifGrid}>
                {day.optional.do && day.optional.do.length > 0 && (
                  <div>
                    <p className={styles.doLabel}>Do if</p>
                    {day.optional.do.map((x, i) => <p key={i} className={styles.ifItem}>· {x}</p>)}
                  </div>
                )}
                {day.optional.skip && day.optional.skip.length > 0 && (
                  <div>
                    <p className={styles.skipLabel}>Skip if</p>
                    {day.optional.skip.map((x, i) => <p key={i} className={styles.ifItem}>· {x}</p>)}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Goal */}
        {day.goal && (
          <div className={styles.goalBlock}>
            <span>👉</span>
            <p>{day.goal}</p>
          </div>
        )}

      </div>
    </article>
  )
}
