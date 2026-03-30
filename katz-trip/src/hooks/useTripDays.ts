'use client'

import type { Day } from '@/data/trip'
import {
  clearStoredItinerary,
  getStoredItinerary,
  ITINERARY_CHANGED_EVENT,
  setStoredItinerary,
} from '@/lib/itineraryStorage'
import { useCallback, useEffect, useState } from 'react'

export function useTripDays(serverDays: Day[]) {
  const [days, setDays] = useState<Day[]>(serverDays)
  const [hasLocalEdits, setHasLocalEdits] = useState(false)

  useEffect(() => {
    const load = () => {
      const stored = getStoredItinerary(serverDays)
      if (stored) {
        setDays(stored)
        setHasLocalEdits(true)
      } else {
        setDays(serverDays)
        setHasLocalEdits(false)
      }
    }
    load()
    window.addEventListener(ITINERARY_CHANGED_EVENT, load)
    return () => window.removeEventListener(ITINERARY_CHANGED_EVENT, load)
  }, [serverDays])

  const saveDays = useCallback((next: Day[]) => {
    setDays(next)
    setStoredItinerary(next)
    setHasLocalEdits(true)
  }, [])

  const resetToServer = useCallback(() => {
    clearStoredItinerary()
    setDays(serverDays)
    setHasLocalEdits(false)
  }, [serverDays])

  return { days, saveDays, resetToServer, hasLocalEdits }
}
