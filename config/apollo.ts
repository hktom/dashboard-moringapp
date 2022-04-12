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
import Cookies from "js-cookie";

export const HOST_URL: string =
  process.env.NODE_ENV == "production"
    ? process.env.NEXT_PUBLIC_PRODUCTION_SERVER!
    : process.env.NEXT_PUBLIC_DEVELOPMENT_SERVER!;

export const TOKEN = Cookies.get("token");

const httpLink = new HttpLink({ uri: `${HOST_URL}graphql` });

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: "Bearer " + TOKEN,
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
