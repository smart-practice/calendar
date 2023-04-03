import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { daysOfMonth } from '../utils/date'

export const useCalendarStore = defineStore('calendar', () => {
  const year = ref(new Date().getFullYear())
  const month = ref(new Date().getMonth())
  const day = ref(new Date().getDate())

  const incrementMonth = () => {
    if (month.value === 11) {
      month.value = 0
      year.value++
      return
    }

    month.value++
  }

  const decrementMonth = () => {
    if (month.value === 0) {
      month.value = 11
      year.value--
      return
    }

    month.value--
  }

  const clickNeighbour = (rowIndex: number) => {
    if (rowIndex === 0) {
      decrementMonth()
    } else {
      incrementMonth()
    }
  }

  const cellDaysOfMonth = computed(() =>
    daysOfMonth(new Date(year.value, month.value)),
  )

  const resetDay = () => {
    year.value = new Date().getFullYear()
    month.value = new Date().getMonth()
    day.value = new Date().getDate()
  }

  return {
    year,
    month,
    day,
    cellDaysOfMonth,
    incrementMonth,
    decrementMonth,
    clickNeighbour,
    resetDay,
  }
})
