<script lang="ts" setup>
import { useCalendarStore } from '../../stores/calendar'
import { weekdays } from '../../resources/date'
import Cell from '../parts/Cell.vue'
import { CalendarCell } from '../../types/date'

const store = useCalendarStore()

const props = defineProps<{
  title?: string
  cellsMatrix: Array<CalendarCell[]>
}>()
</script>

<template>
  <div class="calendar">
    <span v-if="props.title" class="title">
      {{ title }}
    </span>
    <div class="weekday">
      <div v-for="[day] in weekdays" :key="day">{{ day }}</div>
    </div>
    <div role="grid" class="wrapper">
      <div v-for="(row, index) in props.cellsMatrix" role="row" class="row">
        <Cell
          class="cell"
          v-for="item in row"
          view="sm"
          :key="`${item.num}-${index}`"
          :is-neighbour="item?.isNeighbour"
          :is-today="item?.isToday"
          :events="[]"
          @click:neighbour="store.clickNeighbour(index)"
        >
          {{ item.num }}
        </Cell>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.calendar {
  color: var(--tx-primary);
  width: 100%;
}

.title {
  font-size: 1.3em;
  margin-left: 10px;
  @include GoogleFont();
}

.weekday {
  display: flex;
  color: #747474;
  font-size: 1em;
  margin-bottom: 5px;
  font-weight: 500;

  & > * {
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.cell {
  font-size: 1em;
}

.weekday,
.row {
  justify-content: space-between;
}

.row {
  display: flex;
}
</style>
