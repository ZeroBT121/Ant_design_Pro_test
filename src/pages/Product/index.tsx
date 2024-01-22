import { EllipsisOutlined, PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns, ProForm } from '@ant-design/pro-components';
import { ModalForm, ProFormDatePicker, ProFormSelect, ProFormText, ProFormTextArea, ProTable, TableDropdown } from '@ant-design/pro-components';
import { Button, Dropdown, Space, Tag } from 'antd';
import { useCallback, useRef, useState } from 'react';
import request from 'umi-request';
import AntdFlow from '../AntdFlow';
import styles from './index.less'
import { FormattedMessage } from '@umijs/max';

export const waitTimePromise = async (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

type LayoutType = Parameters<typeof ProForm>[0]['layout'];
const LAYOUT_TYPE_HORIZONTAL = 'horizontal';

export const waitTime = async (time: number = 100) => {
  await waitTimePromise(time);
};

export type GithubIssueItem = {
  url: string;
  id: number;
  number: number;
  title: string;
  labels: {
    name: string;
    color: string;
  }[];
  state: string;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at?: string;
};

const dataSource = [
  {
    id:1,
    title: '关键词1',
    newOrOldMarket: 'new',
    styleType: 'success',
    assignedPersonnel: '产品专员',
    created_at: '2023-11-17',
    createPerson: '产品主管',
    endTime:'2023-12-17',
    remark:'记得搞'
  },
  {
    id:2,
    title: '关键词1',
    newOrOldMarket: 'new',
    styleType: 'success',
    assignedPersonnel: '产品专员',
    created_at: '2023-11-17',
    createPerson: '产品主管',
    endTime:'2023-12-17',
    remark:'记得搞'
  },
  {
    id:3,
    title: '关键词1',
    newOrOldMarket: 'new',
    styleType: 'success',
    assignedPersonnel: '产品专员',
    created_at: '2023-11-17',
    createPerson: '产品主管',
    endTime:'2023-12-17',
    remark:'记得搞'
  },

]

export default () => {
  const actionRef = useRef<ActionType>();
  // 显示流程图
  const [showFlow, setShowFlow] = useState(false)
  // 流程图数据信息
  const [flowData, setFlowData] = useState<GithubIssueItem>()

  const [createModalOpen, handleModalOpen] = useState<boolean>(false);

  const [formLayoutType, setFormLayoutType] = useState<LayoutType>(
    LAYOUT_TYPE_HORIZONTAL,
  );

  const formItemLayout =
    formLayoutType === LAYOUT_TYPE_HORIZONTAL
      ? {
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        }
      : null;

  const columns: ProColumns<GithubIssueItem>[] = [
    {
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: '关键词名称',
      dataIndex: 'title',
      copyable: true,
      ellipsis: true,
      tip: '标题过长会自动收缩',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '此项为必填项',
          },
        ],
      },
      render(value, record, index){
        return <a onClick={() => handleProductClick(record)}>关键词{index+1}</a>;
      }
    },
    {
      disable: true,
      title: '新旧市场',
      dataIndex: 'newOrOldMarket',
      filters: true,
      onFilter: true,
      ellipsis: true,
      valueType: 'select',
      valueEnum: {
        new: {
          text: '新市场',
          status: 'Success',
        },
        old: {
          text: '旧市场',
          status: 'Error',
        },
        // all: { text: '超长'.repeat(50) },
        // open: {
        //   text: '未解决',
        //   status: 'Error',
        // },
        // closed: {
        //   text: '已解决',
        //   status: 'Success',
        //   disabled: true,
        // },
        // processing: {
        //   text: '解决中',
        //   status: 'Processing',
        // },
      },
    },
    {
      // disable: true,
      title: '款式类型',
      dataIndex: 'styleType',
      search: false,
      renderFormItem: (_, { defaultRender }) => {
        return defaultRender(_);
      },
      // render: (_, record) => (
      //   <Space>
      //     {record.labels.map(({ name, color }) => (
      //       <Tag color={color} key={name}>
      //         {name}
      //       </Tag>
      //     ))}
      //   </Space>
      // ),
    },
    {
      // disable: true,
      title: '分配人员',
      dataIndex: 'assignedPersonnel',
      // search: false,
      renderFormItem: (_, { defaultRender }) => {
        return defaultRender(_);
      },
      // render: (_, record) => (
      //   <Space>
      //     {record.labels.map(({ name, color }) => (
      //       <Tag color={color} key={name}>
      //         {name}
      //       </Tag>
      //     ))}
      //   </Space>
      // ),
    },
    {
      title: '创建时间',
      key: 'showTime',
      dataIndex: 'created_at',
      valueType: 'date',
      sorter: true,
      hideInSearch: true,
    },
    // {
    //   title: '创建时间',
    //   dataIndex: 'created_at',
    //   valueType: 'dateRange',
    //   hideInTable: true,
    //   search: {
    //     transform: (value) => {
    //       return {
    //         startTime: value[0],
    //         endTime: value[1],
    //       };
    //     },
    //   },
    // },
    {
      title: '创建人',
      key: 'createPerson',
      dataIndex: 'createPerson',
      sorter: true,
      hideInSearch: true,
    },
    {
      title: '开发截止时间',
      key: 'endTime',
      dataIndex: 'endTime',
      valueType: 'date',
      sorter: true,
      hideInSearch: true,
    },
    {
      title: '备注',
      key: 'remark',
      dataIndex: 'remark',
      sorter: false,
      hideInSearch: true,
    },
    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          编辑
        </a>,
        // <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
        //   查看
        // </a>,
        <Button danger type='text'>删除</Button>
        // <TableDropdown
        //   key="actionGroup"
        //   onSelect={() => action?.reload()}
        //   menus={[
        //     { key: 'copy', name: '复制' },
        //     { key: 'delete', name: '删除' },
        //   ]}
        // />,
      ],
    },
  ];

  const handleProductClick = (record:GithubIssueItem) => {
    setShowFlow(true);
    setFlowData(record)
  }
  const handelAntFlowClose = useCallback(
    () => {
      setShowFlow(false);
    },
    [],
  )
  
  return (
    <div className={styles.product}>
      <div className={styles.table} style={{zIndex: showFlow ? -1 : 1}}>
      {/* <div className={styles.table} style={{zIndex: -1}}> */}
        <ProTable<GithubIssueItem>
          columns={columns}
          actionRef={actionRef}
          cardBordered
          request={async (params, sort, filter) => {
            console.log(sort, filter);
            await waitTime(2000);
            return {
              data: dataSource,
              success: true,
              total: 5,
            }
            // return request<{
            //   data: GithubIssueItem[];
            // }>('https://proapi.azurewebsites.net/github/issues', {
            //   params,
            // });
          }}
          editable={{
            type: 'multiple',
          }}
          columnsState={{
            persistenceKey: 'pro-table-singe-demos',
            persistenceType: 'localStorage',
            onChange(value) {
              console.log('value: ', value);
            },
          }}
          rowKey="id"
          search={{
            labelWidth: 'auto',
          }}
          options={{
            setting: {
              listsHeight: 400,
            },
          }}
          form={{
            // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
            syncToUrl: (values, type) => {
              if (type === 'get') {
                return {
                  ...values,
                  created_at: [values.startTime, values.endTime],
                };
              }
              return values;
            },
          }}
          pagination={{
            pageSize: 5,
            onChange: (page) => console.log(page),
          }}
          dateFormatter="string"
          headerTitle="关键词列表"
          toolBarRender={() => [
            <Button
              key="button"
              icon={<PlusOutlined />}
              onClick={() => {
                // actionRef.current?.reload();
                handleModalOpen(true);
              }}
              type="primary"
            >
              新建
            </Button>,
            // <Dropdown
            //   key="menu"
            //   menu={{
            //     items: [
            //       {
            //         label: '1st item',
            //         key: '1',
            //       },
            //       {
            //         label: '2nd item',
            //         key: '1',
            //       },
            //       {
            //         label: '3rd item',
            //         key: '1',
            //       },
            //     ],
            //   }}
            // >
            //   <Button>
            //     <EllipsisOutlined />
            //   </Button>
            // </Dropdown>,
          ]}
        />
        <ModalForm
          title={'新增关键词'}
          {...formItemLayout}
          layout={formLayoutType}
          width={600}
          open={createModalOpen}
          onOpenChange={handleModalOpen}
          onFinish={async (value) => {
            handleModalOpen(false);
            // const success = await handleAdd(value as API.RuleListItem);
            // if (success) {
            //   handleModalOpen(false);
            //   if (actionRef.current) {
            //     actionRef.current.reload();
            //   }
            // }
          }}
        >
          <ProFormText 
            name="keywordName" 
            label="关键词名称"  
            placeholder="请输入关键词名称"
            rules={[{ required: true, message: '请输入关键词名称' }]}
            // fieldProps={inputProps}
          />
          <ProFormSelect
            name="newMarket"
            label="新旧市场"
            valueEnum={{
              new: '新市场',
              old: '旧市场',
            }}
            fieldProps={{
              optionItemRender(item:{label:string,value:string}) {
                return item.label + ' - ' + item.value;
              },
            }}
            placeholder="请选择新旧市场"
            rules={[{ required: true, message: '请选择新旧市场' }]}
          />
          <ProFormDatePicker name="date" label="开发截止时间" />
          <ProFormSelect
            name="person"
            label="分配人员"
            valueEnum={{
              A: '产品专员A',
              B: '产品专员B',
            }}
            fieldProps={{
              optionItemRender(item:{label:string,value:string}) {
                return item.label + ' - ' + item.value;
              },
            }}
            placeholder="请选择产品专员"
            rules={[{ required: true, message: '请选择产品专员' }]}
          />
          <ProFormSelect
            name="type"
            label="款式类型"
            valueEnum={{
              A: '款式A',
              B: '款式B',
            }}
            fieldProps={{
              optionItemRender(item:{label:string,value:string}) {
                return item.label + ' - ' + item.value;
              },
            }}
            placeholder="请选择款式"
            rules={[{ required: true, message: '请选择款式' }]}
          />
          <ProFormTextArea
            name="mark"
            label="备注"
            // placeholder="请输入名称"
            // fieldProps={inputTextAreaProps}
          />
      </ModalForm>
      </div>
      <div className={styles.flow} style={{zIndex: showFlow ? 1 : -1}}>
      {/* <div className={styles.flow} style={{zIndex: 99}}> */}
        <AntdFlow handelAntFlowClose={handelAntFlowClose} productInfo={flowData!!}/>
      </div>
    </div>
  );
};