import {
  FaArrowDown,
  FaArrowUp,
  FaCaretDown,
  FaTimes,
  FaUndo,
} from "react-icons/fa";
import Contact from "./contact";

export default function Hero() {
  return (
    <div className="h-screen -mt-16">
      <div className="flex flex-col justify-center h-full overflow-hidden lg:overflow-visible relative top-20">
        <div className="relative -top-[22rem]">
          <div className="text-gray-200 text-[19rem] sm:text-[22rem] lg:text-[24rem] relative top-12">
            <div className="absolute -top-24 -right-16 flex flex-row -space-x-6">
              <span className="top-24 relative -right-12">
                <FaArrowUp />
              </span>
              <FaArrowDown />
            </div>
            <div className="absolute top-56 sm:top-64 lg:top-80 -right-20 text-clip">
              <FaUndo />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row absolute -left-8 sm:-left-36 md:-left-8 bottom-20 sm:top-60 lg:top-48 text-gray-200 text-[6rem]">
            <FaTimes />
            <FaTimes />
            <FaTimes />
          </div>
        </div>
        <div className="relative top-0 left-6">
          <p className="qt pl-12 mb-0 sm:mb-4 text-xl text-gray-500 tracking-wider">
            feilvan
          </p>
          <h1 className="font-readex font-bold text-brand tagline sm:text-8xl lg:text-9xl tracking-tighter">
            Reality
            <br />
            Reimagined
          </h1>
          <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 space-x-0 sm:space-x-8 mt-4 sm:mt-8 tracking-widest font-inter font-light text-sm text-gray-600">
            <div>digital imaging</div>
            <div>3d environment</div>
            <div>front-end</div>
          </div>
          <div className="mt-8">
            <Contact />
          </div>
        </div>
      </div>
      <div className="relative bottom-24 flex flex-col items-center">
        <FaCaretDown className="px-2 py-2 text-[3rem] text-gray-600 hover:translate-y-2 transition" />
      </div>
    </div>
  );
}
