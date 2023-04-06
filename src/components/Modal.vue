<script lang="ts" setup>
const props = withDefaults(defineProps<{ isOpen: boolean }>(), {
  isOpen: false,
})
</script>

<template>
  <div v-show="props.isOpen">
    <div class="overlay" @click="$emit('close')" />
    <div class="dialog">
      <slot />
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
</style>
