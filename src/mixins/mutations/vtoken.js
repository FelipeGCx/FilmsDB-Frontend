import gql from "graphql-tag";

export default {
  methods: {
    async verifyToken(token) {
      console.log("token", token);
      await this.$apollo
        .mutate({
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
        })
        .then((result) => {
          console.log(result);
          this.$isAdmin = true;
        })
        .catch((error) => {
          console.log(error);
          this.$isAdmin = false;
        });
    },
  },
};
