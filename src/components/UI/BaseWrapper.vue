<template>
  <div
    class="wrapper"
    :class="`${type}`"
    :style="`gap: ${gap}rem; ${type === 'row' ? 'justify-content:' : 'align-items:'} ${justify}`"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      validator: (value) => {
        return ['row', 'column'].includes(value)
      },
      default: 'row',
      type: String
    },
    justify: {
      validator: (value) => {
        return [
          'flex-start',
          'center',
          'flex-end',
          'space-between',
          'space-around',
          'space-evenly'
        ].includes(value)
      },
      default: 'flex-start',
      type: String
    },
    gap: Number
  }
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
  align-items: center;
  align-content: center;
}

.column {
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
}
</style>
