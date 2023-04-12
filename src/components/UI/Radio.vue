<script lang="ts" setup>
import { computed, defineProps } from 'vue'

const props = defineProps<{
  value: string
  modelValue: string
  name: string
}>()

defineEmits(['update:modelValue'])

const isChecked = computed(() => {
  return props.modelValue === props.value
})
</script>

<template>
  <label class="label">
    <input
      class="radio"
      type="radio"
      :name="props.name"
      :value="value"
      :checked="isChecked"
      @change="$emit('update:modelValue', props.value)"
      hidden
    />
    <span class="label-text"><slot /></span>
  </label>
</template>

<style lang="scss" scoped>
.label {
  cursor: pointer;
}

.label-text {
  color: var(--tx-secondary);
  padding: 6px 8px;
  transition: background-color 0.2s;
  border-radius: 5px;
  font-size: 14px;
  letter-spacing: 0.25px;
  font-weight: 500;
  text-transform: capitalize;

  &:hover {
    background-color: var(--bg-secondary);
  }
}

.radio:checked + .label-text {
  color: var(--primary);
  background-color: #e0ecfd;

  &:hover {
    background-color: #d7e9fd;
  }
}
</style>
