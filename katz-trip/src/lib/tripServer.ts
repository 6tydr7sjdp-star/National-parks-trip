import 'server-only'

import { days as fullDays } from '@/data/trip'
import type { Day } from '@/types/trip'
import { isFamilySession } from '@/lib/auth'
import { sanitizeDaysForGuest } from '@/lib/sanitizeTrip'

export type TripViewer = {
  isFamily: boolean
  days: Day[]
}

export async function getTripForViewer(): Promise<TripViewer> {
  const isFamily = await isFamilySession()
  return {
    isFamily,
    days: isFamily ? fullDays : sanitizeDaysForGuest(fullDays),
  }
}
