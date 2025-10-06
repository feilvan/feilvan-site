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
    title: "Sistem Informasi Akademik",
    image: "images/ui/siakad/0-thumbnail.webp",
    content: (
      <div>
        <h3>Sistem Informasi Akademik</h3>
        <p>A final project for Human and Computer Interaction course</p>
        <div class="space-y-sm">
          <img src="images/ui/siakad/1-intro.webp" />
          <img src="images/ui/siakad/2-rencana-studi.webp" />
          <img src="images/ui/siakad/3-layanan-surat-mahasiswa.webp" />
        </div>
      </div>
    ),
  },
];

export default function UiProject() {
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
