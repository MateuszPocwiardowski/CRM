<template>
  <div class="wrapper" :class="type">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['type']
}
</script>

<style scoped>
.wrapper {
  align-self: center;
  width: 100%;
  max-width: 1200px;
  display: flex;
}

.row {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}

.column {
  align-self: flex-start;
  flex-direction: column;
  align-items: center;
}
</style>
