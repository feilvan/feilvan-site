import Background from "./background";
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

export default function Hero() {
  return (
    <div>
      <Background />
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
    <div className=" flex relative h-screen w-screen overflow-hidden">
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
    <MouseParallaxContainer className=" flex relative h-screen w-screen">
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
        <div className=" flex flex-row children:big-text">
          <div>
            Reality Reimagined<span className=" px-28">—</span>
          </div>
          <div className="relative">
            Reality Reimagined<span className=" px-28">—</span>
          </div>
        </div>
      </MouseParallaxChild>
    </MouseParallaxContainer>
  );
}
