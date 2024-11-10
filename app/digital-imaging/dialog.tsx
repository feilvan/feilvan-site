import Image from "next/image";
import { StaticImageData } from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";
import Link from "@/components/link";

export default function CardDialog({
  date,
  link,
  image,
}: Readonly<{
  date: string;
  link: string;
  image: StaticImageData;
}>) {
  return (
    <Dialog>
      <DialogTrigger className="overflow-hidden rounded-lg border border-neutral-200 transition hover:scale-[.98] dark:border-neutral-800">
        <Image src={image} alt={date} />
      </DialogTrigger>
      <DialogContent className="border-neutral-200 bg-white p-0 dark:border-neutral-800 dark:bg-neutral-950">
        <DialogHeader>
          <DialogTitle className="p-6 pb-2">{date}</DialogTitle>
          <DialogDescription>
            <Link
              external
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-6 mb-4 block w-fit underline"
            >
              Instagram post
            </Link>
            <Image
              src={image}
              alt={date}
              className="overflow-hidden rounded-none sm:rounded-lg"
            />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
