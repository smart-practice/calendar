<script lang="ts" setup>
import logo from '../../public/favicon.svg'
</script>

<template>
  <div class="logo" aria-label="Calendar">
    <img :src="logo" class="img" role="presentation" aria-hidden="true" alt />
    <p class="logo-text" role="heading">Calendar</p>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.img {
  width: 30px;
}

.logo-text {
  font-size: 24px;
  text-align: center;
  color: var(--tx-primary);
}
</style>
