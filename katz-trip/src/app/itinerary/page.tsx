import ItineraryClient from '@/components/ItineraryClient'
import { isFamilySession } from '@/lib/auth'
import { getTripForViewer } from '@/lib/tripServer'
import { redirect } from 'next/navigation'

export default async function Itinerary() {
  if (!(await isFamilySession())) redirect('/')

  const { isFamily, days } = await getTripForViewer()
  return <ItineraryClient serverDays={days} isFamily={isFamily} />
}
