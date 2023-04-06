<script lang="ts" setup>
import Cell from './Cell.vue'
import { weekdays } from '../resources/date'
import { useCalendarStore } from '../stores/calendar'
import { useEventsStore } from '../stores/events'

const calendarStore = useCalendarStore()
const eventsStore = useEventsStore()
</script>

<template>
  <div role="presentation" class="month">
    <div role="row" class="weekday">
      <div v-for="day in weekdays" :key="day">{{ day }}</div>
    </div>
    <div role="grid" class="wrapper">
      <div
        v-for="(row, index) in calendarStore.cellDaysOfMonth"
        role="row"
        class="row"
      >
        <Cell
          v-for="item in row"
          :key="`${item.num}-${index}`"
          :is-neighbour="item.isNeighbour"
          :is-today="item.isToday"
          @click="eventsStore.openCreateModal"
        >
          {{ item.num }}
        </Cell>
      </div>
    </div>
  </div>
</template>

<style scoped>
.month {
  flex-grow: 1;
}

.wrapper {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  height: calc(100vh - var(--header-height) - var(--weekday-height));
}

.weekday {
  display: flex;
  height: var(--weekday-height);
  color: var(--tx-secondary);
}

.row {
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  border-top: 1px solid var(--hairline);
}

.weekday > *,
.row > * {
  display: flex;
  width: calc(100% / 7);
  border-right: 1px solid var(--hairline);
  padding-left: 5px;
}
</style>
