import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import p5 from "p5";
import NET from "vanta/dist/vanta.net.min";

import { FaArrowDown, FaArrowUp, FaUndo } from "react-icons/fa";

export default function Hero() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 400.0,
          minWidth: 400.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x555555,
          backgroundColor: 0x0,
          points: 3.0,
          maxDistance: 30.0,
        })
      );
    }
  }, [vantaEffect]);

  return (
    <div className=" flex flex-col h-screen" ref={vantaRef}>
      <div className="flex flex-row justify-between w-full py-2 px-2 bg-black">
        <div className=" flex flex-row space-x-2">
          <div className=" flex flex-row my-auto">
            <FaArrowUp />
            <FaArrowDown />
            <FaUndo />
          </div>
          <div className="font-herosBoldItalic hidden sm:block">FEILVAN</div>
        </div>
        <div className=" ">Available for freelance work</div>
      </div>
      <div className="absolute h-full w-full grid place-items-center">
        <div>
          <div className="font-herosBold text-5xl pb-4 border-b-2">
            Reality
            <br />
            Reimagined
          </div>
          <div className="mt-3 text-base ">
            <span className=" font-herosBold">FEILVAN</span> Digital Imaging
            Artist
          </div>
        </div>
      </div>
    </div>
  );
}
