import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../config/store";
import { FC } from "react";
import { ThemeProvider } from "@mui/material";
import theme from "../config/theme";

const WrappedApp: FC<AppProps> = ({ Component, pageProps }: any) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default wrapper.withRedux(WrappedApp);
