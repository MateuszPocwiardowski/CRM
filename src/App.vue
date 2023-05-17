<template>
  <TheHeader></TheHeader>

  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/layout/TheHeader.vue'
</script>

<style scoped></style>
