import { defineStore } from 'pinia'
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../firebase'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      isLoggedIn: false
    }
  },
  actions: {
    async login({ login, password }) {
      try {
        const response = await signInWithEmailAndPassword(auth, login, password)

        if (response.user.accessToken) {
          this.isLoggedIn = true
        }
      } catch {
        throw new Error('Login failed')
      }
    },
    async recover({ login }) {
      try {
        const response = await sendPasswordResetEmail(auth, login)

        console.log(response)
      } catch {
        throw new Error('Recovering password failed')
      }
    },
    logout() {
      this.isLoggedIn = false
    }
  }
})
