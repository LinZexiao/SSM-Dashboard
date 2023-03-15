import { Layout, Space } from 'antd';
import AppFooter from '@/component/footer';
import AppHeader from '@/component/header';
import Summary from '@/component/summary';
import MsgList from '@/component/msgList';
import SealingThreadList from '@/component/sealingThreadList';
import DealList from '@/component/dealList';


const { Header, Footer, Content } = Layout;




function App() {

  return (
    <Space style={{ width: '100%' }} direction='vertical' size={'large'}>
      <Summary />
      <MsgList />
      <SealingThreadList />
      <DealList />
    </Space>
  );
}

export default App;
