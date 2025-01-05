import { provideApolloClient } from "@vue/apollo-composable";
import apolloClient from "./apollo.client";

export function setupApollo() {
  provideApolloClient(apolloClient);
}
