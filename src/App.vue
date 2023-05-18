<template>
  <the-header></the-header>

  <RouterView />
</template>

<script>
import { RouterView } from 'vue-router'
import TheHeader from './components/layout/TheHeader.vue'

export default {
  components: {
    'the-header': TheHeader
  },
  data() {
    return {
      isLoggedIn: false
    }
  },
  provide() {
    return {
      isLoggedIn: this.isLoggedIn
    }
  }
}
</script>

<style scoped></style>
