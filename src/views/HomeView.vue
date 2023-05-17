<template>
  <main class="main">
    <LoginForm></LoginForm>
  </main>
</template>

<script>
import LoginForm from '../components/layout/LoginForm.vue'

export default {
  components: {
    LoginForm
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
