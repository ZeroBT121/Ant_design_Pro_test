import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom';
import { Flowchart } from '@ant-design/flowchart';
import JudgmentNode from './comonents/JudgmentNode';
import ProcessNode from './comonents/ProcessNode';
import CustomTerminalNode from './comonents/CustomTerminalNode';
import { getFlowDate, getFlowDate2 } from './flowData';
import { IFlowchartGraph, NsGraph } from '@ant-design/charts';
import {  IApplication } from '@antv/xflow';
import { Breadcrumb, message } from 'antd';
import styles from './index.less'
import MyDrawerForm from './comonents/MyDrawerForm';
import { HomeOutlined } from '@ant-design/icons';
import { GithubIssueItem } from '../Product';

const createLink = (src) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.className = 'dynamic-link';
  link.href = src;
  document.getElementsByTagName('head')[0].appendChild(link);
};
createLink('https://unpkg.com/antd@4.24.3/dist/antd.css');
createLink('https://unpkg.com/@ant-design/flowchart@1.2.1/dist/index.css');

type AntdFlowPropsType = {
  productInfo: GithubIssueItem;
  handelAntFlowClose: () => void;
}

const AntdFlow:React.FC<AntdFlowPropsType> = (props) => {
  const { handelAntFlowClose, productInfo } = props;
  const [open, setOpen] = useState<boolean>(false);
  // 点击节点的信息
  const [nodeInfo, setNodeInfo] = useState<NsGraph.INodeConfig>();
  // 定位当前活跃的节点
  const [activeNode, setActiveNode] = useState<NsGraph.INodeConfig>();

  const data = getFlowDate2();

  // 找到当前活跃的节点
  const findActiveNode = () => {
    const node = getFlowDate().nodes.find((item) => {
      return item.label === '初步询价'
    })
    setActiveNode(node);
  }

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onRead = async (graph: IFlowchartGraph, app: IApplication) => {
    console.log(graph, app , '==============================');
    // const graph = await app.getGraphInstance()
    // console.log(data );
    graph.on('node:click', ({node}) => {
      const nodeData: NsGraph.INodeConfig = node.getData()
      message.success(`${nodeData.id}节点被点击了`)
      // 被点击了，可以在此处判断点击量那个控件从而弹出抽屉表单。
      showDrawer()
      // 传递当前点击节点信息
      setNodeInfo(nodeData)
    })
  }

  useEffect(()=> {
    findActiveNode()
  },[])
  return (
    <div className={styles.flow}>
      <Breadcrumb>
        <Breadcrumb.Item>
        <HomeOutlined />
          <a onClick={handelAntFlowClose} >产品列表</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          {productInfo?.comments}生命周期流程图
        </Breadcrumb.Item>
      </Breadcrumb>
      <Flowchart
        style={{marginTop: '10px'}}
        data={data}
        // mode='edit'
        mode='scan'
        // isAutoCenter
        onSave={(d) => {
          console.log(d);
        }}
        onReady={onRead}
        toolbarPanelProps={{
          show: false,
          position: {
            top: 0,
            left: 0,
            right: 0,
          },
        }}
        canvasProps={{
          position: {
            top: 0,
            left: activeNode?.x ? -activeNode?.x + 500 : 0,
            right: 0,
            bottom: 0,
          },
          config: {
            translating: {restrict: false},
            interacting: {edgeLabelMovable: false},
            frozen: true,
            grid: 1000000000000, // 可以通过设置网格的number很大去让他移动不了节点
            minimap: {enabled:true},
          }
        }}
        nodePanelProps={{
          show: false,
          defaultActiveKey: ['custom'], // ['custom', 'official']
          registerNode: {
            title: '自定义节点',
            nodes: [
              {
                component: JudgmentNode,
                name: 'JudgmentNode',
                width: 180,
                height: 60,
                label: '自定义判断节点',
              },
              {
                component: ProcessNode,
                name: 'ProcessNode',
                width: 180,
                height: 60,
                label: '自定义步骤节点',
              },
              {
                component: CustomTerminalNode,
                name: 'CustomTerminalNode',
                width: 180,
                height: 60,
                label: '自定义终端节点',
              },
            ],
          },
        }}
        detailPanelProps={{
          show: false,
        }}
        // scaleToolbarPanelProps={{
        //   layout: 'horizontal',
        //   position: {
        //     top: 0,
        //     // left: 0,
        //     right: 0,
        //     // bottom: 0,
        //   },
        // }}
        contextMenuPanelProps={{
          // showOfficial: false,
        }}
      >
      </Flowchart>
      <MyDrawerForm nodeInfo={nodeInfo!!} open={open} onClose={onClose}/>
    </div>
  );
};

export default AntdFlow