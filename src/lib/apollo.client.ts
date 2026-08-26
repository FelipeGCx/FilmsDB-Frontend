import { ApolloClient, InMemoryCache } from "@apollo/client/core";

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  // uri: "https://filmsdb-apigateway-production.up.railway.app",
  cache,
});

export default apolloClient;
