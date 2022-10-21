import gql from "graphql-tag";

export default {
  methods: {
    async createFilm(film) {
      console.log("film", film);
      await this.$apollo
        .mutate({
          mutations: gql`
            mutation CreateFilm($filmInput: FilmInput) {
              createFilm(filmInput: $filmInput) {
                data {
                  id
                }
              }
            }
          `,
          variables: {
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
