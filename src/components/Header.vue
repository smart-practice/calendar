<script lang="ts" setup>
import arrowSprite from '../assets/[arrows].svg'
import logo from '../../public/favicon.svg'
</script>

<template>
  <header class="header">
    <div class="logo">
      <img class="logo-img" :src="logo" alt="logo" />
      <p class="logo-text">Календарь</p>
    </div>
    <div class="btn-wrapper">
      <button class="btn">
        <svg class="svg">
          <use :href="`${arrowSprite}#default`" />
        </svg>
      </button>
      <button class="btn">
        <svg :class="{ svg: true, rotate: true }">
          <use :href="`${arrowSprite}#default`" />
        </svg>
      </button>
    </div>
    <div class="date">Март 2023</div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 10px 20px;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #c5c6c7;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-img {
  width: 30px;
}

.logo-text {
  font-size: 24px;
  text-align: center;
  color: #3c4043;
}

.btn-wrapper {
  display: flex;
  align-items: center;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 5px;
  border: none;
  background-color: #fff;
  border-radius: 50%;
  transition: background-color 0.2s;
}

.btn:hover {
  background-color: #efeff0;

  .svg {
    stroke: #868686;
  }
}

.date {
  font-size: 24px;
  color: #3c4043;
}

.svg {
  stroke: #c5c6c7;
  transition: stroke 0.2s;
}

.rotate {
  transform: rotate(180deg);
}
</style>
