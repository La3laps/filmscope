<template>
  <header>
    <div class="container">
      <div class="logo">
        <span class="threeD-icon">
          <div class="container-logo">FilmScope</div>
          <div class="container-logo">
            <RotatingTreeIcon />
          </div>
        </span>
      </div>

      <nav>
        <ul>
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/favorites">Favorites</RouterLink>
          </li>
        </ul>
      </nav>
      <SearchBar v-model="searchStore.query" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { useSearchStore } from '@/typescript/stores/search'
import SearchBar from '@/vue/components/SearchBar.vue'
import RotatingTreeIcon from '@/vue/components/RotatingTreeIcon.vue'

const searchStore = useSearchStore()
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 10;
  font-family: 'Work Sans', sans-serif;
}
header {
  background: var(--main-green-dark);
}
.container {
  width: 80%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 12px 0;
}

.logo {
  color: #fff;
  font-weight: 800;
  font-size: 18px;
}

.threeD-icon {
  position: absolute;
  top: 0;
  left: 0;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;

  display: flex;
  gap: 40px;
}

nav li {
  position: relative;
}

nav a {
  color: #ddd;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;

  position: relative;
  padding: 5px 0;

  transition: color 0.2s ease;
}

/* Hover color */
nav a:hover {
  color: #fff;
}

/* Underline animation */
nav a::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;

  height: 2px;
  width: 0%;

  background: #fff;

  transition: width 0.25s ease-in-out;
}

nav a:hover::before {
  width: 100%;
}

/* Active route */
.router-link-active {
  color: #fff;
}

.router-link-active::before {
  width: 100%;
}
</style>
