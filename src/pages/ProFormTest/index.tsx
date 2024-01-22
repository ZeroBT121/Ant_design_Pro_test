import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { ProForm, ProFormCaptcha, ProFormCascader, ProFormCheckbox, ProFormDatePicker, ProFormDateRangePicker, ProFormDateTimePicker, ProFormDateTimeRangePicker, ProFormDigit, ProFormDigitRange, ProFormInstance, ProFormList, ProFormMoney, ProFormRadio, ProFormRate, ProFormSegmented, ProFormSelect, ProFormSlider, ProFormSwitch, ProFormText, ProFormTextArea, ProFormTimePicker, ProFormTreeSelect, ProFormUploadButton, ProFormUploadDragger } from '@ant-design/pro-components';
import { TreeSelect, message } from 'antd';
import moment from 'moment';
import { MailTwoTone } from '@ant-design/icons';

type LayoutType = Parameters<typeof ProForm>[0]['layout'];
const LAYOUT_TYPE_HORIZONTAL = 'horizontal';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];

/**
 * @description ProForm高级表单的使用
 * @param props 
 * @returns 
 */
const ProFormTest: React.FC = props => {
  const formRef = useRef<
    ProFormInstance<{
      name: string;
      company?: string;
      useMode?: string;
    }>
  >();
  const [formLayoutType, setFormLayoutType] = useState<LayoutType>(
    LAYOUT_TYPE_HORIZONTAL,
  );

  const formItemLayout =
    formLayoutType === LAYOUT_TYPE_HORIZONTAL
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 12 },
        }
      : null;
      
  
  return (
    <div>
      <ProForm<{
        name: string;
        company?: string;
        useMode?: string;
      }>
        {...formItemLayout}
        layout={formLayoutType}
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
            phone: '13888888888',
            captcha: '123456',
          };
        }}
        autoFocusFirstInput
      >
        {/* 表单项 */}
        {/* 一个表单除了 Form 之外还是需要一系列的表单项，ProForm 自带了数量可观的表单项, 这些组件本质上是 Form.Item 和 组件的结合，我们可以把他们当成一个 FormItem 来使用，
        并且支持各种 props。每个表单项都支持 fieldProps 属性来支持设置输入组件的props。 我们支持了 placeholder 的透传，你可以直接在组件上设置 placeholder。
        每个表单项同时也支持了 readonly ，不同的组件会有不同的只读样式，与 disable 相比 readonly 展示更加友好。生成的 dom 也更小，比如 ProFormDigit 会自动格式化小数位数。 */}
        {/* input文本输入 */}
        <ProFormText 
          name="phone" 
          label="手机号"  
          placeholder="请输入手机号"
          // fieldProps={inputProps}
        />

        {/* 验证码组件 */}
        <ProFormCaptcha
          fieldProps={{
            // size: 'large',
            prefix: <MailTwoTone />,
          }}
          captchaProps={{
            // size: 'large',
          }}
          // 手机号的 name，onGetCaptcha 会注入这个值
          phoneName="phone"
          label="验证码"
          name="captcha"
          rules={[
            {
              required: true,
              message: '请输入验证码',
            },
          ]}
          placeholder="请输入验证码"
          // 如果需要失败可以 throw 一个错误出来，onGetCaptcha 会自动停止
          // throw new Error("获取验证码错误")
          onGetCaptcha={async (phone) => {
            await waitTime(1000);
            message.success(`手机号 ${phone} 验证码发送成功!`);
          }}
        />

        {/* 与 Input.Password 相同。 */}
        <ProFormText.Password label="密码" name="password" />

        {/* 与 Input.TextArea 相同。 */}
        <ProFormTextArea
          name="text"
          label="名称"
          placeholder="请输入名称"
          // fieldProps={inputTextAreaProps}
        />

        {/* 与 inputNumber 相同。它自带了一个格式化(保留 2 位小数，最小值为 0)，有需要你可以关掉它。 */}
        <ProFormDigit label="数字输入框" name="input-number" min={1} max={10} fieldProps={{ precision: 2 }}/>

        <ProFormDigitRange label="数字范围" name="input-number-range"  fieldProps={{ precision: 2 }}/>

        {/* 与 DatePicker 相同。 */}
        <ProFormDatePicker name="date" label="日期" />
        <ProFormDateRangePicker name="dateRange" label="日期范围" />
        
        <ProFormDateTimePicker name="datetime" label="日期时间" />
        <ProFormDateTimeRangePicker name="datetimeRange" label="日期时间范围" />
        
        <ProFormTimePicker name="time" label="时间" />
        <ProFormTimePicker.RangePicker name="timeRange" label="时间区间" />

        {/* 与 select 相同。支持了 request 和 valueEnum 两种方式来生成 options。 */}
        <ProFormSelect
          name="select"
          label="valueEnumSelect"
          valueEnum={{
            open: '未解决',
            closed: '已解决',
          }}
          fieldProps={{
            optionItemRender(item:{label:string,value:string}) {
              return item.label + ' - ' + item.value;
            },
          }}
          placeholder="Please select a country"
          rules={[{ required: true, message: 'Please select your country!' }]}
        />

        <ProFormSelect
          name="select2"
          label="requestSelect"
          request={async () => [
            { label: '全部', value: 'all' },
            { label: '未解决', value: 'open' },
            { label: '已解决', value: 'closed' },
            { label: '解决中', value: 'processing' },
          ]}
          placeholder="Please select a country"
          rules={[{ required: true, message: 'Please select your country!' }]}
        />

        {/* 联动的选择器 */}
        <ProFormText name="name" label="姓名" />
        <ProFormSelect
          name="addr"
          width="md"
          label="与 name 联动的选择器"
          // dependencies 的内容会注入 request 中
          dependencies={['name']}
          request={async (params) => [
            { label: params.name, value: 'all' },
            { label: 'Unresolved', value: 'open' },
            { label: 'Resolved', value: 'closed' },
            { label: 'Resolving', value: 'processing' },
          ]}
        />

        {/* 与 tree-select 相同。支持了 request 和 valueEnum 两种方式来生成 options。 */}
        <ProFormTreeSelect
          name="treeName"
          label="树形选择器"
          placeholder="Please select"
          allowClear
          width={330}
          secondary
          request={async () => {
            return [
              {
                title: 'Node1',
                value: '0-0',
                children: [
                  {
                    title: 'Child Node1',
                    value: '0-0-0',
                  },
                ],
              },
              {
                title: 'Node2',
                value: '0-1',
                children: [
                  {
                    title: 'Child Node3',
                    value: '0-1-0',
                  },
                  {
                    title: 'Child Node4',
                    value: '0-1-1',
                  },
                  {
                    title: 'Child Node5',
                    value: '0-1-2',
                  },
                ],
              },
            ];
          }}
          // tree-select args
          fieldProps={{
            suffixIcon: null,
            filterTreeNode: true,
            showSearch: true,
            popupMatchSelectWidth: false,
            labelInValue: true,
            autoClearSearchValue: true,
            multiple: true,
            treeNodeFilterProp: 'title',
            fieldNames: {
              label: 'title',
            },
          }}
        />
        {/* 与 checkbox 相同，但是支持了 options 与 layout。 */}
        <ProFormCheckbox.Group
          name="checkbox"
          // layout="vertical"
          layout="horizontal"
          label="行业分布"
          // options={['农业', '制造业', '互联网']}
          params={{id:1}}
          request={async (params) => {
            // console.log(params);
            return [{label: '农业', value: 1}, {label: '制造业', value: 2}]
          }}
        />

        {/* 与 radio 相同，但是支持了 options。 */}
        <ProFormRadio.Group
          name="radio-group"
          label="Radio.Group"
          options={[
            {
              label: 'item 1',
              value: 'a',
            },
            {
              label: 'item 2',
              value: 'b',
            },
            {
              label: 'item 3',
              value: 'c',
            },
          ]}
        />

        {/* 与 cascader 相同，通过 filedProps 配置 cascader 的数据。 */}
        <ProFormCascader
          name="area"
          label="区域"
          fieldProps={{
            options: [
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                    children: [
                      {
                        value: 'xihu',
                        label: 'West Lake',
                      },
                    ],
                  },
                ],
              },
            ],
          }}
        />

        <ProFormSwitch name="switch" label="Switch" />

        <ProFormRate name="rate" label="Rate" />

        <ProFormSlider
          name="slider"
          label="Slider"
          marks={{
            0: 'A',
            20: 'B',
            40: 'C',
            60: 'D',
            80: 'E',
            100: 'F',
          }}
        />

        <ProFormUploadDragger label="Dragger" name="dragger" action="upload.do" />
        <ProFormUploadButton label="upload" name="upload" action="upload.do" />

        {/* ProFormMoney 用于输入金额的输入框，支持根据全局国际化显示货币符号，支持输入负数、支持自定义货币符号等 */}
        <ProFormMoney
          label="限制金额最小为0"
          name="amount1"
          locale="en-US"
          initialValue={22.22}
          min={0}
        />
        <ProFormMoney
          label="不限制金额大小"
          name="amount2"
          locale="en-GB"
          initialValue={22.22}
        />
        <ProFormMoney
          label="货币符号跟随全局国际化"
          name="amount3"
          initialValue={22.22}
        />
        <ProFormMoney
          label="自定义货币符号"
          name="amount4"
          initialValue={22.22}
          customSymbol="💰"
        />

        <ProFormSegmented
            name="segmented"
            label="segmented"
            valueEnum={{
              open: '未解决',
              closed: '已解决',
            }}
            rules={[{ required: true, message: 'Please select your country!' }]}
          />

          <ProFormSegmented
            name="segmented"
            label="segmented"
            request={async () => [
              { label: '全部', value: 'all' },
              { label: '未解决', value: 'open' },
              { label: '已解决', value: 'closed' },
              { label: '解决中', value: 'processing' },
            ]}
            rules={[{ required: true, message: 'Please select your country!' }]}
          />
      </ProForm>
    </div>
  )
}

ProFormTest.propTypes = {

}

export default ProFormTest