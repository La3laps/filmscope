<template>
  <div>
    <div class="film-grid" :class="{ 'fade-in': true }">
      <FilmCard
        v-for="film in favoritesStore.favorites"
        :key="film.id"
        :film="film"
        :isFav="true"
        @toggle-favorite="favoritesStore.toggleFavorite"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import FilmCard from '@/vue/components/FilmCard.vue'
import { useFavoritesStore } from '@/typescript/stores/favorites'

const favoritesStore = useFavoritesStore()
</script>
