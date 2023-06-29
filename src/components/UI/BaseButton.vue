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
.button-secondary,
.button-text {
  font-size: 1rem;
  font-weight: 400;
  border-radius: 2rem;
  border: none;
  cursor: pointer;
}

.button-primary,
.button-secondary {
  padding: 0.5rem 1.5rem;
  font-weight: 500;
}

.button-primary {
  color: var(--colour-white);
  background-color: var(--colour-green);
}

.button-primary:hover {
  background-color: var(--colour-dark-green);
}

.button-secondary {
  background-color: var(--colour-white);
  color: var(--colour-green);
  border: 2px solid var(--colour-green);
}

.button-secondary:hover {
  background-color: var(--colour-lighter-green);
}

.button-text {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  color: inherit;
  padding: 0.25rem 0.5rem;
  background: none;
}
</style>
