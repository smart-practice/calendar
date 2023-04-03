<script lang="ts" setup>
const { view } = withDefaults(
  defineProps<{
    isNeighbour?: boolean,
    isToday?: boolean,
    view?: 'sm' | 'lg'
  }>(),
  { view: 'lg' },
)
</script>

<template>
  <div
    :class="[view, { neighbour: isNeighbour }, { today: isToday }]"
    @click="isNeighbour ? $emit('neighbour:click') : $emit('click')"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.sm {
  width: 25px;
  height: 25px;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &.neighbour {
    color: var(--text-color-secondary);
  }

  &.today {
    color: #ffffff;
    background-color: var(--primary-color);
    border-radius: 50%;
  }
}

.lg {
  &.neighbour {
    background-color: var(--bg-color-secondary);
    color: #747474;
  }

  &.today {
  }
}
</style>
