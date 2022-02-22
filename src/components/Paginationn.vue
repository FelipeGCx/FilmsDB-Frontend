<template>
  <nav class="pagination">
    <router-link
      class="page-item | previuos"
      :to="{
        name: nameTo,
        params: { type: type, page: actualPage == 1 ? 1 : actualPage - 1 },
      }"
      :class="isActive(actualPage - 1)"
    >
      <svg viewBox="0 0 24 24">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
      </svg>
    </router-link>
    <router-link
      v-for="(page, index) in totalPages()"
      :key="index"
      class="page-item"
      :to="{ name: nameTo, params: { type: type, page: page } }"
      :class="isActive(page)"
      v-show="index < 10"
    >
      <span class="page-container">
        {{ page }}
      </span>
    </router-link>
    <router-link
      class="page-item | next"
      :to="{
        name: nameTo,
        params: {
          type: type,
          page: actualPage == pages ? actualPage : actualPage + 1,
        },
      }"
      :class="isActive(actualPage + 1)"
    >
      <svg viewBox="0 0 24 24">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
      </svg>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "Paginationn",
  props: {
    nameTo: {
      type: String,
      required: true,
    },
    dataOriginal: {
      type: Object,
      required: true,
    },
    actualP: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      dataInPage: [],
      elementsPerPage: 30,
      pages: 0,
      actualPage: this.actualP,
    };
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
.pagination {
  bottom: 1;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.page-item {
  display: flex;
  background-color: var(--bc-book);
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  color: var(--color-clear);
  border-right: 0.1rem solid var(--color-clear);
}
.page-item:hover {
  background-color: var(--color-dark);
}
.active {
  background-color: var(--color-dark) !important;
}
svg {
  width: 2rem;
  fill: var(--color-clear);
}
.previuos {
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
}
.next {
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
}
a {
  text-decoration: none;
}
</style>