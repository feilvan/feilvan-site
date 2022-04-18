import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: 0, transition: { duration: 0.8, delay: 0.4 } }}
      exit={{ opacity: 0 }}
      className=" fixed top-0 grid grid-cols-1 lg:grid-cols-2 w-full pt-4 px-4 sm:px-8 md:px-14 z-50 mix-blend-difference text-base lg:text-lg xl:text-xl"
    >
      <Link href="/" passHref>
        <a className=" hidden lg:flex flex-row space-x-8 w-max">
          <div className="hidden sm:block tracking-widest transition-all no-underline">
            FEILVAN
          </div>
        </a>
      </Link>
      <div className=" flex flex-row justify-between">
        <div className="hidden sm:block lg:hidden tracking-widest">FEILVAN</div>
        <div>Available for Freelance Work</div>
        {/* <BpHelperHero /> */}
        <div className=" hidden xl:flex flex-row my-auto space-x-1">
          <FontAwesomeIcon icon={faArrowUp} />
          <FontAwesomeIcon icon={faArrowDown} />
          <FontAwesomeIcon icon={faUndo} />
        </div>
      </div>
    </motion.div>
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
