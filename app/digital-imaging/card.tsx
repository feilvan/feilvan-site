"use client";

import { motion, AnimatePresence } from "framer-motion";
import { StaticImageData } from "next/image";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { RiCloseLargeFill } from "react-icons/ri";
import Link from "@/components/link";

export default function Card({
  date,
  link,
  image,
}: Readonly<{
  date: string;
  link: string;
  image: StaticImageData;
}>) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="overflow-hidden rounded-lg border border-neutral-200 text-[0px] transition hover:scale-[.98] dark:border-neutral-800">
        <Image src={image} alt={date} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-10 grid place-items-center overflow-y-auto bg-black bg-opacity-50 backdrop-blur">
          <Dialog.Content className="z-20 mx-4 my-12 max-w-screen-sm rounded-xl bg-neutral-200 dark:bg-neutral-900/90">
            <div className="flex justify-between px-4 py-2">
              <div className="">
                <Dialog.Title>{date}</Dialog.Title>
                <Link href={link} external className="text-sm">
                  Instagram post
                </Link>
              </div>
              <Dialog.Close>
                <RiCloseLargeFill />
              </Dialog.Close>
            </div>
            <div className="overflow-hidden rounded-xl">
              <Image src={image} alt={date} />
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
