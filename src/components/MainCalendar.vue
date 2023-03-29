<script lang="ts" setup>
import { computed } from 'vue'
import Cell from './Cell.vue'
import { daysOfMonth } from '../utils/date'
import { weekdays } from '../resources/date'

const { month, year } = defineProps<{ month: number; year: number }>()

const data = computed(() => {
  const date = new Date(year, month)
  return daysOfMonth(date)
})
</script>

<template>
  <div role="presentation" class="month">
    <div role="row" class="weekday">
      <Cell v-for="day in weekdays" :key="day">{{ day }}</Cell>
    </div>
    <div role="grid" class="wrapper">
      <div v-for="(row, index) in data" :key="index" role="row" class="row">
        <Cell
          v-for="item in row"
          :key="`${item.num}-${index}`"
          :is-neighbour="item.isNeighbour"
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
