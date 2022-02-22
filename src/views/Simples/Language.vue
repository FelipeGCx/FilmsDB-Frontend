<template>
  <Loading v-show="!filmsStatus" />
  <FilmsView :FilmsDetail="filmsInPage" v-show="filmsStatus" />
  <Pagination
    :dataOriginal="FilmsDetail"
    :nameTo="'Language'"
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
  name: "Language",
  components: {
    FilmsView,
    Pagination,
    Loading,
  },
  data() {
    return {
      FilmsDetail: "",
      filmsStatus: false,
    };
  },
  apollo: {
    FilmsDetail: {
      query: gql`
        query GetFilmsByLanguage($filmsLanguage: Boolean) {
          getFilmsByLanguage(filmsLanguage: $filmsLanguage) {
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
            poster
            info
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
      variables: {
        filmsLanguage: true,
      },
      update: (data) => data.getFilmsByLanguage,
      result() {
        this.filmsStatus = true;
      },
    },
  },
  methods: {
    getData() {},
  },
};
</script>

<style scoped>
</style>

