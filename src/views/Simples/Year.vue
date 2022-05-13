<template>
<h1 class="h1-titles">Resultados año: {{year}}</h1>
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
  name: "Year",
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
      actualPage: parseInt(this.$route.query.page) || 1,
      year: parseInt(this.$route.query.year),
    };
  },
  // get the query to apollo server
  apollo: {
    FilmsDetail: {
      query: gql`
        query GetFilmsByYear($filmsYear: Int, $filmsOrder: String) {
          getFilmsByYear(filmsYear: $filmsYear, filmsOrder: $filmsOrder) {
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
          filmsYear: this.year,
        filmsOrder: "desc",
        };
      },
      update: (data) => data.getFilmsByYear,
      result() {
        // change the status for hide the loading
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
      let year = this.$route.query.year;
      this.$router.push({
        query: {
          year: year,
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
  },
  mounted() {
    this.year = parseInt(this.$route.query.year);
    this.actualPage = parseInt(this.$route.query.page) || 1;
  },
  beforeUpdate() {
    this.year = parseInt(this.$route.query.year);
    this.actualPage = parseInt(this.$route.query.page) || 1;
  },
};
</script>

<style scoped>
</style>