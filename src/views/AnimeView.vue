<template>
  <ApolloQuery :query="query" :variables="variables">
    <template v-slot="{ result: { error, data }, isLoading }">
      <!-- Loading -->
      <div v-if="isLoading" class="loading apollo">Loading...</div>

      <!-- Error -->
      <div v-else-if="error" class="error apollo">An error occurred</div>

      <!-- Result -->
      <div v-else-if="data" class="result apollo">
        <the-main-title :title="title" />
        <the-content-visualization :contentDetails="data.data" />
        <the-pagination @changePage="newPage" :pagination="data.page" />
      </div>

      <!-- No result -->
      <div v-else class="no-result apollo">No result :(</div>
    </template>
  </ApolloQuery>
</template>

<script>
// import componets required
import TheMainTitle from "@/components/TheMainTitle.vue";
import Pagination from "@/components/ThePagination.vue";
import TheContentVisualization from "@/components/TheContentVisualization.vue";

export default {
  name: "Anime",
  components: {
    TheMainTitle,
    TheContentVisualization,
    Pagination,
  },
  data() {
    return {
      query: require("@/graphql/type.gql"),
      variables: { filmsType: "Anime", page: actualPage },
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
