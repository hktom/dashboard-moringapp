import "../styles/globals.css";
import type { AppProps } from "next/app";
import store from "../config/store";
import { FC, useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import theme from "../config/theme";
import { Provider } from "react-redux";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

import { apolloClient } from "../config/apollo";
import { ApolloProvider } from "@apollo/client";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtabrKb40nV6hzLU_1nHVaWaJi8pPY9hk",
  authDomain: "moringapp-8db95.firebaseapp.com",
  databaseURL: "https://moringapp-8db95-default-rtdb.firebaseio.com",
  projectId: "moringapp-8db95",
  storageBucket: "moringapp-8db95.appspot.com",
  messagingSenderId: "1033846142588",
  appId: "1:1033846142588:web:1bc8d0163ebb89b39bfbf9",
  measurementId: "G-FETF768YZX",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseDB = getFirestore(firebaseApp);

TimeAgo.addDefaultLocale(en);

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const analytics = getAnalytics(firebaseApp);
  }, []);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
