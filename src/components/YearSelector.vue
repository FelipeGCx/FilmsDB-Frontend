<template>
  <div class="selector-container">
    <div class="selector-year">
      <div>
        <button
          @click="
            year1 + 1 > 9 ? (year1 = 1) : (year1 = year1 + 1);
            setYear();
          "
        >
          <svg viewBox="0 0 24 24" v-html="svgUp"></svg>
        </button>
        <span>{{ year1 }}</span>
        <button
          class="down-btn"
          @click="
            year1 - 1 < 1 ? (year1 = 9) : (year1 = year1 - 1);
            setYear();
          "
        >
          <svg viewBox="0 0 24 24" v-html="svgDown"></svg>
        </button>
      </div>
      <div>
        <button
          @click="
            year2 = sum(year2);
            setYear();
          "
        >
          <svg viewBox="0 0 24 24" v-html="svgUp"></svg>
        </button>
        <span>{{ year2 }}</span>
        <button
          class="down-btn"
          @click="
            year2 = rest(year2);
            setYear();
          "
        >
          <svg viewBox="0 0 24 24" v-html="svgDown"></svg>
        </button>
      </div>
      <div>
        <button
          @click="
            year3 = sum(year3);
            setYear();
          "
        >
          <svg viewBox="0 0 24 24" v-html="svgUp"></svg>
        </button>
        <span>{{ year3 }}</span>
        <button
          class="down-btn"
          @click="
            year3 = rest(year3);
            setYear();
          "
        >
          <svg viewBox="0 0 24 24" v-html="svgDown"></svg>
        </button>
      </div>
      <div>
        <button
          @click="
            year4 = sum(year4);
            setYear();
          "
        >
          <svg viewBox="0 0 24 24" v-html="svgUp"></svg>
        </button>
        <span>{{ year4 }}</span>
        <button
          class="down-btn"
          @click="
            year4 = rest(year4);
            setYear();
          "
        >
          <svg viewBox="0 0 24 24" v-html="svgDown"></svg>
        </button>
      </div>
    </div>
    <div class="btn-search" @click="searchYear">Buscar</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year1: 0,
      year2: 0,
      year3: 0,
      year4: 0,
      year: 0,
      svgUp:
        "<path d='M11.29 8.71L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.38-.39-1.02-.39-1.41 0z'/>",
      svgDown:
        "<path d='M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z'/>",
    };
  },
  methods: {
    sum(num) {
      return num + 1 > 9 ? 0 : num + 1;
    },
    rest(num) {
      return num - 1 < 0 ? 9 : num - 1;
    },
    setYear() {
      this.year = parseInt(
        `${this.year1}${this.year2}${this.year3}${this.year4}`
      );
    },
    searchYear() {
      // this is for fix the bug of reactivity in vue
      this.fixReact();
      this.$emit("searchYear");
      setTimeout(() => {
        this.$router.push({
          name: "Year",
          params: { title: `Resultados: ${this.year}` },
          query: { year: this.year, page: 1 },
        });
      }, 20);
    },
    fixReact() {
      this.$router.push({ name: "All", params: { page: 1 } });
    },
  },
  mounted() {
    let actualYear = new Date().getFullYear();
    actualYear = actualYear.toString();
    this.year1 = parseInt(actualYear[0]);
    this.year2 = parseInt(actualYear[1]);
    this.year3 = parseInt(actualYear[2]);
    this.year4 = parseInt(actualYear[3]);
    this.setYear();
  },
};
</script>

<style scoped>
.selector-container {
  z-index: 16;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}
.selector-year div {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 2rem;
}
.selector-year {
  background-color: var(--bg-body);
  padding: 1rem 3rem;
  display: flex;
  filter: drop-shadow(0 0 1rem var(--bg-loading));
  border-radius: 5rem;
}
.btn-search {
  border-radius: 5rem;
  background-color: var(--bg-loading);
  color: var(--color-clear);
  text-decoration: none;
  padding: 0.7rem 1rem;
  width: fit-content;
}
button {
  width: 100%;
  border: none;
  background-color: transparent;
}
span {
  color: var(--color-clear);
}
/* span::after {
  content: "";
  display: block;
  width: 1rem;
  height: 2px;
  background: var(--color-clear);
  opacity: 70%;
  transform: translateX(-4px);
  position: absolute;
} */
svg {
  fill: var(--bg-loading);
}
/* .{} */
</style>