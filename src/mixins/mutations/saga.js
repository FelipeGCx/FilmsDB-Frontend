import gql from "graphql-tag";

export default {
  methods: {
    async createSaga(saga) {
      console.log("saga", saga);
      let data = await this.$apollo.mutate({
        mutation: gql`
          mutation CreateSaga($sagaInput: SagaInput) {
            createSaga(sagaInput: $sagaInput) {
              data {
                id
              }
            }
          }
        `,
        variables: {
          sagaInput: saga,
        },
      });
      // .then((result) => {
      //   console.log(result);
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
      console.log(data);
    },
  },
};
