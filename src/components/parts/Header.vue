<script lang="ts" setup>
import { computed } from 'vue'
import arrowSprite from '../../assets/sprites/[arrows].svg'
import globalSprite from '../../assets/sprites/[global].svg'
import { months } from '../../resources/date'
import { useCalendarStore } from '../../stores/calendar'
import { useThemeStore } from '../../stores/theme'
import Button from '../UI/Button.vue'
import Logo from './Logo.vue'
import { useAppStore } from '../../stores/app'
import Switcher from '../UI/Switcher.vue'
import Select from '../UI/Select.vue'

const calendarStore = useCalendarStore()
const themeStore = useThemeStore()
const appStore = useAppStore()

const dateTitle = computed(
  () => `${months[calendarStore.month]} ${calendarStore.year}`,
)

const switcherPayloads = [
  { sprite: globalSprite, id: 'moon', mode: true },
  { sprite: globalSprite, id: 'sun', mode: false },
]
</script>

<template>
  <header class="header" role="banner">
    <div class="menu" role="button" @click="appStore.toggleSidebarOpen">
      <svg>
        <use :href="`${globalSprite}#burger`" />
      </svg>
    </div>
    <logo />
    <div class="btn-wrapper">
      <Button view="outlined" class="today" @click="calendarStore.resetDay">
        Today
      </Button>
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
    <div class="date">{{ dateTitle }}</div>
    <div class="right">
      <Select />
      <Switcher
        :checked="themeStore.theme === 'dark'"
        :icons="switcherPayloads"
        @change="themeStore.toggleTheme"
      />
    </div>
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

.menu {
  display: flex;
  border-radius: 50%;
  cursor: pointer;
  padding: 8px;
  transition: background-color 0.1s;

  svg {
    fill: var(--icon-primary);
    transition: fill 0.1s;
    width: 24px;
    height: 24px;
  }
}

.menu:hover {
  background-color: var(--bg-secondary);

  svg {
    fill: var(--icon-hover);
  }
}

.btn-wrapper {
  display: flex;
  align-items: center;
}

.today {
  margin-right: 20px;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: none;
  background-color: transparent;
  border-radius: 50%;
  transition: background-color 0.1s;

  &:not(:last-child) {
    margin-right: 2px;
  }
}

.btn:hover {
  background-color: var(--bg-secondary);

  .svg {
    stroke: var(--icon-hover);
  }
}

.svg {
  stroke: var(--icon-primary);
  width: 18px;
  height: 18px;
  transition: stroke 0.1s;
}

.date {
  font-family: 'Google Sans', Roboto, Arial, sans-serif;
  font-weight: 400;
  font-size: 22px;
  color: var(--tx-primary);
}

.rotate {
  transform: rotate(180deg);
}

.right {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
}
</style>
