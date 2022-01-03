import { FaArrowDown, FaArrowUp, FaTimes, FaUndo } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="h-screen  relative">
      <div className="text-gray-200 text-[19rem] sm:text-[22rem] lg:text-[24rem]">
        <div className="absolute -top-24 -right-16 flex flex-row -space-x-6">
          <FaArrowUp />
          <FaArrowDown />
        </div>
        <div className="absolute top-56 sm:top-64 lg:top-80 -right-20 text-clip">
          <FaUndo />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row absolute -left-8 top-72 sm:top-80 lg:top-40 text-gray-200 text-[6rem]">
        <FaTimes />
        <FaTimes />
        <FaTimes />
      </div>
      <div className="absolute bottom-40 left-6">
        <p className="qt pl-12 mb-4 text-xl text-gray-500 tracking-wider">
          feilvan
        </p>
        <h1 className="font-readex font-bold text-brand text-7xl sm:text-8xl lg:text-9xl tracking-tighter">
          Reality
          <br />
          Reimagined
        </h1>
        <div className="mt-8  tracking-widest font-inter font text-sm text-gray-600 space-y-1">
          <p>digital imaging</p>
          <p>3d environment</p>
          <p>front-end</p>
        </div>
      </div>
    </div>
  );
}
