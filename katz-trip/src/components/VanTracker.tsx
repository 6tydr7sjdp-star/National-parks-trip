'use client'

import type { Day } from '@/data/trip'
import { getRouteMilestones, getTripProgress } from '@/lib/tripProgress'
import { useTripDays } from '@/hooks/useTripDays'
import { useEffect, useState } from 'react'
import TripVanSvg from '@/components/TripVanSvg'
import styles from './VanTracker.module.css'

function clamp01(x: number) {
  return Math.min(1, Math.max(0, x))
}

export default function VanTracker({ serverDays }: { serverDays: Day[] }) {
  const { days } = useTripDays(serverDays)
  const [progress, setProgress] = useState(() =>
    getTripProgress(new Date(), serverDays),
  )

  useEffect(() => {
    const tick = () => setProgress(getTripProgress(new Date(), days))
    tick()
    const id = window.setInterval(tick, 60_000)
    return () => window.clearInterval(id)
  }, [days])

  const leftPct = 6 + clamp01(progress.progress01) * 88
  const milestones = getRouteMilestones(days.length)

  return (
    <section className={styles.section} aria-label="Trip progress van">
      <h2 className={styles.heading}>Where’s the van?</h2>
      <p className={styles.status}>
        <strong>{progress.headline}</strong>
        <br />
        {progress.sub}
      </p>

      <div className={styles.track}>
        <div className={styles.roadSolid} />
        <div className={styles.road} />

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

        <div
          className={`${styles.vanWrap} ${styles.bounce}`}
          style={{ left: `${leftPct}%` }}
        >
          <TripVanSvg style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      <p className={styles.pct}>
        {progress.status === 'before' && 'Van parked — adventure loading'}
        {progress.status === 'during' && 'On the loop'}
        {progress.status === 'after' && 'Garage (for now)'}
      </p>
    </section>
  )
}
