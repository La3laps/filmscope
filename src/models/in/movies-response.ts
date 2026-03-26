import type { Movie } from '@/models/types'

export type MoviesResponse = {
  page: number
  total_pages: number
  results: Movie[]
}
