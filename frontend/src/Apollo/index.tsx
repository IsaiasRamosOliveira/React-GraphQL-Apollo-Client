import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import React from "react";

const client = new ApolloClient({
  uri: "http://localhost:9000/graphql",
  cache: new InMemoryCache(),
});

interface IApollo {
  children: React.ReactNode;
}

const Apollo = ({ children }: IApollo) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default Apollo;
