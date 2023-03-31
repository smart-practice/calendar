<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Header from './components/Header.vue'
import MainCalendar from './components/MainCalendar.vue'
import Modal from './components/Modal.vue'
import { useThemeStore } from './stores/theme'

const themeStore = useThemeStore()

const dialogVisible = ref(false)
const showDialog = () => {
  dialogVisible.value = true
}

onMounted(() => {
  themeStore.initUserTheme()
})
</script>

<template>
  <Header @open="showDialog" />
  <MainCalendar />
  <Modal v-model:show="dialogVisible">Content</Modal>
</template>
