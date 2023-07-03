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
      children: [
        {
          path: '/dashboard/new-message',
          name: 'new-message',
          component: () => import('../components/messages/TheNewMessageForm.vue')
        },
        {
          path: '/dashboard/new-client',
          name: 'new-client',
          component: () => import('../components/messages/TheNewClientForm.vue')
        }
      ],
      meta: { requiresAuth: true }
    },
    {
      path: '/clients',
      name: 'clients',
      component: () => import('../views/ClientsView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/account-settings',
      name: 'account-settings',
      component: () => import('../views/AccountSettingsView.vue'),
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

    return { y: 0 }
  }
})

router.beforeEach(function (to, from, next) {
  const store = useAuthStore()

  if (to.meta.requiresAuth && store.isLoggedIn) {
    next()
  } else if (to.meta.requiresAuth && !store.isLoggedIn) {
    next({ name: 'sign-in' })
  } else {
    next()
  }
})

export default router
