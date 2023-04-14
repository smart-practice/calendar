<script lang="ts" setup>
import { EventType } from '../types/event'

const { view } = withDefaults(
  defineProps<{
    view?: EventType
    icon?: string
  }>(),
  {
    view: 'event',
  },
)
</script>

<template>
  <div class="wrapper" role="button" :class="view">
    <img v-if="icon !== ''" class="icon" :src="icon" alt="" />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  cursor: pointer;
  padding: 2px 5px;
  border-radius: 4px;
  transition: background-color 0.1s;
  font-size: 12px;
  font-weight: 500;
  height: 22px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
}

.icon {
  width: 12px;
  height: 12px;
  margin-right: 2px;
}

.event {
  background-color: var(--event-bg-primary);
  &:hover {
    background-color: var(--event-bg-hover);
  }
}

.task {
  background-color: var(--task-bg-primary);
  &:hover {
    background-color: var(--task-bg-hover);
  }
}

.reminder {
  background-color: var(--reminder-bg-primary);
  &:hover {
    background-color: var(--reminder-bg-hover);
  }
}

.holiday {
  background-color: var(--holiday-bg-primary);

  &:hover {
    background-color: var(--holiday-bg-hover);
  }
}
</style>
