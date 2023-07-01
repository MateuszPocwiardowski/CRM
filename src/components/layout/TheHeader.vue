<template>
  <base-wrapper type="row" justify="space-between">
    <base-logo class="logo"></base-logo>

    <nav v-if="authStore.isLoggedIn" class="nav">
      <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>

      <router-link :to="{ name: 'sign-in' }" @click="logout" class="logout-btn">
        Logout
      </router-link>
    </nav>

    <nav v-else class="nav">
      <router-link :to="{ name: 'sign-in' }">Login</router-link>
    </nav>
  </base-wrapper>
</template>

<script>
import { mapStores } from 'pinia'
import { useAuthStore } from '../../stores/auth'

export default {
  computed: {
    ...mapStores(useAuthStore)
  },
  methods: {
    logout() {
      this.authStore.logout()
    }
  }
}
</script>

<style scoped>
.nav {
  display: flex;
}

.logo,
.nav a {
  padding: 0 1rem;
  font-weight: 600;
  line-height: 2.6;
}

.nav a.router-link-active {
  background-color: var(--colour-lighter-green);
}

.nav a:hover {
  background-color: var(--colour-light-green);
}
</style>
