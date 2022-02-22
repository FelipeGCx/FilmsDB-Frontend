<template>
<h1>Todo El Contenido</h1>
  <Loading v-show="!filmsStatus" />
  <FilmsView :FilmsDetail="filmsInPage" v-show="filmsStatus" />
  <Pagination
    :dataOriginal="FilmsDetail"
    :nameTo="'All'"
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
  name: "All",
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
    };
  },
  apollo: {
    FilmsDetail: {
      query: gql`
        query GetFilmsByType($filmsType: String) {
          getFilmsByType(filmsType: $filmsType) {
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
        filmsType: "all",
      },
      update: (data) => data.getFilmsByType,
      result() {
        this.filmsStatus = true;
      },
      error() {
        this.$apollo.queries.GetFilmsByType.refetch();
      },
    },
  },
  methods: {
    loadList(data) {
      this.filmsInPage = data;
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

<style>
</style>