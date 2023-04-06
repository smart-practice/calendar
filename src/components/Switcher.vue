<script lang="ts" setup>
import sprite from '../assets/[global].svg'

type Icon = {
  sprite: string
  id: string
  mode: boolean
}

const { checked, icons } = defineProps<{ checked: boolean; icons: Icon[] }>()
</script>

<template>
  <label class="switch">
    <input class="checkbox" type="checkbox" :checked="checked" hidden />
    <span class="circle">
      <svg v-for="icon in icons" :key="icon.id" v-show="icon.mode === checked">
        <use :href="`${sprite}#${icon.id}`" />
      </svg>
    </span>
  </label>
</template>

<style lang="scss" scoped>
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

  svg {
    width: 15px;
    height: 15px;
    fill: black;
    display: flex;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

.checkbox:checked + .circle {
  left: 34px;
}

.svg {
  width: 10px;
  height: 10px;
  fill: white;
}
</style>
