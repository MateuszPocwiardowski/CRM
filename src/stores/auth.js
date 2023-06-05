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
      userName: null,
      userEmail: null,
      token: null,
      tokenExiration: null
    }
  },
  actions: {
    async signIn({ login, password }) {
      try {
        const response = await signInWithEmailAndPassword(auth, login, password)
        console.log(response)

        if (response?.user) {
          this.isLoggedIn = true
          this.token = response.user?.accessToken
          this.tokenExiration = new Date(Date.now() + response?._tokenResponse?.expiresIn * 1000)

          console.log(new Date())
          console.log(this.tokenExiration)
          // TODO: Check if token expired then logout user and redirect to login form
          console.log(new Date() > this.tokenExiration)
        }

        if (response?.user?.email) {
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
      this.userName = null
      this.userEmail = null
      this.token = null
      this.tokenExiration = null
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
