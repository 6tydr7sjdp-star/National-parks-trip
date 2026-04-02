export type Day = {
  id: number
  date: string
  icon: string
  title: string
  location: string
  badge: string
  badgeColor: 'sky' | 'sage' | 'dusk' | 'flex' | 'lavender' | 'amber'
  drive?: string
  stay?: string
  campsite?: string
  plan: string[]
  goal?: string
  locked?: { name: string; time: string; confirmation: string }
  optional?: {
    name: string
    do?: string[]
    skip?: string[]
    note?: string
  }
}

export const days: Day[] = [
  /* PHASE 01: THE WARM UP */
  {
    id: 1,
    date: 'May 30',
    icon: '✈️',
    title: 'LAX → Salt Lake City',
    location: 'Los Angeles → Salt Lake City',
    badge: 'Fly',
    badgeColor: 'sky',
    stay: 'Family House',
    plan: [
      'Fly to SLC',
      'Get to family house',
      'Easy dinner and early night',
    ],
    goal: 'Start calm, not rushed',
  },
  {
    id: 2,
    date: 'May 31',
    icon: '🏡',
    title: 'Salt Lake City Reset',
    location: 'Salt Lake City',
    badge: 'Home base',
    badgeColor: 'sage',
    plan: [
      'Relax with family',
      'Grocery run for snacks / supplies',
      'Prep bags and gear',
    ],
    goal: 'Be fully ready for the road trip start',
  },
  /* PHASE 02: RED ROCK TERRITORY */
  {
    id: 3,
    date: 'June 1',
    icon: '🏜️',
    title: 'Bryce Canyon National Park',
    location: 'Bryce Canyon National Park',
    badge: 'National Park',
    badgeColor: 'dusk',
    drive: '~4.5 hours',
    stay: 'Bryce Canyon Lodge',
    plan: [
      'Arrive mid-afternoon',
      'Walk along the rim',
      'Watch the sunset',
    ],
    goal: 'Keep it light — tomorrow is a travel + camp day',
  },
  {
    id: 4,
    date: 'June 2',
    icon: '🏕️',
    title: 'Capitol Reef (Setup Camp)',
    location: 'Capitol Reef National Park',
    badge: 'Camp',
    badgeColor: 'dusk',
    drive: '~2.5 hours',
    campsite: 'Fruita Campground · Site 34',
    plan: [
      'Set up camp',
      'Easy exploring',
      'Chill night around the fire',
    ],
  },
  {
    id: 5,
    date: 'June 3',
    icon: '🏕️',
    title: 'Capitol Reef (Full Day)',
    location: 'Capitol Reef National Park',
    badge: 'Explore',
    badgeColor: 'dusk',
    campsite: 'Fruita Campground · Site 34',
    plan: [
      'Scenic drive',
      'View petroglyphs',
      'Mandatory pie stop at Gifford House',
    ],
    goal: "Slow, easy day — don't overpack it",
  },
  {
    id: 6,
    date: 'June 4',
    icon: '🚗',
    title: 'The Moab Shift',
    location: 'Capitol Reef → Moab',
    badge: 'Flex',
    badgeColor: 'flex',
    drive: '~2.5 hours',
    stay: 'Hyatt Place Moab',
    plan: ['Check in at Hyatt Place Moab', 'Pool', 'Easy dinner'],
    optional: {
      name: 'Little Wild Horse Canyon',
      do: ['Moving by ~9am', 'Kids have energy'],
      skip: ['Late start', 'Too hot', 'Everyone tired'],
    },
  },
  {
    id: 7,
    date: 'June 5',
    icon: '🏜️',
    title: 'Arches National Park',
    location: 'Arches National Park',
    badge: 'National Park',
    badgeColor: 'dusk',
    stay: 'Hyatt Place Moab',
    plan: [
      'Start early to beat heat and crowds',
      'Hit highlights',
      'Return to hotel mid-day for pool time',
    ],
    optional: {
      name: 'Evening',
      do: ['Sunset at Double Arch', 'Stargazing'],
    },
  },
  {
    id: 8,
    date: 'June 6',
    icon: '🏜️',
    title: 'Canyonlands / Flex Day',
    location: 'Canyonlands · Island in the Sky',
    badge: 'Flex',
    badgeColor: 'flex',
    stay: 'Hyatt Place Moab',
    plan: [
      'Island in the Sky viewpoints',
      'Short walks',
      'Relaxed afternoon',
    ],
  },
  /* PHASE 03: THE GRAND NORTH */
  {
    id: 9,
    date: 'June 7',
    icon: '⛰️',
    title: 'Drive to the Tetons',
    location: 'Moab → Grand Teton National Park',
    badge: 'Camp',
    badgeColor: 'sage',
    drive: '~6–6.5 hours',
    campsite: 'Colter Bay Campground · Site 48',
    plan: ['Arrive', 'Set up camp', 'Settle in'],
    optional: {
      name: 'Kayaking on Jackson Lake',
      do: ['Arrival is early', 'Weather is calm'],
      skip: ['Long drive — everyone tired'],
    },
  },
  {
    id: 10,
    date: 'June 8',
    icon: '🌋',
    title: 'Yellowstone (Guided Day)',
    location: 'Yellowstone National Park',
    badge: 'Booked',
    badgeColor: 'amber',
    stay: 'Canyon Lodge',
    plan: [
      'Full day on Cruising the Caldera tour',
      'Let the guide handle the driving stress',
    ],
    goal: 'Bring snacks and multiple layers',
    locked: {
      name: 'Cruising the Caldera',
      time: '7:45 AM – 4:15 PM',
      confirmation: '20331373',
    },
  },
  {
    id: 11,
    date: 'June 9',
    icon: '🌋',
    title: 'Yellowstone Exploration',
    location: 'Yellowstone National Park',
    badge: 'Free roam',
    badgeColor: 'lavender',
    stay: 'Canyon Lodge',
    plan: [
      'Wildlife viewing — Lamar & Hayden valleys',
      'Geysers and thermal features',
      'Flexible — pick your highlights',
    ],
    goal: "Don't overdo it — it's a massive park",
  },
  {
    id: 12,
    date: 'June 10',
    icon: '🌋',
    title: 'Yellowstone · Final Push',
    location: 'Yellowstone National Park',
    badge: 'Last day',
    badgeColor: 'lavender',
    stay: 'Canyon Lodge',
    plan: [
      'Last favorite stops and viewpoints',
      'Soak in final highlights',
      'Start orienting toward exit / travel home',
    ],
    goal: "Don't overdo it — it's a massive park",
  },
]

