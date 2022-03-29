import w200315 from "../public/images/works/200315.jpg";
import w200424 from "../public/images/works/200424.jpg";
import w200509 from "../public/images/works/200509.jpg";
import w200713 from "../public/images/works/200713.jpg";
import w200919 from "../public/images/works/200919.jpg";
import w201024 from "../public/images/works/201024.jpg";
import w201115 from "../public/images/works/201115.jpg";
import w210622 from "../public/images/works/210622.jpg";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Works() {
  return (
    <div className="bg-black">
      <div id="works" className="flex flex-col ">
        <div className=" sticky top-0 h-screen w-full grid place-items-center z-20">
          <div className=" font-herosBold text-6xl">Works</div>
        </div>
        <div className=" -mt-[100vh]">
          <div className="mt-32 flex flex-row w-full">
            <div className=" basis-1/2 flex flex-col items-center children:max-w-sm space-y-20">
              <div>
                <Image src={w200315} />
              </div>
              <div className=" ml-36">
                <Image src={w200509} />
              </div>
              <div>
                <Image src={w201115} />
              </div>
              <div className=" ml-24">
                <Image src={w200919} />
              </div>
            </div>
            <div className=" basis-1/2 flex flex-col items-center children:max-w-sm space-y-20 mt-32">
              <div className=" mr-40">
                <Image src={w200424} />
              </div>
              <div>
                <Image src={w210622} />
              </div>
              <div className=" mr-20">
                <Image src={w200713} />
              </div>
              <div className=" mr-44">
                <Image src={w201024} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Extend />
    </div>
  );
}

function Extend() {
  return (
    <div className="flex flex-col items-center">
      <div className=" my-20">
        <a
          href="http://instagram.com/feilvan"
          className=" flex flex-row border border-neutral-700 hover:border-neutral-500 rounded-md py-3 px-14 bg-neutral-900 hover:bg-transparent text-base tracking-normal hover:tracking-wide hover:no-underline transition-all"
        >
          More on Instagram <FaExternalLinkAlt className="ml-4 my-auto" />
        </a>
      </div>
    </div>
  );
}
