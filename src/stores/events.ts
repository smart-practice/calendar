import { defineStore } from 'pinia'
import { ref } from 'vue'
import { mockEvents } from '../resources/events'

export const useEventsStore = defineStore('events', () => {
  const isCreateModalOpen = ref(false)
  const items = ref([...mockEvents])

  const openCreateModal = () => {
    isCreateModalOpen.value = true
  }

  const closeCreateModal = () => {
    isCreateModalOpen.value = false
  }

  return { items, isCreateModalOpen, openCreateModal, closeCreateModal }
})
