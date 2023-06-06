import { defineStore } from 'pinia'
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword
} from 'firebase/auth'
import { auth } from '../firebase'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      isLoggedIn: false,
      userName: ''
    }
  },
  actions: {
    async signIn({ login, password }) {
      try {
        const response = await signInWithEmailAndPassword(auth, login, password)

        if (response?.user) {
          this.isLoggedIn = true

          const [name, surname] = response.user?.email.split('@')[0].split('.')

          this.userName = `${name.charAt(0).toUpperCase() + name.slice(1)} ${
            surname.charAt(0).toUpperCase() + surname.slice(1)
          }`
        }
        // TODO: Check if token expired then logout user and redirect to login form
        // const tokenExpiration = new Date(Date.now() + response?._tokenResponse?.expiresIn * 1000)
        // console.log(new Date())
        // console.log(this.tokenExpiration)
        // console.log(new Date() > this.tokenExpiration)
      } catch (error) {
        throw new Error(error.message)
      }
    },

    async tryLogin() {
      try {
        await onAuthStateChanged(auth, (user) => {
          if (user) {
            this.isLoggedIn = true
          } else {
            this.isLoggedIn = false
          }
        })
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

    async logout() {
      try {
        await signOut(auth)

        this.isLoggedIn = false
        this.userName = ''
      } catch (erorr) {
        throw new Error(error.message)
      }
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
