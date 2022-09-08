<template>
  <div class="type">
    <the-button-close @btnClicked="$emit('clicked')" />
    <nav class="types | blur">
      <ul>
        <li>
          <the-charts-circle :percentage="60" :color="'#E91E63'" />
        </li>
        <li>
          <the-charts-circle :percentage="40" :color="'#00C2FF'" />
        </li>
        <li>
          <the-charts-circle :percentage="50" :color="'#9820C2'" />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import TheButtonClose from "@/components/TheButtonClose.vue";
import TheChartsCircle from "@/components/TheChartsCircle.vue";
export default {
  components: { TheButtonClose, TheChartsCircle },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.type {
  position: fixed;
  width: 100%;
  top: 5.4rem;
  right: 0;
  bottom: 4.7rem;
  .types {
    z-index: 3;
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    scroll-behavior: smooth;
    display: flex;
    justify-content: center;
    align-items: center;
    &::-webkit-scrollbar {
      width: 0;
    }
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      height: 100%;
      width: 100%;
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
