import { Col, Empty, Row, Select, Table, Popover, Space, Button, Descriptions, Modal } from "antd"
import { PauseCircleOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { useState } from "react"
import { Copyable, getDefaultFilters } from "./util";
import Card from "./card";

export default function SealingThreadList({ threads }) {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const ret = function (content) {

        return (
            <div>
                <Card
                    title={'Sealing Threads'}
                >
                    {content}
                </Card>
            </div>
        )
    }


    // preprocess data
    let data = []
    for (let i = 0; i < wokers.length; i++) {
        const woker = wokers[i]
        const wokerName = woker.Name
        const wokerThreads = woker.Thread
        for (let j = 0; j < wokerThreads.length; j++) {
            const thread = wokerThreads[j]
            thread["wokerName"] = wokerName
            thread["wokerInfo"] = woker
            thread['Dest'] = woker.Dest
            data.push(thread)
        }
    }

    // init table
    const columns = [
        {
            title: 'woker',
            dataIndex: 'wokerName',
            filters: getDefaultFilters(data, record => record.wokerName),
            onFilter: (value, record) => record.wokerName === value,
            render: (_, record) => renderWoker(record)
        },
        {
            title: 'index',
            dataIndex: 'Index',
            sorter: (a, b) => a.Index - b.Index,
        },
        {
            title: 'Plan',
            dataIndex: 'Plan',
            filters: getDefaultFilters(data, record => record.Plan),
            onFilter: (value, record) => record.Plan === value,
        },
        {
            title: 'SectorID',
            dataIndex: 'SectorID',
        },
        {
            title: 'State',
            dataIndex: 'State',
            filters: getDefaultFilters(data, record => record.State),
            onFilter: (value, record) => record.State === value,
        },
        {
            title: 'Dest',
            dataIndex: 'Dest',
            render: text => (<Copyable text={text} />)
        }, {
            title: 'Loccation',
            dataIndex: 'Loccation',
            render: text => (<Copyable >{text}</Copyable>)
        },
        {
            key: 'operate',
            render: (_, record) => renderOperate(record),
        }
    ]

    const rowSelection = {
        selectedRowKeys,
        onChange: (newSelectedRowKeys) => {
            console.log('selectedRowKeys changed: ', newSelectedRowKeys);
            setSelectedRowKeys(newSelectedRowKeys);
        }
    };

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
                            <a ><PlayCircleOutlined style={{ color: 'darkgreen' }} /> start </a>
                            <a ><PauseCircleOutlined style={{ color: 'darkred' }} /> pause </a>
                        </Space>
                    </Col>
                </Row>
            )
        } else {
            return null
        }
    }

    const pagination = {
        hideOnSinglePage: true,
        showSizeChanger: true,
        defaultPageSize: 10,
    }

    const table = (
        <Table
            rowKey={record => record.wokerName + record.Index}
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            pagination={pagination}
            footer={footer}
        ></Table>
    )
    return ret(table)
}

const renderWoker = record => {
    return (
        <Popover
            content={
                <Descriptions
                    title={record.wokerName}
                    bordered
                    size="small"
                    column={1}
                >
                    <Descriptions.Item label="Dest">{record.wokerInfo.Dest}</Descriptions.Item>
                    <Descriptions.Item label="Threads">{record.wokerInfo.Threads}</Descriptions.Item>
                    <Descriptions.Item label="Empty">{record.wokerInfo.Empty}</Descriptions.Item>
                    <Descriptions.Item label="Paused">{record.wokerInfo.Paused}</Descriptions.Item>
                    <Descriptions.Item label="Errors">{record.wokerInfo.Errors}</Descriptions.Item>
                    <Descriptions.Item label="LastPing">{record.wokerInfo.LastPing}</Descriptions.Item>
                </Descriptions>
            }
            title="Woker Info"
            trigger="hover"
        >
            {record.wokerName}
        </Popover>
    )
}

const renderOperate = (record) => {
    const stopThread = (worker, index) => {
        Modal.confirm({
            title: 'Stop Thread',
            content: `Are you sure to stop thread ${index} of worker ${worker}?`,
        })
    }
    const startThread = (worker, index) => {
        Modal.confirm({
            title: 'Resume Thread',
            content: `Are you sure to Resume thread ${index} of worker ${worker}?`,
        })
    }
    if (record.Paused) {
        const errInfo = (<>
            <div>
                <Descriptions title='Error Info' bordered column={1} size="small" >
                    <Descriptions.Item label="paused elapsed">{record.PausedElapsed}</Descriptions.Item>
                    <Descriptions.Item label="last error">{record.LastErr}</Descriptions.Item>
                </Descriptions>
            </div>
        </>)
        return (
            <Popover overlayStyle={{ maxWidth: '80%' }} content={errInfo}>
                <a><PlayCircleOutlined style={{ color: 'darkred' }} onClick={() => { startThread(record.wokerName, record.Index) }} /></a>
            </Popover>
        )
    } else {
        return (
            <a><PauseCircleOutlined style={{ color: 'darkgreen' }} onClick={() => { stopThread(record.wokerName, record.Index) }} /></a>
        )
    }
}

