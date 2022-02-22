<template>
  <Loading v-show="!filmsStatus" />
  <FilmsView :FilmsDetail="filmsInPage" v-show="filmsStatus" />
  <Pagination
    :dataOriginal="FilmsDetail"
    :nameTo="'Note'"
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
  name: "Note",
  components: {
    FilmsView,
    Pagination,
    Loading,
  },
  data() {
    return {
      FilmsDetail: "",
      filmsStatus: false,
      note: 2003,
    };
  },
  apollo: {
    FilmsDetail: {
      query: gql`
        query GetFilmsByNote($filmsNote: Float, $filmsOrder: String) {
          getFilmsByNote(filmsNote: $filmsNote, filmsOrder: $filmsOrder) {
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
        filmsNote: this.note,
        filmsOrder: "desc",
      },
      update: (data) => data.getFilmsByNote,
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

