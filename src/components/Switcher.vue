<template>
  <label class="switch">
    <input class="checkbox" type="checkbox" hidden />
    <span class="circle" />
  </label>
</template>

<style scoped>
.switch {
  display: flex;
  align-items: center;
  background-color: transparent;
  position: relative;
  height: 24px;
  width: 60px;
  cursor: pointer;
  border: 1px solid var(--icon-primary);
  border-radius: 20px;
}

.circle {
  display: flex;
  position: absolute;
  left: 3px;
  align-items: center;
  padding: 4px 10px;
  width: 20px;
  height: 20px;
  background-color: var(--icon-primary);
  border: 1px solid var(--icon-primary);
  border-radius: 50%;
  transition: left 0.3s;
}

.checkbox:checked + .circle {
  left: 34px;
}
</style>
