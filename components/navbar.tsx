import Link from "next/link";
import { FaArrowDown, FaArrowUp, FaUndo } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";

export default function Navbar() {
  return (
    <div
      data-scroll
      data-scroll-sticky
      data-scroll-target="main"
      className=" fixed top-0 flex flex-row justify-between w-full py-8 md:py-12 px-8 md:px-14 z-50 mix-blend-difference"
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
          {/* <BpHelperHero /> */}
        </a>
      </Link>
      <div className=" flex flex-row space-x-8">
        {/* <button onClick={scroll.scrollTo(target)}>Works</button> */}
        {/* <a>Contact</a> */}
      </div>
    </div>
  );
}

function BpHelperHero() {
  return (
    <div className="  z-50 bg-black/50">
      <div className=" block sm:hidden">{"<"}SM</div>
      <div className=" hidden sm:block md:hidden">SM</div>
      <div className=" hidden md:block lg:hidden">MD</div>
      <div className=" hidden lg:block xl:hidden">LG</div>
      <div className=" hidden xl:block 2xl:hidden">XL</div>
      <div className=" hidden 2xl:block">2XL</div>
    </div>
  );
}
