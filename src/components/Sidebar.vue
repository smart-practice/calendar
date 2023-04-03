<script lang="ts" setup>
import MiniCalendar from './MiniCalendar.vue'
import Button from './Button.vue'
</script>

<template>
  <div class="sidebar">
    <Button class="btn" full-width>Create</Button>
    <MiniCalendar />
  </div>
</template>

<style scoped>
.sidebar {
  padding: 25px;
  border-right: 1px solid var(--hairline);
}

.btn {
  margin-bottom: 20px;
}
</style>
