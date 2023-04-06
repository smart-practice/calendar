<template>
  <label class="label">
    <input class="radio" type="radio" name="radio" hidden />
    <span class="label-text"><slot /></span>
  </label>
</template>

<style lang="scss" scoped>
.label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.label-text {
  color: var(--tx-primary);
  padding: 5px;
}

.radio:checked + .label-text {
  color: var(--primary);
  background-color: var(--bg-secondary);
  border-radius: 5px;
}
</style>
