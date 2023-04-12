<script setup lang="ts">
import { ref } from 'vue'
import { useEventsStore } from '../stores/events'
import Modal from './Modal.vue'
import Radio from './Radio.vue'
import { eventTypes } from '../resources/events'
import Input from './Input.vue'
import { CalendarEvent } from '../types/event'
import { useCalendarStore } from '../stores/calendar'

const eventsStore = useEventsStore()
const calendarStore = useCalendarStore()

const title = ref('')
const activeType = ref(eventTypes[0])

const saveEventHandler = () => {
  if (title.value !== '') {
    const event: CalendarEvent = {
      id: (eventsStore.items.at(-1)!.id ?? 0) + 1,
      title: title.value,
      type: activeType.value,
      date: new Date(
        calendarStore.year,
        calendarStore.month,
        eventsStore.day as number,
      ),
    }

    eventsStore.createEvent(event)
    eventsStore.closeCreateModal()
  }
}
</script>

<template>
  <Modal
    :is-open="eventsStore.isCreateModalOpen"
    @close="eventsStore.closeCreateModal"
    @save="saveEventHandler"
  >
    <div class="content">
      <Input placeholder="Add title" name="title" v-model="title" />
      <div class="radio-wrapper">
        <Radio
          name="type"
          v-for="title in eventTypes"
          :key="title"
          :value="title"
          v-model="activeType"
        >
          {{ title }}
        </Radio>
      </div>
    </div>
  </Modal>
</template>

<style lang="scss" scoped>
.radio-wrapper {
  display: flex;
  gap: 10px;
}

.content {
  padding-left: 50px;
}
</style>
