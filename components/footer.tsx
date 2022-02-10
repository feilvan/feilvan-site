import { MdOutlineNorthEast } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="">
      <div className="relative sm:absolute bottom-0 flex flex-col place-items-center py-4 border-t-[1px] visible sm:invisible space-y-2">
        <div className="flex flex-row space-x-4">
          <a
            href="https://www.figma.com/file/TVucbHo5Z3FfRoaiy2Ncp3/experimental"
            target="_blank"
            className="flex flex-row"
          >
            Design{<MdOutlineNorthEast size={20} className="ml-2 my-auto" />}
          </a>
          <a
            href="https://github.com/feilvan/feilvan-site"
            target="_blank"
            className="flex flex-row"
          >
            Source code
            {<MdOutlineNorthEast size={20} className="ml-2 my-auto" />}
          </a>
        </div>
        <div>© {new Date().getFullYear()} Fuad Elhasan Irfani</div>
      </div>
      <div className="absolute sm:relative bottom-0 flex flex-row py-4 border-t-[1px] invisible sm:visible">
        <div className="basis-1/2">
          © {new Date().getFullYear()} Fuad Elhasan Irfani
        </div>
        <div className="basis-1/2 flex flex-row justify-between">
          <div className="flex flex-row space-x-4">
            <a
              href="https://www.figma.com/file/TVucbHo5Z3FfRoaiy2Ncp3/experimental"
              target="_blank"
              className="flex flex-row"
            >
              Design{<MdOutlineNorthEast size={20} className="ml-2 my-auto" />}
            </a>
            <a
              href="https://github.com/feilvan/feilvan-site"
              target="_blank"
              className="flex flex-row"
            >
              Source code
              {<MdOutlineNorthEast size={20} className="ml-2 my-auto" />}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
