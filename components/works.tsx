import w200315 from "../public/images/works/200315.jpg";
import w200424 from "../public/images/works/200424.jpg";
import w200509 from "../public/images/works/200509.jpg";
import w200713 from "../public/images/works/200713.jpg";
import w200919 from "../public/images/works/200919.jpg";
import w201024 from "../public/images/works/201024.jpg";
import w201115 from "../public/images/works/201115.jpg";
import w210622 from "../public/images/works/210622.jpg";
import Image from "next/image";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const list = [
  {
    title: "Twins",
    date: 200509,
    image: w200509,
  },
  {
    title: "Figment",
    date: 201115,
    image: w201115,
  },
  {
    title: "Levitate",
    date: 200315,
    image: w200315,
  },
  {
    title: "Heat",
    date: 200713,
    image: w200713,
  },
];

export default function Works() {
  const worksRef = useRef();

  return (
    <div id="works" ref={worksRef} className="px-8 md:px-14 py-32">
      <div className=" italic text-base uppercase tracking-widest text-neutral-400 py-12">
        Selected Personal Works
      </div>
      <div
        id="works"
        className=" grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-10"
      >
        {list.map((item) => (
          <div key={item.date} className=" ">
            <div className="">
              <div className=" grid content-center h-[50vw] lg:h-[30vw] overflow-hidden">
                <div data-scroll data-scroll-speed="2" className=" block">
                  <Image src={item.image} alt="" layout="responsive" />
                </div>
              </div>

              <div className=" flex flex-row justify-between py-8">
                <div>{item.title}</div>
                <div className=" text-neutral-400">#{item.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 w-full mt-12">
        <a
          href="https://www.instagram.com/feilvan"
          className=" grid col-start-1 col-span-4 lg:col-span-1 lg:col-start-4 border py-4 content-center justify-center hover:no-underline hover:bg-white hover:text-black transition-all"
          target="_blank"
          rel="noreferrer"
        >
          <div className=" space-x-4">
            <span>More on Instagram</span>
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </div>
        </a>
      </div>
    </div>
  );
}
