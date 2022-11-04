<template>
  <main>
    <the-loading v-if="loading" />
    <the-error v-else-if="error" :refetch="true" @reload="reloadTheQuery()" />
    <section v-else-if="details" ref="section">
      <the-main-title :title="'Favorites'" :padding="space" />
      <the-content-visualization
        :contentDetails="details.data"
        :isAdmin="isAdmin"
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
import gql from "graphql-tag";
import TheError from "@/components/TheError.vue";
import TheLoading from "@/components/TheLoading.vue";
import queryParams from "@/mixins/queries/queryParams";
import stringObj from "@/mixins/utils/stringObj";
import TheEmpty from "@/components/TheEmpty.vue";
import adminProps from "@/mixins/utils/adminProps";

export default {
  name: "CategoryView",
  components: {
    TheMainTitle,
    TheContentVisualization,
    ThePagination,
    TheError,
    TheLoading,
    TheEmpty,
  },
  mixins: [queryParams, stringObj, adminProps],
  data() {
    return {
      details: null,
      space: "0vw",
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
      window.scrollTo(0, 0);
      this.$router.push({
        query: {
          page: numPage,
        },
      });
    },
    toTitle(n) {
      n = n >= 240 ? (this.$refs.section.offsetWidth - n) / 2 : 0;
      this.space = ` ${n}px`;
    },
    reloadTheQuery() {
      this.error = false;
      this.details = null;
      this.$apollo.queries.details.refetch();
    },
  },
  apollo: {
    details: {
      query: gql`
        query GetFilmsByFavorite($filmsFavorite: Boolean, $page: Int) {
          getFilmsByFavorite(filmsFavorite: $filmsFavorite, page: $page) {
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
          filmsFavorite: true,
          page: this.actualPage,
        };
      },
      update(data) {
        return data.getFilmsByFavorite;
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
  padding: 2rem 6rem 0 6rem;
  // margin-top: 2rem;
}
</style>
