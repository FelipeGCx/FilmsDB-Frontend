<template>
  <div class="year">
    <the-button-close @btnClicked="$emit('clicked')" />
    <div class="year-div | blur">
      <the-year-input />
      <button class="main-button">Search</button>
    </div>
  </div>
</template>

<script>
import TheButtonClose from "@/components/TheButtonClose.vue";
import TheYearInput from "@/components/TheYearInput.vue";
export default {
  components: { TheButtonClose, TheYearInput },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.year {
  position: fixed;
  width: 100%;
  top: 5.4rem;
  left: 0;
  bottom: 9.4rem;
  .year-div {
    z-index: 3;
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    scroll-behavior: smooth;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    &::-webkit-scrollbar {
      width: 0;
    }
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      height: 100%;
      width: 100%;
      justify-content: center;
      li {
        button {
          background-color: $base-color;
          border: 0.2rem solid $primary-color;
          padding: 0.3rem 1.7rem;
          border-radius: $border-radius;
          //   border-radius: $border-radius;
          a {
            display: flex;
            align-items: center;
            gap: 1rem;
            svg {
              color: $secondary-color;
              width: 2.4rem;
            }
            h2 {
              color: $secondary-color;
              font-size: 1.7rem;
              font-weight: 500;
              font-family: "Montserrat", sans-serif;
            }
          }
        }
      }
    }
  }
}
li {
  font-size: 3rem;
}
</style>
