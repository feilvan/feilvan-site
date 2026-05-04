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
        <p>Markdown Previewer Project for freeCodeCamp Certification</p>
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
        <p>25 + 5 clock (Pomodoro) Project for freeCodeCamp Certification</p>
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
  {
    title: "Website Pengumuman Kelulusan",
    image: "/images/front-end/mulan3.webp",
    content: (
      <>
        <h3>Pengumuman Kelulusan SMK Muhammadiyah 9 Gambiran</h3>
        <p>
          <a
            href="https://github.com/feilvan/mulan-kelulusan-2026"
            target="_blank"
            rel="noopener noreferrer"
            class="underline"
          >
            Project repository
          </a>
        </p>
        <p>
          Tech stack:
          <ul>
            <li>Nuxt (vue framework)</li>
            <li>UnoCSS (CSS engine)</li>
            <li>@sidebase/nuxt-auth (auth)</li>
            <li>Neon (serverless postgres database)</li>
            <li>Vercel (deployment)</li>
          </ul>
        </p>
        <div class="space-y-4">
          <img src="/images/front-end/mulan1.webp" alt="Halaman Awal" />
          <img src="/images/front-end/mulan2.webp" alt="Halaman Login" />
          <img src="/images/front-end/mulan3.webp" alt="Halaman Dashboard" />
        </div>
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
            <Dialog.Content className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <VisuallyHidden>
                <Dialog.Title>{item.title}</Dialog.Title>
              </VisuallyHidden>
              <Dialog.Close className="absolute z-1 top-0 right-0 translate-x-1/2 -translate-y-1/2 p-2 bg-gray-800 rounded-full hover:bg-gray-600 border border-gray-600">
                <X size={16} />
              </Dialog.Close>
              <div class="relative max-h-[calc(100vh-64px)] overflow-auto rounded shadow-lg border border-gray-800 bg-gray-950/60 backdrop-blur">
                <div class="flex flex-col max-w-screen-sm w-[calc(100vw-64px)] items-start p-4 prose text-xs sm:text-sm">
                  <img src={item.image} alt={item.title} />
                  {item.content}
                </div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      ))}
    </div>
  );
}
