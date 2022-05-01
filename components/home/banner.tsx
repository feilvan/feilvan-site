import Image from "next/image";
import banner from "../../public/images/banner2.jpg";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import icon from "../../public/images/truclr.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPaintbrush } from "@fortawesome/free-solid-svg-icons";

const variants = {
  fromBottom: { y: "100%" },
  fromTop: { y: "-100%" },
  finish: {
    y: 0,
    transition: { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] },
  },
  finishDelay: {
    y: 0,
    transition: { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9], delay: 0.4 },
  },
};

export default function Banner() {
  return (
    <div className=" grid grid-cols-4 grid-rows-5 h-screen sm:h-[125vh] px-0 sm:px-8 md:px-14">
      <div className=" relative w-full flex flex-col row-start-2 row-span-1 col-span-full lg:col-span-3 px-4 sm:px-0">
        <div className=" absolute bottom-14 py-2 lg:bottom-16 xl:bottom-20 font-[500] text-[14vw] md:text-[12vw] lg:text-[10vw] xl:text-[8vw] 2xl:text-[8rem] leading-none tracking-tighter overflow-hidden">
          <motion.div
            variants={variants}
            initial="fromBottom"
            animate="finishDelay"
          >
            Realit<span className="set2">y</span>
            <br className=" block lg:hidden" /> Reimagined
          </motion.div>
        </div>
        <span className=" absolute bottom-4 text-xs sm:text-base xl:text-2xl text-neutral-400 uppercase tracking-widest overflow-hidden">
          <motion.div
            variants={variants}
            initial="fromTop"
            animate="finishDelay"
          >
            Digital Imaging Artist +++ Front-end Developer
          </motion.div>
        </span>
      </div>
      <div className=" relative row-start-2 hidden lg:block">
        <div className=" absolute bottom-4 text-base xl:text-2xl text-neutral-400 uppercase tracking-widest overflow-hidden">
          <motion.div
            variants={variants}
            initial="fromTop"
            animate="finishDelay"
          >
            Based in Indonesia
          </motion.div>
        </div>
        <div className=" absolute right-0 bottom-24 overflow-hidden ">
          <motion.div
            variants={variants}
            initial="fromBottom"
            animate="finishDelay"
            className=" space-x-4"
          >
            <FontAwesomeIcon icon={faPaintbrush} size="4x" />
            <FontAwesomeIcon icon={faCode} size="4x" />
          </motion.div>
        </div>
      </div>
      <motion.div className=" relative row-start-3 row-span-3 col-span-full overflow-hidden">
        <Parallax speed={-50}>
          <motion.div
            variants={variants}
            initial="fromBottom"
            animate="finish"
            className="relative h-screen w-full overflow-hidden"
          >
            <Image
              src={banner}
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </motion.div>
        </Parallax>
      </motion.div>
    </div>
  );
}
