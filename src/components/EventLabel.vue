<script lang="ts" setup>
import { EventType } from '../types/event'

const { view } = withDefaults(
  defineProps<{
    view?: EventType
  }>(),
  {
    view: 'event',
  },
)
</script>

<template>
  <div class="wrapper" role="button" :class="view">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  cursor: pointer;
  padding-left: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 4px;
  transition: background-color 0.1s;
  font-size: 14px;
  font-weight: 500;
}

.event {
  background-color: #039be5;
  &:hover {
    background-color: #018bce;
  }
}

.task {
  background-color: #4285f4;
  &:hover {
    background-color: #316ac7;
  }
}

.reminder {
  background-color: #3f51b5;
  &:hover {
    background-color: #35459f;
  }
}
</style>
