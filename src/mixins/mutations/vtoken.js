import gql from "graphql-tag";

export default {
  methods: {
    async verifyToken(token) {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation VerifyToken($token: String) {
              verifyToken(token: $token) {
                data {
                  roles
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
          let data = result.data.verifyToken.data;
          this.isLogin = true;
          this.isAdmin = data.roles.includes("ROLE_ADMIN");
          this.$isAdmin = data.roles.includes("ROLE_ADMIN");
        })
        .catch(() => {
          this.$isAdmin = false;
          this.isAdmin = false;
          this.isLogin = false;
        });
    },
  },
};
