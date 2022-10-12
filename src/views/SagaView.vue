<template>
  <main>
    <the-loading v-if="loading" />
    <the-error v-else-if="error" />
    <section v-else-if="details" ref="section">
      <the-main-title :title="title" :padding="space" />
      <the-content-visualization
        :contentDetails="details.data"
        @filled="toTitle"
      />
      <the-pagination @changePage="newPage" :pagination="details.page" />
    </section>
    <div v-else class="no-result-apollo">No result :(</div>
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
import queryParams from "@/mixins/queryParams";
import stringObj from "@/mixins/stringObj";

export default {
  name: "SagaView",
  components: {
    TheMainTitle,
    TheContentVisualization,
    ThePagination,
    TheError,
    TheLoading,
  },
  mixins: [queryParams, stringObj],
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
    filmsSaga() {
      return this.$route.query.saga;
    },
    title() {
      return `Saga ${this.$route.query.saga || ""}`;
    },
  },
  methods: {
    // change the page value in the query params
    newPage(numPage) {
      window.scrollTo(0, 0);
      this.$router.push({
        query: {
          saga: this.filmsSaga,
          page: numPage,
        },
      });
    },
    toTitle(n) {
      n = (this.$refs.section.offsetWidth - n) / 2;
      this.space = ` ${n}px`;
    },
  },
  // mounted() {
  //   this.$router.push({
  //     state: { sagaTitle: this.filmsSaga },
  //     query: {
  //       type: this.filmsSaga,
  //       page: this.actualPage,
  //     },
  //   });
  // },
  apollo: {
    details: {
      query: gql`
        query GetFilmsBySaga($filmsSaga: String, $page: Int) {
          getFilmsBySaga(filmsSaga: $filmsSaga, page: $page) {
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
          filmsSaga: this.filmsSaga,
          page: this.actualPage,
        };
      },
      update(data) {
        return data.getFilmsBySaga;
      },
      error() {
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
