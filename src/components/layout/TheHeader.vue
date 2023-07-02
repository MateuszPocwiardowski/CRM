<template>
  <nav class="nav-mobile">
    <base-logo class="logo"></base-logo>

    <base-wrapper v-if="$route.name === 'sign-in'" type="row" justify="flex-end">
      <router-link class="link" :to="{ name: 'sign-in' }">
        <font-awesome-icon icon="fa-solid fa-right-to-bracket" />
      </router-link>
    </base-wrapper>

    <base-wrapper v-else type="row" justify="flex-end">
      <button v-if="!isMobileNavVisible" class="button" @click="openMobileNav">
        <font-awesome-icon icon="fa-solid fa-bars" />
      </button>

      <button v-else class="button" @click="closeMobileNav">
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </button>
    </base-wrapper>

    <div v-if="authStore.isLoggedIn && isMobileNavVisible" class="menu-mobile">
      <base-wrapper type="column" gap=".5">
        <router-link class="link" :to="{ name: 'dashboard' }">Dashboard</router-link>
        <router-link class="link" :to="{ name: 'clients' }">Clients</router-link>

        <hr />

        <base-wrapper type="row" gap=".5">
          <base-wrapper type="column" style="padding: 0.5rem 1rem">
            <base-text style="font-weight: 500">{{ authStore.userName }}</base-text>
            <base-text>ID: {{ authStore.userName }}</base-text>
          </base-wrapper>
          <button class="button">
            <font-awesome-icon icon="fa-solid fa-bell" />
          </button>
        </base-wrapper>

        <router-link class="link" :to="{ name: 'account-settings' }">
          Account settings
        </router-link>
        <router-link class="link" :to="{ name: 'sign-in' }" @click="logout"> Logout </router-link>
      </base-wrapper>
    </div>
  </nav>

  <nav class="nav">
    <base-logo class="logo"></base-logo>

    <base-wrapper v-if="authStore.isLoggedIn" type="row" justify="flex-end">
      <router-link class="link" :to="{ name: 'dashboard' }">Dashboard</router-link>
      <router-link class="link" :to="{ name: 'clients' }">Clients</router-link>

      <button class="button"><font-awesome-icon icon="fa-solid fa-bell" /></button>
      <router-link class="link" :to="{ name: 'account-settings' }">
        <font-awesome-icon icon="fa-solid fa-user" />
      </router-link>

      <router-link class="link" :to="{ name: 'sign-in' }" @click="logout">
        <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
      </router-link>
    </base-wrapper>

    <base-wrapper v-if="$route.name === 'sign-in'" type="row" justify="flex-end">
      <router-link class="link" :to="{ name: 'sign-in' }">
        <font-awesome-icon icon="fa-solid fa-right-to-bracket" />
      </router-link>
    </base-wrapper>
  </nav>
</template>

<script>
import { mapStores } from 'pinia'
import { useAuthStore } from '../../stores/auth'

export default {
  data() {
    return {
      isMobileNavVisible: false
    }
  },
  computed: {
    ...mapStores(useAuthStore)
  },
  methods: {
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
.nav-mobile,
.nav {
  display: flex;
  justify-content: space-between;
  align-self: center;
  width: 100%;
  max-width: 1200px;
}

.nav-mobile {
  display: flex;

  @media (min-width: 768px) {
    display: none;
  }
}

.nav {
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
}

.logo,
.link,
.button {
  padding: 0 1rem;
  font-weight: 600;
  line-height: 2.6;
  border-radius: var(--border-radius);
  -webkit-border-radius: var(--border-radius);
}

.link.router-link-active {
  background-color: var(--colour-lighter-green);
}

.link:hover {
  background-color: var(--colour-light-green);
}

.button {
  font-size: 1rem;
  border: none;
  background: none;
  cursor: pointer;
}

.button:hover {
  background-color: var(--colour-light-green);
}

.menu-mobile {
  position: absolute;
  top: 3rem;
  left: 1rem;
  right: 1rem;
  padding: 1rem;
  border-radius: var(--border-radius);
  -webkit-border-radius: var(--border-radius);
  background-color: var(--colour-light-green);
}

.menu-mobile .link,
.menu-mobile .button {
  padding: 0 1rem;
  border-radius: var(--border-radius);
  -webkit-border-radius: var(--border-radius);
}

.menu-mobile .link {
  width: 100%;
  font-weight: 500;
}

.menu-mobile hr {
  border: none;
  border-top: 1px solid var(--colour-green);
  width: 100%;
}

.menu-mobile .button {
  font-size: 1rem;
  background-color: var(--colour-light-green);
  border: none;
  cursor: pointer;
}

.menu-mobile .link.router-link-active {
  background-color: var(--colour-green);
}

.menu-mobile .link:hover,
.menu-mobile .button:hover {
  background-color: var(--colour-green);
}
</style>
