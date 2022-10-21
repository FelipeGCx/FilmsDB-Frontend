<template>
  <div>
    <span></span>
    <h1>{{ title }}</h1>
    <span></span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    padding: {
      type: String,
      required: true,
      default: "5rem",
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  gap: 2.5rem;
  align-items: center;
  align-self: center;
  width: 100%;
  padding: 0 v-bind(padding);
  // @include mobilesize {
  //   & {
  //     padding: 0px !important;
  //   }
  // }
  span {
    width: 100%;
    height: 0.2rem;
    background-color: $secondary-color;
  }
  h1 {
    text-transform: uppercase;
    white-space: nowrap;
    // margin: 0 1rem;
  }
}
</style>
