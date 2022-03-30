import { FaArrowDown, FaArrowUp, FaUndo } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";

export default function Contact() {
  return (
    <div id="contact">
      <div className=" hidden lg:flex flex-col items-center">
        <Horizontal />
      </div>
      <div className=" flex lg:hidden flex-col items-center">
        <Vertical />
      </div>
    </div>
  );
}

function Horizontal() {
  return (
    <div className=" flex flex-col space-y-14 w-full px-14 my-14">
      <div className=" flex flex-row w-full">
        <div className=" basis-1/3 hidden xl:flex flex-col space-y-8">
          <div className="flex flex-row space-x-2 ">
            <FaArrowUp size={100} />
            <FaArrowDown size={100} />
            <FaUndo size={100} />
          </div>
          <div>© {new Date().getFullYear()} - Fuad Elhasan Irfani</div>
        </div>
        <div className=" basis-1/2 xl:basis-1/3 flex flex-col space-y-8 children:w-max">
          <div className="font-herosBold text-6xl">
            Get{" "}
            <span className=" text-outline-white font-herosBoldItalic">in</span>{" "}
            Touch
          </div>
          <div className="flex flex-col space-y-3">
            <a
              href="mailto:feilvanfeilvan@gmail.com"
              className=" flex flex-row"
            >
              feilvanfeilvan@gmail.com
              <BsArrowUpRight className=" ml-2 my-auto" />
            </a>
            <a
              href="https://www.instagram.com/feilvan/"
              className=" flex flex-row"
            >
              Instagram
              <BsArrowUpRight className=" ml-2 my-auto" />
            </a>
            <a
              href="https://www.behance.net/feilvan"
              className=" flex flex-row"
            >
              Behance
              <BsArrowUpRight className=" ml-2 my-auto" />
            </a>
          </div>
        </div>
        <div className=" basis-1/2 xl:basis-1/3 flex flex-col space-y-8 children:w-max">
          <div className="font-herosBold text-6xl">Misc</div>
          <div className="flex flex-col space-y-2">
            <a
              href="https://www.youtube.com/feilvan/"
              className=" flex flex-row"
            >
              YouTube - Editing Process
              <BsArrowUpRight className=" ml-2 my-auto" />
            </a>
            <a
              href="https://www.teepublic.com/user/feilvan"
              className=" flex flex-row"
            >
              TeePublic - T-shirt, phone cases, and more
              <BsArrowUpRight className=" ml-2 my-auto" />
            </a>
          </div>
        </div>
      </div>
      <div className=" flex xl:hidden flex-col items-center">
        <div>© {new Date().getFullYear()} - Fuad Elhasan Irfani</div>
      </div>
    </div>
  );
}

function Vertical() {
  return (
    <div className=" flex flex-col space-y-14 px-6 sm:px-14 my-14 w-full">
      <div className=" flex flex-col space-y-8 children:w-max">
        <div className="font-herosBold text-[9vw] leading-[7vw] sm:text-6xl">
          Get{" "}
          <span className=" text-outline-white font-herosBoldItalic">in</span>{" "}
          Touch
        </div>
        <div className="flex flex-col space-y-3">
          <a href="mailto:feilvanfeilvan@gmail.com" className=" flex flex-row">
            feilvanfeilvan@gmail.com
            <BsArrowUpRight className=" ml-2 my-auto" />
          </a>
          <a
            href="https://www.instagram.com/feilvan/"
            className=" flex flex-row"
          >
            Instagram
            <BsArrowUpRight className=" ml-2 my-auto" />
          </a>
          <a href="https://www.behance.net/feilvan" className=" flex flex-row">
            Behance
            <BsArrowUpRight className=" ml-2 my-auto" />
          </a>
        </div>
      </div>
      <div className=" flex flex-col space-y-8 children:w-max">
        <div className="font-herosBold text-[9vw] leading-[7vw] sm:text-6xl">
          Misc
        </div>
        <div className="flex flex-col space-y-2">
          <a href="https://www.youtube.com/feilvan/" className=" flex flex-row">
            YouTube - Editing Process
            <BsArrowUpRight className=" ml-2 my-auto" />
          </a>
          <a
            href="https://www.teepublic.com/user/feilvan"
            className=" flex flex-row"
          >
            TeePublic - T-shirt, phone cases, and more
            <BsArrowUpRight className=" ml-2 my-auto" />
          </a>
        </div>
      </div>
      <div className=" flex flex-col items-center">
        <div>© {new Date().getFullYear()} - Fuad Elhasan Irfani</div>
      </div>
    </div>
  );
}
