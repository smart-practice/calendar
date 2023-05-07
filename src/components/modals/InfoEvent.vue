<script setup lang="ts">
import { useEventsStore } from '../../stores/events'
import Modal from '../UI/Modal.vue'
import Button from '../UI/Button.vue'
import { dateTitle } from '../../utils/date'

const eventsStore = useEventsStore()
</script>

<template>
  <Modal
    :is-open="eventsStore.isInfoModalOpen"
    @close="eventsStore.closeInfoModal"
  >
    <div class="wrapper">
      <div class="head">
        <div class="marker" :class="eventsStore.currentInfoEvent!.type" />
        <span class="title" role="heading">
          {{ eventsStore.currentInfoEvent!.title }}
        </span>
      </div>
      <p class="desc">
        {{ eventsStore.currentInfoEvent!.desc }}
      </p>
      <p class="date">
        {{
          dateTitle(
            eventsStore.currentInfoEvent!.year,
            eventsStore.currentInfoEvent!.month,
            eventsStore.currentInfoEvent!.day,
          )
        }}
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
