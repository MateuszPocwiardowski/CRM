<template>
  <form class="form" @submit.prevent="submit">
    <div class="form-control">
      <input type="text" name="comment" placeholder="Comment" ref="comment" @focus="resetError" />
      <div v-html="warning" v-if="error"></div>
    </div>

    <base-button variant="primary" :type="submit" class="button" v-if="!loading">
      <font-awesome-icon icon="fa-solid fa-share" />
    </base-button>

    <base-loader v-if="loading"></base-loader>
  </form>
</template>

<script>
import { mapStores } from 'pinia'
import { useAuthStore } from '../../stores/auth'
import { useMessagesStore } from '../../stores/messages'

export default {
  props: ['id'],
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
      const enteredMessage = this.$refs.comment.value

      if (enteredMessage.trim() === '') {
        this.error = true

        return
      }

      try {
        this.loading = true

        this.messagesStore.addComment({
          id: this.id,
          user: this.authStore.userName,
          message: enteredMessage
        })
        this.messagesStore.loadMessages()

        this.loading = false
      } catch (err) {
        this.loading = false
        this.error = true
      }

      this.$refs.comment.value = ''
    }
  }
}
</script>

<style scoped>
.form {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 1rem;
}

.form-control {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.form-control input {
  width: 100%;
  font-weight: 1rem;
  font-size: 1rem;
  color: inherit;
  outline: none;
  border: none;
  padding: 0.5rem;
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
</style>
