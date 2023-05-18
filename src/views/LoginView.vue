<template>
  <main class="main">
    <TheLoginForm></TheLoginForm>
  </main>
</template>

<script>
import TheLoginForm from '../components/layout/TheLoginForm.vue'

export default {
  components: {
    TheLoginForm
  }
}
</script>

<style scoped>
.main {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3rem 1rem;
}
</style>
