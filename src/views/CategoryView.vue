<template>
  <main>
    <the-loading v-if="loading" />
    <the-error v-else-if="error" />
    <section v-else-if="details">
      <the-main-title :title="title" />
      <the-content-visualization :contentDetails="details.data" />
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
  name: "CategoryView",
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
    };
  },
  computed: {
    actualPage() {
      return parseInt(this.$route.query.page) || 1;
    },
    filmsCategory() {
      return this.$route.query.category;
    },
    title() {
      return `Category ${this.$route.query.category || ""}`;
    },
  },
  methods: {
    // change the page value in the query params
    newPage(numPage) {
      window.scrollTo(0, 0);
      this.$router.push({
        query: {
          category: this.filmsCategory,
          page: numPage,
        },
      });
    },
  },
  // mounted() {
  //   this.$router.push({
  //     state: { categoryTitle: this.filmsCategory },
  //     query: {
  //       type: this.filmsCategory,
  //       page: this.actualPage,
  //     },
  //   });
  // },
  apollo: {
    details: {
      query: gql`
        query GetFilmsByCategory($filmsCategory: String, $page: Int) {
          getFilmsByCategory(filmsCategory: $filmsCategory, page: $page) {
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
          filmsCategory: this.filmsCategory,
          page: this.actualPage,
        };
      },
      update(data) {
        return data.getFilmsByCategory;
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
