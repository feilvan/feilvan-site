import { motion } from "framer-motion";
import { useEffect } from "react";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const AnimatedLetters = ({ title }) => (
  <motion.span
    className="row-title"
    variants={banner}
    initial="initial"
    animate="animate"
  >
    {[...title].map((letter) => (
      <motion.span key={title} className="row-letter" variants={letterAni}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

export default function Loader({ setLoading }) {
  return (
    <div className=" h-screen w-screen bg-neutral-900">
      <motion.div
        onAnimationComplete={() => setLoading(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
      >
        <AnimatedLetters title="FEILVAN" />
      </motion.div>
    </div>
  );
}
