<template>
  <main>
    <div class="not-found">
      <h1>404 Not Found</h1>
      <img :src="img" alt="FilmsDB error" draggable="false" />
      <h2>the page was remove or not exist</h2>
      <router-link class="main-button" to="/home">go home</router-link>
    </div>
  </main>
</template>

<script>
export default {
  name: "NotFound",
  data() {
    return {
      img: require("@/assets/icons/empty-data.svg"),
    };
  },
};
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 0 13vw;
  height: 100%;
  width: 100%;
}

img {
  width: 10rem;
  height: 10rem;
  pointer-events: none;
}
h1 {
  text-transform: capitalize;
}
</style>
