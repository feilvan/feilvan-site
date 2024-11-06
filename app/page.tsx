import type { Metadata } from "next";
import Image from "next/image";

import projectCard from "@/images/front-end/project-card.png";

import Link from "./components/link";
import Pill from "./components/pill";

export const metadata: Metadata = {
  title: "FEILVAN",
  description: "Feilvan portfolio website",
};

export default function Home() {
  return (
    <>
      <div className="mx-2 mb-4 mt-8 text-lg">Projects</div>
      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2">
        <div className="relative overflow-hidden rounded-lg border border-neutral-200 transition-transform hover:scale-[.98] dark:border-neutral-800">
          <Link href="/front-end/project-card">
            <Image
              src={projectCard}
              alt="Feilvan"
              style={{ aspectRatio: projectCard.width / projectCard.height }}
            />
          </Link>
        </div>
      </div>
      <div className="mx-2">
        <div className="mb-4 mt-8 text-lg">Experience</div>
        <div className="text-sm">
          <div>Front-End Developer Intern</div>
          <div>
            Badan Pendidikan dan Pelatihan Keuangan, Kementerian Keuangan
            Republik Indonesia
          </div>
          <div className="text-neutral-600 dark:text-neutral-400">
            Feb 2023 - Jun 2023
          </div>
          <div className="mt-1 flex gap-x-2">
            <Pill>React</Pill>
            <Pill>Next.js</Pill>
          </div>
        </div>
      </div>
    </>
  );
}
