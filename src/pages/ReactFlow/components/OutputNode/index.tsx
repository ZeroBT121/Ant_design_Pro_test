import TextArea from 'antd/es/input/TextArea'
import React from 'react'
import { Handle, Position, useStore } from 'reactflow';

const nodesLengthSelector = (state:any) =>
  Array.from(state.nodeInternals.values()).length || 0;

const OutputNode:React.FC = (props) => {
  console.log(props, "OutputNode=====");
  const nodesLength = useStore(nodesLengthSelector);
  return (
    <div>
      <Handle type="target" position={Position.Top} />
      <TextArea rows={4} value={nodesLength}/>
    </div>
  )
}

export default OutputNode