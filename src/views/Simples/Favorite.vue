<template>
  <h1>Favoritos</h1>
  <Loading v-show="!filmsStatus"/>
  <FilmsView :FilmsDetail="filmsInPage" v-show="filmsStatus" />
  <Pagination
    :dataOriginal="FilmsDetail"
    :nameTo="'Anime'"
    :actualP="actualPage"
    @listToShow="loadList"
    v-show="filmsStatus"
  />
</template>

<script>
import gql from 'graphql-tag';
import FilmsView from "@/components/FilmsView.vue";
import Pagination from "@/components/Pagination.vue";
import Loading from "@/components/Loading.vue";
export default {
  name: "Anime",
  components:{
      FilmsView,
      Pagination,
      Loading
  },
  data() {
    return {
      FilmsDetail: [],
      filmsInPage: [],
      filmsStatus: false,
      actualPage:1,
    };
  },
  apollo: {
    FilmsDetail: {
      query: gql`
        query GetFilmsByFavorite($filmsFavorite: Boolean) {
          getFilmsByFavorite(filmsFavorite: $filmsFavorite) {
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
        filmsFavorite: true,
      },
      update: (data) => data.getFilmsByFavorite,
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
        this.actualPage = parseInt(this.$route.query.page) || 1;
  },
  beforeUpdate() {
        this.actualPage = parseInt(this.$route.query.page) || 1;
  },
};
</script>

<style scoped>

</style>