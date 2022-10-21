<template>
  <main>
    <the-loading v-if="loading" />
    <the-error v-else-if="error" :refetch="true" @reload="reloadTheQuery()" />
    <div class="sec" v-else-if="details">
      <section v-if="details.page.totalItems > 1" ref="section">
        <the-main-title :title="title" :padding="space" />
        <the-content-visualization
          :contentDetails="details.data"
          @filled="toTitle"
        />
      </section>
      <the-empty v-else />
    </div>
    <the-empty v-else />
  </main>
</template>

<script>
// import componets required
import TheMainTitle from "@/components/TheMainTitle.vue";
import TheContentVisualization from "@/components/TheContentVisualization.vue";
import gql from "graphql-tag";
import TheError from "@/components/TheError.vue";
import TheLoading from "@/components/TheLoading.vue";
import queryParams from "@/mixins/queries/queryParams";
import TheEmpty from "@/components/TheEmpty.vue";
import stringObj from "@/mixins/utils/stringObj";

export default {
  name: "SagaView",
  components: {
    TheMainTitle,
    TheContentVisualization,
    TheError,
    TheEmpty,
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
    filmTitle() {
      return this.$route.query.title;
    },
    title() {
      return `Results: ${this.$route.query.title || ""}`;
    },
  },
  methods: {
    // change the page value in the query params
    newPage(numPage) {
      window.scrollTo(0, 0);
      this.$router.push({
        query: {
          title: this.filmTitle,
          page: numPage,
        },
      });
    },
    toTitle(n) {
      n = n >= 240 ? (this.$refs.section.offsetWidth - n) / 2 : 0;
      this.space = ` ${n}px`;
    },
    reloadTheQuery() {
      this.$apollo.queries.details.refetch();
    },
  },
  apollo: {
    details: {
      query: gql`
        query GetFilmByTitle($filmTitle: String) {
          getFilmByTitle(filmTitle: $filmTitle) {
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
          }
        }
      `,
      variables() {
        return {
          filmTitle: this.filmTitle,
        };
      },
      update(data) {
        return data.getFilmByTitle;
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
.sec {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 6rem 0 6rem;
  width: 100%;
  section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
