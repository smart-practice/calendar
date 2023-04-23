<script setup lang="ts">
import { ref } from 'vue'
import { useEventsStore } from '../../stores/events'
import Modal from '../UI/Modal.vue'
import Radio from '../UI/Radio.vue'
import { eventTypes } from '../../resources/events'
import Input from '../UI/Input.vue'
import { CalendarEvent } from '../../types/event'
import Button from '../UI/Button.vue'
import Textarea from '../UI/Textarea.vue'

const eventsStore = useEventsStore()

const title = ref('')
const desc = ref('')
const activeType = ref(eventTypes[0])

const reset = () => {
  title.value = ''
  desc.value = ''
  activeType.value = eventTypes[0]
}

const saveEventHandler = () => {
  const shouldAddDesc = activeType.value === 'task'
  const cell = eventsStore.createEventCell

  if (cell) {
    const event: CalendarEvent = {
      id: (eventsStore.items.at(-1)!.id ?? 0) + 1,
      title: title.value || '(No title)',
      type: activeType.value,
      year: cell.year,
      month: cell.month,
      day: cell.day,
    }

    if (shouldAddDesc) {
      event.desc = desc.value
    }

    reset()
    eventsStore.createEvent(event)
  }
}
</script>

<template>
  <Modal
    :is-open="eventsStore.isCreateModalOpen"
    @close="eventsStore.closeCreateModal"
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
      <Textarea
        v-if="activeType === 'task'"
        placeholder="Task description..."
        v-model="desc"
      />
    </div>
    <template v-slot:footer>
      <Button @click="saveEventHandler">Save</Button>
    </template>
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
