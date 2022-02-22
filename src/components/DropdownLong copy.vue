<template>
  <div
    class="dropdown"
    @mouseenter="visible = true"
    @mouseleave="visible = false"
  >
    <div class="select" ref="select" :style="{ width: widthSelect }">
      <span>Category</span>
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
      <span
        class="option"
        v-for="(item, idx) in values"
        :key="idx"
        @click="clickOption(item.category)"
        >
        <svg
                v-html="item.svg"
                viewBox="0 0 24 24"
                data-v-fae5bece=""
              ></svg>
        {{ item.category }}
        </span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "DropdownLong",
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
      this.$emit("valueSelect", item);
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
  flex-direction: row;
  background-color: var(--border-serie);
  left: 0;
  z-index: 1;
  color: var(--color-clear);
  /* border-bottom-left-radius: var(--radius); */
  /* border-bottom-right-radius: var(--radius); */
  overflow: hidden;
  width: 100vw;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.arrow-down {
  fill: var(--color-clear);
  width: 1.6rem;
}
.option {
     padding: 0.5rem 1rem;
    background-color: var(--color-clear);
    border-radius: var(--radius);
    color: var(--border-serie);
    text-align: center;
    cursor: pointer;
    font-weight: 800;
    white-space: nowrap;
    display: flex;
    gap: 1rem;
}
.option:hover {
  background-color: var(--bg-loading);
  color: var(--color-clear);
}
.option:hover > svg {
  fill: var(--color-clear);
}
svg{
  width: 2rem;
  fill:var(--border-serie)
}
</style>