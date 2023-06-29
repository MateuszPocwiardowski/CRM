<template>
  <base-wrapper type="column" justify="center" gap="2">
    <sign-in-form></sign-in-form>
    <div class="simple-account">
      <p>Example account:</p>
      <p>Login: test.test@test.pl</p>
      <p>Password: test123</p>
    </div>
  </base-wrapper>
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

.simple-account {
  text-align: center;
}
.simple-account p:first-child {
  font-weight: 500;
}
</style>
