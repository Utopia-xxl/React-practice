import React from 'react'
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, Input } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import Graph from '../components/Graph'

const { Header, Content, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    // children: new Array(4).fill(null).map((_, j) => {
    //   const subKey = index * 4 + j + 1;
    //   return {
    //     key: subKey,
    //     label: `option${subKey}`,
    //   };
    // }),
    children:[<Input width='100%' placeholder="Basic usage" />,<Input placeholder="Basic usage" />]
  };
});
export default function PageLayout() {
  return (
    <Layout>
    <Header className="header">
      <div className="logo" />
      {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
    </Header>
    <Layout>
      
      <Layout
        style={{
        }}
      >
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            height: 'calc(100vh - 64px)'
          }}
        >
          <svg height='100%' width="100%" style={{outline:'2px solid #000'}}>
              <Graph></Graph>
          </svg>
        </Content>
        <Sider width={200} className="site-layout-background">
        <Button style={{display:'block',margin: '0 auto',marginTop:'5px'}}>Apply Layout</Button>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{
            height: 'calc(100vh - 64px)',
            borderLeft: 0,
          }}
          items={items2}
        />
      </Sider>
      </Layout>
    </Layout>
  </Layout>
  )
}
