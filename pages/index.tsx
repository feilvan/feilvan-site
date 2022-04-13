import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Background from "../components/background";
import Hero from "../components/hero";
import Works from "../components/works";
import Contact from "../components/contact";
import About from "../components/about";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div id="home">
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Background />
        <Hero />
        {/* <About /> */}
        <Works />
        <Contact />
      </Layout>
    </motion.div>
  );
}
