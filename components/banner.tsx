import Image from "next/image";
import banner from "../public/images/banner2.jpg";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import icon from "../public/images/truclr.svg";

export default function Banner() {
  return (
    <div className=" grid grid-cols-4 grid-rows-5 h-[125vh] w-screen px-8 md:px-14">
      <div className=" relative flex flex-col row-start-2 row-span-1 col-span-full lg:col-span-3">
        <span className=" absolute bottom-12 md:bottom-14 lg:bottom-16 xl:bottom-20 text-[10vw] md:text-[8vw] 2xl:text-[8.3vw] leading-none tracking-tighter">
          Reality Reimagined
        </span>
        <span className=" absolute bottom-4 text-xs sm:text-base xl:text-2xl text-neutral-400 uppercase tracking-widest">
          Digital Imaging Artist +++ Front-end Developer
        </span>
      </div>
      <div className=" relative row-start-2 hidden lg:block">
        <div className=" absolute bottom-4 text-base xl:text-2xl text-neutral-400 uppercase tracking-widest">
          Based in Indonesia
        </div>
        <div className=" absolute bottom-8 xl:bottom-12 2xl:bottom-16 right-0 w-[10rem]">
          <Image src={icon} alt="" />
        </div>
      </div>
      <motion.div className=" relative row-start-3 row-span-3 col-span-full overflow-hidden">
        <div>
          <Parallax
            speed={-50}
            className="relative top-0 h-screen w-screen overflow-hidden"
          >
            <Image
              src={banner}
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </Parallax>
        </div>
      </motion.div>
    </div>
  );
}
