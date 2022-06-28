import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Contact() {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
    if (!inView) {
      animation.start("hidden");
    }
  }, [inView, animation]);

  const rowOne = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: { ease: [0.6, 0.01, -0.05, 0.95], delay: 0.2, duration: 0.4 },
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 relative px-8 md:px-14 h-screen items-center bg-black">
      <div className=" flex flex-col col-start-1 lg:col-start-2 space-y-8">
        <div className=" overflow-hidden">
          <motion.div ref={ref} variants={rowOne} animate={animation}>
            <div className=" mb-2 text-xs sm:text-base uppercase tracking-widest font-[300] text-neutral-400 ">
              Get in Touch
            </div>
            <div className="text-5xl sm:text-7xl md:text-8xl pb-1">
              Let&apos;s Work Together
            </div>
          </motion.div>
        </div>
        <a
          href="mailto:hello@feilvan.art"
          className="px-12 py-4 grid border w-full sm:w-max content-center justify-center transition-all"
        >
          <div className=" text-2xl uppercase font-[300]">
            hello@feilvan.art
          </div>
        </a>
      </div>
      <div className="px-8 md:px-14 absolute left-0 bottom-4 grid grid-cols-1 sm:grid-cols-2 grid-rows-2 sm:grid-rows-1 w-full">
        <div>© {new Date().getFullYear()}</div>
        <div className="space-x-4 flex flex-row children:w-max children:transition-all">
          <a
            href="https://www.instagram.com/feilvan"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          ,
          <a
            href="https://www.youtube.com/feilvan"
            target="_blank"
            rel="noreferrer"
          >
            YouTube
          </a>
        </div>
      </div>
    </div>
  );
}
