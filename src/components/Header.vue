<script lang="ts" setup>
import arrowSprite from '../assets/[arrows].svg'
import logo from '../../public/favicon.svg'
import { months } from '../resources/date'
import { useCalendarStore } from '../stores/calendar'
import { useThemeStore } from '../stores/theme'

const calendarStore = useCalendarStore()
const themeStore = useThemeStore()
</script>

<template>
  <header class="header">
    <div class="logo">
      <img class="logo-img" :src="logo" alt="logo" />
      <p class="logo-text">Calendar</p>
    </div>
    <div class="btn-wrapper">
      <button
        class="btn"
        @click="calendarStore.decrementMonth"
        title="Previous month"
      >
        <svg class="svg">
          <use :href="`${arrowSprite}#default`" />
        </svg>
      </button>
      <button
        class="btn"
        @click="calendarStore.incrementMonth"
        title="Next month"
      >
        <svg :class="{ svg: true, rotate: true }">
          <use :href="`${arrowSprite}#default`" />
        </svg>
      </button>
    </div>
    <div class="date">
      {{ months[calendarStore.month] }} {{ calendarStore.year }}
    </div>
    <button @click="$emit('open')">Open modal</button>
    {{ themeStore.theme }}
    <button @click="themeStore.toggleTheme">Toggle</button>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 10px 20px;
  width: 100%;
  height: var(--header-height);
  background-color: transparent;
  border-bottom: 1px solid var(--hairline);
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-img {
  width: 30px;
}

.logo-text {
  font-size: 24px;
  text-align: center;
  color: var(--text-color-primary);
}

.btn-wrapper {
  display: flex;
  align-items: center;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 5px;
  border: none;
  background-color: transparent;
  border-radius: 50%;
}

.btn:hover {
  background-color: #efeff0;

  .svg {
    stroke: #868686;
  }
}

.date {
  font-size: 24px;
  color: var(--text-color-primary);
}

.svg {
  stroke: #c5c6c7;
}

.rotate {
  transform: rotate(180deg);
}
</style>
