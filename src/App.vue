<template>
  <div class="layout">
    <the-header></the-header>
    <RouterView class="context" />
    <the-footer></the-footer>
  </div>
</template>

<script>
import { RouterView } from 'vue-router'

import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'

export default {
  components: {
    'the-header': TheHeader,
    'the-footer': TheFooter
  }
}
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.context {
  width: 100%;
  display: flex;
  justify-content: center;
  flex: 1 1;
  padding: 3rem 1rem;
}
</style>
