<template>
  <input type="text" class="input" />
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
