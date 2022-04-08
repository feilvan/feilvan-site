import Link from "next/link";
import { FaArrowDown, FaArrowUp, FaUndo } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className=" fixed flex flex-row justify-between w-full py-8 md:py-12 px-8 md:px-14 z-50">
      <Link href="/" passHref>
        <a className=" flex flex-row space-x-8">
          <div className=" flex flex-row my-auto space-x-1">
            <FaArrowUp />
            <FaArrowDown />
            <FaUndo />
          </div>
          <div className="font-herosBoldItalic hidden sm:block tracking-normal hover:tracking-widest transition-all no-underline">
            FEILVAN
          </div>
        </a>
      </Link>
      <div className=" flex flex-row space-x-8">
        <Link href="/#works" scroll={false}>
          <a>Works</a>
        </Link>
        <Link href="/#contact" scroll={false}>
          <a>Contact</a>
        </Link>
      </div>
    </div>
  );
}
