import "../styles/globals.css";
import { Space_Grotesk } from "@next/font/google";
import Layout from "../components/layout";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={spaceGrotesk.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
