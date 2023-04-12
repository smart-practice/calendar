<script lang="ts" setup>
import { computed, defineProps } from 'vue'

const props = defineProps<{
  modelValue: string
  name: string
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
  <input type="text" class="input" :name="props.name" v-model="value" />
</template>

<style lang="scss" scoped>
.input {
  position: relative;
  display: block;
  width: 100%;
  height: 35px;
  font-size: 22px;
  margin-bottom: 20px;
  background-color: transparent;
  border: 0;
  outline: none;
  color: var(--tx-primary);
  border-bottom: 1px solid var(--hairline);

  &::placeholder {
    color: var(--tx-secondary);
  }
}
</style>
