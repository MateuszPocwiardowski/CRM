<template>
  <div class="dashboard">
    <base-wrapper type="column">
      <new-message></new-message>
      <div class="messages">
        <base-message
          v-for="entry in dummyData"
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
import TheNewMessage from '../messages/TheNewMessage.vue'
import BaseMessage from '../UI/BaseMessage.vue'

export default {
  components: {
    'new-message': TheNewMessage,
    'base-message': BaseMessage
  },
  data() {
    return {
      dummyData: [
        {
          author: 'John Doe',
          title: 'Traffic Update',
          message: 'Heavy traffic on Main Street. Avoid if possible.',
          likes: 15,
          comments: [
            {
              author: 'Jane Smith',
              message: 'Thanks for the heads-up!'
            },
            {
              author: 'Mike Johnson',
              message: 'Any alternate routes?'
            }
          ]
        },
        {
          author: 'Sarah Thompson',
          title: 'Public Transportation Strike',
          message: 'Bus and train services will be suspended tomorrow due to a strike.',
          likes: 8,
          comments: [
            {
              author: 'David Lee',
              message: 'This is going to be a huge inconvenience.'
            },
            {
              author: 'Emily Brown',
              message: 'Is there any information about when the services will resume?'
            },
            {
              author: 'Mike Johnson',
              message: 'Any alternate routes?'
            }
          ]
        }
      ]
    }
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
