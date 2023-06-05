import { defineStore } from 'pinia'
import {
  signInWithEmailAndPassword,
  signOut,
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
      tokenExpiration: null
    }
  },
  actions: {
    async signIn({ login, password }) {
      try {
        const response = await signInWithEmailAndPassword(auth, login, password)
        console.log(response)

        if (response?.user) {
          const token = response.user?.accessToken
          const tokenExpiration = new Date(Date.now() + response?._tokenResponse?.expiresIn * 1000)

          this.isLoggedIn = true
          this.token = token
          this.tokenExpiration = tokenExpiration

          localStorage.setItem('token', token)
          localStorage.setItem('tokenExpiration', tokenExpiration)

          console.log(new Date())
          console.log(this.tokenExpiration)
          // TODO: Check if token expired then logout user and redirect to login form
          console.log(new Date() > this.tokenExpiration)
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

    async tryLogin() {
      const token = localStorage.getItem('token')
      const tokenExpiration = localStorage.getItem('tokenExpiration')

      console.log('token: ', token, ' tokenExpiration: ', tokenExpiration)
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
        this.userName = null
        this.userEmail = null
        this.token = null
        this.tokenExpiration = null

        localStorage.removeItem('token')
        localStorage.removeItem('tokenExpiration')
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
