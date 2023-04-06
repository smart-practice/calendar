<script setup lang="ts">
import { ref } from 'vue'
import { useEventsStore } from '../stores/events'
import Modal from './Modal.vue'
import Radio from './Radio.vue'
import { eventTypes } from '../resources/events'

const store = useEventsStore()

const activeType = ref(eventTypes[0])
</script>

<template>
  <Modal :is-open="store.isCreateModalOpen" @close="store.closeCreateModal">
    <div class="radio-wrapper">
      <Radio
        name="type"
        v-for="title in eventTypes"
        :key="title"
        :value="title"
        :checked="title === activeType"
        @change="activeType = title"
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
