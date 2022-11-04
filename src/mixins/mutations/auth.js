import gql from "graphql-tag";

export default {
  methods: {
    async authenticate(user) {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation LoginUser($userInput: UserInput) {
              loginUser(userInput: $userInput) {
                data {
                  accessToken
                  roles
                }
              }
            }
          `,
          variables: {
            userInput: user,
          },
        })
        .then((result) => {
          result = result.data.loginUser.data;
          localStorage.setItem("tokenAccess", result.accessToken);
          let data = {
            isAdmin: result.roles.includes("ROLE_ADMIN"),
            isLogin: true,
          };
          this.$router.push({ name: "Home" });
          this.$emit("login", data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
