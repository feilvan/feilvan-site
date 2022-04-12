import "../styles/global.css";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "../public/fonts/texGyreHeros/texgyreheros_bold_macroman/stylesheet.css";
import "../public/fonts/texGyreHeros/texgyreheros_bolditalic_macroman/stylesheet.css";
import "../public/fonts/texGyreHeros/texgyreheros_italic_macroman/stylesheet.css";
import "../public/fonts/texGyreHeros/texgyreheros_regular_macroman/stylesheet.css";
import "../styles/locomotive-scroll.css";
import { useRef, useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const scrollRef = useRef();

  useEffect(() => {
    const scroll = import("locomotive-scroll").then((LocoScroll) => {
      new LocoScroll.default({
        el: scrollRef.current,
        smooth: true,
        reloadOnContextChange: true,
      });
    });
  }, []);

  return (
    <div ref={scrollRef}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}
