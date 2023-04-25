<script lang="ts" setup>
const { view } = withDefaults(
  defineProps<{
    view?: 'default' | 'text' | 'outlined'
    fullWidth?: boolean
  }>(),
  { view: 'default', fullWidth: false },
)
</script>

<template>
  <button
    class="btn-v"
    :class="[view]"
    :style="{ width: fullWidth ? '100%' : 'auto' }"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.btn-v {
  padding: 8px 16px;
  border: 0;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Google Sans', Roboto, Arial, sans-serif;
  text-transform: capitalize;
}

.default {
  background-color: var(--primary);
  color: #fff;

  &:hover {
    background-color: var(--on-primary);
  }
}

.outlined {
  border: 1px solid var(--hairline);
  background-color: transparent;
  color: var(--tx-middle);

  &:hover {
    background-color: var(--bg-secondary);
  }
}

.text {
  background-color: transparent;
  color: var(--tx-primary);
}
</style>
