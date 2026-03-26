import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: () => import('@/vue/views/HomeView.vue') },
    {
      path: '/film/:id',
      name: 'film-detail',
      component: () => import('@/vue/views/FilmDetailView.vue'),
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('@/vue/views/FavoritesView.vue'),
    },
  ],
})

export default router
