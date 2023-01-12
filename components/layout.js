import style from "./layout.module.css";
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
      <Header />
      {children}
    </>
  );
}

function Icon({ icon }) {
  return <FontAwesomeIcon icon={icon} className={style.icon} />;
}

function Header() {
  return (
    <>
      <div className={style.header}>
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
