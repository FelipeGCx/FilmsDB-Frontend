<script>
export default {
  // All
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
    },
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
        filmsType: "movie",
      },
      update: (data) => data.getFilmsByType,
      result() {
        this.filmsStatus = true;
      },
    },
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
        filmsType: "anime",
      },
      update: (data) => data.getFilmsByType,
      result() {
        this.filmsStatus = true;
      },
    },
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
        filmsType: "serie",
      },
      update: (data) => data.getFilmsByType,
      result() {
        this.filmsStatus = true;
      },
    },
  },
  // ByYear
  apollo: {
    FilmsDetail: {
      query: gql`
        query GetFilmsByYear($filmsYear: Int, $filmsOrder: String) {
          getFilmsByYear(filmsYear: $filmsYear, filmsOrder: $filmsOrder) {
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
        filmsYear: this.year,
        filmsOrder: "desc",
      },
      update: (data) => data.getFilmsByYear,
      result() {
        this.filmsStatus = true;
      },
    },
  },
  // ByNote
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
  // ByCategory
  apollo: {
    FilmsDetail: {
      query: gql`
        query GetFilmsByCategory($filmsCategory: Int) {
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
      variables: {
        filmsCategory: this.category,
      },
      update: (data) => data.getFilmsByCategory,
      result() {
        this.filmsStatus = true;
      },
    },
  },
  // ByLanguage
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
        filmsLanguage: this.language,
      },
      update: (data) => data.getFilmsByLanguage,
      result() {
        this.filmsStatus = true;
      },
    },
  },
  // ByFavorite
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
        filmsFavorite: this.favorite,
      },
      update: (data) => data.getFilmsByFavorite,
      result() {
        this.filmsStatus = true;
      },
    },
  },
  // BySaga
  apollo: {
    FilmsDetail: {
      query: gql`
        query GetFilmsBySaga($filmsSaga: Int) {
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
        filmsSaga: this.saga,
      },
      update: (data) => data.getFilmsBySaga,
      result() {
        this.filmsStatus = true;
      },
    },
  },
  // ByTypeAndYear
  apollo: {
    FilmsDetail: {
      query: gql`
        query GetFilmsByTypeAndYear(
          $filmsType: String
          $filmsYear: Int
          $filmsOrder: String
        ) {
          getFilmsByTypeAndYear(
            filmsType: $filmsType
            filmsYear: $filmsYear
            filmsOrder: $filmsOrder
          ) {
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
        filmsType: "anime",
        filmsYear: this.year,
        filmsOrder: "desc",
      },
      update: (data) => data.getFilmsByTypeAndYear,
      result() {
        this.filmsStatus = true;
      },
    },
  },
  apollo: {
    FilmsDetail: {
      query: gql`
        query GetFilmsByTypeAndYear(
          $filmsType: String
          $filmsYear: Int
          $filmsOrder: String
        ) {
          getFilmsByTypeAndYear(
            filmsType: $filmsType
            filmsYear: $filmsYear
            filmsOrder: $filmsOrder
          ) {
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
        filmsType: "movie",
        filmsYear: this.year,
        filmsOrder: "desc",
      },
      update: (data) => data.getFilmsByTypeAndYear,
      result() {
        this.filmsStatus = true;
      },
    },
  },
  apollo: {
    FilmsDetail: {
      query: gql`
        query GetFilmsByTypeAndYear(
          $filmsType: String
          $filmsYear: Int
          $filmsOrder: String
        ) {
          getFilmsByTypeAndYear(
            filmsType: $filmsType
            filmsYear: $filmsYear
            filmsOrder: $filmsOrder
          ) {
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
        filmsType: "serie",
        filmsYear: this.year,
        filmsOrder: "desc",
      },
      update: (data) => data.getFilmsByTypeAndYear,
      result() {
        this.filmsStatus = true;
      },
    },
  },
  apollo: {
    FilmsDetail: {
      query: gql`
        query GetFilmsByCategory($filmsCategory: Int) {
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
      variables: {
        filmsCategory: this.category,
      },
      update: (data) => data.getFilmsByCategory,
      result() {
        this.filmsStatus = true;
      },
    },
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
        filmsLanguage: this.language,
      },
      update: (data) => data.getFilmsByLanguage,
      result() {
        this.filmsStatus = true;
      },
    },
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
        filmsFavorite: this.favorite,
      },
      update: (data) => data.getFilmsByFavorite,
      result() {
        this.filmsStatus = true;
      },
    },
  },
  apollo: {
    FilmsDetail: {
      query: gql`
        query GetFilmsBySaga($filmsSaga: Int) {
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
        filmsSaga: this.saga,
      },
      update: (data) => data.getFilmsBySaga,
      result() {
        this.filmsStatus = true;
      },
    },
  },
};
</script>