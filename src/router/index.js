import { createRouter, createWebHistory } from 'vue-router'
import SignInView from '../views/SignInView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: SignInView
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: () => import('../views/ResetPasswordView.vue')
    },
    {
      path: '/create-user',
      name: 'create-user',
      component: () => import('../views/CreateUserView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/dashboard/:id',
      name: 'message-view',
      component: () => import('../views/MessageView.vue')
    }
  ]
})

export default router
