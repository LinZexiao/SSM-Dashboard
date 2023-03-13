import './App.css';
import { Layout, Space, Modal } from 'antd';
import AppHeader from './component/header';
import Summary from './component/summary';
import MsgList from './component/msgList';


const { Header, Footer, Content } = Layout;




function App() {

  return (
    <div className="App" style={{
      height: '100vh',
    }}>
      <Layout style={{ minHeight: '100%', direction: "ltr" }}>
        <Header className='App-header' style={{ paddingInline: '1.5rem' }} >
          <AppHeader />
        </Header>
        <Content className='App-content' style={{ backgroundColor: '#f0f2f5', padding: '2.5rem' }} >
          <Space style={{ width: '100%' }} direction='vertical' size={'large'}>
            <Summary />
            <MsgList />
            <div>
              Thread 列表
            </div>
            <div>
              订单列表
            </div>
          </Space>

        </Content>
        <Footer className='App-footer' >Footer</Footer>
      </Layout>
      end
    </div >
  );
}

export default App;
