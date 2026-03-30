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
  {
    id: 1,
    date: 'May 30',
    icon: '✈️',
    title: 'Travel Day',
    location: 'Los Angeles → Salt Lake City',
    badge: 'Fly',
    badgeColor: 'sky',
    plan: ['Fly to Salt Lake City', 'Get to family house', 'Easy dinner + early night'],
    goal: 'Start calm, not rushed',
  },
  {
    id: 2,
    date: 'May 31',
    icon: '🏡',
    title: 'Reset Day',
    location: 'Salt Lake City',
    badge: 'Home base',
    badgeColor: 'sage',
    plan: ['Relax / hang with family', 'Grocery run + snacks', 'Prep bags + gear'],
    goal: 'Be fully ready for road trip start',
  },
  {
    id: 3,
    date: 'June 1',
    icon: '🏜️',
    title: 'Bryce Canyon',
    location: 'Bryce Canyon National Park',
    badge: 'National Park',
    badgeColor: 'dusk',
    drive: '~4.5 hours',
    stay: 'Bryce Canyon Lodge',
    plan: ['Arrive mid-afternoon', 'Walk along rim', 'Watch sunset'],
    goal: 'Keep it light — tomorrow is a travel + camp day',
  },
  {
    id: 4,
    date: 'June 2',
    icon: '🏕️',
    title: 'Capitol Reef — Set Up Camp',
    location: 'Capitol Reef National Park',
    badge: 'Camp',
    badgeColor: 'dusk',
    drive: '~2.5 hours',
    campsite: 'Fruita Campground · Site 34',
    plan: ['Set up camp', 'Easy exploring', 'Chill night'],
  },
  {
    id: 5,
    date: 'June 3',
    icon: '🏕️',
    title: 'Capitol Reef — Full Day',
    location: 'Capitol Reef National Park',
    badge: 'Explore',
    badgeColor: 'dusk',
    campsite: 'Fruita Campground · Site 34',
    plan: ['Scenic drive', 'Petroglyphs', 'Pie stop 🍰', 'Relax at camp'],
    goal: "Slow, easy day — don't overpack it",
  },
  {
    id: 6,
    date: 'June 4',
    icon: '🚗',
    title: 'Drive to Moab — Flex Day',
    location: 'Capitol Reef → Moab',
    badge: 'Flex',
    badgeColor: 'flex',
    drive: '~2.5 hours',
    stay: 'Hyatt Place Moab',
    plan: ['Check in', 'Pool', 'Easy dinner'],
    goal: 'No pressure — bonus only',
    optional: {
      name: 'Little Wild Horse Canyon',
      do: ['Leave by ~9am', 'Kids have energy'],
      skip: ['Late start', 'Too hot', 'Everyone tired'],
    },
  },
  {
    id: 7,
    date: 'June 5',
    icon: '🏜️',
    title: 'Arches Day',
    location: 'Arches National Park',
    badge: 'National Park',
    badgeColor: 'dusk',
    stay: 'Hyatt Place Moab',
    plan: ['Go early (heat + crowds)', 'Hit highlights', 'Back to hotel mid-day'],
    goal: 'Only if energy is there',
    optional: {
      name: 'Evening options',
      do: ['Sunset at Double Arch', 'Stargazing'],
    },
  },
  {
    id: 8,
    date: 'June 6',
    icon: '🏜️',
    title: 'Canyonlands / Flex Day',
    location: 'Canyonlands National Park',
    badge: 'Flex',
    badgeColor: 'flex',
    stay: 'Hyatt Place Moab',
    plan: ['Easy viewpoints', 'Short walks', 'Relax afternoon'],
    optional: {
      name: 'Desert highlights',
      do: ['You want a big adventure day'],
      skip: ['Trip already feels full'],
    },
  },
  {
    id: 9,
    date: 'June 7',
    icon: '🚗',
    title: 'Drive to Grand Tetons',
    location: 'Moab → Grand Teton National Park',
    badge: 'Camp',
    badgeColor: 'sage',
    drive: '~6–6.5 hours',
    campsite: 'Colter Bay Campground · Site 48',
    plan: ['Arrive', 'Set up camp', 'Relax'],
    optional: {
      name: 'Jackson Lake kayaking',
      do: ['Arrive early', 'Weather is calm'],
      skip: ['Long drive = everyone tired'],
    },
  },
  {
    id: 10,
    date: 'June 8',
    icon: '🌋',
    title: 'Yellowstone — Guided Day',
    location: 'Yellowstone National Park',
    badge: 'Booked',
    badgeColor: 'amber',
    stay: 'Canyon Lodge',
    plan: ['Full-day guided experience', 'No driving stress'],
    goal: 'Bring snacks + layers',
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
    title: 'Yellowstone — Explore',
    location: 'Yellowstone National Park',
    badge: 'Free roam',
    badgeColor: 'lavender',
    stay: 'Canyon Lodge',
    plan: ['Wildlife viewing', 'Geysers', 'Flexible'],
    goal: "Don't overdo it — big park",
  },
  {
    id: 12,
    date: 'June 10',
    icon: '🌋',
    title: 'Yellowstone — Final Day',
    location: 'Yellowstone National Park',
    badge: 'Last push',
    badgeColor: 'lavender',
    stay: 'Canyon Lodge',
    plan: ['One last highlight', 'Start heading toward exit'],
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
