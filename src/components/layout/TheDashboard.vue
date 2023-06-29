<template>
  <base-wrapper type="column" justify="center" gap="1">
    <base-text type="span" size="xxl">Hello, {{ authStore.userName }}!</base-text>

    <base-wrapper type="row" justify="flex-end" gap=".5">
      <router-link :to="{ name: 'new-message' }" class="link"> Message </router-link>
      <router-link :to="{ name: 'new-client' }" class="link"> Client </router-link>
    </base-wrapper>

    <base-wrapper>
      <RouterView />
    </base-wrapper>
  </base-wrapper>
</template>

<script>
import { RouterView } from 'vue-router'
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
  beforeMount() {
    this.messagesStore.loadMessages()
  },
  computed: {
    ...mapStores(useAuthStore, useMessagesStore)
  }
}
</script>

<style scoped>
.link {
  font-size: 1rem;
  font-weight: 500;
  background-color: var(--colour-white);
  color: var(--colour-green);
  border: 2px solid var(--colour-green);
  border-radius: 2rem;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
}

.router-link-active {
  color: var(--colour-white);
  background-color: var(--colour-green);
}

.no-messages {
  text-align: center;
  font-weight: 600;
}
</style>
