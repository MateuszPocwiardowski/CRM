<template>
  <main class="main">
    <sign-in-form></sign-in-form>
    <div class="simple-account">
      <p>Example account:</p>
      <p>Login: test.test@test.pl</p>
      <p>Password: test123</p>
    </div>
  </main>
</template>

<script>
import TheSignInForm from '../components/auth/TheSignInForm.vue'

export default {
  components: {
    'sign-in-form': TheSignInForm
  }
}
</script>

<style scoped>
/* TODO: Remove login and password to example user */
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
}

.simple-account {
  text-align: center;
}
.simple-account p:first-child {
  font-weight: 500;
}
</style>
