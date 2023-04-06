<script setup lang="ts">
import Modal from './Modal.vue'
import { useEventsStore } from '../stores/events'

const store = useEventsStore()
</script>

<template>
  <Modal :is-open="store.isCreateModalOpen" @close="store.closeCreateModal" />
</template>
