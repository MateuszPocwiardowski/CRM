<template>
  <button :class="`button-${variant}`" :type="type">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['variant', 'type']
}
</script>

<style scoped>
.button-primary,
.button-secondary {
  font-size: 1rem;
  font-weight: 600;
  border-radius: 2rem;
  border: none;
  cursor: pointer;
}

.button-primary {
  padding: 0.5rem 1.5rem;
  color: var(--colour-white);
  background-color: var(--colour-green);
}

.button-secondary {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  color: inherit;
  padding: 0.25rem 0.5rem;
  background: none;
}

.button-primary:hover {
  background-color: var(--colour-dark-green);
}
</style>
