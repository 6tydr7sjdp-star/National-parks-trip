import ItineraryClient from '@/components/ItineraryClient'
import { days } from '@/data/trip'

export default function Itinerary() {
  return <ItineraryClient serverDays={days} />
}
