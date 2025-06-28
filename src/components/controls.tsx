import { Frame, Map, Minus, Plus } from "lucide-preact";
import { useState } from "preact/hooks";
import * as Popover from "@radix-ui/react-popover";
import { MiniMap } from "@xyflow/react";
import { useReactFlow } from "@xyflow/react";

export default function Control() {
  const [open, setOpen] = useState(false);
  const { zoomIn, zoomOut, fitView } = useReactFlow();

  return (
    <>
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild>
          <button class="control-button">
            <Map size={16} />
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            class="relative flex flex-col bg-gray-800/80 text-gray-100 rounded shadow-lg border border-gray-700 backdrop-blur"
            sideOffset={8}
          >
            <span class="text-sm color-gray-400 mx-2 mt-1">Minimap</span>
            <MiniMap
              pannable
              nodeColor="oklch(0.707 0.022 261.325)"
              maskColor="transparent"
              maskStrokeColor="oklch(0.446 0.03 256.802)"
              maskStrokeWidth={2}
            />
            <Popover.Arrow class="fill-gray-600" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
      <button class="control-button" onClick={() => zoomIn({ duration: 100 })}>
        <Plus size={16} />
      </button>
      <button class="control-button" onClick={() => zoomOut({ duration: 100 })}>
        <Minus size={16} />
      </button>
      <button class="control-button" onClick={() => fitView({ duration: 200 })}>
        <Frame size={16} />
      </button>
    </>
  );
}
