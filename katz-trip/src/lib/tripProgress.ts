import type { Day } from '@/data/trip'
import { TRIP_CALENDAR_YEAR } from '@/data/trip'

const MONTH: Record<string, number> = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
}

export function parseTripDayToLocalDate(dateLabel: string): Date {
  const m = dateLabel.trim().match(/^([A-Za-z]+)\s+(\d{1,2})$/)
  if (!m) return new Date(TRIP_CALENDAR_YEAR, 0, 1)
  const month = MONTH[m[1]]
  const day = parseInt(m[2], 10)
  if (month === undefined || !Number.isFinite(day)) {
    return new Date(TRIP_CALENDAR_YEAR, 0, 1)
  }
  return new Date(TRIP_CALENDAR_YEAR, month, day)
}

function startOfDayMs(d: Date): number {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime()
}

export type TripProgress = {
  status: 'before' | 'during' | 'after'
  /** Index into `days` (0-based), meaningful when during */
  dayIndex: number
  /** 0 at first day center, 1 at last day — for van along the road */
  progress01: number
  headline: string
  sub: string
}

/**
 * Where we are on the trip timeline (local calendar).
 * Uses last itinerary day as “trip still in progress” through that date; day after = complete.
 */
export function getTripProgress(now: Date, days: Day[]): TripProgress {
  if (days.length === 0) {
    return {
      status: 'before',
      dayIndex: 0,
      progress01: 0,
      headline: 'Trip',
      sub: '',
    }
  }

  const first = parseTripDayToLocalDate(days[0].date)
  const last = parseTripDayToLocalDate(days[days.length - 1].date)
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const t0 = startOfDayMs(today)
  const first0 = startOfDayMs(first)
  const last0 = startOfDayMs(last)

  const span = Math.max(1, days.length - 1)

  if (t0 < first0) {
    return {
      status: 'before',
      dayIndex: 0,
      progress01: 0,
      headline: 'Rolling out soon',
      sub: `Trip starts ${days[0].date} · ${days[0].title}`,
    }
  }

  if (t0 > last0) {
    return {
      status: 'after',
      dayIndex: days.length - 1,
      progress01: 1,
      headline: 'Trip in the books',
      sub: `Hope you brought home great memories · last stop was ${days[days.length - 1].title}`,
    }
  }

  let idx = 0
  for (let i = 0; i < days.length; i++) {
    const d0 = startOfDayMs(parseTripDayToLocalDate(days[i].date))
    if (d0 <= t0) idx = i
    else break
  }

  const d = days[idx]
  const progress01 = idx / span

  return {
    status: 'during',
    dayIndex: idx,
    progress01,
    headline: `Day ${d.id} · ${d.date}`,
    sub: `${d.title} — ${d.location}`,
  }
}

/** Milestone positions (0–1) for six regions — uses same span as `getTripProgress` (n − 1). */
export function getRouteMilestones(
  dayCount: number,
): { label: string; progress: number }[] {
  const n = Math.max(2, dayCount)
  const s = n - 1
  return [
    { label: 'Salt Lake City', progress: (0 + 1) / 2 / s },
    { label: 'Bryce Canyon', progress: 2 / s },
    { label: 'Capitol Reef', progress: (3 + 4) / 2 / s },
    { label: 'Moab', progress: (5 + 6 + 7) / 3 / s },
    { label: 'Grand Tetons', progress: 8 / s },
    { label: 'Yellowstone', progress: (9 + 10 + 11) / 3 / s },
  ]
}
