<template>
  <form class="form" @submit.prevent="submit">
    <h3 class="title">Login</h3>
    <div class="form-control">
      <label>Username</label>
      <div class="input-wrapper">
        <font-awesome-icon icon="fa-solid fa-user" />
        <input type="text" name="name" placeholder="Type your username" ref="login" />
      </div>
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
        />
      </div>
    </div>
    <a class="link" href="www.google.pl">Forgot password?</a>
    <base-button :type="submit"> Login </base-button>
  </form>
</template>

<script>
export default {
  methods: {
    async submit() {
      const enteredLogin = this.$refs.login.value
      const enteredPassword = this.$refs.password.value

      console.log(enteredLogin, enteredPassword)
    }
  }
}
</script>

<style scoped>
.form {
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.title {
    font-weight: 600;
    font-size: 1.5rem;
    align-self: center;
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
  padding-bottom: 0.3rem;
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
  padding-bottom: 6px;
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
