<script lang="ts" setup>
import { useCalendarStore } from '../stores/calendar'
import { months, weekdays } from '../resources/date'
import Cell from './Cell.vue'
const store = useCalendarStore()

defineProps<{
  isNeighbour?: boolean
  isToday?: boolean
}>()
</script>

<template>
  <div class="mini-calendar">
    {{ months[store.month] }} {{ store.year }}
    <div class="weekday">
      <div v-for="day in weekdays" :key="day">{{ day }}</div>
    </div>
    <div role="grid" class="wrapper">
      <div v-for="(row, index) in store.cellDaysOfMonth" role="row" class="row">
        <Cell
          v-for="item in row"
          view="sm"
          :key="`${item.num}-${index}`"
          :is-neighbour="item.isNeighbour"
          @neighbour:click="store.clickNeighbour(index)"
        >
          {{ item.num }}
        </Cell>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mini-calendar {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  width: 100%;
}

.weekday {
  display: flex;
  color: #747474;
  font-size: 10px;
  margin-bottom: 5px;

  & > * {
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.row {
  display: flex;
}
</style>
