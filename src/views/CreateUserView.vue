<template>
  <main>
    <create-user-form></create-user-form>
  </main>
</template>

<script>
import TheCreateUserForm from '../components/auth/TheCreateUserForm.vue'

export default {
  components: {
    'create-user-form': TheCreateUserForm
  }
}
</script>
