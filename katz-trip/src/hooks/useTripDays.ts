'use client'

import type { Day } from '@/types/trip'
import {
  clearStoredItinerary,
  getStoredItinerary,
  ITINERARY_CHANGED_EVENT,
  setStoredItinerary,
} from '@/lib/itineraryStorage'
import { useCallback, useEffect, useState } from 'react'

export function useTripDays(serverDays: Day[], isFamily = true) {
  const [days, setDays] = useState<Day[]>(serverDays)
  const [hasLocalEdits, setHasLocalEdits] = useState(false)

  useEffect(() => {
    if (!isFamily) {
      setDays(serverDays)
      setHasLocalEdits(false)
      return
    }

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
  }, [serverDays, isFamily])

  const saveDays = useCallback(
    (next: Day[]) => {
      if (!isFamily) return
      setDays(next)
      setStoredItinerary(next)
      setHasLocalEdits(true)
    },
    [isFamily],
  )

  const resetToServer = useCallback(() => {
    if (!isFamily) return
    clearStoredItinerary()
    setDays(serverDays)
    setHasLocalEdits(false)
  }, [serverDays, isFamily])

  return { days, saveDays, resetToServer, hasLocalEdits }
}
