<template>
  <main>
    <article>
      <fdb-title>All Content</fdb-title>
      <ul>
        <li v-for="film in films.data" :key="film.id">
          <fdb-film-card :payload="film" is-admin />
        </li>
      </ul>
      <fdb-pagination
        :pagination="result.getFilmsByType.page"
        @change-page="handlerChangePage"
      />
    </article>
  </main>
</template>

<script setup lang="ts">
import { FdbFilmCard } from "@/components/globals/cards";
import { FdbPagination } from "@/components/globals/general";
import { FdbTitle } from "@/components/globals/ui";

import { films, result, handlerChangePage } from "./_actions";
</script>

<style lang="scss">
main {
  article {
    padding: 1rem 7vw;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    ul {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
      justify-content: center;
      width: 100%;
      place-items: center;
      gap: 1.2rem;
    }
  }
}
</style>
