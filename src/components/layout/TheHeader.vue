<template>
  <header class="header">
    <base-wrapper>
      <RouterLink to="/"><h1 class="logo">Vue.js</h1></RouterLink>

      <!-- TODO: Change visiblity conditionally when user is logged in/out -->
      <nav class="nav">
        <!-- <nav v-if="isLoggedIn" class="nav"> -->
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <!-- </nav> -->
        <!-- <nav v-else class="nav"> -->
        <RouterLink to="/login">Login</RouterLink>
        <!-- </nav> -->
      </nav>
    </base-wrapper>
  </header>
</template>

<script>
export default {
  inject: ['isLoggedIn'],
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
.nav a,
span {
  padding: 0 1rem;
  font-weight: 600;
}

.nav a.router-link-active {
  background-color: var(--colour-lighter-green);
  /* border-bottom: 2px solid var(--colour-light-green); */
}

.nav a:hover {
  background-color: var(--colour-light-green);
  /* border-bottom: 2px solid var(--colour-green); */
}
</style>
