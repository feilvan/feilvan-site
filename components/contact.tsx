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
    <div className="flex flex-row px-8 md:px-14 h-screen items-center bg-black">
      <div className=" flex flex-col">
        <div className=" overflow-hidden">
          <motion.div
            ref={ref}
            variants={rowOne}
            animate={animation}
            className="text-5xl sm:text-7xl md:text-8xl uppercase font-[700]"
          >
            Let&apos;s Work Together
          </motion.div>
        </div>
        <div className="flex flex-col mt-8 space-y-8">
          <a
            href="mailto:hello@feilvan.art"
            className="px-12 py-4 grid border w-full sm:w-max content-center justify-center hover:no-underline hover:bg-white hover:text-black transition-all"
          >
            <div className=" text-2xl uppercase font-[300]">
              hello@feilvan.art
            </div>
          </a>
          <div className=" flex flex-row children:border children:border-transparent children:px-8 children:py-4">
            <a
              href="https://www.instagram.com/feilvan"
              target="_blank"
              rel="noreferrer"
            >
              IG
            </a>
            <a
              href="https://twitter.com/feilvan"
              target="_blank"
              rel="noreferrer"
            >
              TW
            </a>
            <a
              href="https://www.linkedin.com/in/fuad-elhasan-irfani/"
              target="_blank"
              rel="noreferrer"
            >
              IN
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
