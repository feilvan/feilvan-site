import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Links from "../components/links";

export default function Home() {
  return (
    <div>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Links />
      </Layout>
    </div>
  );
}
