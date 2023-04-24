<script lang="ts" setup>
import Cell from '../parts/Cell.vue'
import { weekdays } from '../../resources/date'
import { useCalendarStore } from '../../stores/calendar'
import { useEventsStore } from '../../stores/events'
import { CalendarCell } from '../../types/date'

const calendarStore = useCalendarStore()
const eventsStore = useEventsStore()

const onWheel = (ev: WheelEvent) => {
  ev.deltaY < 0
    ? calendarStore.decrementMonth()
    : calendarStore.incrementMonth()
}

const onCell = (item: CalendarCell) => {
  eventsStore.openCreateModal({
    year: item.year,
    month: item.month,
    day: item.num,
  })
}
</script>

<template>
  <div
    role="presentation"
    class="month"
    :class="{ active: calendarStore.isSwiping }"
    id="main-calendar"
    @wheel.passive="onWheel"
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
          class="cell"
          v-for="item in row"
          :key="`${item.num}-${index}`"
          :is-neighbour="item.isNeighbour"
          :is-today="item.isToday"
          :long-num="!!item?.child"
          :events="item?.events ?? []"
          @click:default="onCell(item)"
          @click:neighbour="onCell(item)"
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
  font-size: 11px;

  & > * {
    text-align: center;
  }
}

.cell {
  font-size: 12px;
}

.row {
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  border-top: 1px solid var(--hairline);

  &:first-child {
    border-top: 0;
  }
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
