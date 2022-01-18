import React from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
// import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import '../styles/global.scss';
import '../styles/_prism.scss';
import Layout from 'components/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  const containerRef = React.useRef(null);

  return (
    <Layout>
      {/* <LocomotiveScrollProvider
        options={{
          smooth: true,
          reloadOnContextChange: true,
        }}
        watch={[router.asPath]}
        containerRef={containerRef}
      > */}
      {/* <main data-scroll-container ref={containerRef} style={{ minHeight: "100vh" }}> */}
      <Component {...pageProps} />
      {/* </main> */}
      {/* </LocomotiveScrollProvider> */}
    </Layout>
  );
};

export default MyApp;
