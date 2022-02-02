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
    <div className="h-screen -mt-0">
      <div className="flex flex-col justify-center h-full overflow-y-visible overflow-x-hidden lg:overflow-x-visible relative">
        <div className="relative -top-[22rem] text-neutral-200 dark:text-neutral-800">
          <div className="text-[19rem] sm:text-[22rem] lg:text-[24rem] relative top-12">
            <div className="absolute -top-24 -right-16 flex flex-row -space-x-6">
              <span className="top-24 lg:top-40 relative -right-12">
                <FaArrowUp />
              </span>
              <FaArrowDown />
            </div>
            <div className="absolute top-56 sm:top-64 lg:top-[23rem] -right-20 text-clip">
              <FaUndo />
            </div>
          </div>
          <div className="flex flex-row sm:flex-row absolute -left-12  top-[48rem] lg:top-48 text-[6rem]">
            <FaTimes />
            <FaTimes />
            <FaTimes />
          </div>
        </div>
        <div className="relative top-0 left-6">
          <p className="qt pl-12 mb-0 sm:mb-4 text-xl tracking-wider">
            feilvan
          </p>
          <h1 className="font-herosBold text-brand tagline sm:text-8xl lg:text-9xl tracking-tighter">
            Reality
            <br />
            Reimagined
          </h1>
          <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 space-x-0 sm:space-x-8 mt-4 sm:mt-8 tracking-widest text-sm">
            <div>Digital Imaging</div>
            <div>3D CG Art</div>
            <div>Front-End</div>
          </div>
          <div className="mt-8">
            <Contact />
          </div>
        </div>
      </div>
      <FaCaretDown
        size={25}
        className="relative bottom-32 mx-auto text-neutral-400 dark:text-neutral-600 hover:text-neutral-600 hover:dark:text-neutral-400 transition"
      />
    </div>
  );
}
