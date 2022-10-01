<template>
  <div v-if="loading" class="loading apollo">Loading...</div>
  <div v-else-if="error" class="error apollo">An error occurred {{ tt }}</div>
  <section v-else-if="details">
    <the-main-title :title="title()" />
    <the-filters @doFilter="doFilter" />
    <the-content-visualization :contentDetails="details.data" />
    <the-pagination @changePage="newPage" :pagination="details.page" />
  </section>
  <div v-else class="no-result apollo">No result :(</div>
</template>

<script>
/* eslint-disable */
// import componets required
import TheMainTitle from "@/components/TheMainTitle.vue";
import ThePagination from "@/components/ThePagination.vue";
import TheContentVisualization from "@/components/TheContentVisualization.vue";
import TheFilters from "@/components/TheFilters.vue";
import gql from "graphql-tag";

export default {
  name: "AnimeView",
  components: {
    TheMainTitle,
    TheFilters,
    TheContentVisualization,
    ThePagination,
  },
  data() {
    return {
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
    filmsType() {
      return this.$route.query.type || "all";
    },
  },
  methods: {
    // change the page value in the query params
    newPage(numPage) {
      window.scrollTo(0, 1000);
      this.$router.push({
        query: {
          type: this.$route.query.type,
          year: this.$route.query.year,
          note: this.$route.query.note,
          page: numPage,
        },
      });
    },
    doFilter(data) {
      this.$router.push({
        query: {
          type: data.type,
          year: data.year ?? new Date().getFullYear(),
          note: data.note ?? 10,
          page: 1,
        },
      });
    },
    title() {
      // eslint-disable-next-line
      let typos = {
        "all": "All Content",
        "anime": "Animes",
        "serie": "Series",
        "movie": "Movies",
      };
      return typos[this.filmsType];
    },
  },
  mounted() {
    this.$router.push({
      query: {
        page: this.$route.query.page ?? 1,
      },
    });
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
          filmsType: this.filmsType,
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

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
}
</style>
