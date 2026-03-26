import type { MoviesResponse, MovieVideosResponse } from '@/models/in'
import { buildUrl, fetchWithCache } from '@/services/cache-request-service'

export function getPopularMovies(page = 1): Promise<MoviesResponse> {
  const normalizedPage = Math.min(Math.max(Math.round(page), 1), 500)

  const url = buildUrl('/movie/popular', {
    page: normalizedPage,
  })

  return fetchWithCache<MoviesResponse>(`popular-${normalizedPage}`, url)
}

export function discoverMovies(page = 1, sortBy = 'popularity.desc'): Promise<MoviesResponse> {
  const normalizedPage = Math.min(Math.max(Math.round(page), 1), 500)

  const url = buildUrl('/discover/movie', {
    page: normalizedPage,
    sort_by: sortBy,
  })

  return fetchWithCache<MoviesResponse>(`discover-${normalizedPage}-${sortBy}`, url)
}

export function searchMovies(query: string, page = 1) {
  const normalizedPage = Math.min(Math.max(Math.round(page), 1), 500)

  const url = buildUrl('/search/movie', {
    query,
    page: normalizedPage,
  })

  return fetchWithCache(`search-${query}-${normalizedPage}`, url)
}

export function getMovieVideosById(movieId: number) {
  const url = buildUrl(`/movie/${movieId}/videos`)

  return fetchWithCache<MovieVideosResponse>(`videos-${movieId}`, url)
}
