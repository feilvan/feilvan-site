import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Background from "../components/background";
import Hero from "../components/hero";
import Works from "../components/works";
import Contact from "../components/contact";

export default function Home() {
  return (
    <div>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Background />
        <Hero />
        <Works />
        <Contact />
      </Layout>
    </div>
  );
}
