import { defineStore } from 'pinia'
import { ref } from 'vue'
import { mockEvents } from '../resources/events'
import { CalendarEvent, CreateEvent } from '../types/event'

export const useEventsStore = defineStore('events', () => {
  const isCreateModalOpen = ref(false)
  const isInfoModalOpen = ref(false)
  const items = ref([...mockEvents])
  const createEventCell = ref<CreateEvent | null>(null)
  const currentInfoEvent = ref<CalendarEvent | null>(null)

  const openCreateModal = (item: CreateEvent) => {
    createEventCell.value = item
    isCreateModalOpen.value = true
  }

  const closeCreateModal = () => {
    createEventCell.value = null
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
    closeCreateModal()
  }

  const deleteEvent = (id: number) => {
    const idx = items.value.findIndex(i => i.id === id)
    items.value.splice(idx, 1)
    closeInfoModal()
  }

  return {
    items,
    createEventCell,
    currentInfoEvent,
    isCreateModalOpen,
    isInfoModalOpen,
    openCreateModal,
    closeCreateModal,
    openInfoModal,
    closeInfoModal,
    createEvent,
    deleteEvent,
  }
})
