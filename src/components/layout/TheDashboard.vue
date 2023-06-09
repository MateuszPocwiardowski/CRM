<template>
  <base-wrapper type="column" justify="center" gap="1">
    <base-breadcrumbs></base-breadcrumbs>

    <base-wrapper v-if="messagesStore.data.length" type="column" gap=".5">
      <the-message
        v-for="entry in messagesStore.data"
        :id="entry.id"
        :date="entry.date"
        :author="entry.author"
        :title="entry.title"
        :message="entry.message"
        :likes="entry.likes"
        :comments="entry.comments"
      >
      </the-message>
    </base-wrapper>
    <base-text v-else>No messages yet.</base-text>

    <base-wrapper type="row" justify="flex-end">
      <div class="new-item-container">
        <button class="new-item" @click="showModal">
          <font-awesome-icon icon="fa-solid fa-plus" />
        </button>
      </div>
    </base-wrapper>

    <base-modal v-if="modalVisiblity">
      <template #header>
        <base-wrapper justify="flex-end">
          <button class="x-button" @click="hideModal">
            <font-awesome-icon icon="fa-solid fa-xmark" />
          </button>
        </base-wrapper>
      </template>
      <template #default>
        <base-wrapper type="column" gap="1">
          <base-wrapper type="row" justify="center">
            <router-link :to="{ name: 'new-message' }" class="link"> Message </router-link>
            <router-link :to="{ name: 'new-client' }" class="link"> Client </router-link>
          </base-wrapper>

          <RouterView />
        </base-wrapper>
      </template>
    </base-modal>
  </base-wrapper>
</template>

<script>
import { mapStores } from 'pinia'
import { useAuthStore } from '../../stores/auth'
import { useMessagesStore } from '../../stores/messages'

import TheNewMessage from '../messages/TheNewMessageForm.vue'
import TheMessage from '../messages/TheMessage.vue'

export default {
  components: {
    'the-new-message': TheNewMessage,
    'the-message': TheMessage
  },
  beforeMount() {
    this.messagesStore.loadMessages()
  },
  data() {
    return {
      modalVisiblity: false
    }
  },
  computed: {
    ...mapStores(useAuthStore, useMessagesStore)
  },
  methods: {
    showModal() {
      this.$router.push({ name: 'new-message' })
      this.modalVisiblity = true
    },
    hideModal() {
      this.$router.push({ name: 'dashboard' })
      this.modalVisiblity = false
    }
  }
}
</script>

<style scoped>
.new-item-container {
  position: fixed;
  bottom: 1rem;
}

.new-item {
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 50%;
  background-color: var(--colour-green);
  cursor: pointer;
}

@media (min-width: 768px) {
  .new-item {
    width: 4rem;
    height: 4rem;
  }
}

.new-item svg {
  font-size: 1.3rem;
  color: var(--colour-white);
}

@media (min-width: 768px) {
  .new-item svg {
    font-size: 2rem;
  }
}

.link {
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  -webkit-border-radius: var(--border-radius);
}

.router-link-active {
  border: 1px solid var(--colour-green);
  background-color: var(--colour-lighter-green);
}

.x-button {
  background: none;
  border: none;
  font-size: 1.4rem;
  line-height: 1rem;
  padding: 1rem;
  color: var(--colour-white);
  cursor: pointer;
}
</style>
