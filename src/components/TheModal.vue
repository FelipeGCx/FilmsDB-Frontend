<template>
  <div class="modal || blur" v-show="isOpened">
    <div class="card">
      <h1>{{ titleMessage }}</h1>
      <div class="buttons">
        <button class="sub-button" @click="$emit('close')">Cancel</button>
        <button class="main-button" @click="$emit('accept')">Accept</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpened: {
      type: Boolean,
      default: false,
    },
    titleMessage: {
      type: String,
      default: "you can continue?",
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .card {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
    background-color: $base-third-color;
    border: 0.1rem solid $neutral-color;
    border-radius: $border-radius;
    width: min(34rem, 74vw);
    height: 14rem;
    min-width: 23rem;
    //padding: 2rem 6rem;
  }
  h1 {
    text-transform: capitalize;
  }
}
</style>
