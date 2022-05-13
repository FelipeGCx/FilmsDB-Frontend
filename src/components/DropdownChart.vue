<template>
  <div
    class="dropdown"
    @mouseenter="visible = true"
    @mouseleave="visible = false"
  >
    <div class="select" ref="select">
      <svg class="icon-select" viewbox="0 0 24 24">
        <path
          d="M6.5 20Q5.875 20 5.438 19.562Q5 19.125 5 18.5V10.5Q5 9.875 5.438 9.438Q5.875 9 6.5 9Q7.125 9 7.562 9.438Q8 9.875 8 10.5V18.5Q8 19.125 7.562 19.562Q7.125 20 6.5 20ZM12 20Q11.375 20 10.938 19.562Q10.5 19.125 10.5 18.5V6.5Q10.5 5.875 10.938 5.438Q11.375 5 12 5Q12.625 5 13.062 5.438Q13.5 5.875 13.5 6.5V18.5Q13.5 19.125 13.062 19.562Q12.625 20 12 20ZM17.5 20Q16.875 20 16.438 19.562Q16 19.125 16 18.5V14.5Q16 13.875 16.438 13.438Q16.875 13 17.5 13Q18.125 13 18.562 13.438Q19 13.875 19 14.5V18.5Q19 19.125 18.562 19.562Q18.125 20 17.5 20Z"
        />
      </svg>
    </div>
    <div
      class="options"
      ref="options"
      v-show="visible"
      @mouseleave="visible = false"
    >
      <DataCharts />
    </div>
  </div>
</template>

<script>
import DataCharts from "./DataCharts.vue";
export default {
  name: "DropdownChart",
  components: { DataCharts },
  data() {
    return {
      visible: false,
    };
  },
};
</script>

<style scoped>
.dropdown {
  font-size: 1.2rem;
}
.select {
  position: relative;
  display: flex;
  background-color: var(--bg-btn-header);
  color: var(--color-clear);
  padding: 0.5rem 0.3rem 0.5rem .8rem;
  border-radius: var(--radius);
  cursor: default;
  justify-content: space-between;
  z-index: 2;
}
.icon-select {
  width: 2rem;
  height: 2rem;
  fill: var(--color-clear);
}
.options::after {
  content: "";
  position: absolute;
  border-width: 0.8rem;
  border-color: #0000 #0000 var(--bg-btn-header) #0000;
  top: -1.5rem;
  left: 0.7rem;
  border-style: solid;
  z-index: 10;
}
.options {
  position: absolute;
  overflow: revert;
  display: flex;
  flex-direction: row;
  background-color: var(--bg-btn-header);
  z-index: 1;
  color: var(--color-clear);
  border-radius: .5rem;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin-top: 1rem;
}
.arrow-down {
  fill: var(--color-clear);
  width: 1.6rem;
}
.option {
  padding: 0.5rem 1rem;
  background-color: var(--color-clear);
  border-radius: var(--radius);
  color: var(--color-main);
  text-align: center;
  cursor: pointer;
  font-weight: 800;
  white-space: nowrap;
  display: flex;
  gap: 1rem;
}
.option:hover {
  background-color: var(--color-main);
  color: var(--color-clear);
}
.option:hover > svg {
  fill: var(--color-clear);
}
svg {
  width: 2rem;
  fill: var(--color-main);
}
</style>