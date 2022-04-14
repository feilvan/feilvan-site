import SimplyLoader from "../components/util/simplyLoader";
import { useEffect, useState } from "react";
import "../styles/global.css";
import "../styles/space-grotesk-v10-latin.css";
import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import LaxController from "../components/util/LaxController";

export default function App({ Component, pageProps, router }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <>
      {loading ? (
        <ParallaxProvider>
          {/* <LaxController /> */}
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </ParallaxProvider>
      ) : (
        <>{/* <SimplyLoader /> */}</>
      )}
    </>
  );
}
