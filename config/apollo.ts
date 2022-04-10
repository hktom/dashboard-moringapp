import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  HttpLink,
  ApolloLink,
  concat,
} from "@apollo/client";

const httpLink = new HttpLink({ uri: "http://127.0.0.1:8000/graphql" });

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: localStorage.getItem("token") || null,
    },
  }));

  return forward(operation);
});

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

export const queryMethods = async (object: any) => {
  return await apolloClient.query({
    query: gql`
      ${object}
    `,
  });
};

export const mutateMethods = async (object: any) => {
  return await apolloClient.mutate({
    mutation: gql`
      ${object}
    `,
  });
};
