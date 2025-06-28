import type { ReactNode } from "preact/compat";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-preact";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface Item {
  title: string;
  image: string;
  content: ReactNode;
}

const items: Item[] = [
  {
    title: "Markdown Previewer",
    image: "/images/front-end/md.webp",
    content: (
      <>
        <span>Markdown Previewer Project for freeCodeCamp Certification</span>
        <a
          href="https://github.com/feilvan/fcc-markdown-previewer"
          target="_blank"
          rel="noopener noreferrer"
          class="underline"
        >
          Project repository
        </a>
      </>
    ),
  },
  {
    title: "Pomodoro",
    image: "/images/front-end/pomodoro.webp",
    content: (
      <>
        <span>
          25 + 5 clock (Pomodoro) Project for freeCodeCamp Certification
        </span>
        <a
          href="https://github.com/feilvan/fcc-25-5-clock"
          target="_blank"
          rel="noopener noreferrer"
          class="underline"
        >
          Project repository
        </a>
      </>
    ),
  },
];

export default function FeProject() {
  return (
    <div class="grid grid-cols-3 items-start gap-1 p-4">
      {items.map((item, i) => (
        <Dialog.Root key={i}>
          <Dialog.Trigger asChild>
            <button key={i}>
              <div class="flex flex-col justify-center gap-1 w-24 rounded-md border border-transparent hover:border-gray-600 p-1 transition">
                <img
                  src={item.image}
                  alt={item.title}
                  class="w-full h-full object-contain"
                />
                <span class="text-xs text-gray-400">{item.title}</span>
              </div>
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
            <Dialog.Content className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded shadow-lg border border-gray-800 bg-gray-950/60 backdrop-blur">
              <VisuallyHidden>
                <Dialog.Title>{item.title}</Dialog.Title>
              </VisuallyHidden>
              <div class="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-w-[60vw] max-h-[60vh] rounded"
                />
                <Dialog.Close className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 p-2 bg-gray-800 rounded-full hover:bg-gray-600 border border-gray-600">
                  <X size={16} />
                </Dialog.Close>
                <div class="flex flex-col items-start p-4">{item.content}</div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      ))}
    </div>
  );
}
