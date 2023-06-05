<template>
  <main>
    <sign-up-form></sign-up-form>
  </main>
</template>

<script>
import TheSignUpForm from '../components/auth/TheSignUpForm.vue'

export default {
  components: {
    'sign-up-form': TheSignUpForm
  }
}
</script>
