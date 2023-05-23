import { defineStore } from 'pinia'
import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  arrayUnion,
  arrayRemove,
  query,
  where,
  deleteDoc,
  Timestamp
} from 'firebase/firestore'
import { db } from '../firebase'

export const useMessagesStore = defineStore('messages', {
  state: () => {
    return {
      data: [],
      message: {},
      dummyData: [
        {
          id: 1,
          author: 'John Doe',
          date: { seconds: 1684753842, nanoseconds: 157000000 },
          title: 'Traffic Update',
          message: 'Heavy traffic on Main Street. Avoid if possible.',
          likes: ['Jane Smith', 'Mike Johnson', 'Daivd Lee'],
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
          id: 2,
          author: 'Mike Johnson',
          title: 'Public Transportation Strike',
          message: 'Bus and train services will be suspended tomorrow due to a strike.',
          likes: ['Jane Smith', 'Daivd Lee', 'Mike Johnson', 'Emily Browna'],
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
    async loadMessages() {
      try {
        const query = await getDocs(collection(db, 'messages'))
        this.data = query.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      } catch (error) {
        throw new Error(error.message)
      }
    },

    async loadMessage({ id }) {
      try {
        const query = await getDoc(doc(db, 'messages', id))
        this.message = { id, ...query.data() }
      } catch (error) {
        throw new Error(error.message)
      }
    },

    async addNewMessage({ author, title, message }) {
      try {
        await addDoc(collection(db, 'messages'), {
          author,
          message,
          date: Timestamp.fromDate(new Date()),
          title,
          comments: [],
          likes: []
        })
      } catch (error) {
        throw new Error(error.message)
      }
    },

    async removeMessage({ id }) {
      try {
        await deleteDoc(doc(db, 'messages', id))
      } catch (error) {
        throw new Error(error.message)
      }
    },

    async likeMessage({ id, user }) {
      try {
        await updateDoc(doc(db, 'messages', id), {
          likes: arrayUnion(user)
        })
      } catch (error) {
        throw new Error(error.message)
      }
    },

    async unlikeMessage({ id, user }) {
      try {
        await updateDoc(doc(db, 'messages', id), {
          likes: arrayRemove(user)
        })
      } catch (error) {
        throw new Error(error.message)
      }
    }
  }
})
