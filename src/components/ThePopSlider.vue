<template>
  <aside>
    <div class="pop-slider">
      <div>
        <h3>{{ title }}</h3>
      </div>
      <div></div>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "error",
    },
    mod: {
      type: String,
      default: "error",
    },
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    borderColor() {
      switch (this.mod) {
        case "error":
          return "#ff002e";
        case "success":
          return "#26ff21";
        case "info":
          return "#0075ff";
        default:
          return "#ff002e";
      }
    },
    translate() {
      if (this.isVisible) {
        this.hide();
        return "translateX(0)";
      }
      return "translateX(-100%)";
    },
  },
  methods: {
    hide() {
      setTimeout(() => {
        this.$emit("showed");
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
aside {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  .pop-slider {
    margin-bottom: 5rem;
    position: relative;
    width: fit-content;
    display: flex;
    height: 3.5rem;
    align-items: center;
    justify-content: flex-start;
    transform: v-bind(translate);
    transition: all 1s ease;
    div:first-child {
      background-color: $base-second-color;
      border-bottom-right-radius: 6rem;
      border-top-right-radius: 1.2rem;
      width: 90%;
      z-index: 1;
      height: 95%;
      display: flex;
      align-items: center;
      h3 {
        text-transform: capitalize;
        color: $secondary-color;
        padding: 0 5rem 0 2rem;
        white-space: nowrap;
      }
    }
    div:last-child {
      position: absolute;
      top: 0;
      border: 0.2rem solid v-bind(borderColor);
      background-color: v-bind(borderColor);
      border-bottom-right-radius: 6rem;
      border-top-right-radius: $border-radius;
      width: 100%;
      z-index: 0;
      height: 100%;
    }
  }
}
</style>
