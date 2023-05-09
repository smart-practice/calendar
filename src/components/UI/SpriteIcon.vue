<script setup lang="ts">
import globalSprite from '../../assets/sprites/[global].svg'

const { src, name, draw } = withDefaults(
  defineProps<{
    src?: any
    name: string
    draw: 'stroke' | 'fill' | null
    size: 'lg' | 'md'
  }>(),
  {
    src: globalSprite,
    draw: null,
    size: 'md',
  },
)
</script>

<template>
  <svg :class="[size, { [draw]: !!draw }]">
    <use :href="`${src}#${name}`" />
  </svg>
</template>

<style scoped lang="scss">
.stroke {
  stroke: var(--icon-primary);
  transition: stroke 0.1s;
}

.fill {
  fill: var(--icon-primary);
  transition: fill 0.1s;
}

.lg {
  width: 24px;
  height: 24px;
}

.md {
  width: 18px;
  height: 18px;
}
</style>
