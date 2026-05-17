import {
  familyPasscodeMatches,
  familySessionCookie,
  signFamilySession,
} from '@/lib/auth'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  let passcode = ''
  try {
    const body = await request.json()
    passcode = typeof body.passcode === 'string' ? body.passcode : ''
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  if (!process.env.FAMILY_PASSCODE || !process.env.SESSION_SECRET) {
    return NextResponse.json(
      { error: 'Family login is not configured on the server' },
      { status: 503 },
    )
  }

  if (!familyPasscodeMatches(passcode)) {
    return NextResponse.json({ error: 'Incorrect family passcode' }, { status: 401 })
  }

  const response = NextResponse.json({ ok: true })
  response.cookies.set(familySessionCookie.name, signFamilySession(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: familySessionCookie.maxAge,
  })
  return response
}
