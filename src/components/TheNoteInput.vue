<template>
  <div class="input-container">
    <button @click="nOne = adding(nOne)">
      <img :src="imgUp" draggable="false" />
    </button>
    <input
      class="input"
      type="number"
      v-model="nOne"
      :min="lOne"
      :max="date"
      maxlength="3"
      minlength="3"
      step="0.1"
    />
    <button @click="nOne = subtracting(nOne)">
      <img :src="imgDown" draggable="false" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUp: require("@/assets/icons/arrow-up.svg"),
      imgDown: require("@/assets/icons/arrow-down.svg"),
      nOne: 10.0,
      date: 10.0,
      lOne: 0,
    };
  },
  methods: {
    adding(n) {
      return n + 0.1 > this.date ? this.lOne : n + 0.1;
    },
    subtracting(n) {
      return n - 0.1 < this.lOne ? this.date : n - 0.1;
    },
  },
};
</script>

<style lang="scss" scoped>
.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  button {
    border: 2px solid $primary-color;
    background-color: $base-color;
    width: 100% !important;
    padding: 0;
    border-radius: 4px;
    img {
      width: 2rem;
    }
    &:first-child {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
    &:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  input {
    width: 11rem;
    &::-webkit-inner-spin-button {
      visibility: hidden;
      width: 0;
      position: absolute;
    }
  }
}
</style>
