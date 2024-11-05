import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import projectCard from "@/images/front-end/project-card.png";

export const metadata: Metadata = {
  title: "FEILVAN",
  description: "Feilvan portfolio website",
};

export default function Home() {
  return (
    <div className="relative h-52 w-80 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
      <Link href="/front-end/project-card">
        <Image src={projectCard} alt="Feilvan" className="object-cover" fill />
      </Link>
    </div>
  );
}
