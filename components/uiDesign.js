import Image from "next/image";

import design1 from "../public/images/design/1.png";
import design2 from "../public/images/design/2.png";
import design3 from "../public/images/design/3.png";
import design4 from "../public/images/design/4.png";

export default function UiDesign() {
  return (
    <>
      <div className=" flex flex-row flex-wrap">
        <Item
          image={design1}
          title="Human & Computer Interaction - Final Project"
        />
        <Item image={design2} title="Generic Social Media" />
        <Item image={design3} title="Twitter Redesign" />
        <Item image={design4} title="Generic Chat App" />
      </div>
    </>
  );
}

function Item({ image, title }) {
  return (
    <>
      <div className=" relative w-full overflow-hidden">
        <Image src={image} placeholder="blur" alt="Art by FEILVAN" />
        <div className=" absolute top-0 left-0 w-full h-full bg-transparent hover:bg-black/60 text-transparent hover:text-white transition-all scale-125 hover:scale-100 flex">
          <span className=" mx-auto my-auto uppercase text-sm">{title}</span>
        </div>
      </div>
    </>
  );
}
