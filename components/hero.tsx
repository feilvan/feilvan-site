import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faEarthAsia } from "@fortawesome/free-solid-svg-icons";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

export default function Hero() {
  return (
    <MouseParallaxContainer className=" flex relative h-screen w-screen">
      <MouseParallaxChild
        factorX={0.03}
        factorY={0.1}
        className=" absolute h-full w-full flex flex-row justify-between items-center px-14"
      >
        <LeftText />
        <RightText />
      </MouseParallaxChild>
      <MouseParallaxChild
        factorX={0.02}
        factorY={0.06}
        className=" flex absolute bottom-20 z-20"
      >
        <div>
          <BigText />
        </div>
      </MouseParallaxChild>
    </MouseParallaxContainer>
  );
}

function BigText() {
  return (
    <div
      data-scroll
      data-scroll-speed="-2"
      className=" flex flex-row children:big-text"
    >
      <div>
        Reality Reimagined<span className=" px-28">—</span>
      </div>
      <div className="relative">
        Reality Reimagined<span className=" px-28">—</span>
      </div>
    </div>
  );
}

function LeftText() {
  return (
    <div className=" flex flex-col space-y-6">
      <div>
        <FontAwesomeIcon icon={faChevronRight} size="lg" />
      </div>
      <div className=" text-3xl">
        Freelance
        <br />
        Digital Imaging
        <br />
        Artist
      </div>
    </div>
  );
}

function RightText() {
  return (
    <div className="flex flex-col relative -bottom-20 space-y-6 items-end">
      <div>
        <FontAwesomeIcon icon={faEarthAsia} size="lg" />
      </div>
      <div className=" text-3xl text-right">
        Based in
        <br />
        Indonesia
      </div>
    </div>
  );
}
