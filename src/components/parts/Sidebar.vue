<script lang="ts" setup>
import MiniCalendar from '../views/MiniCalendar.vue'
import Button from '../UI/Button.vue'
import { useAppStore } from '../../stores/app'
import { useEventsStore } from '../../stores/events'
import { CreateEvent } from '../../types/event'

const appStore = useAppStore()
const eventsStore = useEventsStore()

const date = new Date()
const today: CreateEvent = {
  year: date.getFullYear(),
  month: date.getMonth(),
  day: date.getDate(),
}
</script>

<template>
  <div v-show="appStore.isSidebarOpen === '1'" class="sidebar">
    <Button class="btn" @click="eventsStore.openCreateModal(today)" full-width>
      Create
    </Button>
    <MiniCalendar />
  </div>
</template>

<style scoped>
.sidebar {
  padding: 25px;
  border-right: 1px solid var(--hairline);
}

.btn {
  margin-bottom: 20px;
}
</style>
