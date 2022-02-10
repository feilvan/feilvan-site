import NewHeroStatusbar from "./newHeroStatusbar";
import NewHeroNavbar from "./newHeroNavbar";
import Image from "next/image";
import Banner from "../public/images/banner.jpg";

export default function NewHero() {
  return (
    <div className="h-screen max-w-full flex flex-col overflow-hidden">
      <NewHeroStatusbar />
      <img
        src="/images/banner.jpg"
        className="object-cover h-[80vh] lg:h-[65vh]"
      />
      <div className="mx-auto -mt-[10rem] flex flex-col font-herosBoldItalic text-[10vw] 2xl:text-[10rem] uppercase tracking-tighter space-y-[3vw] sm:space-y-[4vw] lg:space-y-[5vw] xl:space-y-[6vw] 2xl:space-y-[6rem]">
        <p className="text-left text-outline-black dark:text-outline-white -ml-0 2xl:-ml-[5rem]">
          3dcg
        </p>
        <p className="text-black dark:text-white">Digital Imaging</p>
        <p className="text-right text-outline-black dark:text-outline-white -mr-0 2xl:-mr-[5rem]">
          Front-end
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 mx-8">
        <NewHeroNavbar />
      </div>
    </div>
  );
}
