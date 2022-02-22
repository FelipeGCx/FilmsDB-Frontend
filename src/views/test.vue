<template>
  <h1>
      {{ $route.query }}
      </h1>
</template>

<script>
export default {
    mounted() {
        console.log(this.$route.query.page);
    },
}
</script>

<style>

</style>