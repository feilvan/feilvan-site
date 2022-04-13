import SimplyLoader from "../components/util/simplyLoader";
import { useEffect, useState } from "react";
import "../styles/global.css";
import { AppProps } from "next/app";
import "../public/fonts/texGyreHeros/texgyreheros_bold_macroman/stylesheet.css";
import "../public/fonts/texGyreHeros/texgyreheros_bolditalic_macroman/stylesheet.css";
import "../public/fonts/texGyreHeros/texgyreheros_italic_macroman/stylesheet.css";
import "../public/fonts/texGyreHeros/texgyreheros_regular_macroman/stylesheet.css";
import { AnimatePresence } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import LaxController from "../components/util/LaxController";

export default function App({ Component, pageProps, router }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ele = document.getElementById("ipl-progress-indicator");
    if (ele) {
      // fade out
      ele.classList.add("available");
      setTimeout(() => {
        // remove from DOM
        ele.outerHTML = "";
      }, 2000);
    }
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
