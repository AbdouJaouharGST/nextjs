import "../styles/globals.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://146.148.4.201/v1alpha1/graphql",
  headers: {
    "x-hasura-admin-secret": "bnghty56", // this header will reach the server
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
