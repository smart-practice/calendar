import { defineStore } from 'pinia'
import { ref } from 'vue'
import { mockEvents } from '../resources/events'
import { CalendarEvent } from '../types/event'

export const useEventsStore = defineStore('events', () => {
  const isCreateModalOpen = ref(false)
  const isInfoModalOpen = ref(false)
  const items = ref([...mockEvents])
  const day = ref<number | null>(null)
  const currentInfoEvent = ref<CalendarEvent | null>(null)

  const openCreateModal = (num: number) => {
    day.value = num
    isCreateModalOpen.value = true
  }

  const closeCreateModal = () => {
    day.value = null
    isCreateModalOpen.value = false
  }

  const openInfoModal = (event: CalendarEvent) => {
    currentInfoEvent.value = event
    isInfoModalOpen.value = true
  }

  const closeInfoModal = () => {
    currentInfoEvent.value = null
    isInfoModalOpen.value = false
  }

  const createEvent = (event: CalendarEvent) => {
    items.value.push(event)
  }

  return {
    items,
    day,
    currentInfoEvent,
    isCreateModalOpen,
    isInfoModalOpen,
    openCreateModal,
    closeCreateModal,
    openInfoModal,
    closeInfoModal,
    createEvent,
  }
})
