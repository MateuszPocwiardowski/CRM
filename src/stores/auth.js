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
      userName: '',
      userEmail: ''
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
          this.userEmail = response.user.email
          const [name, surname] = response.user.email.split('@')[0].split('.')

          this.userName = `${name.charAt(0).toUpperCase() + name.slice(1)} ${
            surname.charAt(0).toUpperCase() + surname.slice(1)
          }`
        }
      } catch (error) {
        throw new Error(error.message)
      }
    },

    async sendPasswordReset({ login }) {
      try {
        await sendPasswordResetEmail(auth, login)
      } catch (error) {
        throw new Error(error.message)
      }
    },

    logout() {
      this.isLoggedIn = false
    },

    async createUser({ login, password }) {
      try {
        await createUserWithEmailAndPassword(auth, login, password)
      } catch (error) {
        throw new Error(error.message)
      }
    }
  }
})
