<template>
  <nav>
    <ul class="breadcrumb-list">
      <li v-for="(route, index) in breadcrumbRoutes" :key="index" class="breadcrumb-item">
        <router-link :to="route.path"> {{ route.name.replace(/-/g, ' ') }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    breadcrumbRoutes() {
      const matchedRoutes = this.$route.matched.filter((route) => route.name)
      return matchedRoutes.map((route) => ({
        path: route.path,
        name: route.name
      }))
    }
  }
}
</script>

<style scoped>
nav {
  align-self: flex-start;
}

.breadcrumb-list {
  display: flex;
  list-style-type: none;
}

.breadcrumb-item {
  font-weight: 500;
  color: var(--colour-grey);
  font-size: 0.8rem;
  text-transform: capitalize;
}

.breadcrumb-item::after {
  content: '>';
  padding: 0 0.2rem;
}

.breadcrumb-item:last-child::after {
  content: '';
}
</style>
