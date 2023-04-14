<script lang="ts" setup>
import { CalendarEvent } from '../types/event'
import EventLabel from './EventLabel.vue'
import { useEventsStore } from '../stores/events'
import bellIcon from '../assets/bell.svg'
import markIcon from '../assets/mark.svg'
import clockIcon from '../assets/clock.svg'

const { view, longNum } = withDefaults(
  defineProps<{
    isNeighbour?: boolean
    isToday?: boolean
    view?: 'sm' | 'lg'
    longNum?: boolean
    events: CalendarEvent[]
  }>(),
  {
    view: 'lg',
    isNeighbour: false,
    isToday: false,
    longNum: false,
  },
)

const numClass = ['num', { longNum }]

const eventsStore = useEventsStore()

const iconByType = (type: CalendarEvent['type']) => {
  switch (type) {
    case 'event':
      return clockIcon
    case 'task':
      return markIcon
    case 'reminder':
      return bellIcon
    default:
      return ''
  }
}
</script>

<template>
  <div
    :class="[view, { neighbour: isNeighbour, today: isToday }]"
    @click.prevent="
      isNeighbour
        ? $emit('click:neighbour', $event)
        : $emit('click:default', $event)
    "
  >
    <h2 v-if="view === 'lg'" :class="numClass" aria-hidden="true">
      <slot />
    </h2>
    <div v-else :class="numClass">
      <slot />
    </div>
    <div class="body">
      <div v-if="events?.length > 0" class="events">
        <EventLabel
          v-for="event in events"
          :view="event.type"
          :icon="iconByType(event.type)"
          @click.stop="eventsStore.openInfoModal(event)"
        >
          {{ event.title }}
        </EventLabel>
      </div>
    </div>
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
  margin: 0 auto;
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

.body {
  position: relative;
  margin-left: -5px;
}

.events {
  position: absolute;
  top: 0;
  left: 0;
  right: 8px;
  color: #ffffff;

  & > * {
    margin-top: 2px;
  }
}

.sm {
  font-size: 12px;
}

.lg {
  position: relative;
  padding-top: 4px;
  display: flex;
  flex-direction: column;
}
</style>
