import React , { useCallback } from 'react';
import { Handle, Position, useStoreApi } from 'reactflow';
import styles from './index.less';
import { Button, Input } from 'antd';
 
const handleStyle = { left: 10 };

const TextUpdaterNode:React.FC = () => {
  const store = useStoreApi();
  const onChange = useCallback((evt: { target: { value: any; }; }) => {
    console.log(evt.target.value);
    
  }, []);
 
  return (
    <div className={styles.textUpdaterNode}>
      <Handle type="target" position={Position.Top} />
      <div className={styles.inputBox}>
        <Input onChange={onChange}/>
        <Button className={styles.button} type="primary">+</Button>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        // style={handleStyle}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="c"
        style={{top:10}}
      />
    </div>
  );
}

export default TextUpdaterNode
