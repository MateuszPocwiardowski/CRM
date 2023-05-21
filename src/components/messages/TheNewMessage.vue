<template>
  <form class="form-control" @submit.prevent="submit">
    <div class="input-wrapper">
      <input
        type="text"
        name="post"
        placeholder="Type something..."
        ref="post"
        @focus="resetError"
      />
      <base-button>Publish</base-button>
    </div>
    <div v-html="warning" v-if="error"></div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      error: false,
      warning: `<span class="warning">Invalid message!</span>`
    }
  },
  methods: {
    resetError() {
      this.error = false
    }
  }
}
</script>

<style>
.form-control {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 5rem;
}

.input-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 1rem;
}

.form-control input {
  font-family: inherit;
  font-weight: 1rem;
  font-size: 1rem;
  color: inherit;
  outline: none;
  border: none;
  padding: 1rem;
  border: 1px solid var(--colour-light-grey);
  -webkit-border-radius: 0;
  border-radius: 0;
  width: 100%;
}

.form-control input::placeholder {
  color: inherit;
}

.form-control input:active,
.form-control input:focus {
  outline: none;
}
</style>
