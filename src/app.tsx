import "@xyflow/react/dist/base.css";
import "./app.css";
import {
  ReactFlow,
  type NodeTypes,
  applyNodeChanges,
  type NodeChange,
  useReactFlow,
  ReactFlowProvider,
} from "@xyflow/react";
import NodeComponent from "./components/node";
import { useState, useCallback } from "preact/hooks";
import type { Node, TemplateNode } from "./types";
import About from "./components/nodes/about";
import Experience from "./components/nodes/experience";
import DigitalImaging from "./components/nodes/digital-imaging";
import OldTVEffect from "./components/tv-effect";
import AboutSite from "./components/nodes/about-site";
import Clock from "./components/nodes/clock";

const nodes: TemplateNode[] = [
  {
    position: { x: 0, y: 0 },
    title: "About",
    children: <About />,
  },
  {
    position: { x: 552, y: -304 },
    title: "",
    children: <Clock />,
  },
  {
    position: { x: -306, y: 164 },
    title: "",
    children: <AboutSite />,
  },
  {
    position: { x: -474, y: -154 },
    title: "Experience",
    children: <Experience />,
  },
  {
    position: { x: 584, y: 60 },
    title: "Digital Imaging",
    children: <DigitalImaging />,
  },
];

const initialNodes: Node[] = nodes.map((node, i) => ({
  ...node,
  id: i.toString(),
  dragHandle: ".drag-handle",
  selectable: false,
  data: {
    title: node.title,
    children: node.children,
  },
}));

const nodeTypes: NodeTypes = {
  default: NodeComponent as any,
};

export function Flow() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const { setViewport, getViewport } = useReactFlow();

  const onNodesChange = useCallback(
    (changes: NodeChange<Node>[]) => {
      setNodes((nds) => applyNodeChanges(changes, nds));
    },
    [setNodes]
  );

  const onPaneScroll = useCallback(
    (event: WheelEvent) => {
      event.preventDefault();
      const { zoom, x, y } = getViewport();
      const delta = event.deltaY < 0 ? 0.2 : -0.2;
      const nextZoom = Math.max(0.2, Math.min(2, zoom + delta));
      setViewport({ x, y, zoom: nextZoom }, { duration: 100 });
    },
    [getViewport, setViewport]
  );

  return (
    <div class="h-svh w-screen relative">
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{
          nodes: [{ id: "0" }],
        }}
        maxZoom={1}
        proOptions={{ hideAttribution: true }}
        colorMode="system"
        className="transition-all"
        zoomOnScroll={false}
        onPaneScroll={onPaneScroll}
      />
    </div>
  );
}

export function App() {
  return (
    <ReactFlowProvider>
      <OldTVEffect>
        <Flow />
      </OldTVEffect>
    </ReactFlowProvider>
  );
}
