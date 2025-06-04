import { type ReactNode } from "preact/compat";
import type { Node as N } from "@xyflow/react";

export interface Node extends N {
  data: {
    title: string;
    children: ReactNode;
  };
}

export type TemplateNode = {
  position: {
    x: number;
    y: number;
  };
  title: string;
  children: ReactNode;
};
