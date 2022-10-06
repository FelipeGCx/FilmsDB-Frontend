<template>
  <div class="type">
    <the-button-close @btnClicked="$emit('clicked')" />
    <nav class="types | blur">
      <div v-if="loading" class="loading apollo">Loading...</div>
      <div v-else-if="error" class="error apollo">An error occurred</div>
      <ul v-else-if="categories">
        <h2 class="simple-title">Categories</h2>
        <li v-for="(item, index) in categories.data" :key="index">
          <router-link
            class="img-button"
            @click="$emit('clicked')"
            :to="{
              name: 'Category',
              state: { categoryTitle: item.category },
              query: { category: item.category, page: 1 },
            }"
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
      <div v-else class="no-result apollo">No result :(</div>
    </nav>
  </div>
</template>

<script>
import TheButtonClose from "@/components/TheButtonClose.vue";
import Categories from "@/mixins/categories.js";
import queryParams from "@/mixins/queryParams.js";
export default {
  components: { TheButtonClose },
  mixins: [Categories, queryParams],
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
      padding-top: 4rem;
      li {
        &:last-child {
          padding-bottom: 2rem;
        }
      }
    }
  }
}
</style>
