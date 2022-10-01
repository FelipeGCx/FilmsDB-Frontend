<template>
  <nav class="pagination">
    <ol>
      <li
        class="page-item | previuos"
        @click="$emit('changePage', 1)"
        :class="isActive(pagination.currentPage - 1)"
        v-show="pagination.currentPage > numPages / 2 + 1"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <title>First Page</title>
          <path
            d="m 17.433449,5.2495377 c -0.191925,0 -0.382847,0.074258 -0.529297,0.2207032 l -6,6.0000001 c -0.29289,0.292899 -0.29289,0.767647 0,1.060547 l 6,6 c 0.2929,0.292899 0.767647,0.292899 1.060547,0 0.2929,-0.2929 0.2929,-0.767648 0,-1.060547 l -5.470703,-5.470703 5.470703,-5.4687503 c 0.2929,-0.2928897 0.2929,-0.7676571 0,-1.0605468 -0.14645,-0.1464449 -0.339325,-0.2207032 -0.53125,-0.2207032 z m -10.9029794,0.00781 c -0.39521,8.473e-4 -0.715076,0.321589 -0.714844,0.7167994 V 18.024928 c -2.31e-4,0.395209 0.319635,0.71595 0.714844,0.716797 0.395972,2.31e-4 0.717028,-0.320825 0.716797,-0.716797 V 5.9741471 C 7.2474976,5.5781756 6.9264406,5.2571196 6.5304696,5.2573502 Z"
          />
        </svg>
      </li>
      <li
        class="page-item | previuos"
        @click="
          $emit(
            'changePage',
            pagination.currentPage == 1 ? 1 : pagination.currentPage - 1
          )
        "
        :class="isActive(pagination.currentPage - 1)"
        v-show="pagination.currentPage > 1"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <title>Previuos</title>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967C14.8232 5.76256 14.8232 6.23744 14.5303 6.53033L9.06066 12L14.5303 17.4697C14.8232 17.7626 14.8232 18.2374 14.5303 18.5303Z"
          />
        </svg>
      </li>
      <li
        v-for="page in pagination.totalPages"
        :key="page"
        class="page-item"
        @click="$emit('changePage', page)"
        :class="isActive(page)"
        v-show="page >= min && page <= max && pagination.totalPages != 1"
      >
        <span class="page-container">
          {{ page }}
        </span>
      </li>
      <li
        class="page-item | next"
        @click="
          $emit(
            'changePage',
            pagination.currentPage == pagination.totalPages
              ? pagination.currentPage
              : pagination.currentPage + 1
          )
        "
        v-show="pagination.currentPage < pagination.totalPages"
        :class="isActive(pagination.currentPage + 1)"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <title>Next</title>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303C9.17678 18.2374 9.17678 17.7626 9.46967 17.4697L14.9393 12L9.46967 6.53033C9.17678 6.23744 9.17678 5.76256 9.46967 5.46967Z"
          />
        </svg>
      </li>
      <li
        class="page-item | next"
        @click="$emit('changePage', pagination.totalPages)"
        :class="isActive(pagination.currentPage + 1)"
        v-show="pagination.totalPages - pagination.currentPage > numPages / 2"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <title>Last Page</title>
          <path
            d="m 6.5665505,5.2495377 c 0.191925,0 0.382847,0.074258 0.529297,0.2207032 l 6.0000005,6.0000001 c 0.29289,0.292899 0.29289,0.767647 0,1.060547 l -6.0000005,6 c -0.2929,0.292899 -0.767647,0.292899 -1.060547,0 -0.2929,-0.2929 -0.2929,-0.767648 0,-1.060547 L 11.506004,11.999538 6.0353005,6.5307877 c -0.2929,-0.2928897 -0.2929,-0.7676571 0,-1.0605468 0.14645,-0.1464449 0.339325,-0.2207032 0.53125,-0.2207032 z m 10.9029795,0.00781 c 0.39521,8.473e-4 0.715076,0.321589 0.714844,0.7167994 V 18.024928 c 2.31e-4,0.395209 -0.319635,0.71595 -0.714844,0.716797 -0.395972,2.31e-4 -0.717028,-0.320825 -0.716797,-0.716797 V 5.9741471 C 16.752502,5.5781756 17.073559,5.2571196 17.46953,5.2573502 Z"
          />
        </svg>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  props: {
    pagination: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      windowWidth: 8000,
    };
  },
  computed: {
    // a computed getter
    numPages() {
      // `this` points to the vm instance
      return this.windowWidth > 700 ? 8 : 5;
    },
    // logic to align the page always in the center
    min() {
      let minus =
        this.pagination.currentPage + this.numPages / 2 < 1
          ? 1
          : this.pagination.currentPage - this.numPages / 2;
      return this.pagination.totalPages - minus < this.numPages
        ? this.pagination.totalPages - this.numPages
        : minus;
    },
    max() {
      return this.pagination.currentPage + 4 <= this.numPages + 1
        ? this.numPages + 1
        : this.pagination.currentPage + this.numPages / 2;
    },
  },
  methods: {
    isActive(numPage) {
      return numPage == this.pagination.currentPage ? "active" : "";
    },
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  ol {
    bottom: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 0.5rem;
    li {
      display: flex;
      background-color: $base-second-color;
      align-items: center;
      justify-content: center;
      border-radius: 5rem;
      color: $secondary-color;
      cursor: pointer;
      width: 3rem;
      height: 3rem;
      svg {
        width: 2rem;
        color: $secondary-color;
      }
      &:hover {
        background-color: $primary-color;
      }
      &.active {
        background-color: $primary-color;
      }
    }
  }
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
