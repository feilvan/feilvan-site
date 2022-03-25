import { FaArrowUp, FaArrowDown, FaUndo } from "react-icons/fa";

export default function Landing() {
  return (
    <div className=" flex flex-row h-screen w-screen">
      <div className=" text-center my-auto w-full font-herosBold text-[9vw] sm:text-[3.6rem]">
        work{" "}
        <span className=" font-herosBoldItalic text-outline-white">in</span>{" "}
        progress...
      </div>
      <div className=" absolute bottom-4 space-x-1 flex flex-row text-neutral-500">
        <div>© {new Date().getFullYear()} - </div>
        <div className="my-auto flex flex-row">
          <FaArrowUp size={15} />
          <FaArrowDown size={15} />
          <FaUndo size={15} />
        </div>
      </div>
    </div>
  );
}
