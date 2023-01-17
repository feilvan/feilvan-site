import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import icon from "../public/icon.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const siteTitle = "Fuad Elhasan Irfani";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{siteTitle}</title>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <div className=" flex py-6 min-h-screen justify-center">
        <div className=" my-auto p-2 border border-neutral-50 rounded-lg shadow-xl shadow-neutral-100 space-y-4">
          <div className=" w-32 mx-auto">
            <Image src={icon} alt="An icon of the website" />
          </div>
          <div className=" p-2 text-center space-y-1">
            <div className=" font-semibold text-2xl">Fuad Elhasan Irfani</div>
            <div className=" uppercase text-xs tracking-widest mx-auto text-neutral-600">
              Digital Imaging & Frontend
            </div>
          </div>
          <div className=" flex flex-col">
            <Item icon={faGlobe} link="https://www.feilvan.art/">
              Website
            </Item>
            <Item icon={faInstagram} link="https://www.instagram.com/feilvan/">
              Instagram
            </Item>
            <Item icon={faGithub} link="https://github.com/feilvan/">
              Github
            </Item>
            <Item
              icon={faLinkedin}
              link="https://www.linkedin.com/in/fuad-elhasan-irfani/"
            >
              LinkedIn
            </Item>
            <Item icon={faYoutube} link="https://www.youtube.com/@Feilvan">
              YouTube
            </Item>
          </div>
        </div>
      </div>
    </>
  );
}

function Item({ children, icon, link }) {
  return (
    <>
      <Link
        href={link}
        target="_blank"
        className=" flex flex-row justify-between py-2 px-3 rounded border border-transparent hover:border-neutral-100 bg-transparent hover:bg-neutral-50 transition-all"
      >
        <span className=" my-auto">{children}</span>
        <FontAwesomeIcon
          icon={icon}
          className=" my-auto w-5 text-neutral-600"
        />
      </Link>
    </>
  );
}
