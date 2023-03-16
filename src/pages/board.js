import { Space } from 'antd';
import Summary from '@/component/summary';
import MsgList from '@/component/msg-list';
import SealingThreadList from '@/component/sealing-thread-list';
import DealList from '@/component/deal-list';
import Asset from '../component/asset';


const wallets = ["f3w7bx7wuvbqtkeitfvs352of6mpmi6ognjmck2d5sjjv2tpsygo3svnvbsut5twkafvhdnma5yuaumdnark2q", "f3w7bx7wuvbqtkeitfvs352of6mpmi6ognjmck2d5sjjv2tpsygo3svnvbsut5twkafvhdnma5yuaumdnark5q",]
const miners = ["f01001", 'f01002']

function App() {

  return (
    <Space style={{ width: '100%' }} direction='vertical' size={'large'}>
      <Summary />
      <Asset wallets={wallets} miners={miners} />
      <MsgList wallets={wallets} />
      <SealingThreadList />
      <DealList />
    </Space>
  );
}

export default App;
