export const PHOTO_ALBUM_STORAGE_KEY = 'katz-trip-shared-photo-album-url'

export const PHOTO_ALBUM_CHANGED_EVENT = 'katz-trip-photo-album-changed'

function notifyPhotoAlbumChanged() {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new Event(PHOTO_ALBUM_CHANGED_EVENT))
}

export function normalizeAlbumUrl(raw: string): string {
  const t = raw.trim()
  if (!t) return ''
  if (/^https?:\/\//i.test(t)) return t
  return `https://${t}`
}

export function getStoredPhotoAlbumUrl(): string | null {
  if (typeof window === 'undefined') return null
  try {
    const v = localStorage.getItem(PHOTO_ALBUM_STORAGE_KEY)?.trim()
    return v || null
  } catch {
    return null
  }
}

export function setStoredPhotoAlbumUrl(url: string) {
  if (typeof window === 'undefined') return
  try {
    const t = url.trim()
    if (!t) {
      localStorage.removeItem(PHOTO_ALBUM_STORAGE_KEY)
    } else {
      localStorage.setItem(PHOTO_ALBUM_STORAGE_KEY, normalizeAlbumUrl(t))
    }
    notifyPhotoAlbumChanged()
  } catch {
    /* quota / private mode */
  }
}
