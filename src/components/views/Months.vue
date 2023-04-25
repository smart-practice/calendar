<script lang="ts" setup>
import Calendar from './Calendar.vue'
import { useAppStore } from '../../stores/app'
import { useCalendarStore } from '../../stores/calendar'
import { yearMonths } from '../../utils/date'
import { months } from '../../resources/date'

const appStore = useAppStore()
const calendarStore = useCalendarStore()
</script>

<template>
  <div class="wrapper">
    <div class="months">
      <div class="list" :class="{ center: appStore.isSidebarOpen === '0' }">
        <div
          v-for="(month, index) in yearMonths(calendarStore.year)"
          :key="index"
          class="item"
        >
          <Calendar :title="months[index]" :cells-matrix="month" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  flex-grow: 1;
  height: calc(100vh - var(--header-height));
}

.months {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: auto;
  overflow-x: hidden;
}

.list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 30px;
  width: 100%;
  padding: 15px 90px 20px 40px;

  &.center {
    justify-items: center;
  }
}

.item {
  width: 256px;
  padding: 0 16px;
}

@media (max-width: 1440px) {
  .months {
    padding-right: 30px;
    padding-left: 10px;
  }
}

@media (max-width: 1300px) {
  .months {
    padding-right: 10px;
  }
}

@media (max-width: 1260px) {
  .list:not(.center) {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1060px) {
  .list.center {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1024px) {
  .list:not(.center) {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 820px) {
  .list.center {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
