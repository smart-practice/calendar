<script lang='ts' setup>
import arrowSprite from '../assets/[arrows].svg'
import globalSprite from '../assets/[global].svg'
import logo from '../../public/favicon.svg'
import { months } from '../resources/date'
import { useCalendarStore } from '../stores/calendar'
import { useThemeStore } from '../stores/theme'
import Button from './Button.vue'
import { useAppStore } from '../stores/app'

const calendarStore = useCalendarStore()
const themeStore = useThemeStore()
const appStore = useAppStore()
</script>

<template>
  <header class='header'>
    <div class='logo'>
      <div class='menu' @click='appStore.toggleSidebar()'>
        <svg>
          <use :href='`${globalSprite}#menu`' />
        </svg>
      </div>
      <img class='logo-img' :src='logo' alt='logo' />
      <p class='logo-text'>Calendar</p>
    </div>
    <div class='btn-wrapper'>
      <Button
        view='outlined'
        class='today'
        @click='calendarStore.resetDay'
      >
        Today
      </Button>
      <button
        class='btn'
        @click='calendarStore.decrementMonth'
        title='Previous month'
      >
        <svg class='svg'>
          <use :href='`${arrowSprite}#default`' />
        </svg>
      </button>
      <button
        class='btn'
        @click='calendarStore.incrementMonth'
        title='Next month'
      >
        <svg :class='{ svg: true, rotate: true }'>
          <use :href='`${arrowSprite}#default`' />
        </svg>
      </button>
    </div>
    <div class='date'>
      {{ months[calendarStore.month] }} {{ calendarStore.year }}
    </div>
    <Button view='outlined' @click="$emit('open')">Open modal</Button>

    <Button view='outlined' @click='themeStore.toggleTheme'
    >{{ themeStore.theme }}
    </Button>
  </header>
</template>

<style lang='scss' scoped>
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

.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;

  svg {
    fill: #c5c6c7;
  }
}

.menu:hover {
  background-color: #efeff0;

  svg {
    fill: #868686;
  }
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

.today {
  margin-right: 20px;
  margin-left: 40px;
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
