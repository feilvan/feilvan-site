import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Links from "../components/links";
import Header from "../components/header";

export default function Home() {
  return (
    <div>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Header />
        <Links />
      </Layout>
    </div>
  );
}
