import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { dayCellsByDate } from '../utils/date'
import { useEventsStore } from './events'

export const useCalendarStore = defineStore('calendar', () => {
  const eventsStore = useEventsStore()

  const year = ref(new Date().getFullYear())
  const month = ref(new Date().getMonth())
  const day = ref(new Date().getDate())

  const isSwiping = ref(false)

  const incrementYear = () => year.value++

  const decrementYear = () => year.value--

  const incrementMonth = () => {
    if (month.value === 11) {
      month.value = 0
      year.value++
      return
    }

    isSwiping.value = true

    month.value++

    isSwiping.value = false
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
    dayCellsByDate(new Date(year.value, month.value), eventsStore.items),
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
    isSwiping,
    cellDaysOfMonth,
    incrementYear,
    decrementYear,
    incrementMonth,
    decrementMonth,
    clickNeighbour,
    resetDay,
  }
})
