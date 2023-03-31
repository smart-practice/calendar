<script lang="ts" setup>
defineProps<{
  isNeighbour?: boolean
}>()
</script>

<template>
  <div
    :class="{ neighbour: isNeighbour }"
    @click="isNeighbour ? $emit('neighbour:click') : $emit('click')"
  >
    <slot />
  </div>
</template>

<style scoped>
.neighbour {
  background-color: var(--bg-color-secondary);
  color: #747474;
}
</style>
