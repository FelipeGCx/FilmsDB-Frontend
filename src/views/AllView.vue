<template>
  <div v-if="loading" class="loading-apollo">Loading...</div>
  <div v-else-if="error" class="error-apollo">An error occurred {{ tt }}</div>
  <section v-else-if="details">
    <the-main-title :title="title()" />
    <the-filters @doFilter="doFilter" />
    <the-content-visualization :contentDetails="details.data" />
    <the-pagination @changePage="newPage" :pagination="details.page" />
  </section>
  <div v-else class="no-result-apollo">No result :(</div>
</template>

<script>
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
    filmsYear() {
      return parseInt(this.$route.query.year) || new Date().getFullYear();
    },
    filmsNote() {
      return this.$route.query.note || "none";
    },
  },
  methods: {
    // change the page value in the query params
    newPage(numPage) {
      window.scrollTo(0, 0);
      this.$router.push({
        query: {
          type: this.filmsType,
          year: this.filmsYear,
          note: this.filmsNote,
          page: numPage,
        },
      });
    },
    doFilter(data) {
      this.$router.push({
        query: {
          type: data.type,
          year: data.year ?? new Date().getFullYear(),
          note: data.note ?? "none",
          page: 1,
        },
      });
    },
    title() {
      let typos = {
        all: "All Content",
        anime: "Animes",
        serie: "Series",
        movie: "Movies",
      };
      return typos[this.filmsType];
    },
  },
  mounted() {
    this.$router.push({
      query: {
        type: this.filmsType,
        year: this.filmsYear,
        note: this.filmsNote,
        page: this.actualPage,
      },
    });
  },
  apollo: {
    details: {
      query: gql`
        query GetFilmsByType(
          $filmsType: String
          $filmsYear: Int
          $filmsNote: String
          $page: Int
        ) {
          getFilmsByType(
            filmsType: $filmsType
            filmsYear: $filmsYear
            filmsNote: $filmsNote
            page: $page
          ) {
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
            error
            page {
              totalItems
              size
              totalPages
              currentPage
            }
          }
        }
      `,
      variables() {
        return {
          filmsType: this.filmsType,
          filmsYear: this.filmsYear,
          filmsNote: this.filmsNote,
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
.loading-apollo {
  color: aliceblue;
}
section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
}
</style>
