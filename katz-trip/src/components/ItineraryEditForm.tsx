'use client'

import type { Day } from '@/data/trip'
import { useTripDays } from '@/hooks/useTripDays'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './ItineraryEditForm.module.css'

const BADGE_COLORS: Day['badgeColor'][] = [
  'sky',
  'sage',
  'dusk',
  'flex',
  'lavender',
  'amber',
]

function linesToArr(s: string): string[] {
  return s
    .split('\n')
    .map(l => l.trim())
    .filter(Boolean)
}

export default function ItineraryEditForm({ serverDays }: { serverDays: Day[] }) {
  const router = useRouter()
  const { days, saveDays, resetToServer, hasLocalEdits } = useTripDays(serverDays)
  const [draft, setDraft] = useState<Day[]>(() => serverDays.map(d => ({ ...d })))

  useEffect(() => {
    setDraft(days.map(d => ({ ...d })))
  }, [days])

  const patch = (i: number, partial: Partial<Day>) => {
    setDraft(prev => {
      const next = [...prev]
      next[i] = { ...next[i], ...partial }
      return next
    })
  }

  const setLockedPiece = (
    i: number,
    field: keyof NonNullable<Day['locked']>,
    value: string,
  ) => {
    setDraft(prev => {
      const d = prev[i]
      const cur = d.locked ?? { name: '', time: '', confirmation: '' }
      const merged = { ...cur, [field]: value }
      const complete =
        merged.name.trim() && merged.time.trim() && merged.confirmation.trim()
      const next = [...prev]
      next[i] = { ...d, locked: complete ? merged : undefined }
      return next
    })
  }

  const setOptionalPiece = (
    i: number,
    partial: Partial<NonNullable<Day['optional']>>,
  ) => {
    setDraft(prev => {
      const d = prev[i]
      const base = d.optional ?? { name: '' }
      const nextOpt = { ...base, ...partial }
      const hasContent =
        (nextOpt.name && nextOpt.name.trim()) ||
        (nextOpt.do && nextOpt.do.length) ||
        (nextOpt.skip && nextOpt.skip.length) ||
        (nextOpt.note && nextOpt.note.trim())
      const next = [...prev]
      next[i] = { ...d, optional: hasContent ? nextOpt : undefined }
      return next
    })
  }

  const handleSave = () => {
    saveDays(draft.map(d => ({ ...d })))
    router.push('/itinerary')
  }

  const handleReset = () => {
    if (
      typeof window !== 'undefined' &&
      !window.confirm(
        'Discard saved edits on this device and restore the default trip?',
      )
    ) {
      return
    }
    resetToServer()
    setDraft(serverDays.map(d => ({ ...d })))
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Edit itinerary</h1>
        <p className={styles.pageSub}>
          Changes save to this browser only. Open <strong>Itinerary</strong> to preview. To change what
          everyone sees on the live site, update <code>src/data/trip.ts</code> and push to GitHub.
        </p>
      </div>

      <div className={styles.actions}>
        <button type="button" className={styles.btnPrimary} onClick={handleSave}>
          Save &amp; view itinerary
        </button>
        <Link href="/itinerary" className={styles.linkBack}>
          Cancel
        </Link>
        {hasLocalEdits && (
          <button type="button" className={styles.btnDanger} onClick={handleReset}>
            Reset to site default
          </button>
        )}
      </div>

      <p className={`${styles.note} ${styles.actions}`}>
        Tip: plan items = one line each. Optional / tour blocks can be left blank to remove them.
      </p>

      {draft.map((day, i) => (
        <details key={day.id} className={styles.dayBlock} open={i < 3}>
          <summary className={styles.daySummary}>
            <span>{day.icon}</span>
            Day {day.id} · {day.date} · {day.title || 'Untitled'}
          </summary>
          <div className={styles.dayBody}>
            <div className={styles.row2}>
              <div className={styles.field}>
                <label htmlFor={`icon-${day.id}`}>Icon (emoji)</label>
                <input
                  id={`icon-${day.id}`}
                  value={day.icon}
                  onChange={e => patch(i, { icon: e.target.value })}
                  maxLength={8}
                />
              </div>
              <div className={styles.field}>
                <label htmlFor={`date-${day.id}`}>Date</label>
                <input
                  id={`date-${day.id}`}
                  value={day.date}
                  onChange={e => patch(i, { date: e.target.value })}
                />
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor={`title-${day.id}`}>Title</label>
              <input
                id={`title-${day.id}`}
                value={day.title}
                onChange={e => patch(i, { title: e.target.value })}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor={`loc-${day.id}`}>Location</label>
              <input
                id={`loc-${day.id}`}
                value={day.location}
                onChange={e => patch(i, { location: e.target.value })}
              />
            </div>
            <div className={styles.row2}>
              <div className={styles.field}>
                <label htmlFor={`badge-${day.id}`}>Badge label</label>
                <input
                  id={`badge-${day.id}`}
                  value={day.badge}
                  onChange={e => patch(i, { badge: e.target.value })}
                />
              </div>
              <div className={styles.field}>
                <label htmlFor={`color-${day.id}`}>Badge color</label>
                <select
                  id={`color-${day.id}`}
                  value={day.badgeColor}
                  onChange={e =>
                    patch(i, { badgeColor: e.target.value as Day['badgeColor'] })
                  }
                >
                  {BADGE_COLORS.map(c => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className={styles.row2}>
              <div className={styles.field}>
                <label htmlFor={`drive-${day.id}`}>Drive</label>
                <input
                  id={`drive-${day.id}`}
                  value={day.drive ?? ''}
                  onChange={e => patch(i, { drive: e.target.value || undefined })}
                  placeholder="Optional"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor={`stay-${day.id}`}>Stay</label>
                <input
                  id={`stay-${day.id}`}
                  value={day.stay ?? ''}
                  onChange={e => patch(i, { stay: e.target.value || undefined })}
                  placeholder="Optional"
                />
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor={`camp-${day.id}`}>Campsite</label>
              <input
                id={`camp-${day.id}`}
                value={day.campsite ?? ''}
                onChange={e => patch(i, { campsite: e.target.value || undefined })}
                placeholder="Optional"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor={`goal-${day.id}`}>Goal / tip</label>
              <textarea
                id={`goal-${day.id}`}
                value={day.goal ?? ''}
                onChange={e => patch(i, { goal: e.target.value || undefined })}
                rows={2}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor={`plan-${day.id}`}>Plan (one line per bullet)</label>
              <textarea
                id={`plan-${day.id}`}
                value={day.plan.join('\n')}
                onChange={e => patch(i, { plan: linesToArr(e.target.value) })}
                rows={5}
              />
            </div>

            <p className={styles.subHead}>Booked tour (optional)</p>
            <div className={styles.row2}>
              <div className={styles.field}>
                <label htmlFor={`ln-${day.id}`}>Tour name</label>
                <input
                  id={`ln-${day.id}`}
                  value={day.locked?.name ?? ''}
                  onChange={e => setLockedPiece(i, 'name', e.target.value)}
                />
              </div>
              <div className={styles.field}>
                <label htmlFor={`lt-${day.id}`}>Time</label>
                <input
                  id={`lt-${day.id}`}
                  value={day.locked?.time ?? ''}
                  onChange={e => setLockedPiece(i, 'time', e.target.value)}
                />
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor={`lc-${day.id}`}>Confirmation #</label>
              <input
                id={`lc-${day.id}`}
                value={day.locked?.confirmation ?? ''}
                onChange={e => setLockedPiece(i, 'confirmation', e.target.value)}
              />
            </div>

            <p className={styles.subHead}>Optional stop / add-on</p>
            <div className={styles.field}>
              <label htmlFor={`on-${day.id}`}>Name</label>
              <input
                id={`on-${day.id}`}
                value={day.optional?.name ?? ''}
                onChange={e => setOptionalPiece(i, { name: e.target.value })}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor={`odo-${day.id}`}>Do if (one per line)</label>
              <textarea
                id={`odo-${day.id}`}
                value={(day.optional?.do ?? []).join('\n')}
                onChange={e =>
                  setOptionalPiece(i, { do: linesToArr(e.target.value) })
                }
                rows={3}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor={`osk-${day.id}`}>Skip if (one per line)</label>
              <textarea
                id={`osk-${day.id}`}
                value={(day.optional?.skip ?? []).join('\n')}
                onChange={e =>
                  setOptionalPiece(i, { skip: linesToArr(e.target.value) })
                }
                rows={2}
              />
            </div>
          </div>
        </details>
      ))}
    </div>
  )
}
