<template>
  <div class="saga">
    <the-button-close @btnClicked="$emit('clicked')" />
    <nav class="sagas | blur">
      <div v-if="loading" class="loading apollo">Loading...</div>
      <div v-else-if="error" class="error apollo">An error occurred</div>
      <ul v-else-if="sagas">
        <h2 class="simple-title">Sagas</h2>
        <li v-for="(item, index) in sagas.data" :key="index">
          <router-link
            class="img-button"
            @click="$emit('clicked')"
            :to="{
              name: 'Saga',
              state: { sagaTitle: item.saga },
              query: { saga: item.saga, page: 1 },
            }"
          >
            <svg
              v-html="item.svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            ></svg>
            {{ item.saga }}
          </router-link>
        </li>
      </ul>
      <div v-else class="no-result apollo">No result :(</div>
    </nav>
  </div>
</template>

<script>
import TheButtonClose from "@/components/TheButtonClose.vue";
import queryParams from "@/mixins/queryParams.js";
import Sagas from "@/mixins/sagas.js";

export default {
  components: { TheButtonClose },
  mixins: [Sagas, queryParams],
};
</script>

<style lang="scss" scoped>
.saga {
  position: fixed;
  width: 100%;
  top: 5.4rem;
  right: 0;
  bottom: 9.4rem;
  .sagas {
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
