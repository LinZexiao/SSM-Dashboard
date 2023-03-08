import logo from '@/asset/venus-hero-logo.png'
import { Col, Row, Select, Input } from 'antd';
const Search = Input.Search

export default function Header(props) {

    return (
        <div>
            <Row align="middle" >
                <Col span={2} >
                    <div style={{ height: '64px' }} >
                        <img src={logo} style={{ height: '64px' }} alt="Venus" />
                    </div>
                </Col>
                <Col offset={7} span={12} >
                    <Search style={{ verticalAlign: 'middle' }} className='App-search' placeholder='enter cid or address' width={400} allowClear />
                </Col>
                <Col offset={1} span={2} >
                    <Select size='small' defaultValue={"zhCN"} options={[{ label: 'zhCN', value: 'zhCN' }, { label: 'enUS', value: 'enUS' }]} />
                </Col>
            </Row>
        </div>
    )
}
