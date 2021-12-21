import React from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
// import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import Navbar from "../components/design-system/Navbar/Navbar";

import "../styles/generic.scss";
import "../styles/_prism.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  const containerRef = React.useRef(null);

  return (
    <section>
      <Navbar />
      {/* <LocomotiveScrollProvider
        options={{
          smooth: true,
          reloadOnContextChange: true,
        }}
        watch={[router.asPath]}
        containerRef={containerRef}
      > */}
      <main data-scroll-container ref={containerRef} style={{ minHeight: "100vh" }}>
        <Component {...pageProps} />
      </main>
      {/* </LocomotiveScrollProvider> */}
    </section>
  );
};

export default MyApp;
