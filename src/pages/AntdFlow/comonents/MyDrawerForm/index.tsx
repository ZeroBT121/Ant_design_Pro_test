import { NsGraph } from '@ant-design/charts';
import { PlusOutlined } from '@ant-design/icons';
import { DrawerForm, EditableProTable, ProColumns } from '@ant-design/pro-components';
import {
  Card,
  Col,
  Form,
  Input,
  message,
  Modal,
  Row,
  Space,
  Table,
  Tag,
  Upload,
  UploadFile,
  UploadProps,
} from 'antd';
import { ColumnsType } from 'antd/es/table';
import { RcFile } from 'antd/es/upload';
import { useState } from 'react';

type MyDrawerFormPropsType = {
  open: boolean;
  nodeInfo: NsGraph.INodeConfig;
  onClose: () => void;
};

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

type DataSourceType = {
  id: React.Key;
  title?: string;
  readonly?: string;
  decs?: string;
  state?: string;
  created_at?: number;
  update_at?: number;
  children?: DataSourceType[];
};

const defaultData: DataSourceType[] = [
  {
    id: 624748504,
    title: '活动名称一',
    readonly: '活动名称一',
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
    update_at: 1590486176000,
  },
  {
    id: 624691229,
    title: '活动名称二',
    readonly: '活动名称二',
    decs: '这个活动真好玩',
    state: 'closed',
    created_at: 1590481162000,
    update_at: 1590481162000,
  },
];

// 展示筛选关键词的表格。
const SelectKeyword = () => {
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  return <Table columns={columns} dataSource={data} />;
};

// 开发做初步策略
const DevelopStrategy = () => {
  const [activeTabKey1, setActiveTabKey1] = useState<string>('tab1');

  const onTab1Change = (key: string) => {
    setActiveTabKey1(key);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  const tabList = [
    {
      key: 'tab1',
      tab: 'ROI表',
    },
    {
      key: 'tab2',
      tab: '询价表',
    },
  ];

  const contentList: Record<string, React.ReactNode> = {
    tab1: <Table columns={columns} dataSource={data} />,
    tab2: <Table columns={columns} dataSource={data} />,
  };
  return (
    <Card
      style={{ width: '100%' }}
      // title="Card title"
      // extra={<a href="#">More</a>}
      tabList={tabList}
      activeTabKey={activeTabKey1}
      onTabChange={(key) => {
        onTab1Change(key);
      }}
    >
      {contentList[activeTabKey1]}
    </Card>
  );
};

// 初步询价 && 二次询价
const InitialInquiry = () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  const [dataSource, setDataSource] = useState<readonly DataSourceType[]>([]);
  const [position, setPosition] = useState<'top' | 'bottom' | 'hidden'>('bottom');

  const columns: ProColumns<DataSourceType>[] = [
    {
      title: '活动名称',
      dataIndex: 'title',
      tooltip: '只读，使用form.getFieldValue获取不到值',
      formItemProps: (form, { rowIndex }) => {
        return {
          rules: rowIndex > 1 ? [{ required: true, message: '此项为必填项' }] : [],
        };
      },
      // 第一行不允许编辑
      editable: (text, record, index) => {
        return index !== 0;
      },
      width: '15%',
    },
    {
      title: '活动名称二',
      dataIndex: 'readonly',
      tooltip: '只读，使用form.getFieldValue可以获取到值',
      readonly: true,
      width: '15%',
    },
    {
      title: '状态',
      key: 'state',
      dataIndex: 'state',
      valueType: 'select',
      valueEnum: {
        all: { text: '全部', status: 'Default' },
        open: {
          text: '未解决',
          status: 'Error',
        },
        closed: {
          text: '已解决',
          status: 'Success',
        },
      },
    },
    {
      title: '描述',
      dataIndex: 'decs',
      fieldProps: (form, { rowKey, rowIndex }) => {
        if (form.getFieldValue([rowKey || '', 'title']) === '不好玩') {
          return {
            disabled: true,
          };
        }
        if (rowIndex > 9) {
          return {
            disabled: true,
          };
        }
        return {};
      },
    },
    {
      title: '活动时间',
      dataIndex: 'created_at',
      valueType: 'date',
    },
    {
      title: '操作',
      valueType: 'option',
      width: 200,
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          编辑
        </a>,
        <a
          key="delete"
          onClick={() => {
            setDataSource(dataSource.filter((item) => item.id !== record.id));
          }}
        >
          删除
        </a>,
      ],
    },
  ];
  return (
    <>
      <EditableProTable<DataSourceType>
        rowKey="id"
        headerTitle="供应商表格"
        maxLength={5}
        scroll={{
          x: 960,
        }}
        recordCreatorProps={{
          position: 'bottom',
          record: () => ({ id: (Math.random() * 1000000).toFixed(0) }),
        }}
        // recordCreatorProps={
        //   position !== 'hidden'
        //     ? {
        //         position: position as 'top',
        //         record: () => ({ id: (Math.random() * 1000000).toFixed(0) }),
        //       }
        //     : false
        // }
        loading={false}
        // toolBarRender={() => [
        //   <ProFormRadio.Group
        //     key="render"
        //     fieldProps={{
        //       value: position,
        //       onChange: (e) => setPosition(e.target.value),
        //     }}
        //     options={[
        //       {
        //         label: '添加到顶部',
        //         value: 'top',
        //       },
        //       {
        //         label: '添加到底部',
        //         value: 'bottom',
        //       },
        //       {
        //         label: '隐藏',
        //         value: 'hidden',
        //       },
        //     ]}
        //   />,
        // ]}
        columns={columns}
        request={async () => ({
          data: defaultData,
          total: 3,
          success: true,
        })}
        value={dataSource}
        onChange={setDataSource}
        editable={{
          type: 'multiple',
          editableKeys,
          onSave: async (rowKey, data, row) => {
            console.log(rowKey, data, row);
            await waitTime(2000);
          },
          onChange: setEditableRowKeys,
        }}
      />
    </>
  );
};

