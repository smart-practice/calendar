import { defineStore } from 'pinia'
import { ref } from 'vue'

type SidebarOpenType = '0' | '1'

const SIDEBAR_OPEN = 'sidebar-open'

export const useAppStore = defineStore('app', () => {
  const isSidebarOpen = ref<SidebarOpenType>()

  const getSidebarOpen = () => localStorage.getItem(SIDEBAR_OPEN)

  const setSidebarOpen = (value: SidebarOpenType) => {
    localStorage.setItem(SIDEBAR_OPEN, value)
    isSidebarOpen.value = value
  }

  const toggleSidebarOpen = () => {
    const activeVal = getSidebarOpen()
    if (activeVal === '1') {
      setSidebarOpen('0')
    } else {
      setSidebarOpen('1')
    }
  }

  const initSidebarOpen = () => {
    const initSidebarOpen = getSidebarOpen() || '1'
    setSidebarOpen(initSidebarOpen as SidebarOpenType)
  }

  return {
    isSidebarOpen,
    toggleSidebarOpen,
    initSidebarOpen,
  }
})
