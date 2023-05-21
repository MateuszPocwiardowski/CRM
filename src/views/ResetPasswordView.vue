<template>
  <main>
    <reset-password-form></reset-password-form>
  </main>
</template>

<script>
import TheResetPasswordForm from '../components/auth/TheResetPasswordForm.vue'

export default {
  components: {
    'reset-password-form': TheResetPasswordForm
  }
}
</script>
