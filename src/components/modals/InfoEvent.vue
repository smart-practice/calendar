<script setup lang="ts">
import { useEventsStore } from '../../stores/events'
import Modal from '../UI/Modal.vue'
import Button from '../UI/Button.vue'
import { dateTitle } from '../../utils/date'
import { storeToRefs } from 'pinia'

const eventsStore = useEventsStore()

const { currentInfoEvent: info, isInfoModalOpen } = storeToRefs(eventsStore)
</script>

<template>
  <Modal :is-open="isInfoModalOpen" @close="eventsStore.closeInfoModal">
    <div class="wrapper" v-if="info">
      <div class="head">
        <div class="marker" :class="info.type" />
        <span class="title" role="heading">
          {{ info.title }}
        </span>
      </div>
      <p class="desc">
        {{ info.desc }}
      </p>
      <p class="date">
        {{ dateTitle(info.year, info.month, info.day) }}
      </p>
    </div>
    <template v-slot:footer>
      <Button
        v-if="eventsStore.currentInfoEvent!.type !== 'holiday'"
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

.wrapper {
  padding-left: 20px;
}

.title {
  font-size: 18px;
  font-weight: 500;
}

.desc {
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.2;
}

.date {
  margin-top: 10px;
  font-size: 12px;
  font-weight: 500;
}
</style>
