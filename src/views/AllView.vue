<template>
  <main>
    <h1 class="main-title">All Content</h1>
    <div v-for="i in 20" :key="i">
      {{ i }}
    </div>
  </main>
</template>

<script>
export default {
  name: "AllView",
};
</script>

<style scoped>
div {
  font-size: 6rem;
}
</style>
