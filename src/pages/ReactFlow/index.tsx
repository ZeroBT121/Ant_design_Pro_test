import { useCallback, useMemo, useState } from 'react';
import ReactFlow, { Background, Controls, applyEdgeChanges, applyNodeChanges, addEdge, NodeChange, EdgeChange, Connection, Edge } from 'reactflow';
import 'reactflow/dist/style.css';
import TextUpdaterNode from './components/TextUpdataNode';
import OutputNode from './components/OutputNode';
import AddNode from './components/AddNode';

const rfStyle = {
  backgroundColor: '#B8CEFF',
};

const initialNodes = [
  { id: 'node-1', type: 'textUpdater', position: { x: 0, y: 0 }, data: { value: 123 } },
  { id: 'node-4', type: 'outputNode', position: { x: 200, y: 100 }, data: { } },
  { id: 'node-5', type: 'addNode', position: { x: 400, y: 0 }, data: { initialCount: 123 } },
  {
    id: 'node-2',
    type: 'output',
    targetPosition: 'top',
    position: { x: 0, y: 200 },
    data: { label: 'node 2' },
  },
  {
    id: 'node-3',
    type: 'output',
    targetPosition: 'top',
    position: { x: 200, y: 200 },
    data: { label: 'node 3' },
  },
];

const initialEdges = [
  { id: 'edge-1', source: 'node-1', target: 'node-2', sourceHandle: 'a' },
  { id: 'edge-2', source: 'node-1', target: 'node-3', sourceHandle: 'b' },
  { id: 'edge-3', source: 'node-1', target: 'node-4', sourceHandle: 'c' },
];
// const initialEdges: any[] | (() => any[]) = [];

// const nodeTypes = useMemo(() => ({ textUpdater: TextUpdaterNode, outputNode: OutputNode }), []);
const nodeTypes = { textUpdater: TextUpdaterNode, outputNode: OutputNode, addNode: AddNode };

const ReactFlowApp = () => {

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      setNodes((nds) => applyNodeChanges(changes, nds))
      console.log(changes, "onNodesChange=====");
    },
    []
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => {
      setEdges((eds) => applyEdgeChanges(changes, eds))
      console.log(changes, "onEdgesChange=====");
    },
    []
  );
  const onConnect = useCallback((params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)), []);

  return (
    <div style={{width:'100%',height:700}}>
      <ReactFlow 
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        style={rfStyle}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default ReactFlowApp;
