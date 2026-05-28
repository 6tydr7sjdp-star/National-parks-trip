import NotesClient from '@/components/NotesClient'
import { isFamilySession } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function NotesPage() {
  if (!(await isFamilySession())) {
    redirect('/login?next=/notes')
  }

  return <NotesClient />
}
