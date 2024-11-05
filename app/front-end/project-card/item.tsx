"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Children,useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

export default function Item({
  children,
  title,
}: Readonly<{
  children?: React.ReactNode;
  title: string;
}>) {
  const [expanded, setExpanded] = useState(false);
  const totalTasks = Children.count(children);

  return (
    <div
      className={`rounded-xl border border-neutral-100 transition dark:border-neutral-900 ${
        expanded ? "shadow-xl shadow-black/5 dark:shadow-black" : ""
      }`}
    >
      <button
        className="flex w-full items-center justify-between p-4"
        onClick={() => {
          setExpanded(!expanded);
        }}
        disabled={totalTasks === 0}
      >
        <div>{title}</div>
        <div className="flex items-center gap-x-2 text-neutral-500">
          {/* <div className="w-4 aspect-square rounded-full border-2 border-neutral-400 border-dashed"></div> */}
          <div className="text-xs">{totalTasks} Tasks</div>
          <RiArrowDownSLine
            className={`text-lg transition ${expanded ? "-scale-y-100" : ""}`}
          />
        </div>
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="space-y-2 px-4 pb-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
