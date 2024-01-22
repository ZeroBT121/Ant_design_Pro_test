import { Button } from 'antd';
import { useState } from 'react';
import { NodeProps } from 'reactflow';

export type CounterData = {
  initialCount?: number;
};

const AddNode: React.FC<NodeProps<CounterData>> = (props) => {
  const [count, setCount] = useState(props.data?.initialCount ?? 0);

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </div>
  );
};

export default AddNode;
