import 'server-only'

import { createHmac, timingSafeEqual } from 'crypto'
import { cookies } from 'next/headers'

const COOKIE_NAME = 'trip_session'
const SESSION_PAYLOAD = 'family'

function sessionSecret(): string | null {
  return process.env.SESSION_SECRET ?? null
}

export function signFamilySession(): string {
  const secret = sessionSecret()
  if (!secret) throw new Error('SESSION_SECRET is not configured')
  return createHmac('sha256', secret).update(SESSION_PAYLOAD).digest('hex')
}

export function verifyFamilySessionToken(token: string | undefined): boolean {
  const secret = sessionSecret()
  if (!token || !secret) return false
  try {
    const expected = createHmac('sha256', secret).update(SESSION_PAYLOAD).digest('hex')
    const a = Buffer.from(token)
    const b = Buffer.from(expected)
    if (a.length !== b.length) return false
    return timingSafeEqual(a, b)
  } catch {
    return false
  }
}

export function familyPasscodeMatches(input: string): boolean {
  const expected = process.env.FAMILY_PASSCODE
  if (!expected) return false
  const a = Buffer.from(input.trim())
  const b = Buffer.from(expected)
  if (a.length !== b.length) return false
  return timingSafeEqual(a, b)
}

export async function isFamilySession(): Promise<boolean> {
  const cookieStore = await cookies()
  return verifyFamilySessionToken(cookieStore.get(COOKIE_NAME)?.value)
}

export const familySessionCookie = {
  name: COOKIE_NAME,
  maxAge: 60 * 60 * 24 * 120, // 120 days
} as const
