<template>
  <form class="form" @submit.prevent="submit">
    <base-wrapper type="column" justify="center">
      <base-text type="h2">Hello!</base-text>
      <base-text type="h4">Welcome back you've been missed!</base-text>
    </base-wrapper>

    <div class="form-control">
      <label for="email">E-mail</label>
      <div class="input-wrapper">
        <font-awesome-icon icon="fa-solid fa-user" />
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Type your e-mail"
          ref="email"
          @focus="resetError"
        />
      </div>
      <div v-html="warning" v-if="error"></div>
    </div>

    <div class="form-control">
      <label for="password">Password</label>
      <div class="input-wrapper">
        <font-awesome-icon icon="fa-solid fa-lock" />
        <input
          id="password"
          type="password"
          name="name"
          placeholder="Type your password"
          ref="password"
          @focus="resetError"
        />
      </div>
      <div v-html="warning" v-if="error"></div>
    </div>

    <router-link class="link" :to="{ name: 'reset-password' }">Forgot password?</router-link>

    <base-button variant="primary" :type="submit" v-if="!loading"> Login </base-button>
    <base-loader v-if="loading"></base-loader>
  </form>
</template>

<script>
import { mapStores } from 'pinia'
import { useAuthStore } from '../../stores/auth'

export default {
  data() {
    return {
      loading: false,
      error: false,
      warning: `<span class="warning">Invalid e-mail or password!</span>`
    }
  },
  computed: {
    ...mapStores(useAuthStore)
  },
  methods: {
    resetError() {
      this.error = false
    },
    async submit() {
      const enteredEmail = this.$refs.email.value
      const enteredPassword = this.$refs.password.value

      if (enteredEmail.trim() === '' || enteredPassword.trim() === '') {
        this.error = true

        return
      }

      try {
        this.loading = true
        await this.authStore.signIn({ login: enteredEmail, password: enteredPassword })

        this.$router.replace({ name: 'dashboard' })
        this.loading = false
      } catch (err) {
        this.loading = false
        this.error = true
      }

      this.$refs.email.value = ''
      this.$refs.password.value = ''
    }
  }
}
</script>

<style scoped>
.form {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-control {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-control label {
  font-weight: 600;
  font-size: 0.8rem;
}

.input-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--colour-light-grey);
}

.input-wrapper svg {
  font-size: 0.85rem;
  color: var(--colour-light-grey);
}

.form-control input {
  font-family: inherit;
  font-weight: 1rem;
  font-size: 1rem;
  color: var(--colour-light-grey);
  outline: none;
  border: none;
  width: 100%;
  margin-left: 0.5rem;
}

.form-control input::placeholder {
  color: var(--colour-light-grey);
}

.form-control input:active,
.form-control input:focus {
  border: none;
  outline: none;
}

.link {
  align-self: flex-end;
  font-size: 0.8rem;
  text-decoration: underline;
}

button {
  margin-top: 0.5rem;
}
</style>
