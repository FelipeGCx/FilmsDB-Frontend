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
      // image: require("@/assets/icons/neutral-filter.svg"),
      nstate: 1,
      preState: 0,
    };
  },
  computed: {
    image() {
      return this.images[this.nstate];
    },
  },
  methods: {
    changeState() {
      switch (this.nstate) {
        case 0:
          this.preState = this.nstate;
          this.nstate = 1;
          this.$emit("note", "none");
          break;
        case 1:
          if (this.preState == 0) {
            this.preState = this.nstate;
            this.nstate = 2;
            this.$emit("note", "desc");
          } else {
            this.preState = this.nstate;
            this.nstate = 0;
            this.$emit("note", "asc");
          }
          break;
        case 2:
          this.preState = this.nstate;
          this.nstate = 1;
          this.$emit("note", "none");
          break;

        default:
          this.preState = this.nstate;
          this.nstate = 0;
          this.$emit("note", "asc");
          break;
      }
    },
  },
  mounted() {
    switch (this.$route.query.note) {
      case "asc":
        this.nstate = 0;
        this.preState = 1;
        break;
      case "desc":
        this.nstate = 2;
        this.preState = 1;
        break;
      default:
        this.nstate = 1;
        this.preState = 0;
        break;
    }
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
