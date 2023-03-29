<script setup lang="ts">
import Header from './components/Header.vue'
import MainCalendar from './components/MainCalendar.vue'
import Modal from './components/Modal.vue'
import { ref } from 'vue'
const dialogVisible = ref(false)
const showDialog = () => {
  dialogVisible.value = true
}
</script>

<template>
  <Header @click="showDialog" />
  <MainCalendar />
  <Modal v-model:show="dialogVisible">Content</Modal>
</template>
