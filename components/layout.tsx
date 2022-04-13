import Head from "next/head";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { useEffect } from "react";
import SimplyLoader from "./util/simplyLoader";

export const siteTitle = "FEILVAN";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  useEffect(() => {
    <SimplyLoader />;
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
      <main id="main">
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="overflow-hidden"
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
}
