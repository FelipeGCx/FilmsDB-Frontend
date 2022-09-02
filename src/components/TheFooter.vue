<template>
  <footer>
    <img :src="require('@/assets/icons/github.svg')" alt="github icon" />
    <h3>Created by FelipeGCx</h3>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  background-image: url("@/assets/icons/footer.svg");
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
  height: 9rem;
}
</style>
