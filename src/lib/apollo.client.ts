import { ApolloClient, InMemoryCache } from "@apollo/client/core";

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  uri: `${import.meta.env.PUBLIC_API_GATEWAY_URL}/graphql`,
  cache,
});

export default apolloClient;
