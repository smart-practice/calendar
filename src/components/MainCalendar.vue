<script lang="ts" setup>
import Cell from './Cell.vue'
import { weekdays } from '../resources/date'
import { useCalendarStore } from '../stores/calendar'

const store = useCalendarStore()

const clickNeighbour = (rowIndex: number) => {
  if (rowIndex === 0) {
    store.decrementMonth()
  } else {
    store.incrementMonth()
  }
}
</script>

<template>
  <div role="presentation" class="month">
    <div role="row" class="weekday">
      <Cell v-for="day in weekdays" :key="day">{{ day }}</Cell>
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
.wrapper {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  height: calc(100vh - var(--header-height) - var(--weekday-height));
}

.weekday {
  display: flex;
  height: var(--weekday-height);
  color: #747474;
}

.row {
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  transition: border-top-color 0.2s;
  border-top: 1px solid var(--hairline);
}

.weekday > *,
.row > * {
  display: flex;
  width: calc(100% / 7);
  transition: border-right-color 0.2s;
  border-right: 1px solid var(--hairline);
  padding-left: 5px;
}
</style>
