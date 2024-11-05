"use client";

import * as Popover from "@radix-ui/react-popover";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  RiArrowUpSLine,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiMailLine,
} from "react-icons/ri";

import ColorSchemeToggle from "./color-scheme-toggle";

export default function Footer() {
  const tabs = useMemo(
    () => [
      { name: "Front-End", link: "/" },
      { name: "Digital Imaging", link: "/digital-imaging" },
    ],
    [],
  );
  const [selectedTab, setSelectedTab] = useState(-1);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const currentTabIndex = tabs.findIndex((tab) => pathname === tab.link);
    if (currentTabIndex !== -1) {
      setSelectedTab(currentTabIndex);
    }
  }, [pathname, tabs]);

  return (
    <div className="sticky bottom-0">
      <div className="my-4 overflow-hidden rounded-xl border border-neutral-200/20 bg-neutral-50/90 shadow-lg backdrop-blur dark:border-neutral-800/60 dark:bg-neutral-900/90">
        <div className="flex flex-col overflow-hidden">
          <Popover.Root open={open} onOpenChange={setOpen}>
            <Popover.Anchor />
            <div className="z-10 flex">
              <div className="relative flex p-1 pr-0">
                {tabs.map((tab, index) => (
                  <Link
                    key={index}
                    href={tab.link}
                    className="relative px-3 py-1 transition-colors hover:text-neutral-600 dark:hover:text-neutral-300"
                    onClick={() => setSelectedTab(index)}
                  >
                    <p className="relative z-10">{tab.name}</p>
                    {index === selectedTab && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute inset-0 z-0 h-full w-full rounded-lg border border-neutral-200 bg-white shadow-inner dark:border-neutral-700/40 dark:bg-neutral-800"
                      />
                    )}
                  </Link>
                ))}
              </div>
              <Popover.Trigger className="group">
                <RiArrowUpSLine className="ml-2 mr-3 text-xl transition-transform group-data-[state=open]:-scale-y-100" />
              </Popover.Trigger>
              <Popover.Portal forceMount>
                <AnimatePresence>
                  {open && (
                    <Popover.Content side="top">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 8 }}
                        transition={{
                          duration: 0.15,
                          ease: "easeOut",
                        }}
                      >
                        <div className="mb-2 flex w-80 flex-col gap-4 rounded-xl border border-neutral-200 bg-neutral-50/90 p-4 shadow-lg backdrop-blur transition dark:border-neutral-800 dark:bg-neutral-900/90">
                          <div className="flex flex-col">
                            <div className="flex gap-2">
                              <a
                                href="https://github.com/feilvan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-neutral-100"
                              >
                                <RiGithubFill className="text-xl" />
                              </a>
                              <a
                                href="https://www.linkedin.com/in/fuad-elhasan-irfani/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-neutral-100"
                              >
                                <RiLinkedinFill className="text-xl" />
                              </a>
                              <a
                                href="https://www.instagram.com/feilvan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-neutral-100"
                              >
                                <RiInstagramFill className="text-xl" />
                              </a>
                            </div>
                            <div className="mt-2 flex items-center p-2">
                              <RiMailLine className="text-xl" />
                              <span>hello@feilvan.art</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </Popover.Content>
                  )}
                </AnimatePresence>
              </Popover.Portal>
            </div>
          </Popover.Root>
        </div>
        <div className="mx-1 flex items-center justify-between gap-x-2 border-t border-neutral-200 pl-2 text-xs text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
          <div>FEILVAN | Available for work</div>
          <ColorSchemeToggle />
        </div>
      </div>
    </div>
  );
}
