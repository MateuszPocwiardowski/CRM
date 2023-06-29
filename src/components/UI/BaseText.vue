<template>
  <component :is="type" :class="`base-text ${size}`">
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    type: {
      default: 'span',
      type: String
    },
    size: {
      type: String
    }
  }
}
</script>

<style scoped>
.base-text {
  font-family: inherit;
}

.xs {
  font-size: 0.75rem;
}

.s {
  font-size: 0.875rem;
}

.m {
  font-size: 1rem;
}

.l {
  font-size: 1.125rem;
}

.xl {
  font-size: 1.25rem;
}

.xxl {
  font-size: 1.5rem;
}
</style>
