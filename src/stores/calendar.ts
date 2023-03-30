import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { daysOfMonth } from '../utils/date'

export const useCalendarStore = defineStore('calendar', () => {
  const year = ref(new Date().getFullYear())
  const month = ref(new Date().getMonth())

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

  const cellDaysOfMonth = computed(() =>
    daysOfMonth(new Date(year.value, month.value)),
  )

  return {
    year,
    month,
    cellDaysOfMonth,
    incrementMonth,
    decrementMonth,
  }
})
