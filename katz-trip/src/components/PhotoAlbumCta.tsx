'use client'

import { useEffect, useState } from 'react'
import {
  getStoredPhotoAlbumUrl,
  normalizeAlbumUrl,
  PHOTO_ALBUM_CHANGED_EVENT,
  PHOTO_ALBUM_STORAGE_KEY,
} from '@/lib/photoAlbum'
import styles from './PhotoAlbumCta.module.css'

export default function PhotoAlbumCta({ tripUrl }: { tripUrl: string }) {
  const [stored, setStored] = useState<string | null>(null)

  useEffect(() => {
    const refresh = () => setStored(getStoredPhotoAlbumUrl())
    refresh()
    const onStorage = (e: StorageEvent) => {
      if (e.key === PHOTO_ALBUM_STORAGE_KEY || e.key === null) refresh()
    }
    window.addEventListener('storage', onStorage)
    window.addEventListener(PHOTO_ALBUM_CHANGED_EVENT, refresh)
    return () => {
      window.removeEventListener('storage', onStorage)
      window.removeEventListener(PHOTO_ALBUM_CHANGED_EVENT, refresh)
    }
  }, [])

  const raw = (tripUrl.trim() || stored?.trim() || '')
  const href = raw ? normalizeAlbumUrl(raw) : null
  if (!href) return null

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
    >
      📷 Shared photo album
    </a>
  )
}
