import type { Movie } from '../types/movies'

export type MoviesResponse = {
  page: number
  total_pages: number
  results: Movie[]
}
