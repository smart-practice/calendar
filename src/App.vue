<script setup lang="ts">
import { onMounted } from 'vue'
import Header from './components/Header.vue'
import MainCalendar from './components/MainCalendar.vue'
import { useThemeStore } from './stores/theme'
import Sidebar from './components/Sidebar.vue'
import CreateEventModal from './components/CreateEventModal.vue'

const themeStore = useThemeStore()

onMounted(() => {
  themeStore.initUserTheme()
})
</script>

<template>
  <Header />
  <main class="main">
    <Sidebar />
    <MainCalendar />
  </main>
  <CreateEventModal />
</template>

<style>
.main {
  display: flex;
}
</style>
