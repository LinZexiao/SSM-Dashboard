import logo from '@/asset/venus-hero-logo.png'
import { Col, Row, Select, Input, Affix } from 'antd';
import { useState } from 'react';
const Search = Input.Search

const tittleStyle = {
    fontSize: '35px',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
    fontWeight: 'bold',
    color: '#fce62d'
}

export default function Header(props) {
    const [affixed, setAffixed] = useState(false)

    const searchStyle = {
        verticalAlign: 'middle',
    }

    if (affixed) {
        searchStyle["backgroundColor"] = '#eaeaee'
        searchStyle["boxShadow"] = 'rgb(50 50 93 / 25%) 0px 6px 12px -2px, rgb(0 0 0 / 30%) 0px 3px 7px -3px'
    }

    return (
        <div>
            <Row align="middle" >
                <Col span={2} >
                    <div style={{ height: '64px' }} >
                        <img src={logo} style={{ height: '64px' }} alt="Venus" />
                    </div>
                </Col>
                <Col span={2} >
                    <div style={tittleStyle}>SSM</div>
                </Col>
                <Col offset={2} span={12} >
                    <Affix offsetTop={0} onChange={setAffixed}>
                        <Search style={searchStyle} size='middle' className='App-search' placeholder='enter cid or address' width={400} allowClear />
                    </Affix>
                </Col>
                <Col offset={4} span={2} >
                    <Select size='small' defaultValue={"en"} options={[{ label: 'zh', value: 'zhCN' }, { label: 'en', value: 'enUS' }]} />
                </Col>
            </Row>
        </div>
    )
}
