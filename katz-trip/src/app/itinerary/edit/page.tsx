import ItineraryEditForm from '@/components/ItineraryEditForm'
import { days } from '@/data/trip'
import { isFamilySession } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function ItineraryEditPage() {
  if (!(await isFamilySession())) {
    redirect('/login?next=/itinerary/edit')
  }

  return <ItineraryEditForm serverDays={days} />
}
