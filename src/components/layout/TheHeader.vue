<template>
  <nav v-if="isMobile" type="row" justify="space-between">
    <base-logo class="logo"></base-logo>

    <nav v-if="$route.name !== 'sign-in'" class="nav">
      <button v-if="!isMobileNavVisible" @click="openMobileNav">
        <font-awesome-icon icon="fa-solid fa-bars" />
      </button>

      <button v-if="isMobileNavVisible" @click="closeMobileNav">
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </button>
    </nav>

    <nav v-if="$route.name === 'sign-in'" class="nav">
      <base-wrapper type="row">
        <router-link :to="{ name: 'sign-in' }">
          <font-awesome-icon icon="fa-solid fa-right-to-bracket" />
        </router-link>
      </base-wrapper>
    </nav>

    <nav v-if="authStore.isLoggedIn && isMobileNavVisible" class="nav-mobile">
      <base-wrapper type="column" gap=".5">
        <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        <router-link :to="{ name: 'clients' }">Clients</router-link>

        <hr />

        <base-wrapper type="row" gap=".5">
          <base-wrapper type="column" style="padding: 0.5rem 1rem">
            <base-text style="font-weight: 500">{{ authStore.userName }}</base-text>
            <base-text>ID: {{ authStore.userName }}</base-text>
          </base-wrapper>
          <button><font-awesome-icon icon="fa-solid fa-bell" /></button>
        </base-wrapper>

        <router-link :to="{ name: 'account-settings' }">Account settings</router-link>
        <router-link :to="{ name: 'sign-in' }" @click="logout" class="logout-btn">
          Logout
        </router-link>
      </base-wrapper>
    </nav>
  </nav>

  <base-wrapper v-if="!isMobile" type="row" justify="space-between">
    <base-logo class="logo"></base-logo>

    <nav v-if="authStore.isLoggedIn" class="nav">
      <base-wrapper type="row">
        <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        <router-link :to="{ name: 'clients' }">Clients</router-link>

        <button><font-awesome-icon icon="fa-solid fa-bell" /></button>
        <router-link :to="{ name: 'account-settings' }">
          <font-awesome-icon icon="fa-solid fa-user" />
        </router-link>

        <router-link :to="{ name: 'sign-in' }" @click="logout" class="logout-btn">
          <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
        </router-link>
      </base-wrapper>
    </nav>

    <nav v-if="this.$route.name === 'sign-in'" class="nav">
      <base-wrapper type="row">
        <router-link :to="{ name: 'sign-in' }">
          <font-awesome-icon icon="fa-solid fa-right-to-bracket" />
        </router-link>
      </base-wrapper>
    </nav>
  </base-wrapper>
</template>

<script>
import { mapStores } from 'pinia'
import { useAuthStore } from '../../stores/auth'

export default {
  data() {
    return {
      isMobile: window.innerWidth <= 768,
      isMobileNavVisible: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  computed: {
    ...mapStores(useAuthStore)
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth <= 768
    },
    openMobileNav() {
      this.isMobileNavVisible = true
    },
    closeMobileNav() {
      this.isMobileNavVisible = false
    },
    logout() {
      this.authStore.logout()
    }
  }
}
</script>

<style scoped>
.nav-mobile {
  position: absolute;
  top: 2.5rem;
  left: 1rem;
  right: 1rem;
  padding: 1rem;
  border-radius: var(--border-radius);
  -webkit-border-radius: var(--border-radius);
  background-color: var(--colour-light-green);
}

.nav-mobile a,
.nav-mobile button {
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  -webkit-border-radius: var(--border-radius);
}

.nav-mobile a {
  width: 100%;
  font-weight: 500;
}

.nav-mobile hr {
  border: none;
  border-top: 1px solid var(--colour-green);
  width: 100%;
}

.nav-mobile button {
  font-size: 1rem;
  background-color: var(--colour-light-green);
  border: none;
  cursor: pointer;
}

.nav-mobile a.router-link-active {
  background-color: var(--colour-green);
}

.nav-mobile a:hover,
.nav-mobile button:hover {
  background-color: var(--colour-green);
}

.logo,
.nav a,
.nav button {
  padding: 0 1rem;
  font-weight: 600;
  line-height: 2.6;
  border-radius: var(--border-radius);
  -webkit-border-radius: var(--border-radius);
}

.nav a.router-link-active {
  background-color: var(--colour-lighter-green);
}

.nav a:hover {
  background-color: var(--colour-light-green);
}

.nav button {
  font-size: 1rem;
  border: none;
  background: none;
  cursor: pointer;
}

.nav button:hover {
  background-color: var(--colour-light-green);
}
</style>
