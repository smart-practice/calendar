<script setup lang="ts">
import { ref } from 'vue'
import Header from './components/Header.vue'
import MainCalendar from './components/MainCalendar.vue'
import Modal from './components/Modal.vue'

const dialogVisible = ref(false)
const showDialog = () => {
  dialogVisible.value = true
}

const year = ref(new Date().getFullYear())
const month = ref(new Date().getMonth())

const onPrevMonth = () => {
  if (month.value === 0) {
    month.value = 11
    year.value--
    return
  }

  month.value--
}
const onNextMonth = () => {
  if (month.value === 11) {
    month.value = 0
    year.value++
    return
  }

  month.value++
}
</script>

<template>
  <Header
    :month="month"
    :year="year"
    @open="showDialog"
    @prev="onPrevMonth"
    @next="onNextMonth"
  />
  <MainCalendar :month="month" :year="year" />
  <Modal v-model:show="dialogVisible">Content</Modal>
</template>
