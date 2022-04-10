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
          <LaxButton>
            <div className=" text-5xl">hello@feilvan.art</div>
          </LaxButton>
        </div>
      </div>
    </div>
  );
}
