<template>
  <div class="container">
    <div class="heading">
      <p class="title">{{ title }}</p>

      <p class="date-time" v-if="date">
        {{ new Date(date.seconds * 1000).toLocaleString() }}
      </p>

      <p class="author">{{ author }}</p>
    </div>

    <p class="message">{{ message }}</p>

    <div class="share">
      <button class="likes-container" @click="like">
        <font-awesome-icon
          icon="fa-solid fa-heart"
          :class="{ liked: likes.includes(authStore.userX) }"
        />
        <span>{{ likes.length }}</span>
      </button>

      <div class="comments-container">
        <font-awesome-icon icon="fa-solid fa-comment" />
        <span>{{ comments.length }}</span>
      </div>

      <button class="trash-container" @click="remove" v-if="author === authStore.userX">
        <font-awesome-icon icon="fa-solid fa-trash" />
      </button>
    </div>
  </div>
  <base-loader v-if="loading"></base-loader>
</template>

<script>
import { mapStores } from 'pinia'
import { useAuthStore } from '../../stores/auth'
import { useMessagesStore } from '../../stores/messages'

export default {
  props: ['id', 'date', 'author', 'title', 'message', 'likes', 'comments'],
  computed: {
    ...mapStores(useAuthStore, useMessagesStore)
  },
  data() {
    return {
      loading: false
    }
  },
  methods: {
    like() {
      if (this.likes.includes(this.authStore.userX)) {
        this.messagesStore.unlikeMessage({ id: this.id, user: this.authStore.userX })
      } else {
        this.messagesStore.likeMessage({ id: this.id, user: this.authStore.userX })
      }

      this.messagesStore.loadMessages()
    },

    remove() {
      this.messagesStore.removeMessage({ id: this.id })
      this.messagesStore.loadMessages()
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid var(--colour-light-grey);
  border-radius: var(--input-border-radius);
  -webkit-border-radius: var(--input-border-radius);
  padding: 1rem;
}

.heading {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.heading > * {
  flex-basis: 50%;
}

.title {
  font-weight: 600;
}

.date-time {
  text-align: right;
  color: var(--colour-light-grey);
}

.author {
  color: var(--colour-light-grey);
}

.share {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

.likes-container,
.comments-container {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.likes-container,
.trash-container {
  border: none;
  background: none;
  font-size: inherit;
  cursor: pointer;
}

.likes-container span,
.comments-container span {
  color: inherit;
}

.likes-container svg,
.comments-container svg,
.trash-container svg {
  color: var(--colour-light-grey);
}

.likes-container svg.liked {
  color: var(--colour-red);
}
</style>