// 主图测试
const PictureTest = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-xxx',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-5',
      name: 'image.png',
      status: 'error',
    },
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
  return (
    <>
      <Space direction="vertical">
        上传产品主图和5张竞品主图：
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          multiple
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length >= 6 ? null : uploadButton}
        </Upload>
        <Row style={{ width: 666 }} gutter={12}>
          <Col span={4}>
            <Input width={106} placeholder="该主图销量" />
          </Col>
          <Col span={4}>
            <Input width={106} placeholder="该主图销量" />
          </Col>
          <Col span={4}>
            <Input width={106} placeholder="该主图销量" />
          </Col>
          <Col span={4}>
            <Input width={106} placeholder="该主图销量" />
          </Col>
          <Col span={4}>
            <Input width={106} placeholder="该主图销量" />
          </Col>
          <Col span={4}>
            <Input width={106} placeholder="该主图销量" />
          </Col>
        </Row>
      </Space>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  );
};

export default (props: MyDrawerFormPropsType) => {
  const { open, nodeInfo, onClose } = props;
  const [form] = Form.useForm<{ name: string; company: string }>();

  const handleOnClose = () => {
    onClose && onClose();
  };

  // 抽屉内容：
  const drawerContent = () => {
    if (nodeInfo?.label === '主图测试') {
      return <PictureTest />;
    } else if (nodeInfo?.label === '开发做初步策略') {
      return <DevelopStrategy />;
    } else if (['初步询价', '二次询价'].includes(nodeInfo?.label!!)) {
      return <InitialInquiry />;
    }
    return <SelectKeyword />;
  };

  return (
    <DrawerForm
      title={nodeInfo?.label}
      open={open}
      onOpenChange={(open) => {
        if (!open) {
          form.resetFields();
        }
      }}
      resize={{
        onResize() {
          console.log('resize!');
        },
        maxWidth: window.innerWidth * 0.8,
        minWidth: 300,
      }}
      form={form}
      // trigger={
      //   <Button type="primary">
      //     <PlusOutlined />
      //     新建表单
      //   </Button>
      // }
      autoFocusFirstInput
      drawerProps={{
        destroyOnClose: true,
        onClose: handleOnClose,
        placement: 'bottom',
        // getContainer:false,
      }}
      submitTimeout={2000}
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values.name);
        message.success('提交成功');
        // 不返回不会关闭弹框
        return true;
      }}
    >
      {drawerContent()}
    </DrawerForm>
  );
};
