<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import AppNavbar from '@/components/AppNavbar.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isVisible = ref(false)
const isOut = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

watch(
  () => route.path,
  (newPath) => {
    if (newPath.startsWith('/film/')) {
      isOut.value = true
    } else {
      isOut.value = false
      isVisible.value = true
    }
  },
  { immediate: true },
)
</script>

<template>
  <div
    :class="{
      'navbar-container': true,
      'animate-in': isVisible && !isOut,
      'animate-out': isOut,
    }"
  >
    <AppNavbar v-if="route.name !== '/film'" />
  </div>
  <router-view />
</template>

<style>
.navbar-container {
  position: relative;
  transform: translateY(-100%);
  transition: transform 0.8s ease-out;
}

.navbar-container.animate-in {
  transform: translateY(0);
}
</style>
