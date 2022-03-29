import Link from "next/link";
import { FaArrowDown, FaArrowUp, FaUndo } from "react-icons/fa";

export default function Hero() {
  return (
    <div className=" flex flex-col h-screen">
      <div className=" fixed flex flex-row justify-between w-full mt-8 sm:mt-12 px-8 sm:px-14 z-50">
        <Link href="/">
          <div className=" flex flex-row space-x-8">
            <div className=" flex flex-row my-auto space-x-1">
              <FaArrowUp />
              <FaArrowDown />
              <FaUndo />
            </div>
            <div className="font-herosBoldItalic hidden sm:block tracking-normal hover:tracking-widest transition-all">
              FEILVAN
            </div>
          </div>
        </Link>
        <div className=" flex flex-row children:px-4">
          <Link href="#works" scroll={false} replace>
            <a>Works</a>
          </Link>
          <Link href="#contact" scroll={false} replace>
            <a>Contact</a>
          </Link>
        </div>
      </div>

      <div className="absolute h-full w-full grid place-items-center">
        <div>
          <div className="font-herosBold text-5xl sm:text-8xl pb-4 sm:pb-6 border-b-2 sm:border-b-4">
            Reality
            <br />
            Reimagined
          </div>
          <div className="mt-3 font-herosItalic">
            <span className=" font-herosBoldItalic">FEILVAN</span> Digital
            Imaging Artist
          </div>
        </div>
      </div>
    </div>
  );
}
