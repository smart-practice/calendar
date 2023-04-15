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
    <div>
      <div class="head">
        <div class="marker" :class="eventsStore.currentInfoEvent!.type" />
        <span class="title" role="heading">
          {{ eventsStore.currentInfoEvent!.title }}
        </span>
      </div>

      <p class="desc">
        {{ eventsStore.currentInfoEvent!.desc }}
      </p>
    </div>
    <template v-slot:footer>
      <Button
        view="outlined"
        @click="eventsStore.deleteEvent(eventsStore.currentInfoEvent!.id)"
      >
        Delete
      </Button>
    </template>
  </Modal>
</template>

<style lang="scss" scoped>
.head {
  display: flex;
  align-items: center;
}

.marker {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 5px;
}

.desc {
  margin-top: 8px;
  font-size: 13px;
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
