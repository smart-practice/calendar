<script lang="ts" setup>
defineProps<{
  isNeighbour?: boolean
}>()
</script>

<template>
  <div class="cell" :class="{ neighbour: isNeighbour }">
    <slot />
  </div>
</template>

<style scoped>
.cell {
  transition: background-color 0.2s;
}

.neighbour {
  background-color: var(--bg-color-secondary);
  color: #747474;
}
</style>
