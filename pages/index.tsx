import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Landing from "../components/landing";

export default function Home() {
  return (
    <div>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Landing />
      </Layout>
    </div>
  );
}
