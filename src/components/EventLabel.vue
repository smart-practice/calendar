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
  <div id="wrapper" role="button" :class="view">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
#wrapper {
  cursor: pointer;
  padding-left: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 5px;
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
