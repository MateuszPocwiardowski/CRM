<template>
  <base-wrapper type="column">
    <div class="comments" v-if="comments?.length">
      <div class="comment" v-for="comment in comments">
        <p class="author">{{ comment.author }}</p>
        <p class="message">{{ comment.message }}</p>
      </div>
    </div>
    <p class="no-comments" v-if="!comments?.length">No comments yet.</p>
  </base-wrapper>
</template>

<script>
export default {
  props: ['id', 'comments']
}
</script>

<style scoped>
.wrapper {
  gap: 0.5rem;
}

.comments {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.no-comments {
  align-self: flex-start;
  color: var(--colour-light-grey);
}

.author {
  color: var(--colour-light-grey);
}
</style>