/** iCloud Shared Album or any HTTPS link — shown on the home page for every visitor after deploy */
export const sharedPhotoAlbumUrl = ''

export const stops = [
  { label: 'Salt Lake City', days: '1–2' },
  { label: 'Bryce Canyon', days: '3' },
  { label: 'Capitol Reef', days: '4–5' },
  { label: 'Moab', days: '6–8' },
  { label: 'Grand Tetons', days: '9' },
  { label: 'Yellowstone', days: '10–12' },
]

/** Home page narrative — three-act structure matches the trip playbook */
export const itineraryOverview = {
  intro:
    'May 30 through June 12: SLC family time, Utah’s red rock and arches, then a long pull north to the Tetons and Yellowstone. Twelve driving-itinerary days, built for a comfy ProMaster-style camper (think low-key graphics and a tall box like a Native van).',
  phases: [
    {
      label: 'Phase 01',
      title: 'The warm up',
      days: 'Days 1–2',
      anchor: 'Salt Lake City',
      blurb:
        'Fly to SLC, land at the family house, reset with groceries and gear prep before the desert.',
    },
    {
      label: 'Phase 02',
      title: 'Red rock territory',
      days: 'Days 3–8',
      anchor: 'Bryce · Capitol Reef · Moab',
      blurb:
        'National parks and flex days: Bryce rim sunset, Fruita camping and pie, Moab for Arches and Canyonlands with pool afternoons in between.',
    },
    {
      label: 'Phase 03',
      title: 'The grand north',
      days: 'Days 9–12',
      anchor: 'Grand Teton · Yellowstone',
      blurb:
        'Big drive to Colter Bay, then Canyon Lodge — guided caldera day plus wildlife and geysers before winding down.',
    },
  ],
}

/** Subtitle line for marketing (PDF: 4 parks · 14 days) */
export const tripTagline = {
  nationalParks: 4,
  calendarDays: 14,
  epicLine: '1 Epic Adventure',
}

/** Used when parsing “May 30” on itinerary days (van tracker + progress) */
export const TRIP_CALENDAR_YEAR = 2026
