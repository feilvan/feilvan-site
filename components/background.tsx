import Image from "next/image";
import banner from "../public/images/banner2.jpg";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="absolute grid content-center top-0 -z-50 overflow-hidden">
      <motion.div
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: { duration: 1.6, ease: [0.6, 0.01, -0.05, 0.95] },
        }}
      >
        <Parallax
          speed={-50}
          className="relative top-0 h-screen w-screen overflow-hidden"
        >
          <Image
            src={banner}
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </Parallax>
      </motion.div>
    </div>
  );
}
