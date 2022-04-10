import w200315 from "../public/images/works/200315.jpg";
import w200424 from "../public/images/works/200424.jpg";
import w200509 from "../public/images/works/200509.jpg";
import w200713 from "../public/images/works/200713.jpg";
import w200919 from "../public/images/works/200919.jpg";
import w201024 from "../public/images/works/201024.jpg";
import w201115 from "../public/images/works/201115.jpg";
import w210622 from "../public/images/works/210622.jpg";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

const list = [
  {
    title: "Twins",
    date: 200509,
    image: w200509,
  },
  {
    title: "Twins",
    date: 200509,
    image: w200509,
  },
  {
    title: "Twins",
    date: 200509,
    image: w200509,
  },
];

export default function Works() {
  return (
    <div className="px-8 md:px-14 py-32">
      <div className=" font-herosItalic text-base uppercase tracking-widest text-neutral-400 py-12">
        Selected Personal Works
      </div>
      <div id="works" className=" grid grid-cols-2 gap-10  bg-black">
        {list.map((item) => (
          <div key={item.date} className=" ">
            <div className="">
              <div className=" relative h-96">
                <Image
                  src={item.image}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className=" flex flex-row justify-between py-4">
                <div>{item.title}</div>
                <div>{item.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
