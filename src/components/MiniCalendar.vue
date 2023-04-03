<script lang="ts" setup>
import { useCalendarStore } from "../stores/calendar";
import {months, weekdays} from "../resources/date";
import Cell from "./Cell.vue";
const store = useCalendarStore()

defineProps<{
  isNeighbour?: boolean
  isToday?: boolean
}>()
const clickNeighbour = (rowIndex: number) => {
  if (rowIndex === 0) {
    store.decrementMonth()
  } else {
    store.incrementMonth()
  }
}
</script>

<template>
  <div class="mini-calendar">
    <div class="calendar-header">
      {{ months[store.month] }} {{ store.year }}
      <div class="weekday">
        <div v-for="day in weekdays" :key="day">{{ day }}</div>
      </div>
    </div>
    <div role="grid" class="wrapper">
      <div v-for="(row, index) in store.cellDaysOfMonth" role="row" class="row">
        <Cell
          v-for="item in row"
          :key="`${item.num}-${index}`"
          :is-neighbour="item.isNeighbour"
          @neighbour:click="clickNeighbour(index)"
        >
          {{ item.num }}
        </Cell>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mini-calendar {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  width: 100%;
}

.calendar-header {
  justify-self: flex-start;
}

.weekday {
  display: flex;
  justify-content: space-between;
  height: var(--weekday-height);
  color: #747474;
  font-size: 10px;
  margin-bottom: 10px;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
