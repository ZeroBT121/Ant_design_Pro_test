import {
  PageContainer,
  ProForm,
  ProFormDependency,
  ProFormInstance,
  ProFormList,
  ProFormSelect,
} from '@ant-design/pro-components';
import { message } from 'antd';
import React, { useRef } from 'react';
import { KeepAlive, useActivate, useUnactivate } from 'react-activation'

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const ProFormListTest: React.FC = () => {
  const formRef = useRef<
    ProFormInstance<{
      name: string;
      company?: string;
      useMode?: string;
    }>
  >();

  return (
    <PageContainer>
      <KeepAlive>
      <ProForm
        onFinish={async (values) => {
          await waitTime(2000);
          console.log(values);
          const val1 = await formRef.current?.validateFields();
          console.log('validateFields:', val1);
          const val2 = await formRef.current?.validateFieldsReturnFormatValue?.();
          console.log('validateFieldsReturnFormatValue:', val2);
          message.success('提交成功');
        }}
        formRef={formRef}
        params={{ id: '100' }}
        formKey="base-form-use-demo"
        dateFormatter={(value, valueType) => {
          console.log('---->', value, valueType);
          return value.format('YYYY/MM/DD HH:mm:ss');
        }}
        request={async () => {
          await waitTime(1500);
          return {
            name: '蚂蚁设计有限公司',
            useMode: 'chapter',
          };
        }}
        autoFocusFirstInput
      >
        {/* ProFormList 与 Form.List API 基本相同，增加了自带的操作按钮：删除和复制，并且自带了了一个新建一行按钮。 */}
        <ProFormList
          name="users"
          initialValue={[
            {
              useMode: 'chapter',
            },
          ]}
          creatorButtonProps={{
            position: 'top',
            creatorButtonText: '再建一行',
          }}
          creatorRecord={{
            useMode: 'none',
          }}
        >
          <ProFormSelect
            key="useMode"
            options={[
              {
                value: 'chapter',
                label: '盖章后生效',
              },
              {
                value: 'none',
                label: '不生效',
              },
            ]}
            width="md"
            name="useMode"
            label="合同约定生效方式"
          />
        </ProFormList>
        {/* ProFormDependency 是一个简化版本的 Form.Item，它默认内置了 noStyle 与 shouldUpdate，
        我们只需要配置 name 来确定我们依赖哪个数据，ProFormDependency 会自动处理 diff 和并且从表单中提取相应的值。
        name参数必须要是一个数组，如果是嵌套的结构可以这样配置 name={['name', ['name2', 'text']]}。
        配置的 name 的值会在 renderProps 中传入。name={['name', ['name2', 'text']]} 传入的 values 的值 为 { name: string,name2: { text:string } }。 */}
        <ProFormDependency name={['name']}>
          {({ name }) => {
            return (
              <ProFormSelect
                options={[
                  {
                    value: 'chapter',
                    label: '盖章后生效',
                  },
                ]}
                width="md"
                name="useMode"
                label={`与《${name}》合同约定生效方式`}
              />
            );
          }}
        </ProFormDependency>
      </ProForm>
      </KeepAlive>
    </PageContainer>
  );
};

export default ProFormListTest;
