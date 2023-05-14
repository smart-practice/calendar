import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { AppView } from '../types/app'

type SidebarOpenType = '0' | '1'

const SIDEBAR_OPEN = 'sidebar-open'

export const useAppStore = defineStore('app', () => {
  const isSidebarOpen = ref<SidebarOpenType>()
  const appView = ref<AppView>('month')

  const setAppView = (val: AppView) => {
    appView.value = val
  }

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

  const isMonthView = computed(() => appView.value === 'month')
  const isYearView = computed(() => appView.value === 'year')

  return {
    appView,
    isMonthView,
    isYearView,
    setAppView,
    isSidebarOpen,
    toggleSidebarOpen,
    initSidebarOpen,
  }
})
