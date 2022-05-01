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
      className=" sticky top-0 grid grid-cols-1 lg:grid-cols-2 w-full max-w-[120rem] py-4 px-4 sm:px-8 md:px-14 z-50 mix-blend-difference text-base lg:text-lg xl:text-xl"
    >
      <Link href="/" passHref>
        <a className=" hidden lg:flex flex-row space-x-8 w-max">
          <div className="tracking-widest transition-all no-underline">
            FEILVAN
          </div>
        </a>
      </Link>
      <div className=" flex flex-row justify-between">
        <Link href="/" passHref>
          <a className=" sm:block lg:hidden flex-row space-x-8 w-max">
            <div className="tracking-widest transition-all no-underline">
              FEILVAN
            </div>
          </a>
        </Link>
        <div className="sm:block">Available for Freelance Work</div>
        {/* <BpHelperHero /> */}
        <div className=" hidden flex-row space-x-2">
          <Link href={"/works"}>
            <a>Works</a>
          </Link>
          ,<a>Contact</a>
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
