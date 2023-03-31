<script lang="ts" setup>
const { view } = withDefaults(
  defineProps<{
    view?: 'default' | 'text' | 'outlined'
  }>(),
  { view: 'default' },
)
</script>

<template>
  <button class="btn-v" :class="{ [view]: !!view }">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.btn-v {
  padding: 8px 24px;
  border: 0;
  border-radius: 3px;
  font-size: 15px;
}

.default {
  background-color: var(--primary-color);
  color: #fff;
}

.outlined {
  border: 1px solid var(--hairline);
  background-color: transparent;
  color: var(--text-color-primary);
}

.text {
  background-color: transparent;
  color: var(--text-color-primary);
}
</style>
