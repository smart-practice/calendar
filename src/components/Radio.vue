<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    name: string
    value: string
    checked: boolean
  }>(),
  {},
)
</script>

<template>
  <label class="label">
    <input
      class="radio"
      type="radio"
      :name="props.name"
      :value="props.value"
      :checked="props.checked"
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
