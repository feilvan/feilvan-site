import Layout from "../components/layout";
import Head from "next/head";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function DI() {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>Digital Imaging | FEILVAN</title>
      </Head>
      <div className=" flex flex-col w-screen h-screen">
        <div className=" relative top-40 px-8 md:px-14">
          <Link href="/" scroll={false}>
            <a className="flex flex-row space-x-2 w-max">
              <FontAwesomeIcon icon={faArrowLeft} className="w-8" />
            </a>
          </Link>
        </div>
        <div className="absolute top-0 left-0 grid place-items-center h-full w-full -z-10">
          asd
        </div>
      </div>
    </Layout>
  );
}
