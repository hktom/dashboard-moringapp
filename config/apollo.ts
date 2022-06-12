import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  Observable,
  concat,
} from "@apollo/client";
import { ApolloLink, from, split } from "apollo-link";
import Cookies from "js-cookie";
import PusherLink from "./pusherLink";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import Pusher from "pusher-js";

export const PUSHER_API_KEY = "3a2352a5a2ade928af7e";
export const PUSHER_CLUSTER = "mt1";

export const HOST_URL: string =
  process.env.NODE_ENV == "production"
    ? process.env.NEXT_PUBLIC_PRODUCTION_SERVER!
    : process.env.NEXT_PUBLIC_DEVELOPMENT_SERVER!;

export const TOKEN = Cookies.get("token");

const httpLink = new HttpLink({ uri: `${HOST_URL}graphql/` });

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: "Bearer " + TOKEN,
    },
  }));

  return forward(operation);
});

const pusherLink = new PusherLink({
  pusher: new Pusher(PUSHER_API_KEY, {
    cluster: PUSHER_CLUSTER,
    authEndpoint: `${HOST_URL}/graphql/subscriptions/auth`,
    auth: {
      headers: {
        authorization: "Bearer " + TOKEN,
      },
    },
  }),
});

const ErrorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([authMiddleware, ErrorLink, pusherLink, httpLink]) as any,
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
