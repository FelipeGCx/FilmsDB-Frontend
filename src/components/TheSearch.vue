<template>
  <input
    type="search"
    autocomplete="false"
    v-model="value"
    v-on:keyup.enter="searchContent"
    placeholder="Search by title"
  />
</template>

<script>
export default {
  props: {
    isClicked: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    searchContent() {
      let titleHead = this.toTitleCase(this.value);
      // use go to avoid reactivite bug
      this.$router.go({
        name: "Title",
        params: {
          title: `Resultados: ${titleHead}`,
        },
        query: { title: this.value, page: 1 },
      });
    },
    // parse to title case
    toTitleCase(str) {
      return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    },
  },
  computed: {
    width() {
      return this.isClicked ? "18rem" : "0rem";
    },
    padding() {
      return this.width == "18rem" ? "0 1rem" : "0";
    },
    value() {
      return !this.isClicked ? this.value : "";
    },
  },
};
</script>
<style lang="scss" scoped>
$border-radius: 10px;
input {
  background-color: $base-third-color !important;
  color: $neutral-second-color;
  border-radius: $border-radius;
  border: none;
  height: 3rem;
  padding: v-bind(padding) !important;
  font-size: 1.3rem;
  font-style: italic;
  width: v-bind(width);
  transition: width ease-in-out 0.5s;
  margin-right: 0.5rem;
  &::-webkit-search-cancel-button {
    filter: invert(1) brightness(1);
  }
}
</style>
