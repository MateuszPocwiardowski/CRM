<template>
  <base-wrapper type="column">
    <div class="title" v-if="authStore.userName">
      <span>Hello, </span>
      <span class="user-name">{{ authStore.userName }}</span>
      <span>!</span>
    </div>

    <the-new-message></the-new-message>

    <div v-if="!!messagesStore.data.length" class="messages">
      <base-message
        v-for="entry in messagesStore.data"
        :id="entry.id"
        :date="entry.date"
        :author="entry.author"
        :title="entry.title"
        :message="entry.message"
        :likes="entry.likes"
        :comments="entry.comments"
      >
      </base-message>
    </div>

    <p v-if="!messagesStore.data.length" class="no-messages">No messages yet.</p>
  </base-wrapper>
</template>

<script>
import { mapStores } from 'pinia'
import { useAuthStore } from '../../stores/auth'
import { useMessagesStore } from '../../stores/messages'

import TheNewMessage from '../messages/TheNewMessageForm.vue'
import BaseMessage from '../UI/BaseMessage.vue'

export default {
  components: {
    'the-new-message': TheNewMessage,
    'base-message': BaseMessage
  },
  created() {
    this.messagesStore.loadMessages()
  },
  computed: {
    ...mapStores(useAuthStore, useMessagesStore)
  }
}
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.user-name {
  font-weight: 500;
}

.messages {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.no-messages {
  text-align: center;
  font-weight: 600;
}
</style>
