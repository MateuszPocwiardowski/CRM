import { defineStore } from 'pinia'
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword
} from 'firebase/auth'
import { auth } from '../firebase'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      isLoggedIn: false,
      userX: 'Test',
      emailX: ''
    }
  },
  actions: {
    async signIn({ login, password }) {
      try {
        const response = await signInWithEmailAndPassword(auth, login, password)

        if (response.user.accessToken) {
          this.isLoggedIn = true
        }

        if (response.user.email) {
          this.emailX = response.user.email
        }
      } catch (error) {
        throw new Error(error.message)
      }
    },

    async sendPasswordReset({ login }) {
      try {
        const response = await sendPasswordResetEmail(auth, login)
      } catch (error) {
        throw new Error(error.message)
      }
    },

    logout() {
      this.isLoggedIn = false
    },

    async createUser({ login, password }) {
      console.log(login, password)
      try {
        const response = await createUserWithEmailAndPassword(auth, login, password)

        console.log(response)
      } catch (error) {
        throw new Error(error.message)
      }
    }
  }
})
