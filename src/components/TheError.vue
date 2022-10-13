<template>
  <div>
    <img :src="img" alt="FilmsDB error" draggable="false" />
    <h1>an error has occurred</h1>
    <span>{{ spanText }}</span>
    <button class="main-button" @click="doAction">
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    refetch: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      img: require("@/assets/icons/error-server.svg"),
      spanText: null,
      buttonText: null,
    };
  },
  methods: {
    doAction() {
      if (this.refetch) {
        this.$emit("reload");
      } else {
        this.$forceUpdate();
      }
    },
  },
  mounted() {
    if (this.refetch) {
      this.spanText = "try refetch";
      this.buttonText = "Refetch";
    } else {
      this.spanText = "try reload";
      this.buttonText = "Reload";
    }
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
  img {
    width: 10rem;
    height: 10rem;
    pointer-events: none;
  }
  h1 {
    text-transform: capitalize;
  }
}
</style>
