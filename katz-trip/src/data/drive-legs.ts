/** Driving legs for the family road guide. Public-safe  -  no confirmation numbers. */

export type DriveLeg = {
  id: string
  day: number
  date: string
  from: string
  to: string
  duration: string
  distance: string
  depart: string
  arriveTarget: string
  mapsUrl: string
  route: string
  fuelNote: string
  stops: string[]
  notes?: string
}

export const driveLegs: DriveLeg[] = [
  {
    id: 'slc-bryce',
    day: 3,
    date: 'June 1',
    from: 'Salt Lake City, UT',
    to: 'Bryce Canyon National Park, UT',
    duration: '~4.5 hours',
    distance: '~260 miles',
    depart: 'By 8:00am MDT',
    arriveTarget: '~12:30pm (lodge check-in by 2pm)',
    mapsUrl:
      'https://www.google.com/maps/dir/Salt+Lake+City,+UT/Bryce+Canyon+National+Park,+UT',
    route: 'I-15 S ? US-89 S ? UT-12 W into Bryce Canyon',
    fuelNote: 'Fill up in SLC. Last reliable stop: Panguitch (~20 min before the lodge).',
    stops: ['Panguitch, UT  -  gas + bathroom (~3.5 hrs in)'],
    notes: 'UT-12 through Red Canyon is gorgeous and van-friendly  -  enjoy it.',
  },
  {
    id: 'bryce-capitol',
    day: 4,
    date: 'June 2',
    from: 'Bryce Canyon Lodge, UT',
    to: 'Fruita Campground, Capitol Reef NP, UT',
    duration: '~2.5 hours',
    distance: '~150 miles',
    depart: 'By 9:30am MDT (after checkout)',
    arriveTarget: 'By noon  -  camp check-in is 3pm, plenty of buffer',
    mapsUrl:
      'https://www.google.com/maps/dir/Bryce+Canyon+National+Park,+UT/Fruita+Campground,+Capitol+Reef+National+Park,+UT',
    route: 'UT-12 E (scenic drive through Grand Staircase) ? UT-24 W into Capitol Reef',
    fuelNote: 'Fill up at Bryce Canyon City before leaving. No gas inside Capitol Reef. Next after Torrey is far.',
    stops: [
      'Escalante, UT  -  gas + coffee option (~1 hr in)',
      'Torrey, UT  -  last gas before campground (~15 min out)',
    ],
    notes:
      'UT-12 between Bryce and Escalante is one of the most scenic drives in the country  -  stop at Head of the Rocks overlook.',
  },
  {
    id: 'capitol-moab',
    day: 6,
    date: 'June 4',
    from: 'Fruita Campground, Capitol Reef NP, UT',
    to: 'Moab, UT (Hyatt Place)',
    duration: '~2.5 hours',
    distance: '~145 miles',
    depart: 'By 9:00am MDT (check out Fruita by 11am)',
    arriveTarget: 'By noon  -  Hyatt check-in 3pm',
    mapsUrl:
      'https://www.google.com/maps/dir/Fruita+Campground+Capitol+Reef,+Torrey+UT/Hyatt+Place+Moab+890+N+Main+St+Moab+UT',
    route: 'UT-24 E ? UT-95 S (optional scenic loop) or US-191 N direct to Moab',
    fuelNote: 'Fill up in Torrey before leaving. Next reliable gas: Green River or Moab.',
    stops: [
      'Green River, UT  -  gas if needed (~1.5 hrs in)',
    ],
    notes:
      'Optional: Little Wild Horse Canyon hike near Goblin Valley adds ~1.5 hrs but is a family highlight. Leave Fruita by 9am if you want to do it.',
  },
  {
    id: 'moab-tetons',
    day: 8,
    date: 'June 6',
    from: 'Moab, UT (Hyatt Place)',
    to: 'Gros Ventre Campground, Grand Teton NP, WY',
    duration: '~6.5-7 hours',
    distance: '~375 miles',
    depart: 'By 9:00am MDT (ask Hyatt for early checkout; official checkout is noon)',
    arriveTarget: 'By 4:00pm at Gros Ventre - site available from noon, arrive when you can',
    mapsUrl:
      'https://www.google.com/maps/dir/Moab+UT/Gros+Ventre+Campground+Grand+Teton+National+Park+WY',
    route: 'US-191 N ? Green River ? I-80 E (brief) ? US-189 N through Kemmerer ? US-189 N to Jackson ? GTNP',
    fuelNote:
      'LONG leg  -  fill in Moab. Key stops: Green River, UT (gas + food) and Rock Springs, WY. Remote stretch between Rock Springs and Jackson.',
    stops: [
      'Green River, UT  -  gas + lunch (~1.5 hrs in)',
      'Rock Springs, WY  -  gas + bathroom (~3.5 hrs in)',
      'Jackson, WY  -  optional stop, last services before camp (~6 hrs in)',
    ],
    notes:
      'This is the big driving day. Fill the tank in Moab AND Green River. US-189 N from Kemmerer through Pinedale is remote and beautiful. Keep the gas above half through Wyoming.',
  },
  {
    id: 'tetons-yellowstone',
    day: 9,
    date: 'June 7',
    from: 'Gros Ventre Campground, Grand Teton NP, WY',
    to: 'Canyon Lodge, Yellowstone NP, WY',
    duration: '~2 hours (without stops)',
    distance: '~85 miles',
    depart: 'By 11:00am (after Gros Ventre checkout)',
    arriveTarget: 'By 4:00pm (lodge check-in)',
    mapsUrl:
      'https://www.google.com/maps/dir/Gros+Ventre+Campground+Grand+Teton+NP/Canyon+Lodge+Yellowstone+National+Park+WY',
    route:
      'Gros Ventre Rd ? US-191 N through GTNP ? John D Rockefeller Jr Memorial Pkwy ? Yellowstone South Entrance ? Canyon Village',
    fuelNote:
      'Fill up in Jackson before entering the parks. Gas inside Yellowstone is expensive  -  fill before crossing.',
    stops: [
      'Schwabacher Landing pullout  -  Teton reflection photos (15 min, worth it)',
      'Jackson Lake Lodge overlook  -  quick stop',
      'Yellowstone South Entrance  -  have America the Beautiful pass ready',
    ],
    notes:
      'Slow, scenic drive  -  take your time through GTNP. Plan to be at Canyon Lodge by 3:30pm so you can settle before the 7:45am tour the next morning.',
  },
  {
    id: 'yellowstone-signal',
    day: 13,
    date: 'June 11',
    from: 'Canyon Lodge, Yellowstone NP, WY',
    to: 'Signal Mountain Campground, Grand Teton NP, WY',
    duration: '~2 hours',
    distance: '~80 miles',
    depart: 'By 11:00am (Canyon Lodge checkout)',
    arriveTarget: '12:00pm (Signal Mountain check-in)',
    mapsUrl:
      'https://www.google.com/maps/dir/Canyon+Lodge+Yellowstone+National+Park/Signal+Mountain+Campground+Grand+Teton+National+Park+WY',
    route:
      'Canyon Village ? Fishing Bridge ? South Entrance ? John D Rockefeller Jr Memorial Pkwy ? Signal Mountain Campground',
    fuelNote:
      'Fill up at Canyon Village or Fishing Bridge before leaving Yellowstone. Signal Mountain has no gas.',
    stops: [
      'Fishing Bridge area  -  gas if needed, last inside Yellowstone',
    ],
    notes: 'Straight south  -  clean 2-hour drive. Electric hookup at Site 34 so no generator needed.',
  },
  {
    id: 'signal-slc',
    day: 14,
    date: 'June 12',
    from: 'Signal Mountain Campground, Grand Teton NP, WY',
    to: 'Native Campervans  -  766 W 1700 S, Salt Lake City, UT',
    duration: '~5 hours',
    distance: '~280 miles',
    depart: 'By 11:00am (site checkout)',
    arriveTarget: 'By 4:00pm (confirm van drop-off window with Native  -  877-550-5335)',
    mapsUrl:
      'https://www.google.com/maps/dir/Signal+Mountain+Campground+Grand+Teton+NP/766+W+1700+S+Salt+Lake+City+UT',
    route:
      'Signal Mountain Rd ? US-89 S through Jackson ? Hoback Canyon ? US-189 S ? Rock Springs ? I-80 W ? SLC',
    fuelNote: 'Fill up in Jackson. Rock Springs is a good second stop (~2 hrs in).',
    stops: [
      'Jackson, WY  -  gas + food (~30 min from camp)',
      'Rock Springs, WY  -  gas (~2 hrs in)',
    ],
    notes:
      'Note: van drop-off was originally listed as 9am  -  that conflicts with 11am camp checkout. Call Native (877-550-5335) to confirm your actual drop-off window before Jun 12.',
  },
]
