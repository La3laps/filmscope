import type { MoviesResponse } from '@/typescript/models/in/movies-response'

export async function getPopularMovies(page = 1): Promise<MoviesResponse> {
  const normalizedPage = Math.min(Math.max(Math.round(page), 1), 500)
  const res = await fetch(
    `${import.meta.env.VITE_TMDB_BASE_URL}/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&page=${normalizedPage}`,
  )

  if (!res.ok) {
    throw new Error('Failed to fetch movies')
  }

  const data: MoviesResponse = await res.json()
  return data
}

export async function discoverMovies(
  page = 1,
  sortBy = 'popularity.desc',
): Promise<MoviesResponse> {
  const normalizedPage = Math.min(Math.max(Math.round(page), 1), 500)

  const res = await fetch(
    `${import.meta.env.VITE_TMDB_BASE_URL}/discover/movie?api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }&page=${normalizedPage}&sort_by=${sortBy}`,
  )

  if (!res.ok) {
    throw new Error('Failed to discover movies')
  }

  const data: MoviesResponse = await res.json()
  return data
}

export async function searchMovies(query: string, page = 1) {
  const normalizedPage = Math.min(Math.max(Math.round(page), 1), 500)
  const res = await fetch(
    `${import.meta.env.VITE_TMDB_BASE_URL}/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${encodeURIComponent(query)}&page=${normalizedPage}`,
  )

  if (!res.ok) {
    throw new Error('Failed to search movies')
  }

  return res.json()
}

export async function getMovieVideosById(movieId: number) {
  const res = await fetch(
    `${import.meta.env.VITE_TMDB_BASE_URL}/movie/${movieId}/videos?api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
  )

  if (!res.ok) {
    throw new Error('Failed to fetch movie videos')
  }

  return res.json()
}
