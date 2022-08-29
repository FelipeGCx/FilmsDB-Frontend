<!-- <template>
  <h1 class="h1-titles">Resultados para: {{ toTitleCase(title) }}</h1>
  <Loading v-show="!filmsStatus" />
  <FilmsView :FilmsDetail="filmsInPage" v-show="filmsStatus" />
  <PaginationR
    :dataOriginal="FilmsDetail"
    :actualP="actualPage"
    @listToShow="loadList"
    @newPage="newPage"
    @loadingData="loadingData"
    v-show="filmsStatus"
  />
</template> -->

<!-- <script>
// import apollo library and componets required
import gql from "graphql-tag";
import Loading from "@/components/Loading.vue";
import FilmsView from "@/components/FilmsView.vue";
import PaginationR from "@/components/PaginationR.vue";
export default {
  name: "Title",
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
      title: this.$route.query.title,
    };
  },
  apollo: {
    FilmsDetail: {
      query: gql`
        query GetFilmByTitle($filmTitle: String) {
          getFilmByTitle(filmTitle: $filmTitle) {
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
          filmTitle: this.title,
        };
      },
      update: (data) => data.getFilmByTitle,
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
      let title = this.$route.query.title;
      this.$router.push({
        query: {
          title: title,
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
    // parse to title case
    toTitleCase(str) {
      return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    },
  },
  mounted() {
    this.actualPage = parseInt(this.$route.query.page) || 1;
    this.title = this.$route.query.title;
  },
  beforeUpdate() {
    this.actualPage = parseInt(this.$route.query.page) || 1;
    this.title = this.$route.query.title;
  },
};
</script> -->

<!-- <style scoped></style> -->
