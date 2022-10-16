export default {
  data() {
    return {
      windowWidth: 8000,
    };
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
};
