import gql from "graphql-tag";

export default {
  methods: {
    async createCategory(category) {
      console.log("category", category);
      await this.$apollo
        .mutate({
          mutations: gql`
            mutation CreateCategory($categoryInput: CategoryInput) {
              createCategory(categoryInput: $categoryInput) {
                data {
                  id
                }
              }
            }
          `,
          variables: {
            categoryInput: category,
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
