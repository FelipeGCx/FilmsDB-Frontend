<template>
  <div>
    <img :src="img" alt="FilmsDB error" draggable="false" />
    <h1>not find data</h1>
    <router-link class="main-button" to="/">Go Home</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require("@/assets/icons/empty-data.svg"),
    };
  },
};
</script>

<style lang="scss" scoped>
div {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  img {
    width: 10rem;
    height: 10rem;
    pointer-events: none;
  }
  h1 {
    text-transform: capitalize;
  }
}
</style>
