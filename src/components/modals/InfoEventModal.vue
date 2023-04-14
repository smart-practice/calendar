<script setup lang="ts">
import { useEventsStore } from '../../stores/events'
import Modal from '../UI/Modal.vue'
import Button from '../UI/Button.vue'

const eventsStore = useEventsStore()
</script>

<template>
  <Modal
    :is-open="eventsStore.isInfoModalOpen"
    @close="eventsStore.closeInfoModal"
  >
    <div class="content">
      <div class="marker" :class="eventsStore.currentInfoEvent.type"></div>
      <span class="title" role="heading">
        {{ eventsStore.currentInfoEvent.title }}
      </span>
    </div>
    <template v-slot:footer>
      <Button
        view="outlined"
        @click="eventsStore.deleteEvent(eventsStore.currentInfoEvent.id)"
      >
        Delete
      </Button>
    </template>
  </Modal>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  align-items: center;
  gap: 5px;
}

.marker {
  width: 10px;
  height: 10px;
  border-radius: 1px;
}

.event {
  background-color: var(--event-bg-primary);
}

.task {
  background-color: var(--task-bg-primary);
}

.reminder {
  background-color: var(--reminder-bg-primary);
}

.holiday {
  background-color: var(--holiday-bg-primary);
}

.title {
  font-size: 18px;
}
</style>
