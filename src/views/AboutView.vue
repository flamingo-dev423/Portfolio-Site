<script setup>
import LatestProject from '../components/LatestProject.vue'
</script>

<template>
  <main>
    <LatestProject />
  </main>
</template>

<style>
@media (min-width: 1024px) {
  /* * {
    border: 1px solid green;
  } */
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
