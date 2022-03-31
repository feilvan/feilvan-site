import Link from "next/link";
import { FaArrowDown, FaArrowUp, FaUndo } from "react-icons/fa";

export default function Hero() {
  return (
    <div className=" flex flex-col h-screen bg-gradient-to-t from-black via-transparent to-transparent">
      <div className=" fixed flex flex-row justify-between w-full py-8 md:py-12 px-8 md:px-14 z-50 bg-gradient-to-b from-black to-transparent">
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
        <div className=" flex flex-row space-x-8">
          <Link href="#works" scroll={false} replace>
            <a>Works</a>
          </Link>
          <Link href="#contact" scroll={false} replace>
            <a>Get in Touch</a>
          </Link>
        </div>
      </div>

      <div className="absolute h-full w-full grid place-items-center">
        <div>
          <div className="font-herosBold text-[13vw] leading-[11vw] border-b-2 pb-[4vw]">
            Reality
            <br />
            Reimagined
          </div>
          <div className=" flex flex-row justify-between mt-2 md:mt-4 font-herosItalic">
            <div>Freelance Digital Imaging Artist</div>
            <div className=" hidden md:block">
              Based in Banyuwangi, Indonesia
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
