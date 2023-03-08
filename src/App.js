import './App.css';
import { Layout, Space, Modal } from 'antd';
import AppHeader from './component/header';
import Summary from './component/summary';


const { Header, Footer, Content } = Layout;




function App() {

  return (
    <div className="App" style={{
      height: '100vh',
    }}>
      <Layout style={{ minHeight: '100%', direction: "ltr" }}>
        <Header className='App-header' style={{ paddingInline: '15px' }} >
          <AppHeader />
        </Header>
        <Content className='App-content' style={{ backgroundColor: '#f0f2f5', padding: '20px' }} >
          <Space style={{ width: '100%' }} direction='vertical' size={'large'}>
            <Summary />
            <div>
              消息列表
            </div>
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
