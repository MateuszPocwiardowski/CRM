<template>
  <button class="button" :type="type">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['type']
}
</script>

<style scoped>
.button {
  padding: 0.5rem 1.5rem;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  color: var(--colour-white);
  background-color: var(--colour-green);
  border-radius: 2rem;
  cursor: pointer;
}

.button:hover {
  background-color: var(--colour-dark-green);
}
</style>
