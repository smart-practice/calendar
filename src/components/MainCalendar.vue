<script lang="ts" setup>
import Cell from './Cell.vue'
import { weekdays } from '../resources/date'
import { useCalendarStore } from '../stores/calendar'
import { useEventsStore } from '../stores/events'

const calendarStore = useCalendarStore()
const eventsStore = useEventsStore()

const onWheel = (ev: WheelEvent) => {
  ev.deltaY < 0
    ? calendarStore.decrementMonth()
    : calendarStore.incrementMonth()
}

const onCell = (day: number) => {
  eventsStore.openCreateModal(day)
}
</script>

<template>
  <div
    role="presentation"
    class="month"
    :class="{ active: calendarStore.isSwiping }"
    id="main-calendar"
    @wheel.prevent="onWheel"
  >
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
          :long-num="!!item?.child"
          :events="item?.events"
          @click:default="onCell(item.num)"
          @click:neighbour="onCell(item.num)"
        >
          {{ item?.child ?? item.num }}
        </Cell>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
  font-weight: 500;
  text-transform: uppercase;
  font-size: 12px;

  & > * {
    text-align: center;
  }
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

.weekday > * {
  padding-left: 8px;
  justify-content: center;
}
</style>
