import { PlusOutlined, ReloadOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Card, Popover, Upload, UploadProps,Image, Progress, Space, Radio, RadioChangeEvent, Row, Col, Input, Modal } from 'antd';
import styles from './index.less';
import { useState } from 'react';
import { RcFile, UploadFile } from 'antd/es/upload';
import { debounce } from 'lodash';

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });

// 出性价比策略
const CostStrategy = () => {
  const [value, setValue] = useState();

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  const uploadProps: UploadProps = {
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
        选择品线经理：
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1}>品线经理A</Radio>
          <Radio value={2}>品线经理B</Radio>
          <Radio value={3}>品线经理C</Radio>
        </Radio.Group>
        选择产品开发主管：
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1}>产品开发主管A</Radio>
          <Radio value={2}>产品开发主管B</Radio>
          <Radio value={3}>产品开发主管C</Radio>
        </Radio.Group>
        上传调研报告和询价表：
        <Upload {...uploadProps}>
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </Space>
    </div>
  )
}
// 设计款式
const Design = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([
    // {
    //   uid: '-1',
    //   name: 'image.png',
    //   status: 'done',
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    // }
  ]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  const uploadProps: UploadProps = {
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

  return <div>
    <Space direction='vertical'>
      上传产品设计图：
      <br />
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 1 ? null : uploadButton}
      </Upload>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
      <br />
      上传调研报告和询价表：
      <Upload {...uploadProps}>
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
    </Space>
</div>;
};
// 安排样品&质检测试
const ArrangeSamples = () => {
  const [inputValue, setInputValue] = useState()
  const [isAbandon, setIsAbandon] = useState<number>()
  const [current, setCurrent] = useState<number>()
  const handleInputClick = (index:number) => {
    console.log(inputValue, 'inputValue');
    setCurrent(-1)
    setIsAbandon(-1)
  }
  const handleAbandonClick = (index:number) => {
    setIsAbandon(index);
  }
  const handlePassClick = (index:number) => {

  }

  const inputChange = debounce((e)=>{
    console.log(e.target.value, 'inputChange');
    setInputValue(e.target.value)
  }, 1000)
  const supplierData = [
    {
      name:'供应商A',
      state:'供应商状态正常',
    },
    {
      name:'供应商B',
      state:'供应商状态正常',
    },
    {
      name:'供应商C',
      state:'供应商状态正常',
    },
  ]
  return (
    <div>
      <Space direction='vertical'>
        <Button icon={<ReloadOutlined />} className={styles.customButton} onClick={() => {}}>重新询价</Button>
        {
          supplierData.map((item,index) => {
            return (
              <Card size='small' hoverable headStyle={{padding:'0 10px'}} bodyStyle={{padding:10}} title={item.name} style={{width:500}} extra={<div style={{width:120,display:'flex', justifyContent: 'space-between'}}>
                <Button type='text' danger onClick={() => handleAbandonClick(index)}>放弃</Button>
                <Button type='link'  onClick={() => handlePassClick(index)}>通过</Button>
              </div>}>
              <div style={{display:'flex', justifyContent:'space-between'}}>
                <div style={{ display:'flex', alignItems:'center'}}>
                  <Row style={{width:'100%',height:'100%'}}>
                    <Col flex='70px'>{isAbandon === index ? '放弃原因：' : '当前进度：'}</Col>
                    <Col flex='auto'>{index !== current && index !== isAbandon ? item.state : <Input onChange={inputChange}/>}</Col>
                  </Row>
                </div>
                {
                  index === current || index === isAbandon? (
                    <div>
                      <Button type='primary' style={{marginRight:10}} onClick={() => handleInputClick(index)}>提交</Button>
                      <Button onClick={() => { isAbandon === index && setIsAbandon(-1);setCurrent(-1)}}>取消</Button>
                    </div>
                  ) :(
                    <Button type='link' onClick={() => setCurrent(index)}>编辑</Button>
                  )
                }
                
                
              </div>
            </Card>
            )
          })
        }
        
      </Space>
    </div>
  );
}

const ProcessNode = (props: any) => {
  console.log(props, 'ProcessNodeProps=========');

  const { size = { width: 180, height: 60 }, data } = props;
  const { width, height } = size;
  const { label = '自定义步骤节点', stroke = '#7ed321', fill = '#fff', fontFill, fontSize = 18 } = data;

  const content = () => {
    if (label === '开发做初步策略') {
      return <></>
    }else if(label === '设计款式'){
      return <Design />;
    }else if(label === '安排样品&质检测试'){
      return <ArrangeSamples />;
    }else if(label === '出性价比策略'){
      return <CostStrategy />;
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
          backgroundColor: fill,
          color: fontFill,
          fontSize,
        }}
        bodyStyle={{ width: '100%', height: '100%', padding: 0, display: 'flex' }}
        hoverable
        // onClick={() => {
        //   alert('clicked');
        // }}
      >
        <div className={styles.cardBody}>
          {/* <FilterOutlined className={styles.icon} /> */}
          <span style={{ color: fontFill }}>{label}</span>
        </div>
      </Card>
    </Popover>
  );
};

export default ProcessNode;
