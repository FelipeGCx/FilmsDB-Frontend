<template>
  <button>
    <img :src="obj.svg" :alt="obj.alt" />
    <div>
      <router-link
        :to="option.route"
        v-for="(option, idx) in obj.options"
        :key="idx"
      >
        <img :src="option.svg" :alt="option.alt" />
        <span>{{ option.name }}</span>
      </router-link>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    obj: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  padding: 0;
  img {
    filter: invert(1);
    opacity: 0.6;
    width: 2.7rem;
    height: 2.7rem;
    pointer-events: none;
  }
  div {
    position: absolute;
    display: none;
    flex-direction: column;
    background-color: $neutral-color;
    transform: translateX(-40%);
    border-radius: $border-radius;
    overflow: hidden;
    z-index: 1;
    a {
      display: flex;
      gap: 1rem;
      white-space: nowrap;
      align-items: center;
      font-weight: 500;
      padding: 0.5rem 1rem;
      img {
        filter: invert(1);
        opacity: 0.6;
        width: 2.7rem;
        height: 2.7rem;
        pointer-events: none;
      }
      &:hover {
        background-color: $base-third-color;
        img {
          animation: shake 0.4s alternate;
          animation-iteration-count: 2;
        }
      }
    }
  }
  &:hover {
    img {
      opacity: 0.9 !important;
    }
    div {
      display: flex;
    }
  }
}
@keyframes shake {
  0% {
    transform: translateX(0rem);
  }
  100% {
    transform: translateX(0.3rem);
  }
}
</style>
