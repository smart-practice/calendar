<script lang="ts" setup>
import Button from './Button.vue'
import { ref } from 'vue'

const isOpen = ref(false)

const props = defineProps<{
  current: string
  options: Array<{
    title: string
    value: string
  }>
}>()

const close = () => {
  isOpen.value = false
}

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="wrapper" v-click-outside="close">
    <Button class="select" view="outlined" @click="toggle">
      {{ current }}
    </Button>
    <div v-show="isOpen" class="body">
      <ul class="list">
        <li
          v-for="option in props.options"
          class="item"
          role="menuitem"
          @click="
            () => {
              $emit('change', option.value)
              isOpen = false
            }
          "
        >
          {{ option.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  position: relative;
}

.body {
  position: absolute;
  z-index: 9999;
  top: 40px;
  left: 0;
  min-width: 130px;
  color: var(--tx-primary);
  padding: 8px 0;
  border-radius: 5px;
  background-color: var(--bg-primary);
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
}

.list {
  list-style: none;
}

.item {
  cursor: pointer;
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 500;
  @include GoogleFont();

  &:hover {
    background-color: var(--bg-secondary);
  }
}
</style>