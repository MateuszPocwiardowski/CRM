<template>
  <main class="main">
    <TheResetPasswordForm></TheResetPasswordForm>
  </main>
</template>

<script>
import TheResetPasswordForm from '../components/layout/TheResetPasswordForm.vue'

export default {
  components: {
    TheResetPasswordForm
  }
}
</script>

<style scoped>
.main {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 3rem 1rem;
}
</style>
