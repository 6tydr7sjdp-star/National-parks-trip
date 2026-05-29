/** Public trip metadata - safe to import from client components. */

export const stops = [
  { label: 'Salt Lake City', days: '1' },
  { label: 'Bryce Canyon', days: '2' },
  { label: 'Capitol Reef', days: '3-4' },
  { label: 'Moab', days: '5-6' },
  { label: 'Grand Tetons', days: '7-8, 12' },
  { label: 'Yellowstone', days: '9-11' },
]

/** iCloud Shared Album or any HTTPS link - family view only after deploy */
export const sharedPhotoAlbumUrl = 'https://www.icloud.com/sharedalbum/#B2PGtnIORG5bXGf'

/** Shown in nav, meta, and headers - keep in sync with first/last itinerary day */
export const TRIP_DATE_RANGE_LABEL = 'May 31 - June 14'

/** Home page narrative */
export const itineraryOverview = {
  intro:
    'May 31 through June 14: Allegiant Burbank-Provo flights, Utah family time, red rock parks, then a long pull north through the Tetons and Yellowstone before heading home.',
  phases: [
    {
      label: 'Phase 01',
      title: 'Launch + setup',
      days: 'Day 1',
      anchor: 'Burbank / Provo / Salt Lake City',
      blurb:
        'Fly BUR to PVU, pick up the van in SLC, load up, and reset before starting the park loop.',
    },
    {
      label: 'Phase 02',
      title: 'Red rock run',
      days: 'Days 2-6',
      anchor: 'Bryce / Capitol Reef / Moab',
      blurb:
        'Rim views in Bryce, camping in Fruita, then a Moab flex stretch for Arches and easy recovery time.',
    },
    {
      label: 'Phase 03',
      title: 'The grand north',
      days: 'Days 7-11',
      anchor: 'Grand Teton / Yellowstone / Jackson',
      blurb:
        'Drive north to the Tetons, settle into Yellowstone for the guided caldera day plus wildlife and geysers, then wind down in Jackson.',
    },
    {
      label: 'Phase 04',
      title: 'Wind down + home',
      days: 'Days 12-15',
      anchor: 'Signal Mountain / Salt Lake City / Provo / Burbank',
      blurb:
        'One last camp night at Signal Mountain in the Tetons, then early departure and van drop-off in Salt Lake, family reset day, and early PVU to BUR flight home.',
    },
  ],
}

export const tripTagline = {
  nationalParks: 5,
  calendarDays: 15,
  epicLine: '1 Epic Adventure',
}

export const TRIP_CALENDAR_YEAR = 2026
