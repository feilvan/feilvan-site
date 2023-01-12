import Image from "next/image";

import aiart1 from "../public/images/aiart/1.jpg";
import aiart2 from "../public/images/aiart/2.jpg";
import aiart3 from "../public/images/aiart/3.jpg";
import aiart4 from "../public/images/aiart/4.jpg";
import aiart5 from "../public/images/aiart/5.jpg";
import aiart6 from "../public/images/aiart/6.jpg";
import aiart7 from "../public/images/aiart/7.jpg";
import aiart8 from "../public/images/aiart/8.jpg";
import aiart9 from "../public/images/aiart/9.jpg";
import aiart10 from "../public/images/aiart/10.jpg";
import aiart11 from "../public/images/aiart/11.jpg";
import aiart12 from "../public/images/aiart/12.jpg";
import aiart13 from "../public/images/aiart/13.jpg";
import aiart14 from "../public/images/aiart/14.jpg";
import aiart15 from "../public/images/aiart/15.jpg";
import aiart16 from "../public/images/aiart/16.jpg";
import aiart17 from "../public/images/aiart/17.jpg";
import aiart18 from "../public/images/aiart/18.jpg";

export default function AiArt() {
  return (
    <>
      <div className=" flex flex-row flex-wrap">
        <div className=" ml-4 my-2">
          <div>WIP Textual Inversion</div>
          <div>Trained on Stable Diffusion 1.5</div>
        </div>
        <Item image={aiart1} />
        <Item image={aiart2} />
        <Item image={aiart3} />
        <Item image={aiart4} />
        <Item image={aiart5} />
        <Item image={aiart6} />
        <Item image={aiart7} />
        <Item image={aiart8} />
        <Item image={aiart9} />
        <Item image={aiart10} />
        <Item image={aiart11} />
        <Item image={aiart12} />
        <Item image={aiart13} />
        <Item image={aiart14} />
        <Item image={aiart15} />
        <Item image={aiart16} />
        <Item image={aiart17} />
        <Item image={aiart18} />
      </div>
    </>
  );
}

function Item({ image }) {
  return (
    <>
      <div className=" relative w-full sm:w-1/2 md:w-1/3 overflow-hidden">
        <Image src={image} placeholder="blur" alt="Art by FEILVAN" />
      </div>
    </>
  );
}
