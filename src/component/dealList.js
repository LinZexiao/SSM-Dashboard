import { Col, Row, Table, Popover, Space, Descriptions } from "antd"
import { InfoCircleOutlined, FormOutlined } from '@ant-design/icons';
import { useState } from "react"
import { getDefaultFilters, InShort, inShort } from "./util";
import Card from "./card";

export default function DealList({ threads }) {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const ret = function (content) {
        return (
            <div>
                <Card
                    title={"Deals"}
                >
                    {content}
                </Card>
            </div>
        )
    }

    // preprocess data
    let data = deals

    // init table
    const columns = [
        {
            title: 'proposalCid',
            dataIndex: 'proposalCid',
            render: (_, record) => (<InShort text={record.proposalCid} />)
        },
        {
            title: 'dealId',
            dataIndex: 'dealId',
            sorter: (a, b) => a.dealId - b.dealId,
        },
        {
            title: 'client',
            dataIndex: 'client',
            filters: getDefaultFilters(data, record => record.client),
            onFilter: (value, record) => record.client === value,
            render: (_, record) => (<InShort text={record.client} />)
        },
        {
            title: 'provider',
            filters: getDefaultFilters(data, record => record.provider),
            onFilter: (value, record) => record.provider === value,
            dataIndex: 'provider',
        },
        {
            title: 'deal state',
            dataIndex: 'state',
            filters: getDefaultFilters(data, record => record.state),
            onFilter: (value, record) => record.state === value,
        },
        {
            title: 'piece state',
            dataIndex: 'pieceState',
            filters: getDefaultFilters(data, record => record.pieceState),
            onFilter: (value, record) => record.pieceState === value,
        },
        {
            // extra info
            render: (_, record) => renderExtra(record)
        }

    ]

    const footer = () => {
        if (selectedRowKeys.length > 0) {
            return (
                <Row >
                    < Col style={{ textAlign: 'left' }}>
                        <span>
                            has selected {selectedRowKeys.length} items:
                        </span>
                    </Col>
                    <Col offset={1} style={{ textAlign: 'left' }}>
                        <Space >
                            <a ><FormOutlined style={{ color: 'darkgreen' }} /> set state</a>
                        </Space>
                    </Col>
                </Row>
            )
        } else {
            return null
        }
    }

    const rowSelection = {
        selectedRowKeys,
        onChange: (newSelectedRowKeys) => {
            console.log('selectedRowKeys changed: ', newSelectedRowKeys);
            setSelectedRowKeys(newSelectedRowKeys);
        }
    };

    const table = (
        <Table
            rowKey={record => record.proposalCid}
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            pagination={false}
            footer={footer}
        ></Table>
    )
    return ret(table)
}


const renderExtra = record => {
    const content = (
        <Descriptions
            size="small"
            column={1}
        >
            <Descriptions.Item label="pieceCID">{record.pieceCID}</Descriptions.Item>
            <Descriptions.Item label="size">{record.size}</Descriptions.Item>
            <Descriptions.Item label="pricePerEpoch">{record.pricePerEpoch}</Descriptions.Item>
            <Descriptions.Item label="startEpoch">{record.startEpoch}</Descriptions.Item>
            <Descriptions.Item label="duration">{record.duration}</Descriptions.Item>
            <Descriptions.Item label="dealID">{record.dealID}</Descriptions.Item>
            <Descriptions.Item label="activationEpoch">{record.activationEpoch}</Descriptions.Item>
            <Descriptions.Item label="message">{record.message}</Descriptions.Item>
        </Descriptions>
    )
    return (
        <Popover content={content} overlayStyle={{ width: '70%' }} title="Deal Info" >
            <InfoCircleOutlined />
        </Popover>
    )
}


const deals = [
    {
        proposalCid: "bafyreig7qtada4mnnfeaqtn5kg74z5qlcocjmvuqeh5sxcpeehlv32rhcq",
        dealId: 33087,
        state: "StorageDealFailing",
        client: "t3wlvbp6kpxqn63dduejsxjyp5a2qhevmitkdl3agmxwf3vxsalhyu2epbzlj2p7tl76d64edvv6en22c5pbra",
        provider: "t04079",
        publishCid: "bafk4bzacic2v2ujktaqgqgpaiohyudqvwgn2ebsbclzsy2abn2eiuuox6sh7iblixe63z2yt2pjexrhnm7ag76ul4unkjzllwk66gvibhxvaustx",
        pieceState: "Undefine",
        size: 13207844,
        pricePerEpoch: 0.000000015849369564,
        duration: 1038758,
        activationEpoch: 1676972225794208810,
        startEpoch: 1676972225794208810,
        message: "packing piece baga6ea4seaqohk5jbxgckkqikvbws7ixr66jnas7r5icx3cwp7ylevn2wbtacfa: unable to select a piece storage that have enough space for piece(13207844)",
    },
    {
        proposalCid: "bafyreihcvsqldlahiro5navwbnnmzsgink44ibdikgnm5fxrzndccc3cbq",
        dealId: 33088,
        state: "StorageDealActive",
        client: "t3wlvbp6kpxqn63dduejsxjyp5a2qhevmitkdl3agmxwfxsalhyu2epbzlj2p7tl76d64edvv6en22c5pbra",
        provider: "t04079",
        publishCid: "bafk4bzacicjda3jf2c53rkpxxfcg6qduzbkt4tlbv4qqvts2fddnt7kyjahanexuc2cvsljwyu2kqvguwolke7vfp2ofowdsuwbhojc65qmqg2d4",
        pieceState: "Proving",
        size: 16384,
        pricePerEpoch: 0.000000015849369564,
        duration: 1038758,
        activationEpoch: 1676972225794208810,
        startEpoch: 1676972225794208810,
        message: "",
    },
    {
        proposalCid: "bafyreiali7lqcrskxz7c2wgo5uevbdb7l4g7fu77a43n7cxyla7cesbcha",
        dealId: 33746,
        state: "StorageDealActive",
        client: "t3wlvbp6kpxqn63dduejsxjyp5a2qhevmitkdl3mxwf3vxsalhyu2epbzlj2p7tl76d64edvv6en22c5pbra",
        provider: "t04079",
        publishCid: "bafk4bzaciaxgpnoq6tcrntsbusojqx66o24t6ziogp43bhjtolgmpm6zidi2wjwcf4gg5rfmcfnbcbyax4hfqjp7fobuyprwkgauae5nsdebfqxd",
        pieceState: "Proving",
        size: 256,
        pricePerEpoch: 0.00000025378450656,
        duration: 1039504,
        activationEpoch: 1677144917499804599,
        startEpoch: 1677144917499804599,
        message: "",
    },
    {
        proposalCid: "bafyreib3fypy6aoa3fptwg3ovvjs4qtlryfhbb2hyd2kupfvzykniy622i",
        dealId: 37156,
        state: "StorageDealAwaitingPreCommit",
        client: "t3wlvbp6kpxqn63dduejsxjyp5a2qhevmitkdl3agmxwf3vxsalhyu2epbzlj2p7tl76d64edvv6en22c5pbra",
        provider: "t05114",
        publishCid: "bafk4bzacicjxy3mhjnmn33hjrvopsn5btu3v3a4hvi762neykgnbouqatxaorwbcwklausyq5qytbbhtwccm3zuptq27bloyu2eilvpsk4iq4z24",
        pieceState: "Assigned",
        size: 524288,
        pricePerEpoch: 0.000000507192611411,
        duration: 1038731,
        activationEpoch: 1677144917499804601,
        startEpoch: 1677144917499804601,
        message: "",
    },
]
