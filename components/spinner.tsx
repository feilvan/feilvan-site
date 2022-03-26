import Image from "next/image";
import spinner1 from "../public/images/spinner1.svg";
import spinner2 from "../public/images/spinner2.svg";

export default function Spinner() {
  return (
    <>
      <div className="flex flex-col absolute h-screen w-screen ">
        <div className=" my-auto mx-auto opacity-30 ">
          <div className="animate1 w-[8rem] ">
            <Image src={spinner1} />
          </div>
        </div>
      </div>
      <div className="flex flex-col absolute h-screen w-screen ">
        <div className=" my-auto mx-auto opacity-40 ">
          <div className="animate2 w-[18rem] ">
            <Image src={spinner2} />
          </div>
        </div>
      </div>
    </>
  );
}
