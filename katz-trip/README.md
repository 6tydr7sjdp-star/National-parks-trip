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

## Customizing

All trip data lives in one file: `src/data/trip.ts`

Edit days, stops, confirmation numbers, campsites, and `sharedPhotoAlbumUrl` there and the whole site updates automatically.
