import 'server-only'

import type { Day } from '@/types/trip'

function scrubPlanLine(line: string): string {
  return line
    .replace(
      /\b\d{3,5}\s+[NWES]?\s*[\w\s.]+(?:St|Street|Ave|Avenue|Rd|Road|Dr|Drive|Blvd|Boulevard|Ln|Lane)\b.*/gi,
      'lodging area',
    )
    .replace(/\(\d{3}\)\s*\d{3}-\d{4}/g, '')
    .replace(/\b\d{3}-\d{3}-\d{4}\b/g, '')
    .replace(/#\w+/g, '')
    .replace(/\bSite\s+\d+.*/gi, 'campsite')
    .replace(/\bLoop\s+[A-Z]\b/gi, '')
    .replace(/\s{2,}/g, ' ')
    .trim()
}

function guestStayLabel(day: Day): string {
  const loc = day.location.toLowerCase()
  if (/bryce/.test(loc)) return 'Lodging near Bryce Canyon'
  if (/capitol|fruita/.test(loc)) return 'Capitol Reef area'
  if (/moab|arches/.test(loc)) return 'Lodging in Moab'
  if (/teton|signal mountain|jackson/.test(loc)) return 'Grand Teton area'
  if (/yellowstone|canyon lodge/.test(loc)) return 'Lodging in Yellowstone'
  if (/salt lake|slc|provo|burbank/.test(loc)) return 'Family / travel hub'
  return 'Overnight stay'
}

function guestCampLabel(day: Day): string {
  const loc = day.location.toLowerCase()
  const camp = (day.campsite ?? '').toLowerCase()
  if (/capitol|fruita/.test(loc) || /fruita/.test(camp)) return 'Camping in Capitol Reef'
  if (/teton|gros ventre|signal mountain/.test(loc) || /signal mountain|gros ventre/.test(camp)) {
    return 'Camping in Grand Teton'
  }
  return 'Camping night'
}

export function sanitizeDayForGuest(day: Day): Day {
  return {
    ...day,
    stay: day.stay ? guestStayLabel(day) : undefined,
    campsite: day.campsite ? guestCampLabel(day) : undefined,
    confirmation: undefined,
    confLabel: undefined,
    locked: day.locked
      ? {
          name: day.locked.name,
          time: day.locked.time,
          confirmation: '',
        }
      : undefined,
    plan: day.plan.map(scrubPlanLine).filter(Boolean),
  }
}

export function sanitizeDaysForGuest(days: Day[]): Day[] {
  return days.map(sanitizeDayForGuest)
}
