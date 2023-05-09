<script lang="ts" setup>
import { computed } from 'vue'
import { useAppStore } from '../../stores/app'
import { useEventsStore } from '../../stores/events'
import { useCalendarStore } from '../../stores/calendar'
import { CreateEvent } from '../../types/event'
import Calendar from '../views/Calendar.vue'
import Button from '../UI/Button.vue'
import { months } from '../../resources/date'

const appStore = useAppStore()
const eventsStore = useEventsStore()
const calendarStore = useCalendarStore()

const date = new Date()

const today: CreateEvent = {
  year: date.getFullYear(),
  month: date.getMonth(),
  day: date.getDate(),
}

const calendarTitle = computed(() => {
  return `${months[calendarStore.month]} ${calendarStore.year}`
})
</script>

<template>
  <div v-show="appStore.isSidebarOpen === '1'" class="sidebar">
    <Button class="btn" @click="eventsStore.openCreateModal(today)" full-width>
      Create
    </Button>
    <Calendar
      class="calendar"
      :title="calendarTitle"
      :cells-matrix="calendarStore.cellDaysOfMonth"
    />
  </div>
</template>

<style scoped>
.sidebar {
  padding: 25px;
  border-right: 1px solid var(--hairline);
  width: 256px;
  height: calc(100vh - var(--header-height));
}

.btn {
  margin-bottom: 20px;
}

.calendar {
  font-size: 10px;
}
</style>
