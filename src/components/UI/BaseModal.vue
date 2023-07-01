<template>
  <div class="backdrop"></div>
  <dialog open class="dialog">
    <header v-if="$slots.header">
      <slot name="header"></slot>
    </header>
    <section>
      <slot></slot>
    </section>
    <menu v-if="$slots.actions">
      <slot name="actions"></slot>
    </menu>
  </dialog>
</template>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

.dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  width: calc(100% - 2rem);
  max-width: 600px;
  border: none;
  transform: translate(-50%, -50%);
  z-index: 11;
}

header {
  background-color: var(--colour-green);
  color: white;
  width: 100%;
}

section {
  padding: 1rem;
}

menu {
  padding: 1rem;
}
</style>
