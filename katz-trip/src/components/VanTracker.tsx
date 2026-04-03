'use client'

import type { Day } from '@/data/trip'
import {
  getRouteMilestones,
  getTripProgress,
  getTripTrackerVisuals,
} from '@/lib/tripProgress'
import { useTripDays } from '@/hooks/useTripDays'
import { useEffect, useState } from 'react'
import TripTrackerPlaneSvg from '@/components/TripTrackerPlaneSvg'
import TripVanSvg from '@/components/TripVanSvg'
import styles from './VanTracker.module.css'

function clamp01(x: number) {
  return Math.min(1, Math.max(0, x))
}

export default function VanTracker({
  serverDays,
  layout = 'default',
}: {
  serverDays: Day[]
  layout?: 'default' | 'top'
}) {
  const { days } = useTripDays(serverDays)
  const [progress, setProgress] = useState(() =>
    getTripProgress(new Date(), serverDays),
  )
  const [visuals, setVisuals] = useState(() =>
    getTripTrackerVisuals(new Date(), serverDays),
  )

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      setProgress(getTripProgress(now, days))
      setVisuals(getTripTrackerVisuals(now, days))
    }
    tick()
    const id = window.setInterval(tick, 60_000)
    return () => window.clearInterval(id)
  }, [days])

  const milestones = getRouteMilestones(days.length)
  /** First milestone is Salt Lake City — van idles there while the outbound jet is at Burbank */
  const saltLakeProgress = milestones[0]?.progress ?? 0
  const saltLakeLeftPct = 6 + saltLakeProgress * 88
  const vanParkedAtSaltLake = visuals.vanProgress01 === 0
  const leftPct = vanParkedAtSaltLake
    ? saltLakeLeftPct
    : 6 + clamp01(visuals.vanProgress01) * 88

  const sectionClass =
    layout === 'top'
      ? `${styles.section} ${styles.sectionTop}`
      : styles.section
  const trackClass =
    layout === 'top' ? `${styles.track} ${styles.trackTop}` : styles.track

  return (
    <section className={sectionClass} aria-label="Trip progress van">
      <h2 className={styles.heading}>Where’s the van?</h2>
      <p className={styles.status}>
        <strong>{progress.headline}</strong>
        <br />
        {progress.sub}
      </p>

      <div className={trackClass}>
        <div className={styles.roadSolid} />
        <div className={styles.road} />

        <div
          className={`${styles.milestone} ${styles.milestoneBurbank}`}
          style={{ left: '6%' }}
        >
          <div className={styles.dot} />
          <span className={styles.milestoneLabel}>Burbank</span>
        </div>

        {milestones.map((m) => (
          <div
            key={m.label}
            className={styles.milestone}
            style={{ left: `${6 + m.progress * 88}%` }}
          >
            <div className={styles.dot} />
            <span className={styles.milestoneLabel}>{m.label}</span>
          </div>
        ))}

        {visuals.showDeparturePlane && (
          <div className={`${styles.planeWrap} ${styles.planeWrapStart}`} aria-hidden>
            <div className={styles.planeBob}>
              <TripTrackerPlaneSvg variant="departure" className={styles.planeSvg} />
            </div>
          </div>
        )}

        {visuals.showReturnPlane && (
          <div className={`${styles.planeWrap} ${styles.planeWrapEnd}`} aria-hidden>
            <div className={styles.planeBob}>
              <TripTrackerPlaneSvg variant="return" className={styles.planeSvg} />
            </div>
          </div>
        )}

        <div
          className={`${styles.vanWrap} ${styles.bounce}`}
          style={{ left: `${leftPct}%` }}
        >
          <TripVanSvg style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      <p className={styles.pct}>
        {progress.status === 'before' && 'Van parked — adventure loading'}
        {progress.status === 'during' && visuals.showDeparturePlane && 'Outbound flight window'}
        {progress.status === 'during' && !visuals.showDeparturePlane && !visuals.showReturnPlane && 'On the loop'}
        {progress.status === 'during' && visuals.showReturnPlane && 'Heading home — flight day'}
        {progress.status === 'after' && 'Garage (for now)'}
      </p>
    </section>
  )
}
