"use client";

import * as Popover from "@radix-ui/react-popover";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  LuChevronUp,
  LuClipboard,
  LuClipboardCheck,
  LuGithub,
  LuInstagram,
  LuLinkedin,
  LuMail,
} from "react-icons/lu";

import ThemeToggle from "./theme-toggle";

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
  const [isCopied, setIsCopied] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const currentTabIndex = tabs.findIndex((tab) => pathname === tab.link);
    if (currentTabIndex !== -1) {
      setSelectedTab(currentTabIndex);
    }
  }, [pathname, tabs]);

  return (
    <nav role="navigation" className="sticky bottom-0">
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
                        transition={{ duration: 0.15 }}
                        className="absolute inset-0 z-0 h-full w-full rounded-lg border border-neutral-200 bg-white shadow-inner dark:border-neutral-700/40 dark:bg-neutral-800"
                      />
                    )}
                  </Link>
                ))}
              </div>
              <Popover.Trigger
                className="group"
                aria-label="Popover Trigger Button"
              >
                <LuChevronUp className="ml-2 mr-3 text-xl transition-transform group-data-[state=open]:-scale-y-100" />
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
                        }}
                      >
                        <div className="mb-2 flex w-80 flex-col gap-4 rounded-xl border border-neutral-200 bg-neutral-50/90 p-4 shadow-lg backdrop-blur transition dark:border-neutral-800 dark:bg-neutral-900/90">
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold tracking-tight">
                              Socials
                            </span>
                            <div className="mt-2 flex gap-1">
                              <a
                                href="https://github.com/feilvan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-md p-2 transition-colors hover:bg-neutral-500/10"
                              >
                                <LuGithub className="text-xl" />
                              </a>
                              <a
                                href="https://www.linkedin.com/in/fuad-elhasan-irfani/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-md p-2 transition-colors hover:bg-neutral-500/10"
                              >
                                <LuLinkedin className="text-xl" />
                              </a>
                              <a
                                href="https://www.instagram.com/feilvan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-md p-2 transition-colors hover:bg-neutral-500/10"
                              >
                                <LuInstagram className="text-xl" />
                              </a>
                            </div>
                            <span className="mt-4 text-sm font-semibold tracking-tight">
                              Mail
                            </span>
                            <div className="mt-2 flex items-center gap-1">
                              <a
                                href="mailto:hello@feilvan.art"
                                className="flex flex-grow items-center gap-x-2 rounded-md p-2 transition-colors hover:bg-neutral-500/10"
                              >
                                <LuMail className="text-xl" />
                                <span className="font-semibold tracking-tight">
                                  hello@feilvan.art
                                </span>
                              </a>
                              <button
                                className="rounded-md p-2 transition-colors hover:bg-neutral-500/10"
                                onClick={() => {
                                  navigator.clipboard.writeText(
                                    "hello@feilvan.art",
                                  );
                                  setIsCopied(true);
                                  setTimeout(() => setIsCopied(false), 1500);
                                }}
                              >
                                {isCopied ? (
                                  <LuClipboardCheck className="text-xl" />
                                ) : (
                                  <LuClipboard className="text-xl" />
                                )}
                              </button>
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
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
