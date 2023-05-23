<template>
  <main>
    <base-wrapper type="column">
      <p>Route: {{ $route.params.id }}</p>

      <p>Id: {{ messagesStore.message.id }}</p>
      <p>Date: {{ messagesStore.message.date }}</p>
      <p>Author: {{ messagesStore.message.author }}</p>
      <p>Title: {{ messagesStore.message.title }}</p>
      <p>Message: {{ messagesStore.message.message }}</p>
      <p>Likes: {{ messagesStore.message.likes }}</p>
      <p>Comments: {{ messagesStore.message.comments }}</p>

      <!-- <base-message
        v-if="!!messagesStore.message"
        :id="messagesStore.message.id"
        :date="messagesStore.message.date"
        :author="messagesStore.message.author"
        :title="messagesStore.message.title"
        :message="messagesStore.message.message"
        :likes="messagesStore.message.likes"
        :comments="messagesStore.message.comments"
      >
      </base-message> -->
    </base-wrapper>
  </main>
</template>

<script>
import { mapStores } from 'pinia'
import { useMessagesStore } from '../stores/messages'

import BaseMessage from '../components/UI/BaseMessage.vue'

export default {
  components: {
    'base-message': BaseMessage
  },
  created() {
    this.messagesStore.loadMessage({ id: this.$route.params.id })
  },
  computed: {
    ...mapStores(useMessagesStore)
  }
}
</script>
