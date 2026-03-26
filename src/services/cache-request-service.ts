const cache = new Map<string, { data: unknown; timestamp: number }>()
const cacheTime = 3 // in minutes
const TTL = 1000 * 60 * cacheTime

const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

export async function fetchWithCache<T>(key: string, url: string): Promise<T> {
  const now = Date.now()

  if (cache.has(key)) {
    const entry = cache.get(key)!

    if (now - entry.timestamp < TTL) {
      return entry.data as T
    }

    cache.delete(key)
  }

  const res = await fetch(url)

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`)
  }

  const data: T = await res.json()

  cache.set(key, {
    data,
    timestamp: now,
  })

  return data
}

export function buildUrl(path: string, params: Record<string, string | number> = {}) {
  const url = new URL(`${BASE_URL}${path}`)

  url.searchParams.set('api_key', API_KEY)

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, String(value))
  })

  return url.toString()
}
