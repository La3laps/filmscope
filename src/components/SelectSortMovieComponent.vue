<template>
  <div class="sort-container">
    <span class="sort-label">Sort by:</span>
    <select v-model="model" class="sort-select" :disabled="disabled">
      <option v-for="opt in options" :key="opt.value" :value="opt.value">
        {{ opt.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
type SortOption = {
  label: string
  value: string
}

defineProps<{
  disabled?: boolean
}>()

const model = defineModel<string>()

const options: SortOption[] = [
  { label: 'Popularity ▼', value: 'popularity.desc' },
  { label: 'Popularity ▲', value: 'popularity.asc' },
  { label: 'Rating ▼', value: 'vote_average.desc' },
  { label: 'Rating ▲', value: 'vote_average.asc' },
  { label: 'Newest', value: 'release_date.desc' },
  { label: 'Oldest', value: 'release_date.asc' },
]
</script>

<style scoped>
.sort-container {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 7px 14px;
  border-radius: 10px;
  background: var(--main-green-darker);
  border: 1px solid var(--main-green-light);
  backdrop-filter: blur(6px);
}

.sort-label {
  color: white;
  font-weight: 700;
  opacity: 0.9;
  user-select: none;
}

.sort-select {
  appearance: none;
  min-width: 200px;
  height: 18px;
  padding: 0 12px;
  border-radius: 10px;
  border: 1px solid transparent;
  background: transparent;
  color: white;
  font-weight: 700;
  cursor: pointer;
  text-align: center;

  transition:
    transform 0.2s ease,
    background 0.2s ease,
    opacity 0.2s ease;
}

/* Hover effect same as buttons */
.sort-select:hover:not(:disabled) {
  background: #000;
  transform: translateY(-1px);
}

/* Disabled state */
.sort-select:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

/* Dropdown options (limited styling support) */
.sort-select option {
  color: black;
  font-weight: 500;
}
</style>
