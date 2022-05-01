import Head from "next/head";
import Layout, { siteTitle } from "../components/layout/layout";
import Banner from "../components/home/banner";
import Works from "../components/home/works";
import Client from "../components/home/client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div id="home">
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Banner />
        <Works />
        {/* <Client /> */}
      </Layout>
    </motion.div>
  );
}
