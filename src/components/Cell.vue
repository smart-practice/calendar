<script lang="ts" setup>
import { CalendarEvent } from '../types/event'

const { view } = withDefaults(
  defineProps<{
    isNeighbour?: boolean
    isToday?: boolean
    view?: 'sm' | 'lg'
    // events?: CalendarEvent[]
  }>(),
  {
    view: 'lg',
    isNeighbour: false,
    isToday: false,
    // events: () => [],
  },
)
</script>

<template>
  <div
    :class="[view, { neighbour: isNeighbour, today: isToday }]"
    @click="isNeighbour ? $emit('neighbour:click') : $emit('click')"
  >
    <h2 v-if="view === 'lg'" class="num" aria-hidden="true">
      <slot />
    </h2>
    <div v-else class="num">
      <slot />
    </div>
    <!--        <div v-if="events.length > 0" class="events"></div>-->
  </div>
</template>

<style lang="scss" scoped>
.num {
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  color: var(--tx-primary);

  &:hover {
    background-color: var(--bg-secondary);
  }
}

.today .num {
  background-color: var(--primary);
  color: #fff;

  &:hover {
    background-color: var(--on-primary);
  }
}

.neighbour .num {
  color: var(--tx-secondary);
}

.sm {
  font-size: 12px;
}

.lg {
  padding-top: 4px;
}
</style>
