<template>
  <h1 class="h1-titles">{{ toTitleCase(saga) }}</h1>
<!-- animation of loading -->
  <Loading v-show="!filmsStatus" />
  <!-- list of films -->
  <FilmsView :FilmsDetail="filmsInPage" v-show="filmsStatus" />
  <!-- pagination -->
  <PaginationR
    :dataOriginal="FilmsDetail"
    :actualP="actualPage"
    @listToShow="loadList"
    @newPage="newPage"
    @loadingData="loadingData"
    v-show="filmsStatus"
  />
</template>

<script>
// import apollo library and componets required
import gql from "graphql-tag";
import Loading from "@/components/Loading.vue";
import FilmsView from "@/components/FilmsView.vue";
import PaginationR from "@/components/PaginationR.vue";

export default {
  name: "Saga",
  components: {
    Loading,
    FilmsView,
    PaginationR,
  },
  data() {
    return {
      FilmsDetail: [],
      filmsInPage: [],
      filmsStatus: false,
      actualPage: parseInt(this.$route.query.page),
      saga: this.$route.params.id,
    };
  },
  // get the query to apollo server
  apollo: {
    FilmsDetail: {
      query: gql`
        query GetFilmsBySaga($filmsSaga: String) {
          getFilmsBySaga(filmsSaga: $filmsSaga) {
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
        }
      `,
      variables() {
        return {
          filmsSaga: this.saga,
        };
      },
      update: (data) => data.getFilmsBySaga,
      result() {
        this.filmsStatus = true;
      },
    },
  },
  methods: {
    // load the list of films in the page
    loadList(data) {
      this.filmsInPage = data;
    },
    // change the page
    newPage(numPage) {
      this.actualPage = numPage;
      this.$router.push({
        query: {
          page: numPage,
        },
      });
    },
    // change the status for create animation of loading while the data is loading
    loadingData() {
      this.filmsStatus = false;
      setTimeout(() => {
        this.filmsStatus = true;
      }, 500);
    },
    // change the title to title case
    toTitleCase(str) {
      return str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }
  },
  mounted() {
        this.actualPage = parseInt(this.$route.query.page) || 1;
        this.saga = this.$route.params.id;
  },
  beforeUpdate() {
        this.actualPage = parseInt(this.$route.query.page) || 1;
        this.saga = this.$route.params.id;
  },
};
</script>

<style scoped>
</style>

        