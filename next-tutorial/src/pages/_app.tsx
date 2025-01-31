import "@/styles/globals.css";
import "sanitize.css";
import Layout from "@/components/(Layout)/Layout/Layout";
import type { AppProps } from "next/app";
import React from 'react';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
