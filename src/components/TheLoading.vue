<template>
  <div>
    <img :src="img" alt="FilmsDB Logo" draggable="false" />
    <h3>{{ text }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Loading...",
    },
  },
  data() {
    return {
      img: require("@/assets/icons/filmsdb.svg"),
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
  flex: 1;
  img {
    filter: invert(1);
    width: 7rem;
    height: 7rem;
    pointer-events: none;
    animation: loop 0.5s infinite ease-in forwards;
  }
}
@keyframes loop {
  to {
    transform: rotate(0deg);
  }
  from {
    transform: rotate(-360deg);
  }
}
</style>
