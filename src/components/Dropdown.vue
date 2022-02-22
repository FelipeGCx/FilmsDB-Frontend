<template>
  <div
    class="dropdown"
    @mouseenter="visible = true"
    @mouseleave="visible = false"
  >
    <div class="select" ref="select" :style="{ width: widthSelect }">
      <span>{{ value }}</span>
      <svg class="arrow-down" viewBox="0 0 24 24">
        <path d="M7 10l5 5 5-5z" />
      </svg>
    </div>
    <div
      class="options"
      ref="options"
      v-show="visible"
      @mouseleave="visible = false"
    >
      <span class="white-field">ㅤ</span>
      <!-- <span class="white-field">&U+0020</span> -->
      <span
        class="option"
        v-for="(item, idx) in values"
        :key="idx"
        @click="clickOption(item)"
        :style="{ width: widthSelect }"
        >{{ item }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    name: {
      type: String,
    },
    values: {
      type: Object,
    },
    widthSelect: {
      type: String,
      default: "6rem",
    },
    selected: {
      type: String,
    },
  },
  data() {
    return {
      visible: false,
      value: this.name,
    };
  },
  methods: {
    clickOption(item) {
      this.value = item;
      this.visible = false;
      this.$emit('valueSelect', item);
    },
  },
  mounted() {
      this.value = this.selected;
  },
};
</script>

<style scoped>
.dropdown{
  font-size: 1.2rem;
}
.select {
  position: relative;
  display: flex;
  background-color: var(--bg-loading);
  color: var(--color-clear);
  padding: 0.5rem 0.3rem 0.5rem 1rem;
  border-radius: var(--radius);
  cursor: default;
  justify-content: space-between;
  z-index: 2;
}
.options {
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: var(--border-serie);
  top: 3.5vh;
  z-index: 1;
  color: var(--color-clear);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  overflow: hidden;
}
.arrow-down {
  fill: var(--color-clear);
  width: 1.6rem;
}
.option {
  padding-left: 1rem;
  padding-top: 0.1rem;
  cursor: default;
}
.option:hover {
  background-color: var(--bg-loading);
}
</style>