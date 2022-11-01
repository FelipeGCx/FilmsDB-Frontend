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
          this.$isAdmin = data.roles.includes("ROLE_ADMIN");
          console.log("admin despues de cargar pagina", this.$isAdmin);
        })
        .catch(() => {
          this.$isAdmin = false;
        });
    },
  },
};
