import gql from "graphql-tag";

export default {
  methods: {
    async updateFilm(id, film) {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation UpdateFilm($filmId: Int!, $filmInput: FilmInputUpdate) {
              updateFilm(filmId: $filmId, filmInput: $filmInput) {
                data {
                  id
                }
              }
            }
          `,
          variables: {
            filmId: id,
            filmInput: film,
          },
        })
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
