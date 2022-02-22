<template>
  <nav class="pagination">
    <router-link
      class="page-item | previuos"
      :to="{
        name: nameTo,
        params: { page: 1},
      }"
      :class="isActive(actualPage - 1)"
      v-show="actualPage > (numPages/2)+1"
    >
      <svg viewBox="0 0 24 24">
        <title>First Page</title>
        <path d="M17.7 15.89L13.82 12l3.89-3.89c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0l-4.59 4.59c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.38.38-1.02-.01-1.4zM7 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1z"/>
      </svg>
    </router-link>
    <router-link
      class="page-item | previuos"
      :to="{
        name: nameTo,
        params: { page: actualPage == 1 ? 1 : actualPage - 1 },
      }"
      :class="isActive(actualPage - 1)"
      v-show="actualPage > 1"
    >
      <svg viewBox="0 0 24 24">
        <title>Previuos</title>
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
      </svg>
    </router-link>
    <router-link
      v-for="(page, index) in totalPages()"
      :key="index"
      class="page-item"
      :to="{ name: nameTo, params: { page: page } }"
      :class="isActive(page)"
      v-show="page >= min() && page <= max() && pages != 1"
    >
      <span class="page-container">
        {{ page }}
      </span>
    </router-link>
    <router-link
      class="page-item | next"
      :to="{
        name: nameTo,
        params: { page: actualPage == pages ? actualPage : actualPage + 1 },
      }"
      v-show="actualPage < pages"
      :class="isActive(actualPage + 1)"
    >
      <svg viewBox="0 0 24 24">
        <title>Next</title>
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
      </svg>
    </router-link>
    <router-link
      class="page-item | next"
      :to="{
        name: nameTo,
        params: { page: totalPages()},
      }"
      :class="isActive(actualPage + 1)"
      v-show="pages-actualPage > (numPages/2)"
    >
      <svg viewBox="0 0 24 24">
        <title>Last Page</title>
        <path d="M6.29 8.11L10.18 12l-3.89 3.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L7.7 6.7c-.39-.39-1.02-.39-1.41 0-.38.39-.38 1.03 0 1.41zM17 6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1z"/>
      </svg>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    nameTo: {
      type: String,
      required: true,
    },
    dataOriginal: {
      type: Object,
      required: true,
    },
    actualP:{
        type: Number,
        required: true,
    }
  },
  data() {
    return {
      dataInPage: [],
      elementsPerPage: 30,
      pages: this.totalPages(),
      // numPages:8,
      actualPage: this.actualP,
    };
  },
  computed: {
    // a computed getter
    numPages: function () {
      // `this` points to the vm instance
      return window.innerWidth > 700 ? 8 : 5;
    }
  },
  methods: {
    getData() {
      this.pages = this.totalPages();
      // if (this.actualPage > this.pages) {
      //   this.$router.push({
      //     name: "NotFound",
      //     params: { catchAll: "NotFound" },
      //   });
      // }
      this.getDataPage(this.actualPage);
    },
    getDataPage(numPage) {
      if (numPage > 0 && numPage <= this.pages) {
        this.actualPage = numPage;
        let start = numPage * this.elementsPerPage - this.elementsPerPage;
        let end = numPage * this.elementsPerPage;
        this.dataInPage = this.dataOriginal.slice(start, end);
      }
      window.scrollTo(0, 0);
      this.$emit("listToShow", this.dataInPage);
    },
    totalPages() {
      return Math.ceil(this.dataOriginal.length / this.elementsPerPage);
    },
    isActive(numPage) {
      return numPage == this.actualPage ? "active" : "";
    },
    min(){
      let minus = this.actualPage+(this.numPages/2) < 1 ? 1 : this.actualPage - this.numPages/2;
      return this.pages-minus < this.numPages ? this.pages-this.numPages : minus;
    },
    max(){
      return (this.actualP+4) <= (this.numPages+1) ? this.numPages+1 : this.actualP + this.numPages/2;
    }
  },
  mounted() {
      this.getData();
  },
  beforeUpdate() {
      this.actualPage = this.actualP;
      this.getData();
  },
};
</script>

<style scoped>
@media only screen and (min-width: 1024px) {
  .page-item{
    width: 3rem;
  height: 3rem;
  }
}
@media only screen and (min-width: 750px) and (max-width: 1024px) {
  .page-item{
    width: 3rem;
  height: 3rem;
  }
}
@media only screen and (max-width: 750px) {
  .page-item{
    width: 2.5rem;
  height: 2.5rem;
  }
}
@media only screen and (max-width: 550px) {
  .page-item{
    width: 2.2rem;
  height: 2.2rem;
  }
}

.pagination {
  bottom: 1;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: .5rem;
}
.page-item {
  display: flex;
  background-color: var(--bg-loading);
  align-items: center;
  justify-content: center;
  border-radius: 5rem;
  color: var(--color-clear);
}
.page-item:hover {
  background-color: var(--border-serie);
}
.active {
  background-color: var(--border-serie) !important;
}
svg {
  width: 2rem;
  fill: var(--color-clear);
}
/* .previuos {
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
}
.next {
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
} */
a {
  text-decoration: none;
}
</style>