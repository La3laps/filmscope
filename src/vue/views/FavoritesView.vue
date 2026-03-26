<template>
  <div class="film-grid-container">
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
import { useFavoritesStore } from '@/typescript/stores'

const favoritesStore = useFavoritesStore()
</script>

<style scoped>
.film-grid-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.film-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  max-width: 1200px;
  width: 100%;
}

.fade-in {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
