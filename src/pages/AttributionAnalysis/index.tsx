import { Line } from '@ant-design/charts';
import { Button, Col, DatePicker, Form, Input, Radio, Row, Select, Space, Table, Tooltip } from 'antd';
import React, { Key, useEffect, useState } from 'react';
import styles from './index.less';
import { ColumnsType } from 'antd/es/table';

const { RangePicker } = DatePicker;

interface lineDataType {
  name: string;
  year: string;
  gpd: number;
}

interface tableType {
    id: Key,
    ProfitSituation: string,
    CurrentValue: number,
    PreviousPeriodValue: number,
    ChainRatio: string,
    ComputationalLogic: string,
}
const dataSource: tableType[] = [
  {
    id: '1',
    ProfitSituation: 'ROI(%)',
    CurrentValue: 1000,
    PreviousPeriodValue: 800,
    ChainRatio: '25%',
    ComputationalLogic: 'ROI = (销售额 - 销售费用 - 销售投入) / 销售投入 * 100'
  },
  {
    id: '2',
    ProfitSituation: '销售利润(￥)',
    CurrentValue: 1500,
    PreviousPeriodValue: 1200,
    ChainRatio: '25%',
    ComputationalLogic: '销售利润 = 销售额 - 销售费用 - 销售投入 - 管理费'
  },
  {
    id: '3',
    ProfitSituation: '产品利润(￥)',
    CurrentValue: 900,
    PreviousPeriodValue: 1000,
    ChainRatio: '-10%',
    ComputationalLogic: '产品利润 = 销售额 - 销售费用 - 销售投入'
  },
  {
    id: '4',
    ProfitSituation: '销售利润率(%)',
    CurrentValue: 2000,
    PreviousPeriodValue: 1800,
    ChainRatio: '11%',
    ComputationalLogic: '销售利润率 = 销售利润 / 销售额 * 100'
  },
  {
    id: '5',
    ProfitSituation: '产品利润率(%)',
    CurrentValue: 1300,
    PreviousPeriodValue: 1250,
    ChainRatio: '4%',
    ComputationalLogic: '产品利润率 = 产品利润 / 销售额 * 100'
  },
];

// 判断什么指标返回什么颜色
const getColor = (value: string) => {
  if (value === 'ROI(%)') {
    return '#FF6B3B';
  } else if (value === '销售利润(￥)') {
    return '#626681';
  } else if (value === '产品利润(￥)') {
    return '#FFC100';
  } else if (value === '销售利润率(%)') {
    return '#9FB40F';
  } else if (value === '产品利润率(%)') {
    return '#76523B';
  }
}

const columns: ColumnsType<tableType> = [
  {
    title: '利润情况',
    dataIndex: 'ProfitSituation',
    key: 'ProfitSituation',
    render(value, record, index) {

      return <Tooltip title={record.ComputationalLogic} placement='topLeft'><div className={styles.ProfitSituation}>
        <div className={styles.colorLine} style={{backgroundColor: getColor(value)}}></div>
        <span>{value}</span>
      </div></Tooltip>
    },
  },
  {
    title: '本期数值',
    dataIndex: 'CurrentValue',
    key: 'CurrentValue',
    align: 'right',
  },
  {
    title: '上期数值',
    dataIndex: 'PreviousPeriodValue',
    key: 'PreviousPeriodValue',
    align: 'right',
  },
  {
    title: '环比',
    dataIndex: 'ChainRatio',
    key: 'ChainRatio',
    align: 'right',
    render(value, record, index) {
      return <span style={{color: value.includes('-') && '#ff4d4f' }}>{value}</span>
    }
  },
];

