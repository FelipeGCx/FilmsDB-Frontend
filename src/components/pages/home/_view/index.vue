<template>
  <main>
    <article>
      <fdb-title>All Content</fdb-title>

      <ul v-if="isLoading">
        <li v-for="index in 30" :key="index">
          <fdb-skeleton-card />
        </li>
      </ul>
      <ul :class="{ skeleton: isLoading }">
        <li v-for="film in data" :key="film.id">
          <fdb-film-card :payload="film" is-admin />
        </li>
      </ul>
      <fdb-pagination
        :pagination="pagination"
        @change-page="handlerChangePage"
      />
    </article>
  </main>
</template>

<script setup lang="ts">
import { useQuery, provideApolloClient } from "@vue/apollo-composable";
import apolloClient from "@/lib/apollo.client";
import { getFilmsByType } from "@/graphql/queries";
import { Actions } from "./_actions";
import { Variables, filters } from "./_variables";

provideApolloClient(apolloClient);

const response = useQuery(getFilmsByType, {
  filmsType: filters.type,
  filmsYear: filters.year,
  filmsNote: filters.note,
  page: filters.currentPage,
});

const { handlerChangePage } = Actions(response);

const { data, pagination } = Variables(response);

// Usar el loading de Apollo directamente
const isLoading = response.loading;
</script>

<style lang="scss">
main {
  article {
    padding: 1rem 7vw;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    ul {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
      justify-content: center;
      width: 100%;
      place-items: center;
      gap: 1.2rem;
      opacity: 1;

      &.skeleton {
        opacity: 0;
        position: absolute;
      }

      li {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
