import { Metadata } from "next";
import Image from "next/image";

import Link from "@/components/link";
import kanbanBoard from "@/images/front-end/kanban-board.png";

import Wrapper from "../wrapper";

export const metadata: Metadata = {
  title: "Kanban Board",
  description: "Personal project",
};

export default function Page() {
  return (
    <Wrapper
      title="Kanban Board"
      tags={["personal project"]}
      description={
        <>
          <div className="flex flex-col">
            <Link
              external
              href="https://kanban-board-feilvan.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit underline"
            >
              Live project
            </Link>
            <Link
              external
              href="https://github.com/feilvan/kanban-board"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit underline"
            >
              Project repository
            </Link>
          </div>
        </>
      }
    >
      <Image
        src={kanbanBoard}
        alt="Kanban Board"
        className="rounded-2xl border border-neutral-200 dark:border-neutral-800"
      />
    </Wrapper>
  );
}
