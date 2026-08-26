// apollo.config.js
module.exports = {
  client: {
    service: {
      name: "my-app",
      // URL to the GraphQL API
      url: "http://localhost:4000",
      // url: "https://filmsdb-apigateway-production.up.railway.app",
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.js"],
  },
};
