import type { NodeProps } from "@xyflow/react";
import type { Node } from "../types";

export default function NodeComponent(props: NodeProps<Node>) {
  return (
    <>
      <div class="bg-transparent backdrop-blur border border-gray-600 rounded-lg hover:border-blue shadow shadow-black transition">
        <div class="drag-handle cursor-grab relative border-gray-600 flex justify-between gap-2 px-3 py-1">
          <div class="flex gap-2">
            <span class="text-sm">{props.data.title}</span>
          </div>
          <div class="flex items-center gap-1">
            <div class="bg-green w-3 rounded-full aspect-square"></div>
            <div class="bg-yellow w-3 rounded-full aspect-square"></div>
            <div class="bg-red w-3 rounded-full aspect-square"></div>
          </div>
        </div>
        <div class="relative rounded-lg overflow-hidden border-t border-gray-600">
          {props.data.children}
        </div>
        <div class="absolute -bottom-6 right-0 space-x-2 font-mono text-xs text-gray-600">
          <span>{props.positionAbsoluteX.toFixed(2)}</span>
          <span>{props.positionAbsoluteY.toFixed(2)}</span>
        </div>
      </div>
    </>
  );
}
