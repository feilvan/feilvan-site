import { FaArrowDown, FaArrowUp, FaUndo } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import LaxButton from "./util/LaxButton";

export default function Contact() {
  return (
    <div id="contact" className="flex h-screen px-8 md:px-14">
      <div className="flex flex-row items-center ">
        <div className=" flex flex-col">
          <div className="font-herosItalic text-8xl uppercase">
            Let&apos;s Work Together
          </div>
          <div className="flex flex-col mt-8 space-y-8">
            <a
              href="mailto:hello@feilvan.art"
              className="px-12 py-4 grid border w-max content-center justify-center hover:no-underline hover:bg-white hover:text-black transition-all"
            >
              <div className=" text-2xl">hello@feilvan.art</div>
            </a>
            <div className=" flex flex-row children:border children:border-transparent children:px-8 children:py-4">
              <a
                href="https://www.instagram.com/feilvan"
                target="_blank"
                rel="noreferrer"
              >
                IG
              </a>
              <a
                href="https://twitter.com/feilvan"
                target="_blank"
                rel="noreferrer"
              >
                TW
              </a>
              <a
                href="https://www.linkedin.com/in/fuad-elhasan-irfani/"
                target="_blank"
                rel="noreferrer"
              >
                IN
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
