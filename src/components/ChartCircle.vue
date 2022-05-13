<template>
  <div class="main-container" :class="typeClass()">
    <svg class="chart-container" viewbox="0 0 24 24">
      <circle
        r="40"
        cx="65"
        cy="68"
        class="back"
        fill="none"
      />
      <circle
        r="40"
        cx="87"
        cy="60"
        class="front"
        fill="none"
        :style="{ strokeDasharray: strokeChart() }"
        :class="typeClass()"
      />
      <g class="text">
        <text
          x="65"
          y="65"
          alignment-baseline="central"
          text-anchor="middle"
          id="percentage"
          :class="typeClass()"
        >
          {{ percentage }}%
        </text>
      </g>
    </svg>
    <div class="text-container">
      <h3 :class="typeClass()">{{ quantity }}</h3>
      <h3 :class="typeClass()">{{ title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quantity: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: "",
    },
    percentage: {
      type: Number,
      default: 0,
    },
  },
  name: "ChartCircle",
  data() {
    return {};
  },
  methods: {
    // return the percentage in strokeDasharray format for the front circle
    strokeChart() {
      return `${this.percentage * 2.45}, 1000`;
    },
    typeClass() {
      switch (this.title) {
        case "Peliculas":
          return "movie";
        case "Animes":
          return "anime";
        case "Series":
          return "serie";
      }
    },
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  width: 18rem;
  height: 9rem;
  border-radius: 0.5rem;
  stroke: none !important;
  color: none !important;
  fill: none !important;
  filter: none !important;
}

.chart-container {
  width: 11rem;
  height: 100%;
}

.main-container {
  background-position: 0 100%;
  background-repeat: no-repeat;
  background-size: 100% 0.3rem;
  background-color: var(--bg-header);
}

.anime.main-container {
  /* box-shadow: -3px -1px 20rem var(--border-anime); */
  /* filter: drop-shadow(0 0 1rem var(--border-anime)) !important; */
  background-image: linear-gradient(
    90deg,
    var(--border-anime),
    var(--border-anime)
  );
}
.movie.main-container {
  /* box-shadow: -3px -1px 20rem var(--border-movie); */
  /* filter: drop-shadow(0 0 1rem var(--border-movie)) !important; */
  background-image: linear-gradient(
    90deg,
    var(--border-movie),
    var(--border-movie)
  );
}
.serie.main-container {
  /* box-shadow: -3px -1px 20rem var(--border-serie); */
  /* filter: drop-shadow(0 0 1rem var(--border-serie)) !important; */
  background-image: linear-gradient(
    90deg,
    var(--border-serie),
    var(--border-serie)
  );
}

.anime {
  stroke: var(--border-anime);
  color: var(--border-anime);
  fill: var(--border-anime);
  filter: drop-shadow(0 0 0.5rem var(--border-anime));
}
.movie {
  stroke: var(--border-movie);
  color: var(--border-movie);
  fill: var(--border-movie);
  filter: drop-shadow(0 0 0.5rem var(--border-movie));
}
.serie {
  stroke: var(--border-serie);
  color: var(--border-serie);
  fill: var(--border-serie);
  filter: drop-shadow(0 0 0.5rem var(--border-serie));
}

.main-container .chart-container .back {
  stroke: #3c3b405e;
  stroke-width: 12.8;
}
.main-container .chart-container .front {
  stroke-width: 13;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: center;
  fill: transparent !important;
}
.main-container .chart-container .text {
  font-size: 1.3rem;
  font-weight: 400;
  stroke: none !important;
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

.front {
  /* // On top of all other styling elements */
  animation: fill 1s reverse;
}
.text {
  /* // On top of all other styling elements */
  opacity: 0;
  transform: translateY(30%);
  animation: display 1s forwards;
}
.text-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>