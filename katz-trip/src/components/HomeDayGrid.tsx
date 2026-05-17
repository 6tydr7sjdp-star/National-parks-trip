'use client'

import homeStyles from '@/app/page.module.css'
import type { Day } from '@/types/trip'
import { useTripDays } from '@/hooks/useTripDays'
import { parseTripDayToLocalDate } from '@/lib/tripProgress'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'

type FilterId = 'all' | 'driving' | 'booked' | 'camp' | 'flex'

type ForecastDay = {
  date: string
  tMax: number
  tMin: number
  code: number
}

type ForecastBlock = {
  label: string
  days: ForecastDay[]
}

const FILTERS: { id: FilterId; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'driving', label: 'Driving' },
  { id: 'booked', label: 'Booked' },
  { id: 'camp', label: 'Camp' },
  { id: 'flex', label: 'Flex' },
]

const WEATHER_SPOTS = {
  bryce: { label: 'Bryce Canyon', lat: 37.593, lon: -112.1871 },
  capitol: { label: 'Capitol Reef', lat: 38.2917, lon: -111.2615 },
  moab: { label: 'Moab', lat: 38.5733, lon: -109.5498 },
  tetons: { label: 'Grand Tetons', lat: 43.7904, lon: -110.6818 },
  yellowstone: { label: 'Yellowstone', lat: 44.428, lon: -110.5885 },
  slc: { label: 'Salt Lake City', lat: 40.7608, lon: -111.891 },
}

function toStartOfDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate())
}

function parseTimeFromText(text: string): { hour: number; minute: number } | null {
  const m = text.match(/(\d{1,2}):(\d{2})\s*(am|pm)/i)
  if (!m) return null
  let hour = parseInt(m[1], 10)
  const minute = parseInt(m[2], 10)
  const ampm = m[3].toLowerCase()
  if (ampm === 'pm' && hour < 12) hour += 12
  if (ampm === 'am' && hour === 12) hour = 0
  return { hour, minute }
}

function reservationMoment(day: Day): Date {
  const base = parseTripDayToLocalDate(day.date)
  const lockedTime = day.locked?.time ?? ''
  const confirmationTime = day.confirmation ?? ''
  const parsed = parseTimeFromText(lockedTime) ?? parseTimeFromText(confirmationTime)
  if (!parsed) return base
  return new Date(
    base.getFullYear(),
    base.getMonth(),
    base.getDate(),
    parsed.hour,
    parsed.minute,
    0,
    0,
  )
}

function driveHours(day: Day): number {
  if (!day.drive) return 0
  const nums: number[] = []
  const re = /(\d+(?:\.\d+)?)/g
  let match = re.exec(day.drive)
  while (match) {
    nums.push(parseFloat(match[1]))
    match = re.exec(day.drive)
  }
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  return nums.reduce((a, b) => a + b, 0) / nums.length
}

function weatherEmoji(code: number): string {
  if (code === 0) return '☀️'
  if ([1, 2].includes(code)) return '🌤️'
  if (code === 3) return '☁️'
  if ([45, 48].includes(code)) return '🌫️'
  if ([51, 53, 55, 56, 57, 61, 63, 65, 80, 81, 82].includes(code)) return '🌧️'
  if ([66, 67, 71, 73, 75, 77, 85, 86].includes(code)) return '❄️'
  if ([95, 96, 99].includes(code)) return '⛈️'
  return '🌤️'
}

function locationQuery(day: Day): string {
  return day.campsite || day.stay || day.location
}

