import { defineStore } from 'pinia'
import type { Movie } from '@/typescript/models/types/movies'
import { ref } from 'vue'

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref<Movie[]>([])

  function toggleFavorite(movie: Movie) {
    const exists = favorites.value.find((mov) => mov.id === movie.id)

    if (exists) {
      favorites.value = favorites.value.filter((mov) => mov.id !== movie.id)
    } else {
      favorites.value.push(movie)
    }
  }

  function isFavorite(id: number) {
    return favorites.value.some((mov) => mov.id === id)
  }

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  }
})