const AttributionAnalysis: React.FC = () => {
  const [data, setData] = useState<lineDataType[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json')
      .then((response) => response.json())
      .then((json) => {
        // 将数据中的China、United States、United Kingdom、Russian、Japan依次替换成ROI(%)、销售利润(￥)、产品利润(￥)、销售利润率(%)、产品利润率(%)。
        const data = json.map((item:lineDataType) => {
          if (item.name === 'China') {
            item.name = 'ROI(%)';
          }else if (item.name === 'United States') {
            item.name = '销售利润(￥)';
          }else if (item.name === 'United Kingdom') {
            item.name = '产品利润(￥)';
          }else if(item.name === 'Russian') {
            item.name = '销售利润率(%)';
          }else if(item.name === 'Japan') {
            item.name = '产品利润率(%)';
          }
          return item;
        })
        setData(data);
      })
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'year',
    yField: 'gdp',
    seriesField: 'name',
    yAxis: {
      label: {
        formatter: (v: number) => `${(v / 10e8).toFixed(1)} B`,
      },
    },
    legend: {
      // position: 'top',
    },
    smooth: true,
    colorField: 'name',
    color: ({ name }:{name:string}) => {
      return getColor(name);
    },
    // @TODO 后续会换一种动画方式
    animation: {
      appear: {
        animation: 'path-in',
        duration: 3000,
      },
    },
  };

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={styles.AttributionAnalysis}>
      <Form
        name="filterbasic"
        // labelCol={{ span: 8 }}
        // wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row gutter={16}>
          <Col span={3.5}>
            {/* 对比维度 */}
            <Space.Compact>
            <div className={styles.formLabel}>对比维度</div>
            <Form.Item
              key={1}
              // label="对比维度"
              name="contrastDimension"
              initialValue={'productName'}
              // rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Select
                // defaultValue="productName"
                style={{ width: 120 }}
                // onChange={handleChange}
                options={[
                  {
                    value: 'shop',
                    label: '店铺',
                  },
                  {
                    value: 'ASIN',
                    label: 'ASIN',
                  },
                  {
                    value: 'productName',
                    label: '产品名称',
                  },
                  {
                    value: 'verticalLine',
                    label: '垂直线',
                  },
                  {
                    value: 'operationPersonnel',
                    label: '运营人员',
                  },
                  {
                    value: 'operationGroup',
                    label: '运营组',
                  },
                ]}
              />
              
            </Form.Item>
            </Space.Compact>
          </Col>
          <Col span={3.5}>
            {/* 本期选择 */}
            <Space.Compact>
            <div className={styles.formLabel}>本期选择</div>
            <Form.Item
              key={2}
              // label="本期选择"
              name="currentSelection"
              initialValue={'productName'}
              // rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Select
                // defaultValue="productName"
                style={{ width: 120 }}
                // onChange={handleChange}
                options={[
                  {
                    value: 'shop',
                    label: '店铺',
                  },
                  {
                    value: 'ASIN',
                    label: 'ASIN',
                  },
                  {
                    value: 'productName',
                    label: '产品名称',
                  },
                  {
                    value: 'verticalLine',
                    label: '垂直线',
                  },
                  {
                    value: 'operationPersonnel',
                    label: '运营人员',
                  },
                  {
                    value: 'operationGroup',
                    label: '运营组',
                  },
                ]}
              />
            </Form.Item>
            </Space.Compact>
          </Col>
          <Col span={3.5}>
            {/* 对比期选择 */}
            <Space.Compact>
            <div className={styles.formLabel}>对比期选择</div>
            <Form.Item
              key={3}
              // label="对比期选择"
              name="contrastPeriodSelection"
              initialValue={'productName'}
              // rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Select
                // defaultValue="productName"
                style={{ width: 120 }}
                // onChange={handleChange}
                options={[
                  {
                    value: 'shop',
                    label: '店铺',
                  },
                  {
                    value: 'ASIN',
                    label: 'ASIN',
                  },
                  {
                    value: 'productName',
                    label: '产品名称',
                  },
                  {
                    value: 'verticalLine',
                    label: '垂直线',
                  },
                  {
                    value: 'operationPersonnel',
                    label: '运营人员',
                  },
                  {
                    value: 'operationGroup',
                    label: '运营组',
                  },
                ]}
              />
            </Form.Item>
            </Space.Compact>
          </Col>
          <Col span={5.5}>
            {/* 本期时间 */}
            <Space.Compact>
            <div className={styles.formLabel}>本期时间</div>
            <Form.Item
              key={4}
              // label="本期时间"
              name="currentTime"
              // rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <RangePicker format="YYYY-MM-DD" />
            </Form.Item>
            </Space.Compact>
          </Col>
          <Col span={5}>
            {/* 对比时间 */}
            {/* <Form.Item
              label="对比时间"
              name="comparisonTime"
            > */}
            {/* <Input.Group compact> */}
            <Space.Compact>
              <Form.Item
                label=""
                name="comparisonTime-1"
                initialValue={'chainRatio'}
                style={{ width: '30%' }}
              >
                <Select
                  // defaultValue="chainRatio"
                  // style={{ width: '30%' }}
                  options={[
                    {
                      value: 'chainRatio',
                      label: '环比',
                    },
                    {
                      value: 'yoy',
                      label: '同比',
                    },
                    {
                      value: 'customPeriod',
                      label: '自定义周期',
                    },
                    {
                      value: 'noComparison',
                      label: '不做对比',
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item label="" name="comparisonTime-2" style={{ width: '70%' }}>
                <RangePicker format="YYYY-MM-DD" />
              </Form.Item>
              </Space.Compact>
            {/* </Input.Group> */}
            {/* </Form.Item> */}
          </Col>
          <Col span={2.5}>
            {/* 日周月 */}
            <Form.Item
              key={5}
              label=""
              name="dayWeeklyMonthly"
              // rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Radio.Group>
                <Radio.Button value="large">日</Radio.Button>
                <Radio.Button value="middle">周</Radio.Button>
                <Radio.Button value="small">月</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={0}>
            <Form.Item key={6} wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                筛选
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <div className={styles.result}></div>
      <div className={styles.table}>
          <div className={styles.tableItem}>
            <div className={styles.itemTable}>
              <div className={styles.title}>利润情况</div>
              <Table
                dataSource={dataSource}
                columns={columns}
                rowKey={'id'}
                size='middle'
                pagination={false}
                // bordered
                // rowSelection={rowSelection}
                onRow={(record) => ({
                  onClick: () => {
                    console.log(record);
                    // 判断当前行是否已经点击了，点击量从setSelectedRowKeys去除。没有添加
                    if (selectedRowKeys.includes(record.id)) {
                      setSelectedRowKeys(pre => pre.filter(item => item !== record.id));
                    }else {
                      setSelectedRowKeys(pre => [...pre, record.id]);
                    }
                  }
                })}
                rowClassName={(record) => (selectedRowKeys.includes(record.id) ? styles.rowBgColor : '')}
              />
            </div>
            <Line className={styles.itemLine} {...config} />
          </div>
      </div>
    </div>
  );
};

export default AttributionAnalysis;
