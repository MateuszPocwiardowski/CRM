<template>
  <form class="form" @submit.prevent="submit">
    <div class="form-control">
      <input type="text" name="title" placeholder="Title" ref="title" @focus="resetError" />
      <div v-if="error" v-html="warning"></div>
    </div>

    <div class="form-control">
      <input type="text" name="message" placeholder="Message" ref="message" @focus="resetError" />
      <div v-if="error" v-html="warning"></div>
    </div>

    <base-button v-if="!loading" variant="primary" :type="submit" class="button">
      Publish
    </base-button>
  </form>
  <base-loader v-if="loading"></base-loader>
</template>

<script>
import { mapStores } from 'pinia'
import { useAuthStore } from '../../stores/auth'
import { useMessagesStore } from '../../stores/messages'

export default {
  data() {
    return {
      loading: false,
      error: false,
      warning: `<span class="warning">Invalid title or message!</span>`
    }
  },
  computed: {
    ...mapStores(useAuthStore, useMessagesStore)
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
        this.messagesStore.addNewMessage({
          author: this.authStore.userName,
          title: enteredTitle,
          message: enteredMessage
        })

        this.messagesStore.loadMessages()
        this.loading = false
        this.$router.push({ name: 'dashboard' })
      } catch (err) {
        this.loading = false
        this.error = true
      }
    }
  }
}
</script>

<style scoped>
.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
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
  padding: 0.5rem;
  border: 1px solid var(--colour-light-grey);
  border-radius: var(--border-radius);
  -webkit-border-radius: var(--border-radius);
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
  margin-top: 0.5rem;
}
</style>
