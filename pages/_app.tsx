import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../config/store";
import { FC } from "react";

const WrappedApp: FC<AppProps> = ({ Component, pageProps }: any) => (
  <Component {...pageProps} />
);

export default wrapper.withRedux(WrappedApp);

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

// export default MyApp
