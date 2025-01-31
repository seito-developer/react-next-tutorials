import "@/styles/globals.css";
import "sanitize.css";
import Layout from "@/components/(Layout)/Layout/Layout";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
