import { defineStore } from 'pinia'

export const useMessagesStore = defineStore('messages', {
  state: () => {
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
  },
  actions: {
    addNewMessage({ title, message }) {
      this.dummyData.push({ author: 'unkown', title, message, likes: 0, comments: [] })
    }
  }
})
