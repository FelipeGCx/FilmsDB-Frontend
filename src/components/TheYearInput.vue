<template>
  <div class="year-input">
    <div class="input-container">
      <button @click="nOne = adding(nOne)">
        <img
          :src="require('@/assets/icons/arrow-down.svg')"
          draggable="false"
        />
      </button>
      <input
        type="number"
        v-model="nOne"
        min="1896"
        max="9999"
        maxlength="4"
        minlength="4"
      />
      <button @click="nOne = subtracting(nOne)">
        <img
          :src="require('@/assets/icons/arrow-down.svg')"
          draggable="false"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nOne: 2022,
    };
  },
  methods: {
    adding(n) {
      return n + 1 > 9999 ? 0 : n + 1;
    },
    subtracting(n) {
      return n - 1 < 1896 ? 9999 : n - 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.year-input {
  display: flex;
  gap: 1rem;
  .input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    button {
      border: 2px solid $primary-color;
      width: 100%;
      filter: contrast(0.7);
      img {
        width: 2rem;
        filter: contrast(1) invert(1);
      }
      &:first-child {
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
        img {
          rotate: 180deg;
        }
      }
      &:last-child {
        border-bottom-left-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }
    }
    $border-radius: 8px;
    input {
      border-radius: $border-radius;
      background-color: $base-color;
      border: 0.2rem solid $primary-color;
      padding: 0.7rem 0;
      font-size: 1.3rem;
      font-weight: 600;
      color: $secondary-color;
      width: 11rem;
      text-align: center;
      &::-webkit-inner-spin-button {
        visibility: hidden;
        width: 0;
        position: absolute;
      }
    }
  }
}
</style>
