<template>
  <header class="header">
    <base-wrapper type="row">
      <base-logo class="logo"></base-logo>

      <nav v-if="authStore.isLoggedIn" class="nav">
        <RouterLink to="/">Dashboard</RouterLink>

        <RouterLink to="/login" @click="logout" class="logout-btn">Logout</RouterLink>
      </nav>

      <nav v-else class="nav">
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </base-wrapper>
  </header>
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
.header {
  width: 100%;
  display: flex;
  justify-content: center;
  line-height: 2.6;
}

.logo {
  font-size: 1rem;
}

.logo-green {
  display: inline;
  font-weight: inherit;
  color: var(--colour-green);
}

.logo h1 {
  font-size: inherit;
}

.nav {
  display: flex;
}

.logo,
.nav a,
span {
  padding: 0 1rem;
  font-weight: 600;
}

.nav a.router-link-active {
  background-color: var(--colour-lighter-green);
}

.nav a:hover {
  background-color: var(--colour-light-green);
}
</style>
