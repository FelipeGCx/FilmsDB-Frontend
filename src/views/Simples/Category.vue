<template>
  <h1>{{ toTitleCase(category) }}</h1>
  <Loading v-show="!filmsStatus" />
  <FilmsView :FilmsDetail="filmsInPage" v-show="filmsStatus" />
  <Pagination
    :dataOriginal="FilmsDetail"
    :nameTo="'Category'"
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
  name: "Category",
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
      category: this.$route.params.id,
    };
  },
  apollo: {
    FilmsDetail: {
      query: gql`
        query GetFilmsByCategory($filmsCategory: String) {
          getFilmsByCategory(filmsCategory: $filmsCategory) {
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
      variables() {
        return {
          filmsCategory: this.category,
        };
      },
      update: (data) => data.getFilmsByCategory,
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

        