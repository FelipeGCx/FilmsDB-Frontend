import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { createApolloProvider } from "@vue/apollo-option";

import { setContext } from "apollo-link-context";

const httpLink = createHttpLink({
  uri: "https://filmsdb-apigateway-production.up.railway.app/",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: localStorage.getItem("tokenAccess") || "",
    },
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const apolloProvider = new createApolloProvider({
  defaultClient: apolloClient,
});

export { apolloClient, apolloProvider };
