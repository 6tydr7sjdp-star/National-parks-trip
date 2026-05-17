/** Public trip metadata - safe to import from client components. */

export const stops = [
  { label: 'Salt Lake City', days: '1-2' },
  { label: 'Bryce Canyon', days: '3' },
  { label: 'Capitol Reef', days: '4-5' },
  { label: 'Moab', days: '6-7' },
  { label: 'Grand Tetons', days: '8-9' },
  { label: 'Yellowstone', days: '10-12' },
]

/** iCloud Shared Album or any HTTPS link - family view only after deploy */
export const sharedPhotoAlbumUrl = ''

/** Shown in nav, meta, and headers - keep in sync with first/last itinerary day */
export const TRIP_DATE_RANGE_LABEL = 'May 30 - June 14'

/** Home page narrative */
export const itineraryOverview = {
  intro:
    'May 30 through June 14: Allegiant Burbank-Provo flights, Utah family time, red rock parks, then a long pull north through the Tetons and Yellowstone before heading home.',
  phases: [
    {
      label: 'Phase 01',
      title: 'Launch + setup',
      days: 'Days 1-2',
      anchor: 'Burbank / Provo / Salt Lake City',
      blurb:
        'Fly BUR to PVU, pick up the van, load up, and reset in Salt Lake before starting the park loop.',
    },
    {
      label: 'Phase 02',
      title: 'Red rock run',
      days: 'Days 3-7',
      anchor: 'Bryce / Capitol Reef / Moab',
      blurb:
        'Rim views in Bryce, camping in Fruita, then a Moab flex stretch for Arches and easy recovery time.',
    },
    {
      label: 'Phase 03',
      title: 'The grand north',
      days: 'Days 8-12',
      anchor: 'Grand Teton / Yellowstone',
      blurb:
        'Drive north to the Tetons and settle into Yellowstone for the guided caldera day plus wildlife and geysers.',
    },
    {
      label: 'Phase 04',
      title: 'Wind down + home',
      days: 'Days 13-16',
      anchor: 'Salt Lake City / Provo / Burbank',
      blurb:
        'Buffer day southbound, van drop-off in Salt Lake, family reset day, then early PVU to BUR flight home.',
    },
  ],
}

export const tripTagline = {
  nationalParks: 5,
  calendarDays: 16,
  epicLine: '1 Epic Adventure',
}

export const TRIP_CALENDAR_YEAR = 2026
