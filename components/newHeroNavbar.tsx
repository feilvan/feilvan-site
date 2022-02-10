import {
  FaArrowUp,
  FaArrowDown,
  FaUndo,
  FaArrowCircleDown,
} from "react-icons/fa";

export default function NewHeroNavbar() {
  return (
    <div>
      <div className="absolute bottom-0 w-full flex flex-row py-4 justify-between bg-black/80 visible lg:invisible">
        <span className="my-auto flex flex-row space-x-2">
          <FaArrowUp size={20} />
          <FaArrowDown size={20} />
          <FaUndo size={20} />
        </span>
        <span className="tracking-widest font-herosBoldItalic ml-4">
          feilvan
        </span>
      </div>
      <div className="flex flex-row py-4 justify-between bg-black/80 invisible lg:visible">
        <div className="flex flex-row">
          <span className="my-auto flex flex-row space-x-2">
            <FaArrowUp size={20} />
            <FaArrowDown size={20} />
            <FaUndo size={20} />
          </span>
          <span className="tracking-widest font-herosBoldItalic ml-4">
            feilvan
          </span>
        </div>
        <div className="flex flex-row">
          <div>
            <a href="#">Work</a>, <a href="#">Profile</a>,{" "}
            <a href="#">Recognition</a>, <a href="#">Contact</a>{" "}
          </div>
          <FaArrowCircleDown size={32} className="ml-4 my-auto" />
        </div>
      </div>
    </div>
  );
}
