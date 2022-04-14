import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Hero from "../components/hero";
import Banner from "../components/banner";
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
        {/* <Hero /> */}
        <Banner />
        {/* <About /> */}
        <Works />
        <Contact />
      </Layout>
    </motion.div>
  );
}
