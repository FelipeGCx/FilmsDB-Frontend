<template>
  <ApolloQuery
    :query="
      (gql) => gql`
        query GetFilmsByTyper($filmsType: String, $page: Int) {
          getFilmsByType(filmsType: $filmsType, page: $page) {
            data {
              id
              type
              titleOG
              title
              year
              note
              language
              favorite
              category {
                id
                category
                svg
              }
              info
              poster
              season
              link
              saga {
                id
                saga
                svg
              }
            }
            page {
              totalItems
              size
              totalPages
              currentPage
            }
            error
          }
        }
      `
    "
    :variables="{ filmsType: 'Anime', page: 0 }"
  >
    <template v-slot="{ result: { loading, error, data } }">
      <div v-if="loading" class="loading apollo">Loading...</div>

      <div v-else-if="error" class="error apollo">An error occurred</div>

      <div v-else-if="data" class="result apollo">
        <the-main-title :title="title" />
        <the-content-visualization :contentDetails="data.data" />
        <the-pagination @changePage="newPage" :pagination="data.page" />
      </div>

      <div v-else class="no-result apollo">No result :(</div>
    </template>
  </ApolloQuery>
</template>

<script>
// import componets required
import TheMainTitle from "@/components/TheMainTitle.vue";
import ThePagination from "@/components/ThePagination.vue";
import TheContentVisualization from "@/components/TheContentVisualization.vue";
// import gql from "graphql-tag";

export default {
  name: "AnimeView",
  components: {
    TheMainTitle,
    TheContentVisualization,
    ThePagination,
  },
  data() {
    return {
      // query: require("@/graphql/type.graphql"),
      variables: { filmsType: "Anime", page: 0 },
      title: "Anime",
    };
  },
  computed: {
    actualPage() {
      return parseInt(this.$route.query.page) || 0;
    },
  },
  methods: {
    // change the page value in the query params
    newPage(numPage) {
      this.$router.push({
        query: {
          page: numPage,
        },
      });
    },
  },
};
</script>
