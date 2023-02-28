import Image from "next/image";
import Tab from "../components/tab";
import icon from "../public/icon.svg";
import style from "./index.module.css";

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
      <div
        id="introduction"
        className=" py-8 px-6 border-b flex flex-col sm:flex-row"
      >
        <div className=" flex-1 my-auto text-center sm:text-end italic uppercase text-2xl tracking-widest overflow-clip">
          <div className={style.rtl}>Fuad Elhasan Irfani</div>
        </div>
        <Image src={icon} className={style.hueRotate} alt="FEILVAN icon" />
        <div className=" flex-1 my-auto text-center sm:text-start italic uppercase tracking-widest overflow-clip">
          <div className={style.ltr}>Digital Imaging Artist</div>
          <div className={style.ltr}>Front-End Developer</div>
        </div>
      </div>
    </>
  );
}
