import { defineStore } from 'pinia'
import { ref } from 'vue'
import { mockEvents } from '../resources/events'
import { CalendarEvent } from '../types/event'

export const useEventsStore = defineStore('events', () => {
  const isCreateModalOpen = ref(false)
  const items = ref([...mockEvents])
  const day = ref<number | null>(null)

  const openCreateModal = (num: number) => {
    day.value = num
    isCreateModalOpen.value = true
  }

  const closeCreateModal = () => {
    day.value = null
    isCreateModalOpen.value = false
  }

  const createEvent = (event: CalendarEvent) => {
    items.value.push(event)
  }

  return {
    items,
    day,
    isCreateModalOpen,
    openCreateModal,
    closeCreateModal,
    createEvent,
  }
})
