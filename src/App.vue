<script setup lang="ts">
import { ref } from 'vue'
import Header from './components/Header.vue'
import MainCalendar from './components/MainCalendar.vue'
import Modal from './components/Modal.vue'

const dialogVisible = ref(false)
const showDialog = () => {
  dialogVisible.value = true
}
</script>

<template>
  <Header @open="showDialog" />
  <MainCalendar />
  <Modal v-model:show="dialogVisible">Content</Modal>
</template>
