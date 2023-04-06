<script lang="ts" setup>
import globalSprites from '../assets/[global].svg'
import Button from './Button.vue'

const props = withDefaults(defineProps<{ isOpen: boolean }>(), {
  isOpen: false,
})
</script>

<template>
  <div v-if="props.isOpen">
    <div class="overlay" @click="$emit('close')" />
    <div class="dialog">
      <header class="dialog-header">
        <Button class="close" :view="'outlined'" @click="$emit('close')">
          <svg>
            <use :href="`${globalSprites}#close`" />
          </svg>
        </Button>
      </header>
      <div class="dialog-body">
        <slot />
      </div>
      <footer class="dialog-footer">
        <Button @click="$emit('save')">Save</Button>
      </footer>
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
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  display: flex;
  flex-direction: column;
  background: var(--bg-primary);
  color: var(--tx-primary);
  animation-name: dialog;
  animation-duration: 0.3s;
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
    0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);
  min-width: 460px;
  overflow: hidden;
  border-radius: 8px;
}

.dialog-header {
  display: flex;
  background-color: var(--bg-secondary);
  padding: 5px 15px;
}

.close {
  display: flex;
  align-items: center;
  margin-left: auto;
  padding: 5px;
  border: none;
  border-radius: 50%;
  transition: background-color 0.1s;

  &:hover {
    background-color: var(--bg-secondary);
  }

  &:hover svg {
    fill: var(--icon-hover);
  }

  svg {
    width: 24px;
    height: 24px;
    fill: var(--icon-primary);
    cursor: pointer;
    transition: fill 0.1s;
  }
}

.dialog-body {
  padding: 15px 15px 5px;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  padding: 5px 15px 10px;
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
</style>
