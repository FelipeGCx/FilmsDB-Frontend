<template>
  <h1>{{ toTitleCase(saga) }}</h1>
  <Loading v-show="!filmsStatus" />
  <FilmsView :FilmsDetail="filmsInPage" v-show="filmsStatus" />
  <Pagination
    :dataOriginal="FilmsDetail"
    :nameTo="'Saga'"
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
  name: "Saga",
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
      saga: this.$route.params.id,
    };
  },
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
    loadList(data) {
      this.filmsInPage = data;
    },
    toTitleCase(str) {
      return str
        .toLowerCase()
        .split(" ")
        .map(function (word) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
    },
  },
  mounted() {
        this.actualPage = parseInt(this.$route.query.page) || 1;
  },
  beforeUpdate() {
        this.actualPage = parseInt(this.$route.query.page) || 1;
  },
};
</script>

<style scoped>
</style>

        