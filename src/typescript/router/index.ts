import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/vue/views/HomeView.vue'
import FilmDetailView from '@/vue/views/FilmDetailView.vue'
import FavoritesView from '@/vue/views/FavoritesView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/film/:id',
      name: 'film-detail',
      component: FilmDetailView,
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesView,
    },
  ],
})

export default router
