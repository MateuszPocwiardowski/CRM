<template>
  <form class="form" @submit.prevent="submit">
    <div class="form-control">
      <input type="text" name="title" placeholder="Title" ref="title" @focus="resetError" />
      <div v-html="warning" v-if="error"></div>
    </div>

    <div class="form-control">
      <input type="text" name="message" placeholder="Message" ref="message" @focus="resetError" />
      <div v-html="warning" v-if="error"></div>
    </div>

    <base-button :type="submit" class="button" v-if="!loading">Publish</base-button>

    <base-loader v-if="loading"></base-loader>
  </form>
</template>

<script>
import { mapStores } from 'pinia'
import { useMessagesStore } from '../../stores/messages'

export default {
  data() {
    return {
      loading: false,
      error: false,
      warning: `<span class="warning">Invalid title or message!</span>`
    }
  },
  methods: {
    resetError() {
      this.error = false
    },
    submit() {
      const enteredTitle = this.$refs.title.value
      const enteredMessage = this.$refs.message.value

      if (enteredTitle.trim() === '' || enteredMessage.trim() === '') {
        this.error = true

        return
      }

      try {
        this.loading = true
        this.messagesStore.addNewMessage({ title: enteredTitle, message: enteredMessage })

        this.$router.replace('/')
        this.loading = false
      } catch (err) {
        this.loading = false
        this.error = true
      }
    }
  },
  computed: {
    ...mapStores(useMessagesStore)
  }
}
</script>

<style scoped>
.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.form-control {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.form-control input {
  width: 100%;
  font-family: inherit;
  font-weight: 1rem;
  font-size: 1rem;
  color: inherit;
  outline: none;
  border: none;
  padding: 1rem;
  border: 1px solid var(--colour-light-grey);
  border-radius: var(--input-border-radius);
  -webkit-border-radius: var(--input-border-radius);
}

.form-control input::placeholder {
  color: inherit;
}

.form-control input:active,
.form-control input:focus {
  outline: none;
}

.button {
  align-self: flex-end;
  text-transform: none;
  margin-bottom: 2rem;
}
</style>
