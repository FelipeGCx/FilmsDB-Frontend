import gql from "graphql-tag";

export default {
  methods: {
    async verifyToken(token) {
      console.log("token", token);
      return await this.$apollo.mutate({
        mutation: gql`
          mutation VerifyToken($token: String) {
            verifyToken(token: $token) {
              data {
                id
              }
              error
            }
          }
        `,
        variables: {
          token: token,
        },
      });
    },
  },
};
