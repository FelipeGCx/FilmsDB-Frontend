module.exports = {
  client: {
    service: {
      name: "my-app",
      // URL to the GraphQL API
      url: "https://films-db-apigateway.herokuapp.com/",
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.js"],
  },
};
