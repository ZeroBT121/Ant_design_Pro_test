import { Button, Card, Checkbox, Col, Popover, Row, Space, Upload, UploadProps } from 'antd';
import styles from './index.less';
import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { CheckboxValueType } from 'antd/es/checkbox/Group';

const CustomTerminalNode = (props: any) => {
  console.log(props, 'CustomTerminalNodeProps=========');

  const { size = { width: 180, height: 60 }, data } = props;
  const { width, height } = size;
  const { label = '自定义终端节点', stroke = '#31d0c6', fill = '#fff', fontFill, fontSize = 18 } = data;

  // 开发做初步策略节点
const StartPlan = () => {
  const [value, setValue] = useState();

  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
  };
  const props: UploadProps = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange({ file, fileList }) {
      if (file.status !== 'uploading') {
        console.log(file, fileList);
      }
    },
    progress: {
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068',
      },
      strokeWidth: 3,
      format: percent => percent && `${parseFloat(percent.toFixed(2))}%`,
    },
    defaultFileList: [
      {
        uid: '1',
        name: 'xxx.png',
        status: 'done',
        response: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/xxx.png',
      },
      {
        uid: '2',
        name: 'yyy.png',
        status: 'done',
        url: 'http://www.baidu.com/yyy.png',
      },
      {
        uid: '3',
        name: 'zzz.png',
        status: 'error',
        response: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/zzz.png',
      },
    ],
  };
  return (
    <div>
      <Space direction='vertical'>
        选择供应链开发：
        <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
          <Row>
            <Col span={8}>
              <Checkbox value="A">供应链开发A</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="B">供应链开发B</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="C">供应链开发C</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="D">供应链开发D</Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="E">供应链开发E</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
        <br />
        文件上传时间：
        <br />
        上传ROI表和询价表：
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </Space>
    </div>
  );
};
  const content = () => {
    if (label === '开发做初步策略') {
      return <StartPlan />
    }
  }

  return (
    <Popover placement='right' content={content} title={label}>
      <Card
        className={styles.card}
        style={{
          width,
          height,
          borderColor: stroke,
          borderWidth: 2,
          borderRadius: 70,
          backgroundColor: fill,
          color: fontFill,
          fontSize,
        }}
        bodyStyle={{ width: '100%', height: '100%', padding: 0, display: 'flex', borderRadius:20 }}
        hoverable
        // onClick={() => {
        //   alert('clicked');
        // }}
      >
        <div className={styles.cardBody}>
          {/* <FilterOutlined className={styles.icon} /> */}
          <span style={{fontSize:fontSize, color: fontFill }}>{label}</span>
        </div>
      </Card>
    </Popover>
  );
};

export default React.memo(CustomTerminalNode);
