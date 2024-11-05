"use client";

import { useState } from "react";
import { RiCheckLine } from "react-icons/ri";

export default function SubItem({
  title,
  initialStatus = "notStarted",
}: {
  title: string;
  initialStatus?: "notStarted" | "inProgress" | "completed";
}) {
  const [status, setStatus] = useState<
    "notStarted" | "inProgress" | "completed"
  >(initialStatus);

  const handleClick = () => {
    setStatus((prevStatus) => {
      if (prevStatus === "notStarted") return "inProgress";
      if (prevStatus === "inProgress") return "completed";
      return "notStarted";
    });
  };

  return (
    <button
      className="flex w-full items-center justify-between gap-x-2"
      onClick={handleClick}
    >
      <div className="flex flex-grow items-center gap-x-2">
        <div
          className={`flex aspect-square min-w-5 items-center justify-center rounded border text-white ${
            status === "completed"
              ? "border-transparent bg-green-500"
              : "border-neutral-600"
          }`}
        >
          {status === "completed" && <RiCheckLine />}
        </div>
        <span
          className={`text-start ${status === "completed" ? "text-green-500" : ""}`}
        >
          {title}
        </span>
      </div>
      {status === "inProgress" && (
        <div className="hidden rounded-md bg-orange-100 px-2 py-1 text-xs text-orange-600 sm:block dark:bg-orange-900/30 dark:text-orange-300">
          In progress
        </div>
      )}
      {status !== "inProgress" && (
        <div className="hidden aspect-square w-6 rounded-full bg-neutral-300 sm:block dark:bg-neutral-700"></div>
      )}
    </button>
  );
}
