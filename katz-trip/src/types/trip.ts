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
  confirmation?: string
  confLabel?: string
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
