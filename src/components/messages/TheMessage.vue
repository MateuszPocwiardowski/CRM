<template>
  <div class="container">
    <div class="heading">
      <p class="title">{{ title }}</p>
      <p class="date-time" v-if="date">{{ dateTime }}</p>
      <p class="author">{{ author }}</p>
    </div>

    <p class="message">{{ message }}</p>

    <div class="share">
      <base-button variant="text" @click="like">
        <font-awesome-icon icon="fa-solid fa-heart" :class="{ liked: liked }" />
        {{ likes?.length }}
      </base-button>

      <base-button variant="text" @click="comment">
        <font-awesome-icon icon="fa-solid fa-comment" />
        {{ comments?.length }}
      </base-button>

      <base-button variant="text" @click="remove" v-if="author === authStore.userName">
        <font-awesome-icon icon="fa-solid fa-trash" />
      </base-button>
    </div>

    <hr v-if="commentsVisibility" class="divider" />

    <the-comments
      v-if="commentsVisibility"
      :id="id"
      :comments="comments"
      :commentsVisibility="commentsVisibility"
    >
    </the-comments>

    <the-new-comment v-if="commentsVisibility" :id="id"></the-new-comment>
  </div>
  <base-loader v-if="loading"></base-loader>
</template>

<script>
import { mapStores } from 'pinia'
import { useAuthStore } from '../../stores/auth'
import { useMessagesStore } from '../../stores/messages'

import TheComments from './TheComments.vue'
import TheNewComment from './TheNewComment.vue'

export default {
  props: ['id', 'date', 'author', 'title', 'message', 'likes', 'comments'],
  components: {
    'the-comments': TheComments,
    'the-new-comment': TheNewComment
  },
  computed: {
    ...mapStores(useAuthStore, useMessagesStore),
    dateTime() {
      return new Date(this.date.seconds * 1000).toLocaleString()
    },
    liked() {
      return this.likes.includes(this.authStore.userName)
    }
  },
  data() {
    return {
      loading: false,
      commentsVisibility: false
    }
  },
  methods: {
    like() {
      const isMessageLiked = this.likes.includes(this.authStore.userName)
      const messageData = { id: this.id, user: this.authStore.userName }

      if (isMessageLiked) {
        this.messagesStore.unlikeMessage(messageData)
      } else {
        this.messagesStore.likeMessage(messageData)
      }

      this.messagesStore.loadMessages()
    },

    comment() {
      this.commentsVisibility = !this.commentsVisibility
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
  border: 1px solid var(--colour-lighter-grey);
  border-radius: var(--border-radius);
  -webkit-border-radius: var(--border-radius);
  padding: 1rem;
}

.heading {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.title {
  flex-basis: 50%;
  font-weight: 600;
}

.date-time {
  flex-basis: 50%;
  text-align: right;
  color: var(--colour-light-grey);
}

.author {
  color: var(--colour-light-grey);
}

.share {
  display: flex;
  justify-content: flex-end;
  gap: 0.25rem;
}

.share svg {
  color: var(--colour-light-grey);
}

.share svg.liked {
  color: var(--colour-red);
}

.divider {
  width: 100%;
  border-top: 1px solid var(--colour-light-grey);
  border-bottom: none;
}
</style>
