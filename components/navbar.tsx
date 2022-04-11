import Link from "next/link";
import { FaArrowDown, FaArrowUp, FaUndo } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";

export default function Navbar() {
  return (
    <div
      data-scroll
      data-scroll-sticky
      data-scroll-target="main"
      className=" absolute top-0 flex flex-row justify-between w-full py-8 md:py-12 px-8 md:px-14 z-50 mix-blend-difference"
    >
      <Link href="/" passHref>
        <a className=" flex flex-row space-x-8">
          <div className=" flex flex-row my-auto space-x-1">
            <FaArrowUp />
            <FaArrowDown />
            <FaUndo />
          </div>
          <div className="italic font-bold hidden sm:block tracking-normal hover:tracking-widest transition-all no-underline">
            FEILVAN
          </div>
        </a>
      </Link>
      <div className=" flex flex-row space-x-8">
        {/* <button onClick={scroll.scrollTo(target)}>Works</button> */}
        {/* <a>Contact</a> */}
      </div>
    </div>
  );
}
