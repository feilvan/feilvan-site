import { FaArrowUp, FaArrowDown, FaUndo } from "react-icons/fa";
import Spinner from "./spinner";

export default function Landing() {
  return (
    <>
      <Spinner />
      <div className=" flex flex-col h-screen w-screen">
        <div className=" flex flex-col my-auto mx-auto ">
          <div className="font-herosBold text-[9vw] sm:text-[3.6rem]">
            work{" "}
            <span className=" font-herosBoldItalic text-outline-white">in</span>{" "}
            progress...
          </div>
          <div className="flex flex-row space-x-1 mx-auto mt-2 text-neutral-500">
            <div>© {new Date().getFullYear()} - </div>
            <div className="my-auto flex flex-row">
              <FaArrowUp size={15} />
              <FaArrowDown size={15} />
              <FaUndo size={15} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
