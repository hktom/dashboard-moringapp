import "../styles/globals.css";
import type { AppProps } from "next/app";
import store from "../config/store";
import { FC } from "react";
import { ThemeProvider } from "@mui/material";
import theme from "../config/theme";
import { Provider } from "react-redux";

// const WrappedApp: FC<AppProps> = ({ Component, pageProps }: any) => (
//   <ThemeProvider theme={theme}>
//     <Component {...pageProps} />
//   </ThemeProvider>
// );

// export default wrapper.withRedux(WrappedApp);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
