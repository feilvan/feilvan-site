import { MdOutlineNorthEast } from "react-icons/md";

export default function NewSoon() {
  return (
    <div className="h-[50vh] max-w-full flex">
      <div className="my-auto mx-auto">
        <div className="font-herosBold text-[9vw] md:text-[5rem]">
          work <span className="font-herosBoldItalic text-outline">in</span>{" "}
          progress...
        </div>
        <a
          href="https://www.figma.com/file/TVucbHo5Z3FfRoaiy2Ncp3/experimental"
          target="_blank"
          className="flex flex-row mt-10"
        >
          the design (if i can pull it off)
          {<MdOutlineNorthEast size={20} className="ml-2 my-auto" />}
        </a>
      </div>
    </div>
  );
}
