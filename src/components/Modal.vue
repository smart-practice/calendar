<script lang="ts" setup>
import Radio from './Radio.vue'
import globalSprites from '../assets/[global].svg'
import Button from './Button.vue'

const props = withDefaults(defineProps<{ isOpen: boolean }>(), {
  isOpen: false,
})
</script>

<template>
  <div v-show="props.isOpen">
    <div class="overlay" @click="$emit('close')" />
    <div class="dialog">
      <div class="dialog-header">
        <Button class="close" :view="'outlined'" @click="$emit('close')">
          <svg>
            <use :href="`${globalSprites}#close`" />
          </svg>
        </Button>
      </div>
      <div class="radio-wrapper">
        <Radio>Мероприятие</Radio>
        <Radio>Задача</Radio>
        <Radio>Напоминание</Radio>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  animation-name: overlay;
  animation-duration: 0.3s;
}

.dialog {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  display: flex;
  flex-direction: column;
  background: var(--bg-primary);
  color: var(--tx-primary);
  padding: 20px;
  animation-name: dialog;
  animation-duration: 0.3s;
}

@keyframes overlay {
  0% {
    background-color: rgba(0, 0, 0, 0);
  }

  100% {
    background-color: rgba(0, 0, 0, 0.5);
  }
}

@keyframes dialog {
  0% {
    opacity: 0;
    transform: translate(-50%, calc(-50% - 30px));
  }

  100% {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}

.dialog-header {
  display: flex;
  margin-bottom: 10px;

  .close {
    display: flex;
    align-items: center;
    margin-left: auto;
    padding: 5px;
    border: none;
    border-radius: 50%;

    svg {
      width: 24px;
      height: 24px;
      fill: var(--icon-primary);
      cursor: pointer;
    }
  }
}

.radio-wrapper {
  display: flex;
  gap: 10px;
}
</style>
