import { defineStore } from 'pinia'
import { ref } from 'vue'

type Theme = 'light' | 'dark'

const THEME = 'theme'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<Theme>()

  const getTheme = () => localStorage.getItem(THEME)

  const setTheme = (value: Theme) => {
    localStorage.setItem(THEME, value)
    theme.value = value
    document.documentElement.className = value
  }

  const toggleTheme = () => {
    const activeTheme = localStorage.getItem(THEME) as Theme
    if (activeTheme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  const getMediaPreference = () => {
    const hasDarkPreference = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches

    return hasDarkPreference ? 'dark' : 'light'
  }

  const initUserTheme = () => {
    const initUserTheme = getTheme() || getMediaPreference()
    setTheme(initUserTheme as Theme)
  }

  return { theme, toggleTheme, initUserTheme }
})
