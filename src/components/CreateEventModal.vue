<script setup lang="ts">
import { ref } from 'vue'
import { useEventsStore } from '../stores/events'
import Modal from './Modal.vue'
import Radio from './Radio.vue'
import { eventTypes } from '../resources/events'

const eventsStore = useEventsStore()

const activeType = ref(eventTypes[0])

const saveEventHandler = () => {
  // save event here
  eventsStore.closeCreateModal()
}
</script>

<template>
  <Modal
    :is-open="eventsStore.isCreateModalOpen"
    @close="eventsStore.closeCreateModal"
    @save="saveEventHandler"
  >
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
  </Modal>
</template>

<style lang="scss" scoped>
.radio-wrapper {
  display: flex;
  gap: 10px;
}
</style>
