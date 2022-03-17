import { MdOutlineNorthEast } from "react-icons/md";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";

export default function Footer() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="">
      <div className="relative sm:absolute bottom-0 flex flex-col py-4 border-t-[1px] visible sm:invisible space-y-4">
        <div className="space-y-4">
          <button
            type="button"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? (
              <div className="flex flex-row hover:underline">
                Dark Mode <FaMoon size={20} className="ml-2 my-auto" />
              </div>
            ) : (
              <div className="flex flex-row hover:underline">
                Light Mode <FaSun size={20} className="ml-2 my-auto" />
              </div>
            )}
          </button>
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
            Source Code
            {<MdOutlineNorthEast size={20} className="ml-2 my-auto" />}
          </a>
        </div>
        <div>© {new Date().getFullYear()} Fuad Elhasan Irfani</div>
      </div>
      <div className="absolute sm:relative bottom-0 flex flex-row py-4 border-t-[1px] border-black dark:border-white invisible sm:visible">
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
          <button
            type="button"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="px-3 py-2 rounded-sm border-[1px] border-transparent hover:border-black dark:hover:border-white transition"
          >
            {theme === "light" ? <FaMoon size={15} /> : <FaSun size={15} />}
          </button>
        </div>
      </div>
    </div>
  );
}
