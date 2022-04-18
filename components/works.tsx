import w200315 from "../public/images/works/200315.jpg";
import w200424 from "../public/images/works/200424.jpg";
import w200509 from "../public/images/works/200509.jpg";
import w200713 from "../public/images/works/200713.jpg";
import w200919 from "../public/images/works/200919.jpg";
import w201024 from "../public/images/works/201024.jpg";
import w201115 from "../public/images/works/201115.jpg";
import w210622 from "../public/images/works/210622.jpg";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

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

const parent = {
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const children = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.8,
    },
  },
  hidden: {
    y: "20%",
    opacity: 0,
    transition: {
      duration: 0,
    },
  },
};

export default function Works() {
  const { ref, inView } = useInView();
  const parentAnim = useAnimation();
  const childAnim = useAnimation();

  useEffect(() => {
    if (inView) {
      parentAnim.start("visible");
      childAnim.start("visible");
    }
    if (!inView) {
      parentAnim.start("hidden");
      childAnim.start("hidden");
    }
  }, [inView, parentAnim, childAnim]);

  return (
    <div id="works" className="px-4 sm:px-8 md:px-14 py-16 bg-black">
      <div className=" py-12">
        <div className=" mb-2 text-xs sm:text-base uppercase tracking-widest font-[300] text-neutral-400 ">
          Works
        </div>
        <div className=" text-6xl">Selected Personal Works</div>
      </div>
      <motion.div ref={ref} id="works" variants={parent} animate={parentAnim}>
        <motion.div className=" grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-10">
          {list.map((item) => (
            <div key={item.date}>
              <div className=" grid content-center h-[50vw] lg:h-[30vw] overflow-hidden">
                <Parallax translateY={[20, -20]}>
                  <motion.div
                    variants={children}
                    animate={childAnim}
                    className=" block"
                  >
                    <Image
                      src={item.image}
                      alt=""
                      layout="responsive"
                      placeholder="blur"
                    />
                  </motion.div>
                </Parallax>
              </div>

              <div className=" flex flex-row justify-between py-8">
                <div>{item.title}</div>
                <div className=" text-neutral-400 font-[300]">#{item.date}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
      <div className="grid grid-cols-4 w-full mt-12">
        <a
          href="https://www.instagram.com/feilvan"
          className=" grid col-start-1 col-span-4 lg:col-span-1 lg:col-start-4 border py-4 content-center justify-center transition-all"
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
