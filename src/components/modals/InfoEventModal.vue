<script setup lang="ts">
import { useEventsStore } from '../../stores/events'
import Modal from '../UI/Modal.vue'

const eventsStore = useEventsStore()
</script>

<template>
  <Modal
    :is-open="eventsStore.isInfoModalOpen"
    @close="eventsStore.closeInfoModal"
  >
    <div class="content">
      {{ eventsStore.currentInfoEvent.type }}
    </div>
  </Modal>
</template>

<style lang="scss" scoped></style>
