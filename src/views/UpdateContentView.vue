<template>
  <main>
    <section>
      <the-main-title :title="'update register'" :padding="'0vw'" />
      <the-load-content
        :filme="filme"
        :action="'update'"
        @clicked="updateFilme"
      />
    </section>
  </main>
</template>

<script>
import TheMainTitle from "@/components/TheMainTitle.vue";
import TheLoadContent from "@/components/TheLoadContent.vue";
export default {
  components: { TheMainTitle, TheLoadContent },
  data() {
    return {};
  },
  computed: {
    filmTitle() {
      return this.$route.query.title;
    },
    season() {
      return this.$route.query.s || 0;
    },
  },
  methods: {
    updateFilme(data) {
      console.log(data);
    },
  },
  apollo: {
    filme: {
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
        const filme = this.filme.filter((f) => {
          if (f.season === this.season) {
            return f;
          }
        });
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
  margin: 2rem 6rem 0 6rem;
}
</style>
