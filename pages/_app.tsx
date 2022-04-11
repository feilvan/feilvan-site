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
    if (typeof window === "undefined") {
      return;
    }

    const scroll = import("locomotive-scroll").then((LocomotiveScroll) => {
      new LocomotiveScroll.default({
        el: scrollRef.current,
        smooth: true,
        reloadOnContextChange: true,
        touchMultiplier: 2,
        smartphone: {
          breakpoint: 0,
          smooth: false,
        },
        tablet: {
          breakpoint: 0,
          smooth: false,
        },
      });
    });

    // return () => scroll.destroy();
  }, []);
  return (
    <div data-scroll-container ref={scrollRef}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}
