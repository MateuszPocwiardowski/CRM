<template>
  <main>
    <login-form></login-form>
  </main>
</template>

<script>
import TheLoginForm from '../components/auth/TheLoginForm.vue'

export default {
  components: {
    'login-form': TheLoginForm
  }
}
</script>