export default function HomeDayGrid({
  serverDays,
  isFamily,
}: {
  serverDays: Day[]
  isFamily: boolean
}) {
  const { days } = useTripDays(serverDays, isFamily)
  const [filter, setFilter] = useState<FilterId>('all')
  const [now, setNow] = useState(new Date())
  const [copiedId, setCopiedId] = useState<number | null>(null)
  const [forecast, setForecast] = useState<ForecastBlock[]>([])

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 60_000)
    return () => window.clearInterval(id)
  }, [])

  const today = toStartOfDay(now)

  const activeDayIndex = useMemo(() => {
    let idx = 0
    for (let i = 0; i < days.length; i += 1) {
      if (toStartOfDay(parseTripDayToLocalDate(days[i].date)).getTime() <= today.getTime()) {
        idx = i
      } else {
        break
      }
    }
    return idx
  }, [days, today])

  const todayDay = days[activeDayIndex]
  const tomorrowDay = days[Math.min(days.length - 1, activeDayIndex + 1)]

  const reservationDays = useMemo(
    () =>
      isFamily ? days.filter((d) => Boolean(d.confirmation || d.locked)) : [],
    [days, isFamily],
  )

  const nextReservation = useMemo(() => {
    if (!isFamily) return null
    const future = reservationDays
      .map((d) => ({ day: d, when: reservationMoment(d) }))
      .filter((x) => x.when.getTime() >= now.getTime())
      .sort((a, b) => a.when.getTime() - b.when.getTime())
    return future[0] ?? null
  }, [reservationDays, isFamily, now])

  const countdown = useMemo(() => {
    if (!isFamily) {
      return `Next up: Day ${tomorrowDay.id} · ${tomorrowDay.title}`
    }
    if (!nextReservation) return 'No upcoming hard reservations'
    const diff = nextReservation.when.getTime() - now.getTime()
    if (diff <= 0) return 'Happening now'
    const hours = Math.floor(diff / 3_600_000)
    const mins = Math.floor((diff % 3_600_000) / 60_000)
    if (hours >= 24) {
      const daysOut = Math.floor(hours / 24)
      return `Next hard reservation in ${daysOut}d ${hours % 24}h`
    }
    return `Next hard reservation in ${hours}h ${mins}m`
  }, [isFamily, nextReservation, now, tomorrowDay.id, tomorrowDay.title])

  const filteredDays = useMemo(
    () =>
      days.filter((d) => {
        if (filter === 'all') return true
        if (filter === 'driving') return Boolean(d.drive) || d.badge === 'Drive'
        if (filter === 'booked') return Boolean(d.locked || d.confirmation) || d.badge === 'Booked'
        if (filter === 'camp') return Boolean(d.campsite) || /camp/i.test(d.badge) || /camp/i.test(d.title)
        if (filter === 'flex') return /flex/i.test(d.badge) || /flex/i.test(d.title)
        return true
      }),
    [days, filter],
  )

  const tripHealth = useMemo(() => {
    const completeDays = Math.max(0, activeDayIndex)
    const estimatedHours = days.reduce((sum, d) => sum + driveHours(d), 0)
    const firstDayMs = toStartOfDay(parseTripDayToLocalDate(days[0].date)).getTime()
    const lastDayMs = toStartOfDay(
      parseTripDayToLocalDate(days[days.length - 1].date),
    ).getTime()
    const todayMs = today.getTime()
    const tripPct =
      todayMs < firstDayMs
        ? 0
        : todayMs > lastDayMs
          ? 100
          : Math.round((completeDays / Math.max(days.length, 1)) * 100)
    const longTomorrowDrive = driveHours(tomorrowDay) >= 5
    const risk = longTomorrowDrive
      ? 'Long drive day tomorrow — prep snacks, fuel, and an early start.'
      : 'Low travel risk tomorrow — keep the day flexible.'
    return {
      completeDays,
      estimatedMiles: Math.round(estimatedHours * 52),
      tripPct,
      risk,
    }
  }, [activeDayIndex, days, today, tomorrowDay])

  useEffect(() => {
    const primary =
      /bryce/i.test(todayDay.location) ? WEATHER_SPOTS.bryce :
      /capitol/i.test(todayDay.location) ? WEATHER_SPOTS.capitol :
      /moab|arches/i.test(todayDay.location) ? WEATHER_SPOTS.moab :
      /teton/i.test(todayDay.location) ? WEATHER_SPOTS.tetons :
      /yellowstone/i.test(todayDay.location) ? WEATHER_SPOTS.yellowstone :
      WEATHER_SPOTS.slc

    const secondary =
      /bryce/i.test(tomorrowDay.location) ? WEATHER_SPOTS.bryce :
      /capitol/i.test(tomorrowDay.location) ? WEATHER_SPOTS.capitol :
      /moab|arches/i.test(tomorrowDay.location) ? WEATHER_SPOTS.moab :
      /teton/i.test(tomorrowDay.location) ? WEATHER_SPOTS.tetons :
      /yellowstone/i.test(tomorrowDay.location) ? WEATHER_SPOTS.yellowstone :
      WEATHER_SPOTS.slc

    const spots = [primary, secondary].filter(
      (spot, idx, arr) => arr.findIndex((x) => x.label === spot.label) === idx,
    )

    async function loadWeather() {
      try {
        const responses = await Promise.all(
          spots.map(async (spot) => {
            const url =
              `https://api.open-meteo.com/v1/forecast?latitude=${spot.lat}&longitude=${spot.lon}` +
              '&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&timezone=auto&forecast_days=3'
            const res = await fetch(url)
            if (!res.ok) throw new Error('Weather fetch failed')
            const json = await res.json()
            const daysOut: ForecastDay[] = (json.daily?.time ?? []).map(
              (date: string, i: number) => ({
                date,
                tMax: Math.round(json.daily.temperature_2m_max[i]),
                tMin: Math.round(json.daily.temperature_2m_min[i]),
                code: json.daily.weather_code[i],
              }),
            )
            return { label: spot.label, days: daysOut }
          }),
        )
        setForecast(responses)
      } catch {
        setForecast([])
      }
    }

    loadWeather()
  }, [todayDay.location, tomorrowDay.location])

  function urgency(day: Day): 'Today' | 'Tomorrow' | 'Done' | 'Later' {
    const d = toStartOfDay(parseTripDayToLocalDate(day.date)).getTime()
    const t = today.getTime()
    const oneDay = 86_400_000
    if (d === t) return 'Today'
    if (d === t + oneDay) return 'Tomorrow'
    if (d < t) return 'Done'
    return 'Later'
  }

  async function copyText(id: number, text: string) {
    await navigator.clipboard.writeText(text)
    setCopiedId(id)
    window.setTimeout(() => setCopiedId(null), 1200)
  }

  return (
    <section className={homeStyles.gridSection}>
      <h2 className={homeStyles.sectionTitle}>Trip dashboard</h2>
      <div className={homeStyles.todayCard}>
        <div>
          <p className={homeStyles.todayKicker}>Today</p>
          <h3 className={homeStyles.todayTitle}>
            Day {todayDay.id} · {todayDay.title}
          </h3>
          <p className={homeStyles.todayMeta}>{todayDay.location}</p>
          <p className={homeStyles.nextRes}>{countdown}</p>
        </div>
        <div>
          <p className={homeStyles.checklistLabel}>What to do now</p>
          <ul className={homeStyles.todayChecklist}>
            {todayDay.plan.slice(0, 3).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={homeStyles.healthRow}>
        <div className={homeStyles.healthCard}>
          <p className={homeStyles.healthLabel}>Trip health</p>
          <div className={homeStyles.healthProgress}>
            <div
              className={homeStyles.healthBar}
              style={{ width: `${Math.round((tripHealth.completeDays / Math.max(days.length - 1, 1)) * 100)}%` }}
            />
          </div>
          <p className={homeStyles.healthMeta}>
            {tripHealth.completeDays}/{days.length} days complete · ~{tripHealth.estimatedMiles} mi estimated
          </p>
          <p className={homeStyles.healthRisk}>{tripHealth.risk}</p>
        </div>
        <div className={homeStyles.healthCard}>
          <p className={homeStyles.healthLabel}>Trip completion</p>
          <p className={homeStyles.healthBig}>{tripHealth.tripPct}%</p>
          <p className={homeStyles.healthMeta}>
            Day {todayDay.id} of {days.length} · Next up: {tomorrowDay.title}
          </p>
        </div>
      </div>

      <div className={homeStyles.weatherStrip}>
        {forecast.length > 0 ? (
          forecast.map((block) => (
            <article key={block.label} className={homeStyles.weatherCard}>
              <p className={homeStyles.weatherLabel}>{block.label}</p>
              <div className={homeStyles.weatherDays}>
                {block.days.map((w) => (
                  <div key={`${block.label}-${w.date}`} className={homeStyles.weatherDay}>
                    <span>{weatherEmoji(w.code)}</span>
                    <span>{new Date(w.date).toLocaleDateString(undefined, { weekday: 'short' })}</span>
                    <span>{w.tMax}°/{w.tMin}°</span>
                  </div>
                ))}
              </div>
            </article>
          ))
        ) : (
          <p className={homeStyles.weatherFallback}>Weather preview unavailable right now.</p>
        )}
      </div>

      {isFamily ? (
        <p className={homeStyles.dayGridMeta}>
          <Link href="/itinerary/edit" className={homeStyles.inlineLink}>
            Edit itinerary
          </Link>
          <span className={homeStyles.dayGridMetaSep}>·</span>
          <span>saves on this device</span>
        </p>
      ) : null}

      <div className={homeStyles.filterRow}>
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            className={`${homeStyles.filterChip} ${filter === f.id ? homeStyles.filterChipActive : ''}`}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className={homeStyles.dayGrid}>
        {filteredDays.map((d: Day, i: number) => (
          <Link
            key={d.id}
            href={`/itinerary#day-${d.id}`}
            className={homeStyles.dayTile}
            style={{ animationDelay: `${i * 30}ms` }}
          >
            <div className={homeStyles.dayTileTop}>
              <span className={homeStyles.dayTileIcon}>{d.icon}</span>
              <span className={`badge badge-${d.badgeColor}`}>{d.badge}</span>
            </div>
            <p className={`${homeStyles.urgencyPill} ${homeStyles[`urgency${urgency(d)}`]}`}>
              {urgency(d)}
            </p>
            <p className={homeStyles.dayTileNum}>Day {d.id}</p>
            <p className={homeStyles.dayTileDate}>{d.date}</p>
            <p className={homeStyles.dayTileTitle}>{d.title}</p>
            <p className={homeStyles.dayTileLoc}>{d.location}</p>
          </Link>
        ))}
      </div>

      {isFamily ? (
      <div className={homeStyles.reservationsSection}>
        <h3 className={homeStyles.resTitle}>Reservations</h3>
        <div className={homeStyles.resGrid}>
          {reservationDays.map((day) => {
            const when = reservationMoment(day)
            const phone = (day.confirmation ?? '').match(/(\+?1?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})/)?.[1]
            const confirmText = day.locked
              ? `${day.locked.name} · ${day.locked.time} · ${day.locked.confirmation}`
              : day.confirmation ?? ''
            return (
              <article key={day.id} className={homeStyles.resCard}>
                <p className={homeStyles.resMeta}>
                  Day {day.id} · {day.date}
                </p>
                <p className={homeStyles.resName}>{day.confLabel ?? day.locked?.name ?? day.title}</p>
                <p className={homeStyles.resWhen}>{when.toLocaleString()}</p>
                <div className={homeStyles.resActions}>
                  {phone ? (
                    <a className={homeStyles.resBtn} href={`tel:${phone.replace(/[^\d+]/g, '')}`}>
                      Call
                    </a>
                  ) : (
                    <span className={`${homeStyles.resBtn} ${homeStyles.resBtnMuted}`}>Call n/a</span>
                  )}
                  <a
                    className={homeStyles.resBtn}
                    href={`https://maps.google.com/?q=${encodeURIComponent(locationQuery(day))}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open map
                  </a>
                  <button
                    type="button"
                    className={homeStyles.resBtn}
                    onClick={() => copyText(day.id, confirmText)}
                  >
                    {copiedId === day.id ? 'Copied' : 'Copy conf'}
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
      ) : null}
    </section>
  )
}
