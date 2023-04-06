<script lang="ts" setup>
const { view, longNum } = withDefaults(
  defineProps<{
    isNeighbour?: boolean
    isToday?: boolean
    view?: 'sm' | 'lg'
    longNum?: boolean
    // events?: CalendarEvent[]
  }>(),
  {
    view: 'lg',
    isNeighbour: false,
    isToday: false,
    longNum: false,
    // events: () => [],
  },
)

const numClass = ['num', { longNum }]
</script>

<template>
  <div
    :class="[view, { neighbour: isNeighbour, today: isToday }]"
    @click="isNeighbour ? $emit('neighbour:click') : $emit('click')"
  >
    <h2 v-if="view === 'lg'" :class="numClass" aria-hidden="true">
      <slot />
    </h2>
    <div v-else :class="numClass">
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
  font-weight: 400;
  font-size: 14px;

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

.longNum {
  width: auto;
  border-radius: 28%;
  padding: 0 8px;
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
