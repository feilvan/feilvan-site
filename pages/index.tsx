import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import NewHero from "../components/newHero";
import NewSoon from "../components/newSoon";

export default function Home() {
  return (
    <div>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <NewHero />
        <NewSoon />
      </Layout>
    </div>
  );
}
