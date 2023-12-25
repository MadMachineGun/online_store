import {Outlet} from 'react-router-dom';

import MainHeader from '../MainHeader';

import { Layout } from 'antd';
const { Footer, Content } = Layout;

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
  flexGrow: "1",
};
const footerStyle = {
  textAlign: 'center',
  height: "120px",
  color: '#fff',
  backgroundColor: '#7dbcea',
};

export default function AppLayout(){
  return(
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}>
        <MainHeader />

        <Content style={contentStyle}>
          <Outlet />
        </Content>

        <Footer style={footerStyle}>Footer</Footer>
      </div>
  )
}