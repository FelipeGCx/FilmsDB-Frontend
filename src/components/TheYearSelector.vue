<template>
  <div class="year">
    <the-button-close @btnClicked="$emit('clicked')" />
    <div class="year-form | blur">
      <the-year-input @change="handlerChange" />
      <router-link
        class="main-button"
        @click="$emit('clicked')"
        :to="goToHomeFilterYear()"
        >Search</router-link
      >
    </div>
  </div>
</template>

<script>
import TheButtonClose from "@/components/TheButtonClose.vue";
import TheYearInput from "@/components/TheYearInput.vue";
export default {
  components: { TheButtonClose, TheYearInput },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
  methods: {
    handlerChange(year) {
      this.year = year;
    },
    goToHomeFilterYear() {
      return {
        name: "Home",
        query: {
          year: this.year,
          page: 1,
        },
      };
    },
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
  .year-form {
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
    button {
      width: 11rem !important;
    }
  }
}
</style>
