import { defineStore } from 'pinia'
import { ref } from 'vue'

const SIDEBAR_OPEN = 'sidebar-open'

export const useAppStore = defineStore('app', () => {
  const isSidebarOpen = ref(localStorage.getItem(SIDEBAR_OPEN) && true)

  const toggleSidebar = () => {
    const val = !isSidebarOpen.value
    localStorage.setItem(SIDEBAR_OPEN, String(val))
    isSidebarOpen.value = val
  }

  return {
    isSidebarOpen,
    toggleSidebar,
  }
})
