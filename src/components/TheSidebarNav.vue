<template>
  <nav>
    <h1>Title</h1>
    <router-link to="">
      <svg v-html="item.svg" viewBox="0 0 24 24"></svg>
      <h2></h2>
    </router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  background-color: $neutral-color;
}
</style>
