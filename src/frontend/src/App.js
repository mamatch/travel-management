import { FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined } from '@ant-design/icons';
import {Breadcrumb, Layout, Menu, Table, theme} from 'antd';
import { BusDrawerForm } from './BusDrawerForm';
import { useState, useEffect } from 'react';
import { getAllBuses } from "./client";
import './App.css';
const { Header, Content, Footer, Sider } = Layout;


// table


const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'registrationNumber',
        dataIndex: 'registrationNumber',
        key: 'registrationNumber',
    },
    {
        title: 'type',
        dataIndex: 'type',
        key: 'type',
    },
];



// Layout
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];
const App = () => {

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [buses, setBuses] = useState([]);

  const fetchBuses = () =>
      getAllBuses()
          .then(res => res.json())
          .then(data => setBuses(data));
  useEffect(() => {
      fetchBuses();
  }, [])
  return (
      <Layout
          style={{
            minHeight: '100vh',
          }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div
              style={{
                height: 32,
                margin: 16,
                background: 'rgba(255, 255, 255, 0.2)',
              }}
          />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout className="site-layout">
          <Header
              style={{
                padding: 0,
                background: colorBgContainer,
              }}
          />
          <Content
              style={{
                margin: '0 16px',
              }}
          >
            <Breadcrumb
                style={{
                  margin: '16px 0',
                }}
            >
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
                style={{
                  padding: 24,
                  minHeight: 360,
                  background: colorBgContainer,
                }}
            >
                {buses.length}<br/>
                <BusDrawerForm/>
                <Table dataSource={buses} columns={columns} />;
            </div>
          </Content>
          <Footer
              style={{
                textAlign: 'center',
              }}
          >
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
  );
};
export default App;