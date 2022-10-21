<template>
  <div class="type">
    <the-button-close @btnClicked="$emit('clicked')" />
    <nav class="types | blur">
      <the-loading v-if="loading" />
      <the-error v-else-if="error" :refetch="true" @reload="reloadTheQuery()" />
      <ul v-else-if="categories">
        <h2 class="simple-title">Categories</h2>
        <li v-for="item in categories.data" :key="item.id">
          <router-link
            class="img-button"
            @click="$emit('clicked')"
            :to="goTo(item)"
          >
            <svg
              v-html="item.svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            ></svg>
            {{ item.category }}
          </router-link>
        </li>
      </ul>
      <the-empty v-else />
    </nav>
  </div>
</template>

<script>
import TheButtonClose from "@/components/TheButtonClose.vue";
import Categories from "@/mixins/queries/categories.js";
import TheLoading from "@/components/TheLoading.vue";
import TheError from "@/components/TheError.vue";
import queryParams from "@/mixins/queries/queryParams.js";
import TheEmpty from "@/components/TheEmpty.vue";

export default {
  components: {
    TheButtonClose,
    TheLoading,
    TheError,
    TheEmpty,
  },
  mixins: [Categories, queryParams],
  methods: {
    reloadTheQuery() {
      this.$apollo.queries.categories.refetch();
    },
    goTo(item) {
      return {
        name: "Category",
        state: { categoryTitle: item.category },
        query: { category: item.category, page: 1 },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.type {
  position: fixed;
  width: 100%;
  top: 5.4rem;
  right: 0;
  bottom: 9.4rem;
  .types {
    z-index: 3;
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    scroll-behavior: smooth;
    display: flex;
    justify-content: center;
    align-items: center;
    &::-webkit-scrollbar {
      width: 0;
    }
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      height: 100%;
      width: 100%;
      padding-top: 2rem;
      li {
        &:last-child {
          padding-bottom: 7rem;
        }
      }
    }
  }
}
</style>
