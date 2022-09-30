<template>
  <div v-if="loading" class="loading apollo">Loading...</div>
  <div v-else-if="error" class="error apollo">An error occurred {{ tt }}</div>
  <div v-else-if="details">
    <the-main-title :title="title" />
    <the-content-visualization :contentDetails="details.data" />
    <the-pagination
      @changePage="newPage"
      :pagination="{
        totalPages: details.page.totalPages,
        currentPage: details.page.currentPage,
      }"
    />
  </div>
  <div v-else class="no-result apollo">No result :(</div>
  <!-- {{ details }} -->
</template>

<script>
// import componets required
import TheMainTitle from "@/components/TheMainTitle.vue";
import ThePagination from "@/components/ThePagination.vue";
import TheContentVisualization from "@/components/TheContentVisualization.vue";
import gql from "graphql-tag";

export default {
  name: "AnimeView",
  components: {
    TheMainTitle,
    TheContentVisualization,
    ThePagination,
  },
  data() {
    return {
      title: "Anime",
      details: null,
      loading: false,
      error: false,
      tt: null,
    };
  },
  computed: {
    actualPage() {
      return parseInt(this.$route.query.page) || 1;
    },
  },
  methods: {
    // change the page value in the query params
    newPage(numPage) {
      window.scrollTo(0, 1000);
      this.$router.push({
        query: {
          page: numPage,
        },
      });
    },
  },
  apollo: {
    details: {
      query: gql`
        query GetFilmsByType($filmsType: String, $page: Int) {
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
      `,
      variables() {
        return {
          filmsType: "movie",
          page: this.actualPage,
        };
      },
      update(data) {
        return data.getFilmsByType;
      },
      error(error) {
        this.tt = error;
        this.error = true;
      },
      watchLoading(isLoading) {
        this.loading = isLoading;
      },
    },
  },
};
</script>
