import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Header from "../components/header";
import Links from "../components/links";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Header />
        <Links />
        <Footer />
      </Layout>
    </div>
  );
}
