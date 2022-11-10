<template>
  <div class="modal || blur" v-show="isOpened">
    <div class="card">
      <img :src="img" alt="FilmsDB Logo" draggable="false" />
      <h3>Loading...</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpened: {
      type: Boolean,
      default: false,
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
.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .card {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
    background-color: $base-third-color;
    border: 0.1rem solid $neutral-color;
    border-radius: $border-radius;
    padding: 2rem 6rem;
    h1 {
      text-transform: capitalize;
      font-weight: 200;
    }
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
}
</style>
