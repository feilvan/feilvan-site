import Image from "next/image";
import Tab from "../components/tab";
import icon from "../public/icon.svg";

export default function Home() {
  return (
    <>
      <Introduction />
      <Tab />
    </>
  );
}

function Introduction() {
  return (
    <>
      <div id="introduction" className=" py-8 px-4 border-b">
        <Image src={icon} className=" w-8 mb-4" alt="FEILVAN icon" />
        <div className=" text-neutral-600">Hello! 👋</div>
        <div className=" text-neutral-600">
          {" "}
          I'm{" "}
          <span className=" font-medium text-black">Fuad Elhasan Irfani</span>
        </div>
        <div className=" text-neutral-600">
          I do <span className=" font-medium text-black">Digital Imaging</span>,{" "}
          <span className=" font-medium text-black">UI Design</span>, and{" "}
          <span className=" font-medium text-black">Frontend</span>
        </div>
      </div>
    </>
  );
}
