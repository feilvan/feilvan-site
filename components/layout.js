import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const siteTitle = "FEILVAN";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{siteTitle}</title>
        <link rel="icon" href="/icon.svg" />
      </Head>
      {children}
      <Footer />
    </>
  );
}

function Icon({ icon }) {
  return (
    <FontAwesomeIcon
      icon={icon}
      className=" h-6 text-neutral-400 hover:text-black transition-all"
    />
  );
}

function Footer() {
  return (
    <>
      <div className=" flex justify-center space-x-4 border-t py-4 text-sm sticky bottom-0 backdrop-blur-sm bg-white/80">
        <Link href="mailto:hello@feilvan.art">
          <Icon icon={faEnvelope} />
        </Link>
        <Link href="https://www.instagram.com/feilvan/" target="_blank">
          <Icon icon={faInstagram} />
        </Link>
        <Link href="https://github.com/feilvan/" target="_blank">
          <Icon icon={faGithub} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/fuad-elhasan-irfani/"
          target="_blank"
        >
          <Icon icon={faLinkedin} />
        </Link>
      </div>
    </>
  );
}
