<template>
  <svg class="chart-container" viewbox="0 0 24 24">
    <circle r="40" cx="50%" cy="50%" class="back" fill="none" />
    <circle
      r="40"
      cx="50%"
      cy="50%"
      class="front"
      fill="none"
      :style="{ strokeDasharray: strokeChart() }"
    />
    <g class="text">
      <text
        x="50%"
        y="50%"
        alignment-baseline="central"
        text-anchor="middle"
        id="percentage"
      >
        {{ percentage }}%
      </text>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "white",
    },
    percentage: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    // return the percentage in strokeDasharray format for the front circle
    strokeChart() {
      return `${this.percentage * 2.45}, 1000`;
    },
  },
};
</script>

<style lang="scss" scoped>
.chart-container {
  width: 11rem;
  height: 11rem;
  .back {
    stroke: #3c3b405e;
    stroke-width: 1rem;
  }
  .front {
    stroke-width: 1rem;
    stroke-linecap: round;
    rotate: -90deg;
    transform-origin: center;
    fill: transparent !important;
    stroke: $secondary-color;
    filter: drop-shadow(0 0 0.5rem v-bind(color));
    animation: fill 1s reverse;
  }
  .text {
    filter: drop-shadow(0 0 0.5rem v-bind(color));
    font-weight: 400;
    stroke: none !important;
    opacity: 0;
    animation: display 1s forwards;
    text {
      fill: $secondary-color;
      font-size: 1.3rem;
      font-weight: 500;
    }
  }
}
@keyframes fill {
  to {
    stroke-dasharray: 0, 1000000;
  }
}
@keyframes display {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
