<template>
  <button type="button" @click="changeState">
    <img :src="image" alt="" srcset="" />
  </button>
</template>

<script>
export default {
  data() {
    return {
      images: [
        require("@/assets/icons/arrow-up-filter.svg"),
        require("@/assets/icons/neutral-filter.svg"),
        require("@/assets/icons/arrow-down-filter.svg"),
      ],
      image: require("@/assets/icons/neutral-filter.svg"),
      state: 1,
      preState: 0,
    };
  },
  methods: {
    changeState() {
      if (this.state == 0) {
        this.preState = this.state;
        this.state = 1;
        this.image = this.images[this.state];
        this.$emit("note", "asc");
        return;
      }
      if (this.state == 2) {
        this.preState = this.state;
        this.state = 1;
        this.image = this.images[this.state];
        this.$emit("note", "none");
        return;
      }
      if (this.state == 1 && this.preState == 0) {
        this.preState = this.state;
        this.state = 2;
        this.image = this.images[this.state];
        this.$emit("note", "desc");
        return;
      } else {
        this.preState = this.state;
        this.state = 0;
        this.image = this.images[this.state];
        this.$emit("note", "asc");
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  background-color: $base-third-color !important;
  padding: 0.9rem 0.9rem !important;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 1.5rem;
    filter: invert(1);
  }
}
</style>
