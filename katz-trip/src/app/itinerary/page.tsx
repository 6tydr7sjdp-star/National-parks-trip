import ItineraryClient from '@/components/ItineraryClient'
import { getTripForViewer } from '@/lib/tripServer'

export default async function Itinerary() {
  const { isFamily, days } = await getTripForViewer()
  return <ItineraryClient serverDays={days} isFamily={isFamily} />
}
