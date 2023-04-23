<script lang="ts" setup>
import { useCalendarStore } from '../../stores/calendar'
import { months, weekdays } from '../../resources/date'
import Cell from '../parts/Cell.vue'
const store = useCalendarStore()

defineProps<{
  isNeighbour?: boolean
  isToday?: boolean
}>()
</script>

<template>
  <div class="mini-calendar">
    <span class="title">{{ months[store.month] }} {{ store.year }}</span>
    <div class="weekday">
      <div v-for="[day] in weekdays" :key="day">{{ day }}</div>
    </div>
    <div role="grid" class="wrapper">
      <div v-for="(row, index) in store.cellDaysOfMonth" role="row" class="row">
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
.mini-calendar {
  color: var(--tx-primary);
}

.title {
  font-size: 12px;
  margin-left: 10px;
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

.cell {
  font-size: 10px;
}

.row {
  display: flex;
}
</style>
