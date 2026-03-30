'use client'
import { useEffect, useState } from 'react'
import { sharedPhotoAlbumUrl } from '@/data/trip'
import { getStoredPhotoAlbumUrl, setStoredPhotoAlbumUrl } from '@/lib/photoAlbum'
import styles from './page.module.css'

const PROMPTS = [
  'Best meal of the trip?',
  'Favorite wildlife sighting',
  'Hardest hike / best view',
  'Funniest moment',
  'Kids\' favorite day',
  'Unexpected discovery',
  'One thing to do again',
  'One thing to skip next time',
]

export default function Notes() {
  const [notes, setNotes] = useState<Record<string, string>>({})
  const [freeNote, setFreeNote] = useState('')
  const [albumUrlInput, setAlbumUrlInput] = useState('')

  useEffect(() => {
    setAlbumUrlInput(getStoredPhotoAlbumUrl() ?? '')
  }, [])

  return (
    <div className={styles.wrap}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Trip Notes</h1>
        <p className={styles.pageSub}>Capture memories as you go</p>
      </div>

      {/* Shared album link */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Shared photo album</h2>
        <p className={styles.albumHelp}>
          Paste an iCloud Shared Album or gallery link (Google Photos, etc.). It opens in a new tab from
          the home page.
        </p>
        <label className={styles.albumLabel} htmlFor="album-url">
          Link (saved on this device)
        </label>
        <input
          id="album-url"
          type="url"
          inputMode="url"
          autoComplete="off"
          className={styles.albumInput}
          placeholder="https://www.icloud.com/sharedalbum/…"
          value={albumUrlInput}
          onChange={e => {
            const v = e.target.value
            setAlbumUrlInput(v)
            setStoredPhotoAlbumUrl(v)
          }}
        />
        {sharedPhotoAlbumUrl.trim() ? (
          <p className={styles.albumTripNote}>
            There is also a trip-wide link in the site data — visitors see that everywhere. This field is
            for your own bookmark or testing before updating the trip file.
          </p>
        ) : (
          <p className={styles.albumTripNote}>
            For everyone who visits the site to see the same link without pasting it here, add it to{' '}
            <code className={styles.code}>sharedPhotoAlbumUrl</code> in <code className={styles.code}>src/data/trip.ts</code>{' '}
            and redeploy.
          </p>
        )}
      </section>

      {/* Prompt cards */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Memory prompts</h2>
        <div className={styles.promptGrid}>
          {PROMPTS.map(prompt => (
            <div key={prompt} className={styles.promptCard}>
              <label className={styles.promptLabel}>{prompt}</label>
              <textarea
                className={styles.promptInput}
                value={notes[prompt] || ''}
                onChange={e => setNotes(n => ({ ...n, [prompt]: e.target.value }))}
                placeholder="Write here..."
                rows={3}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Free notes */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Open notes</h2>
        <textarea
          className={styles.freeNote}
          value={freeNote}
          onChange={e => setFreeNote(e.target.value)}
          placeholder="Anything else — logistics, funny quotes, things to remember..."
          rows={12}
        />
      </section>

      {/* Important info */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Key info</h2>
        <div className={styles.infoGrid}>
          {[
            { label: 'Fruita Campground', val: 'Site 34 · June 2–3' },
            { label: 'Colter Bay Campground', val: 'Site 48 · June 7' },
            { label: 'Canyon Lodge', val: 'June 8–10' },
            { label: 'Guided Tour', val: 'Cruising the Caldera · #20331373 · 7:45 AM' },
          ].map(info => (
            <div key={info.label} className={styles.infoCard}>
              <p className={styles.infoLabel}>{info.label}</p>
              <p className={styles.infoVal}>{info.val}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