const wokers = [
    {
        "Name": "200.25",
        "Dest": "192.168.200.25:17891",
        "Threads": 6,
        "Empty": 0,
        "Paused": 0,
        "Errors": 0,
        "LastPing": "451h37m31.660624218s(!)",
        "Thread": [
            {
                "Index": 0,
                "Loccation": "/mnt/mount/litao/t05114/test11",
                "Plan": "sealer",
                "SectorID": "s-t05114-14",
                "Paused": false,
                "PausedElapsed": "13h5m22s",
                "State": "TicketAssigned",
                "LastErr": "permanent:child process exited:pc1"
            },
            {
                "Index": 1,
                "Loccation": "/mnt/mount/litao/t05114/test12",
                "Plan": "sealer",
                "SectorID": "s-t05114-16",
                "Paused": true,
                "PausedElapsed": "13h5m22s",
                "State": "TicketAssigned",
                "LastErr": "permanent:child process exited:pc1"
            },
            {
                "Index": 2,
                "Loccation": "/mnt/mount/litao/t05114/test11",
                "Plan": "sealer",
                "SectorID": "s-t05114-15",
                "Paused": true,
                "PausedElapsed": "13h5m22s",
                "State": "TicketAssigned",
                "LastErr": "permanent:child process exited:pc1"
            },
            {
                "Index": 3,
                "Loccation": "/mnt/mount/litao/t05114/test12",
                "Plan": "sealer",
                "SectorID": "s-t05114-17",
                "Paused": false,
                "PausedElapsed": "13h5m22s",
                "State": "TicketAssigned",
                "LastErr": "permanent:child process exited:pc1"
            },
        ]
    },
    {
        "Name": "calib-t04097",
        "Dest": "127.0.0.1:17891",
        "Threads": 7,
        "Empty": 0,
        "Paused": 0,
        "Errors": 0,
        "LastPing": "186h29m38.660637643s(!)",
        "Thread": [
            {

                "Index": 0,
                "Loccation": "/mnt/mount/litao/t05114/test11",
                "Plan": "sealer",
                "SectorID": "s-t05114-14",
                "Paused": true,
                "PausedElapsed": "13h5m22s",
                "State": "TicketAssigned",
                "LastErr": "permanent:child process exited:pc1"
            },
            {

                "Index": 1,
                "Loccation": "/mnt/mount/litao/t05114/test12",
                "Plan": "sealer",
                "SectorID": "s-t05114-16",
                "Paused": true,
                "PausedElapsed": "13h5m22s",
                "State": "TicketAssigned",
                "LastErr": "permanent:child process exited:pc1"
            },
            {
                "Index": 2,
                "Loccation": "/mnt/mount/litao/t05114/test11",
                "Plan": "sealer",
                "SectorID": "s-t05114-15",
                "Paused": true,
                "PausedElapsed": "13h5m22s",
                "State": "TicketAssigned",
                "LastErr": "permanent:child process exited:pc1"
            },
            {
                "Index": 3,
                "Loccation": "/mnt/mount/litao/t05114/test12",
                "Plan": "sealer",
                "SectorID": "s-t05114-17",
                "Paused": true,
                "PausedElapsed": "13h5m22s",
                "State": "TicketAssigned",
                "LastErr": "permanent:child process exited:pc1"
            },

            {

                "Index": 4,
                "Loccation": "/mnt/mount/litao/t05114/test11",
                "Plan": "sealer",
                "SectorID": "s-t05114-14",
                "Paused": true,
                "PausedElapsed": "13h5m22s",
                "State": "TicketAssigned",
                "LastErr": "permanent:child process exited:pc1"
            },
            {

                "Index": 5,
                "Loccation": "/mnt/mount/litao/t05114/test12",
                "Plan": "sealer",
                "SectorID": "s-t05114-16",
                "Paused": true,
                "PausedElapsed": "13h5m22s",
                "State": "TicketAssigned",
                "LastErr": "permanent:child process exited:pc1"
            },
            {
                "Index": 6,
                "Loccation": "/mnt/mount/litao/t05114/test11",
                "Plan": "sealer",
                "SectorID": "s-t05114-15",
                "Paused": true,
                "PausedElapsed": "13h5m22s",
                "State": "TicketAssigned",
                "LastErr": "permanent:child process exited:pc1"
            },
            {
                "Index": 7,
                "Loccation": "/mnt/mount/litao/t05114/test12",
                "Plan": "sealer",
                "SectorID": "s-t05114-17",
                "Paused": true,
                "PausedElapsed": "13h5m22s",
                "State": "TicketAssigned",
                "LastErr": "permanent:child process exited:pc1"
            },

            {

                "Index": 8,
                "Loccation": "/mnt/mount/litao/t05114/test11",
                "Plan": "sealer",
                "SectorID": "s-t05114-14",
                "Paused": true,
                "PausedElapsed": "13h5m22s",
                "State": "TicketAssigned",
                "LastErr": "permanent:child process exited:pc1"
            },
            {

                "Index": 9,
                "Loccation": "/mnt/mount/litao/t05114/test12",
                "Plan": "sealer",
                "SectorID": "s-t05114-16",
                "Paused": true,
                "PausedElapsed": "13h5m22s",
                "State": "TicketAssigned",
                "LastErr": "permanent:child process exited:pc1"
            },
            {
                "Index": 10,
                "Loccation": "/mnt/mount/litao/t05114/test11",
                "Plan": "sealer",
                "SectorID": "s-t05114-15",
                "Paused": true,
                "PausedElapsed": "13h5m22s",
                "State": "TicketAssigned",
                "LastErr": "permanent:child process exited:pc1"
            },
            {
                "Index": 11,
                "Loccation": "/mnt/mount/litao/t05114/test12",
                "Plan": "sealer",
                "SectorID": "s-t05114-17",
                "Paused": true,
                "PausedElapsed": "13h5m22s",
                "State": "TicketAssigned",
                "LastErr": "permanent:child process exited:pc1"
            },
        ]
    },
]
