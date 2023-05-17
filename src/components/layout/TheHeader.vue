<template>
  <header class="header">
    <base-wrapper>
      <RouterLink to="/"><h1 class="logo">Vue.js</h1></RouterLink>

      <nav class="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      
    </base-wrapper>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  computed: {
    currentRouteName() {
      return this.$route.name
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

.nav {
  display: flex;
}

.logo,
.nav a {
  padding: 0 1rem;
  font-weight: 600;
}

.nav a.router-link-active {
  /* background-color: var(--colour-lighter-green); */
  border-bottom: 2px solid var(--colour-light-green);
}

.nav a:hover {
  /* background-color: var(--colour-light-green); */
  border-bottom: 2px solid var(--colour-green);
}
</style>
