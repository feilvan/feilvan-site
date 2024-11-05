import type { Metadata } from "next";
import Image from "next/image";

import projectCard from "@/images/front-end/project-card.png";

import Link from "./components/link";

export const metadata: Metadata = {
  title: "FEILVAN",
  description: "Feilvan portfolio website",
};

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-1 p-1 sm:gap-2 sm:p-2">
      <div className="relative overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
        <Link href="/front-end/project-card">
          <Image
            src={projectCard}
            alt="Feilvan"
            style={{ aspectRatio: projectCard.width / projectCard.height }}
          />
        </Link>
      </div>
    </div>
  );
}
