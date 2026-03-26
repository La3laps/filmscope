import type { Video } from '@/models'
import { getMovieVideosById } from '@/services/get-movies-service'

export async function getMovieTrailers(movieId: number) {
  const data = await getMovieVideosById(movieId)

  return data.results.filter(
    (video: { type: string; site: string }) => video.type === 'Trailer' && video.site === 'YouTube',
  )
}
