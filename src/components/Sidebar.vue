<script lang="ts" setup>
import MiniCalendar from "./MiniCalendar.vue";
</script>

<template>
  <div class="sidebar">
    <MiniCalendar />
  </div>
</template>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  width: 250px;
  border-right: 1px solid var(--hairline);
}
</style>
