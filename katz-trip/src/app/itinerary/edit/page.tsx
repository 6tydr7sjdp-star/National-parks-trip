import ItineraryEditForm from '@/components/ItineraryEditForm'
import { days } from '@/data/trip'

export default function ItineraryEditPage() {
  return <ItineraryEditForm serverDays={days} />
}
