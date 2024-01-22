import { PlusOutlined } from '@ant-design/icons'
import { ActionType, ModalForm, PageContainer, ProColumns, ProFormText, ProFormTextArea, ProTable } from '@ant-design/pro-components'
import { Button } from 'antd'
import React, { useRef, useState } from 'react'

export type RuleListType = {
  name: string
  description: string
  status: string
}

const columns: ProColumns<RuleListType>[] = [
  {
    title: '规则名称',
    dataIndex: 'name',
    width: 200,
    order: 2
  },
  {
    title: '规则描述',
    dataIndex: 'description',
    width: 200,
    hideInForm: true,
    search: false,
  },
  {
    title: '规则状态',
    dataIndex: 'status',
    width: 200,
    order: 1,
    valueType: 'select',
    valueEnum: {open: {
      text: '启用',
      status: 'Error',
    },
    closed: {
      text: '关闭',
      status: 'Success',
    },}
  },
]

const RuleList = () => {
  const actionRef = useRef<ActionType>();
  const [createModalOpen, handleModalOpen] = useState<boolean>(false);

  return (
    <PageContainer 
      title={false}
      // content="欢迎使用 ProLayout 组件"
      tabList={[
        {
          tab: '基本信息',
          key: 'base',
        },
        {
          tab: '详细信息',
          key: 'info',
        },
      ]}
      // extra={[
      //   <Button key="3">操作</Button>,
      //   <Button key="2">操作</Button>,
      //   <Button key="1" type="primary">
      //     主操作
      //   </Button>,
      // ]}
      footer={[
        <Button key="rest">重置</Button>,
        <Button key="submit" type="primary">
          提交
        </Button>,
      ]}
    >
      <ProTable<RuleListType>
        columns={columns}
        actionRef={actionRef}
        cardBordered
        // search={false}
        request={async () => {
          return {
            data: [{
              name: '规则1',
              description: '规则描述1',
              status: '启用',
            }],
            success: true,
          }
        }}
        toolBarRender={
          () => [
          <Button
            key="button"
            icon={<PlusOutlined />}
            onClick={() => {
              actionRef.current?.reload();
              handleModalOpen(true)
            }}
            type="primary"
          >
            新建
          </Button>,]
        }
      />
      <ModalForm
        title={"新增规则"}
        width="400px"
        open={createModalOpen}
        onOpenChange={handleModalOpen}
        onFinish={async (value) => {
          // const success = await handleAdd(value as API.RuleListItem);
          if (true) {
            handleModalOpen(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      >
        <ProFormText
          rules={[
            {
              required: true,
              message: "请输入",
            },
          ]}
          width="md"
          name="name"
        />
        <ProFormTextArea width="md" name="desc" />
      </ModalForm>
    </PageContainer>
  )
}

export default RuleList