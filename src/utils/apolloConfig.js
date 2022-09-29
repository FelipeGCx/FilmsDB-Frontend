import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { createApolloProvider } from "@vue/apollo-option";

import { setContext } from "apollo-link-context";

const httpLink = createHttpLink({
  uri: "https://films-db-apigateway.herokuapp.com/",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: "",
    },
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const apolloProvider = new createApolloProvider({
  defaultClient: apolloClient,
});
