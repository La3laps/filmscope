<template>
  <nav class="pagination" aria-label="Pagination">
    <button class="nav-btn" @click="goToPage(1)" :disabled="isFirstPage" aria-label="First page">
      «
    </button>
    <button class="nav-btn" @click="prevPage" :disabled="isFirstPage" aria-label="Previous page">
      ‹
    </button>

    <button
      v-for="pageNumber in visiblePages"
      :key="pageNumber"
      class="page-btn"
      :class="{ active: pageNumber === page }"
      @click="goToPage(pageNumber)"
      :aria-current="pageNumber === page ? 'page' : undefined"
    >
      {{ pageNumber }}
    </button>

    <button class="nav-btn" @click="nextPage" :disabled="isLastPage" aria-label="Next page">
      ›
    </button>
    <button
      class="nav-btn"
      @click="goToPage(totalPages)"
      :disabled="isLastPage"
      aria-label="Last page"
    >
      »
    </button>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  page: number
  totalPages: number
  maxVisible?: number
}>()

const emit = defineEmits<{
  (e: 'update:page', value: number): void
}>()

const maxVisible = computed(() => Math.max(5, props.maxVisible ?? 7))
const isFirstPage = computed(() => props.page <= 1)
const isLastPage = computed(() => props.page >= props.totalPages)

const visiblePages = computed(() => {
  const total = Math.max(1, props.totalPages)
  const visible = Math.min(maxVisible.value, total)
  const pages: number[] = []

  const half = Math.floor(visible / 2)
  let start = Math.max(1, props.page - half)
  let end = Math.min(total, props.page + half)

  if (end - start + 1 < visible) {
    if (start === 1) {
      end = Math.min(total, visible)
    } else if (end === total) {
      start = Math.max(1, total - visible + 1)
    }
  }

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  return pages
})

function goToPage(pageNumber: number) {
  const target = Math.min(Math.max(pageNumber, 1), props.totalPages)
  if (target === props.page) return

  emit('update:page', target)
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}

function prevPage() {
  if (!isFirstPage.value) goToPage(props.page - 1)
}

function nextPage() {
  if (!isLastPage.value) goToPage(props.page + 1)
}
</script>

<style scoped>
.pagination {
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 999px;
  background: var(--main-green-dark);
  border: 1px solid var(--main-green-light);
  backdrop-filter: blur(6px);
}

.nav-btn,
.page-btn {
  min-width: 34px;
  height: 34px;
  border-radius: 10px;
  border: 1px solid transparent;
  background: transparent;
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    opacity 0.2s ease;
}

.page-btn.active {
  background: var(--main-green-light);
  color: #000;
}

.nav-btn:hover:not(:disabled),
.page-btn:hover:not(.active) {
  background: rgba(255, 255, 255, 0.16);
  transform: translateY(-1px);
}

.nav-btn:disabled,
.page-btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}
</style>
