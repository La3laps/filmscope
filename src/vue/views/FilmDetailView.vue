<template>
  <div class="film-detail">
    <button @click="router.back()">← Retour</button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
