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
            error
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
        const filme = this.film.data.filter((f) => {
          if (f.season === this.season) {
            return f;
          }
        });
        console.log("titulo", filme[0]);
        this.filme = filme[0];
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
  gap: 2rem;
  width: 100%;
  margin: 2rem 6rem 0 6rem;
}
</style>
