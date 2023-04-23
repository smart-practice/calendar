<script lang="ts" setup>
import { computed, defineProps } from 'vue'

const props = defineProps<{
  modelValue: string
  placeholder?: string
  name?: string
}>()

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})
</script>

<template>
  <textarea
    class="desc"
    :name="props?.name ?? ''"
    :placeholder="props.placeholder"
    v-model="value"
  />
</template>

<style lang="scss" scoped>
.desc {
  margin-top: 15px;
  display: block;
  width: 100%;
  background: transparent;
  border: 1px solid var(--hairline);
  border-radius: 5px;
  padding: 8px;
  color: var(--tx-primary);
  outline: none;
  resize: none;

  &::placeholder {
    color: var(--tx-secondary);
  }
}
</style>
