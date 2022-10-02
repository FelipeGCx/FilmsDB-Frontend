import gql from "graphql-tag";

export default {
  apollo: {
    sagas: {
      query: gql`
        query GetSagas {
          getSagas {
            data {
              id
              saga
              svg
            }
            error
          }
        }
      `,
      update(data) {
        return data.getSagas;
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
