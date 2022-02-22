<template>
<h1>Resultados año: {{year}}</h1>
  <Loading v-show="!filmsStatus" />
  <FilmsView :FilmsDetail="filmsInPage" v-show="filmsStatus" />
  <Pagination
    :dataOriginal="FilmsDetail"
    :nameTo="'Year'"
    :actualP="actualPage"
    @listToShow="loadList"
    v-show="filmsStatus"
  />
</template>

<script>
import gql from "graphql-tag";
import FilmsView from "@/components/FilmsView.vue";
import Pagination from "@/components/Pagination.vue";
import Loading from "@/components/Loading.vue";
export default {
  name: "Year",
  components: {
    FilmsView,
    Pagination,
    Loading,
  },
  data() {
    return {
      FilmsDetail: [],
      filmsInPage: [],
      filmsStatus: false,
      actualPage: 1,
      year: parseInt(this.$route.query.year),
    };
  },
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
        this.filmsStatus = true;
      },
    },
  },
  methods: {
    loadList(data) {
      this.filmsInPage = data;
    },
  },
  mounted() {
    this.year = parseInt(this.$route.params.year);
    this.actualPage = parseInt(this.$route.query.page) || 1;
  },
  beforeUpdate() {
    this.actualPage = parseInt(this.$route.query.page) || 1;
  },
};
</script>

<style scoped>
</style>