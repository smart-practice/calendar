<script setup lang="ts">
import { onMounted } from 'vue'

import { useThemeStore } from './stores/theme'
import { useAppStore } from './stores/app'

import Header from './components/parts/Header.vue'
import MainCalendar from './components/views/MainCalendar.vue'
import Sidebar from './components/parts/Sidebar.vue'
import CreateEvent from './components/modals/CreateEvent.vue'
import InfoEvent from './components/modals/InfoEvent.vue'
import Months from './components/views/Months.vue'

const themeStore = useThemeStore()
const appStore = useAppStore()

onMounted(() => {
  themeStore.initUserTheme()
  appStore.initSidebarOpen()
})

// TODO: rewrite to '<component :is>'
</script>

<template>
  <Header />
  <main class="main">
    <Sidebar />
    <MainCalendar v-if="appStore.isMonthView" />
    <Months v-if="appStore.isYearView" />
  </main>

  <!-- Modals -->
  <CreateEvent />
  <InfoEvent />
</template>

<style>
.main {
  display: flex;
}
</style>
