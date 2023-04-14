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
.title {
  font-size: 18px;
}
</style>
