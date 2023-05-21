<template>
  <div class="container">
    <p class="title">{{ title }}</p>
    <p class="message">{{ message }}</p>
    <div class="share">
      <div class="likes-container">
        <font-awesome-icon icon="fa-solid fa-heart" />
        <span>{{ likes }}</span>
      </div>
      <div class="comments-container">
        <font-awesome-icon icon="fa-solid fa-comment" />
        <span>{{ comments.length }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['author', 'title', 'message', 'likes', 'comments']
}
</script>

<style>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid var(--colour-light-grey);
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

.likes-container svg {
  color: var(--colour-red);
}
</style>
