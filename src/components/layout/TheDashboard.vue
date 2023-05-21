<template>
  <div class="dashboard">
    <base-wrapper type="column">
      <new-message></new-message>
      <div class="messages">
        <base-message
          v-for="entry in messagesStore.dummyData"
          :title="entry.title"
          :message="entry.message"
          :likes="entry.likes"
          :comments="entry.comments"
        >
        </base-message>
      </div>
    </base-wrapper>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import TheNewMessage from '../messages/TheNewMessageForm.vue'
import BaseMessage from '../UI/BaseMessage.vue'
import { useMessagesStore } from '../../stores/messages'

export default {
  components: {
    'new-message': TheNewMessage,
    'base-message': BaseMessage
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
</style>
