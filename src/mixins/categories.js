import gql from "graphql-tag";

export default {
  apollo: {
    categories: {
      query: gql`
        query GetCategories {
          getCategories {
            data {
              id
              category
              svg
            }
            error
          }
        }
      `,
      update(data) {
        return data.getCategories;
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
