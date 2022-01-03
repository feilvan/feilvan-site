import Head from "next/head";
import Link from "next/link";
import Navbar from "./navbar";
import Footer from "./footer";

const name = "****";
export const siteTitle = "feilvan";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar />
      <div className="max-w-6xl pt-16 mx-auto">
        <main>{children}</main>
        {!home && (
          <div className="mt-4 ml-4">
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
}
