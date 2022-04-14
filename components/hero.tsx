import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faEarthAsia,
} from "@fortawesome/free-solid-svg-icons";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div>
      <div className="block sm:hidden">
        <NarrowViewport />
      </div>
      <div className="hidden sm:block">
        <WideViewport />
      </div>
    </div>
  );
}

function NarrowViewport() {
  return (
    <div className=" flex relative h-screen w-screen overflow-hidden bg-gradient-to-t from-black via-transparent to-transparent">
      <div className=" absolute h-full w-full flex flex-row justify-between items-end px-8 md:px-14 bottom-20">
        <div className=" flex flex-row justify-between w-full">
          <div>
            Freelance
            <br />
            Digital Imaging
            <br />
            Artist
          </div>
          <div>
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
        </div>
      </div>
      <div className=" flex absolute bottom-56 z-20">
        <div className=" flex flex-row children:big-text">
          <div>
            Reality Reimagined<span className=" px-12">—</span>
          </div>
          <div className="relative">
            Reality Reimagined<span className=" px-12">—</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function WideViewport() {
  return (
    <MouseParallaxContainer className=" flex relative h-screen w-screen bg-gradient-to-t from-black via-transparent to-transparent">
      <MouseParallaxChild
        factorX={0.03}
        factorY={0.1}
        className=" absolute h-full w-full flex flex-row justify-between items-center px-14 xl:text-2xl"
      >
        <div className=" flex flex-col space-y-6 ">
          <div>
            <FontAwesomeIcon icon={faChevronRight} size="lg" />
          </div>
          <div>
            Freelance
            <br />
            Digital Imaging
            <br />
            Artist
          </div>
        </div>
        <div className="flex flex-col relative -bottom-20 space-y-6 items-end">
          <div>
            <FontAwesomeIcon icon={faEarthAsia} size="lg" />
          </div>
          <div className=" text-right">
            Based in
            <br />
            Indonesia
          </div>
        </div>
      </MouseParallaxChild>
      <MouseParallaxChild
        factorX={0.02}
        factorY={0.06}
        className=" flex absolute bottom-40 z-20"
      >
        <motion.div
          initial={{ y: 310 }}
          animate={{ y: 0 }}
          transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 0.8 }}
          className=" flex flex-row children:big-text"
        >
          <div>
            Reality Reimagined <span className=" px-28">—</span>
          </div>
          <div className="relative">
            Reality Reimagined <span className=" px-28">—</span>
          </div>
        </motion.div>
      </MouseParallaxChild>
    </MouseParallaxContainer>
  );
}
