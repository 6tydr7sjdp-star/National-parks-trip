import type { Day } from '@/data/trip'

export const ITINERARY_STORAGE_KEY = 'katz-trip-itinerary-days'
export const ITINERARY_CHANGED_EVENT = 'katz-trip-itinerary-changed'

const BADGE_COLORS: Day['badgeColor'][] = [
  'sky',
  'sage',
  'dusk',
  'flex',
  'lavender',
  'amber',
]

function notifyChanged() {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new Event(ITINERARY_CHANGED_EVENT))
}

function coerceBadgeColor(v: unknown): Day['badgeColor'] | undefined {
  if (typeof v === 'string' && BADGE_COLORS.includes(v as Day['badgeColor'])) {
    return v as Day['badgeColor']
  }
  return undefined
}

/** Merge stored day fields onto default row so unknown JSON cannot break the UI */
function mergeDay(partial: unknown, fallback: Day): Day | null {
  if (!partial || typeof partial !== 'object') return null
  const p = partial as Record<string, unknown>
  if (typeof p.id !== 'number' || p.id !== fallback.id) return null

  const plan =
    Array.isArray(p.plan) && p.plan.every(x => typeof x === 'string')
      ? (p.plan as string[])
      : fallback.plan

  let locked: Day['locked'] | undefined
  if ('locked' in p) {
    if (p.locked == null) {
      locked = undefined
    } else if (typeof p.locked === 'object') {
      const l = p.locked as Record<string, unknown>
      if (
        typeof l.name === 'string' &&
        typeof l.time === 'string' &&
        typeof l.confirmation === 'string'
      ) {
        locked = { name: l.name, time: l.time, confirmation: l.confirmation }
      } else {
        locked = fallback.locked
      }
    } else {
      locked = fallback.locked
    }
  } else {
    locked = fallback.locked
  }

  let optional: Day['optional'] | undefined
  if ('optional' in p) {
    if (p.optional == null) {
      optional = undefined
    } else if (typeof p.optional === 'object') {
      const o = p.optional as Record<string, unknown>
      const name = typeof o.name === 'string' ? o.name : ''
      const doArr =
        Array.isArray(o.do) && o.do.every(x => typeof x === 'string')
          ? (o.do as string[])
          : undefined
      const skipArr =
        Array.isArray(o.skip) && o.skip.every(x => typeof x === 'string')
          ? (o.skip as string[])
          : undefined
      const note = typeof o.note === 'string' ? o.note : undefined
      if (name || doArr?.length || skipArr?.length || note) {
        optional = { name, do: doArr, skip: skipArr, note }
      } else {
        optional = undefined
      }
    } else {
      optional = fallback.optional
    }
  } else {
    optional = fallback.optional
  }

  const badgeColor = coerceBadgeColor(p.badgeColor) ?? fallback.badgeColor

  return {
    id: fallback.id,
    date: typeof p.date === 'string' ? p.date : fallback.date,
    icon: typeof p.icon === 'string' ? p.icon : fallback.icon,
    title: typeof p.title === 'string' ? p.title : fallback.title,
    location: typeof p.location === 'string' ? p.location : fallback.location,
    badge: typeof p.badge === 'string' ? p.badge : fallback.badge,
    badgeColor,
    drive: typeof p.drive === 'string' ? p.drive : fallback.drive,
    stay: typeof p.stay === 'string' ? p.stay : fallback.stay,
    campsite: typeof p.campsite === 'string' ? p.campsite : fallback.campsite,
    plan,
    goal: typeof p.goal === 'string' ? p.goal : fallback.goal,
    locked,
    optional,
  }
}

export function getStoredItinerary(defaults: Day[]): Day[] | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(ITINERARY_STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as unknown
    if (!Array.isArray(parsed) || parsed.length !== defaults.length) return null
    const merged: Day[] = []
    for (let i = 0; i < defaults.length; i++) {
      const row = mergeDay(parsed[i], defaults[i])
      if (!row) return null
      merged.push(row)
    }
    return merged
  } catch {
    return null
  }
}

export function setStoredItinerary(days: Day[]) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(ITINERARY_STORAGE_KEY, JSON.stringify(days))
    notifyChanged()
  } catch {
    /* quota */
  }
}

export function clearStoredItinerary() {
  if (typeof window === 'undefined') return
  try {
    localStorage.removeItem(ITINERARY_STORAGE_KEY)
    notifyChanged()
  } catch {
    /* ignore */
  }
}
