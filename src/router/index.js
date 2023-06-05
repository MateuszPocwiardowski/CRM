import { createRouter, createWebHistory } from 'vue-router'

import { useAuthStore } from '../stores/auth'

import SignInView from '../views/SignInView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignInView
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: () => import('../views/ResetPasswordView.vue')
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('../views/SignUpView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/notFound(.*)',
      redirect: '/dashboard'
    }
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { left: 0, top: 0 }
  }
})

router.beforeEach(function (to, from, next) {
  const store = useAuthStore()
  console.log('to.meta.requiresAuth', to.meta.requiresAuth, 'store.isLoggedIn', store.isLoggedIn)

  if (to.meta.requiresAuth && store.isLoggedIn) {
    next()
  } else if (to.meta.requiresAuth && !store.isLoggedIn) {
    next({ name: 'sign-in' })
  } else {
    next()
  }
})

export default router
