import { UploadOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Checkbox,
  Col,
  Image,
  Input,
  Popover,
  Progress,
  Radio,
  RadioChangeEvent,
  Row,
  Space,
  Upload,
  UploadProps,
} from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import React, { useEffect, useRef, useState } from 'react';
import styles from './index.less';

const familyNames = ['赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许'];
const givenNamesMale = ['伟', '芳', '娜', '敏', '静', '强', '磊', '军', '杰', '涛', '娟', '明', '超', '艳', '勇', '艳', '霞', '敏', '静', '丽'];
const givenNamesFemale = ['华', '明', '芳', '秀', '英', '静', '芬', '娟', '强', '军', '洁', '磊', '勇', '丽', '玲', '秀英', '娜', '倩', '琳'];

function getRandomName() {
  const familyName = familyNames[Math.floor(Math.random() * familyNames.length)];
  const givenName = Math.random() > 0.5 ? givenNamesMale[Math.floor(Math.random() * givenNamesMale.length)] : givenNamesFemale[Math.floor(Math.random() * givenNamesFemale.length)];
  return familyName + givenName;
}

// 主图测试
const VoteComponent = () => {
  const [visible, setVisible] = useState(false);
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>([]);

  const images = [
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  ];

  const topRowImages = images.slice(0, 3);
  const bottomRowImages = images.slice(3);

  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
    if (checkedValues.length > 1) {
      setCheckedList(checkedValues.slice(-1));
    } else {
      setCheckedList(checkedValues);
    }
  };

  return (
    <div>
      为你最喜欢的产品投票:
      <div style={{ width: 500, marginTop: 10 }}>
        <Checkbox.Group style={{ width: '100%' }} value={checkedList} onChange={onChange}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Row gutter={[4, 4]}>
                {topRowImages.map((image, index) => (
                  <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Image
                      preview={{ visible: false }}
                      // width={100}
                      src={image}
                      onClick={() => setVisible(true)}
                    />
                    <Checkbox style={{ width: '100%', marginTop: 10 }} value={index + 1}>
                      产品名称{index + 1}
                    </Checkbox>
                    <Row>
                      <Col flex="30px"> 5票 </Col>
                      <Col flex="auto">
                        <Progress
                          strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                          }}
                          percent={Math.floor(Math.random() * 100)}
                        />
                      </Col>
                    </Row>
                    <div style={{color:'#40a9ff'}}>{
                      Array(5).fill('').map(() => getRandomName() + ', ')
                    }</div>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col span={24}>
              <Row gutter={[4, 4]}>
                {bottomRowImages.map((image, index) => (
                  <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Image
                      preview={{ visible: false }}
                      // width={100}
                      src={image}
                      onClick={() => setVisible(true)}
                    />
                    <Checkbox style={{ width: '100%', marginTop: 10 }} value={index + 4}>
                      产品名称{index + 4}
                    </Checkbox>
                    <Row>
                      <Col flex="30px"> 5票 </Col>
                      <Col flex="auto">
                        <Progress
                          strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                          }}
                          percent={Math.floor(Math.random() * 100)}
                        />
                      </Col>
                    </Row>
                    <div style={{color:'#40a9ff'}}>{
                      Array(5).fill('').map(() => getRandomName() + ', ')
                    }</div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Checkbox.Group>
      </div>
      <Button style={{ float: 'right', top: 20 }} type="primary">
        确定投票
      </Button>
      <div style={{ height: 52 }}></div>
      <div style={{ display: 'none' }}>
        <Image.PreviewGroup preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}>
          {images.map((item, index) => {
            return <Image key={index} src={item} />;
          })}
        </Image.PreviewGroup>
      </div>
    </div>
  );
};

// 初步询价节点、二次询价
const InitialOfferNode = () => {
  // 供应商列表
  const [supplierList, setSupplierList] = useState<any>([
    {
      id:1,
      name: '供应商A',
      info:''
    },
    {
      id:2,
      name: '供应商B',
      info:''
    },
    {
      id:3,
      name: '供应商C',
      info:''
    },
  ]);

  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
  };

  const PopoverContent = () => {
    const [inputVlaue, setInputVlaue] = useState('')
    const handleChangeInput = (e:any) => {
      setInputVlaue(e)
    }
    const handleClick = () => {
      
    }
    return <Space direction='vertical'>
     放弃原因：
     <Input onChange={handleChangeInput}/>
     <Button type='primary' onClick={handleClick}>提交</Button>
    </Space>
  }

  return (
    <div className={styles.initialOfferNode}>
      <Space direction="vertical">
        选择供应链：
        <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
          <Row>
            {
              supplierList.map((item:any, index:number) => {
                return (
                  <Col span={12}>
                    <Checkbox key={item.id} value={item.id}>{item.name}</Checkbox>
                  </Col>
                )
              })
            }
          </Row>
        </Checkbox.Group>
        <div>
        <Popover content={<PopoverContent />} trigger="click">
           <Button danger type='dashed'>全部放弃</Button>
        </Popover>
         
          &nbsp;&nbsp;&nbsp;
          <Button type='primary'>提交</Button>
        </div>
      </Space>
    </div>
  );
};
// 款式型产品
const ProductNode = () => {
  const [value, setValue] = useState();

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className={styles.productNode}>
      <Space direction="vertical">
        策略是否可行:
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1} style={{ color: 'green' }}>
            通过
          </Radio>
          <Radio value={2} style={{ color: 'red' }}>
            放弃
          </Radio>
        </Radio.Group>
      </Space>
    </div>
  );
};

const JudgmentNode = (props: any) => {
  console.log(props, 'JudgmentNodeProps=========');

  const { size = { width: 180, height: 60 }, data } = props;
  const { width, height } = size;
  const { label = '自定义判断节点', stroke = '#f5a623', fill = '#fff', fontFill, fontSize = 18 } = data;

  const content = () => {
    if (label === '主图测试') {
      return <VoteComponent />;
    } else if (['款式型产品', '产品讨论会'].includes(label)) {
      return <ProductNode />;
    } else if (['初步询价', '二次询价'].includes(label)) {
      return <InitialOfferNode />;
    }
  };

  return (
    <Popover placement='right' content={content} title={label} zIndex={99}>
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
        bodyStyle={{
          width: '100%',
          height: '100%',
          padding: 0,
          display: 'flex',
          borderRadius: 20,
          position: 'relative',
        }}
        hoverable
        // onClick={() => {
        //   alert('clicked');
        // }}
      >
        <div className={styles.cardBody}>
          {/* <FilterOutlined className={styles.icon} /> */}
          <span style={{ position: 'absolute', zIndex: 9, fontSize: fontSize, color: fontFill }}>
            {label}
          </span>
          <svg
            style={{ position: 'absolute' }}
            width="100%"
            height="100%"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              points={`0,${height / 2} ${width / 2},0 ${width},${height / 2} ${
                width / 2
              },${height}`}
              style={{ fill: fill, stroke: stroke, strokeWidth: 2 }}
            />
          </svg>
        </div>
      </Card>
    </Popover>
  );
};

export default React.memo(JudgmentNode);
