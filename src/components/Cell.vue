<script lang="ts" setup>
defineProps<{
  isNeighbour?: boolean
}>()
</script>

<template>
  <div :class="{ neighbour: isNeighbour }">
    <slot />
  </div>
</template>

<style scoped>
.neighbour {
  background-color: #f3f3f3;
  color: #747474;
}
</style>
