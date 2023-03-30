import { defineStore } from 'pinia'
import { ref } from 'vue'

type Theme = 'light' | 'dark'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<Theme>('light')

  const toggle = () => {
    const value = theme.value === 'dark' ? 'light' : 'dark'
    theme.value = value
    document.documentElement.className = value
  }

  return { theme, toggle }
})
