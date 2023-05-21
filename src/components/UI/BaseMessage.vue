<template>
  <div class="container">
    <p class="title">{{ title }}</p>
    <p class="message">{{ message }}</p>
    <div class="share">
      <button class="likes-container" @click="likeMessage">
        <font-awesome-icon icon="fa-solid fa-heart" :class="{ liked: likedByUser }" />
        <span>{{ likes }}</span>
      </button>

      <div class="comments-container">
        <font-awesome-icon icon="fa-solid fa-comment" />
        <span>{{ comments.length }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['author', 'title', 'message', 'likes', 'comments'],
  data() {
    return {
      likedByUser: false
    }
  },
  methods: {
    likeMessage() {
      this.likedByUser = !this.likedByUser
    }
  }
}
</script>

<style>
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

.img {
  display: none;
}

.title {
  font-weight: 600;
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

.likes-container {
  border: none;
  background: none;
  font-size: inherit;
  cursor: pointer;
}

.likes-container svg,
.comments-container svg {
  color: var(--colour-light-grey);
}

.likes-container svg.liked {
  color: var(--colour-red);
}
</style>
