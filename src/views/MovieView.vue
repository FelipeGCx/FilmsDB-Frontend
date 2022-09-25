<template>
  <ApolloQuery
    :query="require('@/graphql/type.gql')"
    :variables="{ filmsType: 'movie', page: actualPage }"
  >
    <template v-slot="{ result: { error, data }, isLoading }">
      <!-- Loading -->
      <div v-if="isLoading" class="loading apollo">Loading...</div>

      <!-- Error -->
      <div v-else-if="error" class="error apollo">An error occurred</div>

      <!-- Result -->
      <div v-else-if="data" class="result apollo">
        <the-main-title :title="'Movie'" />
        <the-content-visualization :contentDetails="data.data" />
        <the-pagination @changePage="newPage" :pagination="data.page" />
      </div>

      <!-- No result -->
      <div v-else class="no-result apollo">No result :(</div>
    </template>
  </ApolloQuery>
</template>

<script>
// import apollo library and componets required
import TheMainTitle from "@/components/TheMainTitle.vue";
import Pagination from "@/components/ThePagination.vue";
import TheContentVisualization from "@/components/TheContentVisualization.vue";
export default {
  name: "Movie",
  components: {
    TheMainTitle,
    TheContentVisualization,
    Pagination,
  },
  data() {
    return {
      actualPage: parseInt(this.$route.query.page) || 0,
    };
  },
  methods: {
    // change the page
    newPage(numPage) {
      this.actualPage = numPage;
      this.$router.push({
        query: {
          page: numPage,
        },
      });
    },
  },
  mounted() {
    this.actualPage = parseInt(this.$route.query.page) || 0;
  },
  beforeUpdate() {
    this.actualPage = parseInt(this.$route.query.page) || 0;
  },
};
</script>