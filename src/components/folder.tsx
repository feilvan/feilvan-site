import * as Dialog from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { X } from "lucide-preact";

export interface Item {
  title: string;
  image: string;
}

export default function Folder({ items }: { items: Item[] }) {
  return (
    <div className="grid grid-cols-3 gap-1">
      {items.map((item, i) => (
        <Dialog.Root key={i}>
          <Dialog.Trigger asChild>
            <button>
              <div className="flex flex-col gap-1 w-24 h-36 rounded-md border border-transparent hover:border-gray-600 p-1 transition">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
                <div className="text-xs text-gray-400">{item.title}.jpg</div>
              </div>
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
            <Dialog.Content className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded shadow-lg bg-gray-800">
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
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      ))}
    </div>
  );
}
