import Head from "next/head";
import Navbar from "./navbar";
import { useRef, useEffect } from "react";

export const siteTitle = "FEILVAN";

export default function Layout({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const scroll = import("locomotive-scroll").then((LocomotiveScroll) => {
      new LocomotiveScroll.default({
        el: scrollRef.current,
        smooth: true,
      });
    });

    // return () => scroll.destroy();
  }, []);

  return (
    <div>
      <Head>
        <link rel="icon" href="/icon.svg" />
        <meta name="description" content="FEILVAN Portfolio Website" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=dark&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main data-scroll-container id="home" ref={scrollRef}>
        <Navbar />
        <div className="overflow-hidden">{children}</div>
      </main>
    </div>
  );
}
