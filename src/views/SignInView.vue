<template>
  <main>
    <sign-in-form></sign-in-form>
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
