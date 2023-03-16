import { Col, Row, Table, Popover, Space, Descriptions } from "antd"
import { InfoCircleOutlined, FormOutlined } from '@ant-design/icons';
import { useState } from "react"
import { getDefaultFilters, InShort, inShort } from "./util";
import Card from "./card";

export default function SectorList(props) {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const ret = function (content) {
        return (
            <Card title={"Sectors"} >
                {content}
            </Card>
        )
    }

    // preprocess data
    let data = []

    // init table
    const columns = [
        {
            title: 'id',
            dataIndex: 'proposalCid',
            render: (_, record) => (<InShort text={record.proposalCid} />)
        },
        {
            title: 'status',
            dataIndex: 'dealId',
            sorter: (a, b) => a.dealId - b.dealId,
        },
        {
            title: 'woker',
            dataIndex: 'client',
            filters: getDefaultFilters(data, record => record.client),
            onFilter: (value, record) => record.client === value,
            render: (_, record) => (<InShort text={record.client} />)
        },
        {
            title: 'deals',
            filters: getDefaultFilters(data, record => record.provider),
            onFilter: (value, record) => record.provider === value,
            dataIndex: 'provider',
        },
        {
            title: 'deals waight',
            dataIndex: 'state',
            filters: getDefaultFilters(data, record => record.state),
            onFilter: (value, record) => record.state === value,
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

    const pagination = {
        hideOnSinglePage: true,
        showSizeChanger: true,
        defaultPageSize: 10,
    }

    const table = (
        <Table
            rowKey={record => record.proposalCid}
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            pagination={pagination}
            footer={footer}
        ></Table>
    )
    return ret(table)
}


const renderExtra = record => {
    const content = (
        <Descriptions
            bordered
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
        <Popover content={content} overlayStyle={{ maxWidth: '70%' }} title="Deal Info" >
            <InfoCircleOutlined />
        </Popover>
    )
}

// Sector s - t04079 - 315:

// Common:
// Finalized: false
// Removed: false
// Aborting:
// NULL

// LatestState:
//         State Change: PC1Done => PC2Done, by None
// Worker: calib - t04097(/mnt/mount / baiyu / t04079 / test90)
// Failure: NULL

// Deals:
// NULL

// Sealing:
// Ticket: (340487) b07df52a90bfcae656f10dbe3b4f8e406bf48db1afabee7e2813c2a00a2c8b38
//         PreCommit Info:
// CommD: baga6ea4seaqao7s73y24kcutaosvacpdjgfe5pw76ooefnyqw4ynr3d2y6x2mpq
// CommR: bagboea4b5abcbtl2p5thnw4q7gyr3qopf2cwou3m5pckrbtitsg5pw6gs4yuiw2f
//         PreCommit Message: bafk4bzacicluanzjeud2tj7rgsu3ywwmrznndep5gxurd45z6tlregasezanq6q64bvf2ejqa47o65lw6g6saikldauko4ivsjxbeoejtsf62ssc
// Seed: NULL
//         ProveCommit Info:
// NULL
//         ProveCommit Message: NULL
//         Message NeedSend: false

// SnapUp:
// Upgraded: false

// Termination:
//         Terminate Message: NULL

// Rebuild: false
