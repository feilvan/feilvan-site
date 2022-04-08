import w200315 from "../public/images/works/200315.jpg";
import w200424 from "../public/images/works/200424.jpg";
import w200509 from "../public/images/works/200509.jpg";
import w200713 from "../public/images/works/200713.jpg";
import w200919 from "../public/images/works/200919.jpg";
import w201024 from "../public/images/works/201024.jpg";
import w201115 from "../public/images/works/201115.jpg";
import w210622 from "../public/images/works/210622.jpg";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

export default function Works() {
  return (
    <div id="works" className=" flex flex-row h-screen bg-black px-14">
      <div className=" flex basis-1/2 items-center uppercase font-herosItalic tracking-widest text-base">
        Personal Project
      </div>
      <div className=" flex basis-1/2 items-center uppercase font-herosItalic tracking-widest text-base">
        Clients & Collabs
      </div>
    </div>
  );
}
