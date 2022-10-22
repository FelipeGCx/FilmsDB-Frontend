<template>
  <footer>
    <img :src="img" alt="github icon" />
    <h3>Created by FelipeGCx</h3>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      img: require("@/assets/icons/github.svg"),
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  // background-image: url("@/assets/icons/footer.svg");
  // background-repeat: no-repeat, repeat;
  // background-size: cover;
  // background-position: center;
  // height: 12rem;
  position: absolute;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  height: $footer-h;
  background-color: $neutral-color;
  width: 100%;
  margin-top: 2rem;
  // padding: 6vw 2rem 3vw 2rem;
  @include mobilesize {
    & {
      // margin-bottom: $footer-h;
      height: $footer-h * 2;
      padding-bottom: $footer-h;
      // bottom: $footer-h !important;
      // padding: 7rem 2rem 6rem 2rem !important;
    }
  }
  img {
    filter: invert(1);
    width: 2.5rem;
    height: 2.5rem;
  }
}
</style>
