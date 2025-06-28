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
import Bar from "./components/bar";
import About from "./components/nodes/about";
import Experience from "./components/nodes/experience";
import DigitalImaging from "./components/nodes/digital-imaging";
import OldTVEffect from "./components/tv-effect";
import AboutSite from "./components/nodes/about-site";
import Clock from "./components/nodes/clock";
import Certifications from "./components/nodes/certifications";
import FeProject from "./components/nodes/fe-project";
import ThreeD from "./components/nodes/3d";

const nodes: TemplateNode[] = [
  {
    position: { x: 0, y: 0 },
    title: "About",
    children: <About />,
  },
  {
    position: { x: 332, y: -467 },
    title: "(～﹃～)~zZ",
    children: <Clock />,
  },
  {
    position: { x: -397, y: -5 },
    title: "package.json",
    children: <AboutSite />,
  },
  {
    position: { x: -373, y: 425 },
    title: "Experience",
    children: <Experience />,
  },
  {
    position: { x: -278, y: -470 },
    title: "Certifications",
    children: <Certifications />,
  },
  {
    position: { x: 690, y: -272 },
    title: "Digital Imaging",
    children: <DigitalImaging />,
  },
  {
    position: { x: 193, y: 424 },
    title: "Front-End Projects",
    children: <FeProject />,
  },
  {
    position: { x: 738, y: 192 },
    title: "Random 3D Works",
    children: <ThreeD />,
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
        proOptions={{ hideAttribution: true }}
        colorMode="system"
        className="transition-all"
        zoomOnScroll={false}
        onPaneScroll={onPaneScroll}
      />
      <Bar />
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
