<template>
  <div class="dashboard">
    <base-wrapper type="column">
      <new-message></new-message>
      <div class="messages">
        <base-message
          v-if="!!messagesStore.data.length"
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

        <p class="no-messages-text" v-if="!messagesStore.data.length">No messages yet.</p>
      </div>
    </base-wrapper>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useMessagesStore } from '../../stores/messages'

import TheNewMessage from '../messages/TheNewMessageForm.vue'
import BaseMessage from '../UI/BaseMessage.vue'

export default {
  components: {
    'new-message': TheNewMessage,
    'base-message': BaseMessage
  },
  created() {
    this.messagesStore.loadMessages()
  },
  computed: {
    ...mapStores(useMessagesStore)
  }
}
</script>

<style scoped>
.dashboard {
  width: 100%;
  display: flex;
  align-content: flex-start;
  justify-content: center;
}

.title {
  text-align: center;
  margin-bottom: 2rem;
}

.messages {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.no-messages-text {
  text-align: center;
  font-weight: 600;
}
</style>
