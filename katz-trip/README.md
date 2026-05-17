# Katz Family Road Trip Site

A Next.js multi-page trip reference site. Deploy to Vercel in under 2 minutes.

## Pages

- **/** — Overview: hero, route strip, day grid, stats
- **/itinerary** — All 12 days with collapsible detail cards
- **/packing** — Interactive checklist with progress tracker
- **/notes** — Memory prompts + open notes for the road + optional shared photo album link (saved per device in the browser)

## Shared photo album

- **Everyone (recommended):** Set `sharedPhotoAlbumUrl` in `src/data/trip.ts` to your iCloud Shared Album (or any HTTPS gallery URL) and deploy — the home page shows **Shared photo album** for all visitors.
- **This device only:** On **Notes**, paste the same link into **Shared photo album**; it persists in `localStorage` and appears on the home page for that browser only (useful before you update `trip.ts` or if you don’t redeploy yet).

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import the repo — Vercel auto-detects Next.js
4. Click Deploy

That's it. No configuration needed.

## Family vs guest access

The site has two views:

- **Guest (default):** Trip progress, weather, day-by-day overview, and general plans. Lodging names, addresses, confirmation numbers, and reservation actions are hidden.
- **Family (signed in):** Full itinerary with all booking details (same as before).

### Setup (required on Vercel)

Add these environment variables in your Vercel project settings:

- `FAMILY_PASSCODE` - shared passcode your family uses to sign in
- `SESSION_SECRET` - long random string (32+ characters) used to sign the session cookie

Copy `.env.example` to `.env.local` for local development:

```bash
cp .env.example .env.local
# edit FAMILY_PASSCODE and SESSION_SECRET
```

Sign in at `/login`. Use **Sign out** in the nav to return to the guest view.

Sensitive itinerary data (`src/data/trip.ts`) is server-only and is not sent to guest browsers.

## Customizing

Trip days and reservations live in `src/data/trip.ts` (family view only).

Public copy (nav dates, overview phases) is in `src/data/trip-meta.ts`.

Edit days, stops, confirmation numbers, campsites, and `sharedPhotoAlbumUrl` in `trip.ts` / `trip-meta.ts` and redeploy.
