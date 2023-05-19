import { defineStore } from 'pinia'
import { signInWithEmailAndPassword } from 'firebase/auth'
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
        return { error: true }
      }
    },
    logout() {
      this.isLoggedIn = false
    }
  }
})
