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
import Background from "./components/background";
import NodeComponent from "./components/node";
import { useState, useCallback } from "preact/hooks";
import type { Node, TemplateNode } from "./types";
import Loading from "./components/loading";
import Bar from "./components/bar";
import About from "./components/nodes/about";
import Experience from "./components/nodes/experience";
import DigitalImaging from "./components/nodes/digital-imaging";
import AboutSite from "./components/nodes/about-site";
import Clock from "./components/nodes/clock";
import Certifications from "./components/nodes/certifications";
import FeProject from "./components/nodes/fe-project";
import ThreeD from "./components/nodes/3d";
import UiProject from "./components/nodes/ui-project";

const nodes: TemplateNode[] = [
  {
    position: { x: 0, y: 0 },
    title: "About",
    children: <About />,
  },
  {
    position: { x: 360, y: -411 },
    title: "(～﹃～)~zZ",
    children: <Clock />,
  },
  {
    position: { x: 79, y: -441 },
    title: "package.json",
    children: <AboutSite />,
  },
  {
    position: { x: 51, y: 381 },
    title: "Experience",
    children: <Experience />,
  },
  {
    position: { x: -402, y: -390 },
    title: "Certifications",
    children: <Certifications />,
  },
  {
    position: { x: 648, y: -377 },
    title: "Digital Art",
    children: <DigitalImaging />,
  },
  {
    position: { x: -479, y: 40 },
    title: "Front-End Projects",
    children: <FeProject />,
  },
  {
    position: { x: 560, y: 119 },
    title: "Random 3D Works",
    children: <ThreeD />,
  },
  {
    position: { x: -413, y: 269 },
    title: "UI Design",
    children: <UiProject />,
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
  const { zoomIn, zoomOut } = useReactFlow();

  const onNodesChange = useCallback(
    (changes: NodeChange<Node>[]) => {
      setNodes((nds) => applyNodeChanges(changes, nds));
    },
    [setNodes]
  );

  const onPaneScroll = useCallback(
    (event: WheelEvent) => {
      event.preventDefault();
      if (event.deltaY < 0) {
        zoomIn({ duration: 100 });
      } else {
        zoomOut({ duration: 100 });
      }
    },
    [zoomIn, zoomOut]
  );

  return (
    <div class="h-svh w-screen relative">
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{
          maxZoom: 0.5,
          nodes: [{ id: "0" }],
        }}
        proOptions={{ hideAttribution: true }}
        colorMode="system"
        className="transition-all"
        zoomOnScroll={false}
        onPaneScroll={onPaneScroll}
      />
      <Bar />
      <Loading />
      <Background />
    </div>
  );
}

export function App() {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}
