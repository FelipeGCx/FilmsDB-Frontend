<template>
  <main>
    <section>
      <the-main-title :title="'update register'" :padding="space" />
      <the-load-content
        :content="filme"
        :action="'update'"
        @clicked="updateFilme"
        @filled="toTitle"
      />
    </section>
  </main>
</template>

<script>
import TheMainTitle from "@/components/TheMainTitle.vue";
import TheLoadContent from "@/components/TheLoadContent.vue";
import gql from "graphql-tag";
export default {
  components: { TheMainTitle, TheLoadContent },
  data() {
    return {
      filme: {
        type: "Movie",
        title: null,
        titleOG: null,
        year: new Date().getFullYear(),
        note: 10,
        language: false,
        category: 0,
        favorite: false,
        info: " ",
        link: " ",
        poster:
          "https://firebasestorage.googleapis.com/v0/b/films-a2d18.appspot.com/o/assets%2FNot%20Found%20Image.webp?alt=media&token=8bfcfa56-b828-4db9-9c74-82e34324f673",
        season: 0,
        saga: 0,
      },
      space: "0px",
    };
  },
  computed: {
    filmTitle() {
      return this.$route.query.title || " ";
    },
    season() {
      return parseInt(this.$route.query.s) || 0;
    },
  },
  methods: {
    updateFilme(data) {
      console.log(data);
    },
    toTitle(n) {
      n = (window.innerWidth - n) / 2;
      this.space = ` ${n}px`;
    },
  },
  mounted() {
    this.$router.push({
      query: {
        title: this.filmTitle,
        s: this.season,
      },
    });
  },
  apollo: {
    film: {
      query: gql`
        query GetFilmByTitle($filmTitle: String) {
          getFilmByTitle(filmTitle: $filmTitle) {
            data {
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
        }
      `,
      variables() {
        return {
          filmTitle: this.filmTitle,
        };
      },
      update(data) {
        return data.getFilmByTitle;
      },
      result() {
        let filmes = Array.from(this.film.data).filter((f) => {
          if (
            f.season === this.season &&
            f.titleOG.toLowerCase() === this.filmTitle.toLowerCase()
          ) {
            return f;
          }
        });
        // I have tried do this with map and inside of filter but it doesn't work
        let filme = {
          type: filmes[0].type,
          title: filmes[0].title,
          titleOG: filmes[0].titleOG,
          year: filmes[0].year,
          note: filmes[0].note,
          language: filmes[0].language,
          category: filmes[0].category.id,
          favorite: filmes[0].favorite,
          info: filmes[0].info,
          link: filmes[0].link,
          poster: filmes[0].poster,
          season: filmes[0].season,
          saga: filmes[0].saga.id,
        };
        this.filme = filme;
        console.log("titulo", this.filme);
      },
      error() {
        this.error = true;
      },
      watchLoading(isLoading) {
        this.loading = isLoading;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  // gap: 1rem;
  width: 100%;
  margin: 2rem 6rem 0 6rem;
}
</style>
