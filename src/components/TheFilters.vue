<template>
  <form @submit.prevent="doFilter" id="formFilter">
    <label for="type">Type</label>
    <select name="type" id="type" v-model="filter.type">
      <option value="all">All</option>
      <option value="movie">Movie</option>
      <option value="anime">Anime</option>
      <option value="serie">Serie</option>
    </select>
    <label for="year">Year</label>
    <input
      type="number"
      min="1896"
      max="2099"
      maxlength="4"
      minlength="4"
      step="1"
      name="year"
      v-model="filter.year"
    />
    <label for="note">Note</label>
    <the-order-note @note="setNote" />
    <button type="submit">Filter</button>
  </form>
</template>

<script>
import TheOrderNote from "./TheOrderNote.vue";
export default {
  props: {
    padding: {
      type: String,
      required: true,
      default: "5rem",
    },
  },
  data() {
    return {
      filter: {
        type: null,
        year: null,
        note: null,
      },
    };
  },
  components: { TheOrderNote },
  methods: {
    checkYear(e) {
      console.log(e.target.value.length);
      if (e.target.value.length > 3) {
        e.target.value = "1000";
      }
    },
    doFilter() {
      console.log(this.filter);
      this.$emit("doFilter", this.filter);
    },
    setNote(n) {
      this.filter.note = n;
    },
  },
  mounted() {
    this.filter.type = this.$route.query.type || "all";
    this.filter.year =
      parseInt(this.$route.query.year) || new Date().getFullYear();
  },
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: 0 v-bind(padding);
  align-self: center;
  @include minsize {
    & {
      display: none !important;
    }
  }
  select {
    background-color: $base-third-color;
    border: none;
    outline: none;
    border-radius: $border-radius;
    padding: 0.6rem;
    option {
      font-style: inherit;
      &:hover {
        background-color: $neutral-second-color;
        color: $base-color;
      }
    }
  }
  label,
  input,
  select,
  button {
    color: $secondary-color;
    font-style: italic;
    font-weight: 500;
    font-size: 1.5rem;
  }
  input {
    max-width: 8rem;
    // padding: 0.6rem 2rem;
    appearance: none;
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      appearance: none;
    }
  }
  input {
    background-color: $base-third-color;
    border-radius: $border-radius;
  }
  button {
    background-color: $primary-color;
    border-radius: $border-radius;
    padding: 0.6rem 2rem;
    cursor: pointer;
  }
}
</style>
