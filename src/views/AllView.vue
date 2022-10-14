<template>
  <main>
    <the-loading v-if="loading" />
    <the-error v-else-if="error" />
    <section v-else-if="details" ref="section">
      <the-main-title :title="title()" :padding="space" />
      <the-filters @doFilter="doFilter" :padding="space" />
      <the-content-visualization
        :contentDetails="details.data"
        @filled="toTitle"
      />
      <the-pagination @changePage="newPage" :pagination="details.page" />
    </section>
    <the-empty v-else />
  </main>
</template>

<script>
// import componets required
import TheMainTitle from "@/components/TheMainTitle.vue";
import ThePagination from "@/components/ThePagination.vue";
import TheContentVisualization from "@/components/TheContentVisualization.vue";
import TheFilters from "@/components/TheFilters.vue";
import gql from "graphql-tag";
import TheLoading from "@/components/TheLoading.vue";
import TheError from "@/components/TheError.vue";
import TheEmpty from "@/components/TheEmpty.vue";

export default {
  name: "AllView",
  components: {
    TheMainTitle,
    TheFilters,
    TheContentVisualization,
    ThePagination,
    TheLoading,
    TheError,
    TheEmpty,
  },
  data() {
    return {
      details: null,
      loading: false,
      error: false,
      tt: null,
      space: "0vw",
      windowWidth: 8000,
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
    toTitle(n) {
      n = (this.$refs.section.offsetWidth - n) / 2;
      this.space = ` ${n}px`;
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
section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 6rem 0 6rem;
}
</style>
