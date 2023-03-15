import { Col, Empty, Row, Select, Table, Popover, Space, Button, Descriptions } from "antd"
import { CheckCircleOutlined, QuestionCircleOutlined, ClockCircleOutlined, CloseCircleOutlined, ExclamationCircleOutlined, InfoCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { useState } from "react"
import { stateString } from "../util"
import { getDefaultFilters, InShort } from "./util";
import Card from "./card";


export default function MessageList() {

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const ret = function (content) {
        return (
            <Card title='Messages' >
                {content}
            </Card>
        )
    }

    // init wallet selector
    let walletInit = ''
    let walletOps = []
    const wallets = Object.keys(msgList)
    if (wallets.length > 0) {
        walletInit = wallets[0]
        for (const wallt of wallets) {
            walletOps.push({ label: wallt, value: wallt })
        }
    }
    const [wallet, setWallet] = useState(walletInit)
    if (wallets.length < 0) {
        return ret(<Empty description='no wallet config'></Empty>)
    }


    // preproccess data
    const msgs = msgList[wallet]
    // pre set order
    msgs.sort(sortState)

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            render: text => (<InShort text={text} />),
        },
        {
            title: 'method',
            dataIndex: 'method',
            filters: getDefaultFilters(msgs, (msg) => msg.method),
            onFilter: (value, record) => record.method === value,
        },
        {
            title: 'value',
            dataIndex: 'value',
        },
        {
            title: 'to',
            dataIndex: 'to',
            filters: getDefaultFilters(msgs, (msg) => msg.to),
            onFilter: (value, record) => record.to === value,
            render: text => (<InShort text={text} />),
        },
        {
            title: 'gasLimit',
            dataIndex: 'gasLimit',
        },
        {
            title: "gasFeeCap",
            dataIndex: 'gasFeeCap',
        }, {
            title: 'gasPremium',
            dataIndex: 'gasPremium',
        },
        {
            title: 'state',
            dataIndex: 'state',
            render: (_, record) => renderState(record),
            sorter: sortState,
            filters: getDefaultFilters(msgs, (msg) => msg.state, stateString),
            onFilter: (value, record) => record.state === value,
        },
        {
            title: 'nonce',
            dataIndex: 'nonce',
        },
        {
            title: 'time',
            dataIndex: 'time',
            sorter: sortTimeStr,
        },
    ]

    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const footer = (data) => {
        if (selectedRowKeys.length > 0) {
            return (
                <Row >
                    < Col style={{ textAlign: 'left' }}>
                        <span>
                            has selected {selectedRowKeys.length} items:
                        </span>
                    </Col>
                    <Col offset={1} style={{ textAlign: 'left' }}>
                        <a href={`#/message/markbad/${selectedRowKeys.join(',')}`}><DeleteOutlined /> mark bad</a>
                    </Col>
                </Row>
            )
        } else {
            return null
        }
    }

    const msgTable = (
        <>
            <div style={{ textAlign: 'left' }}>
                Wallet Address: <Select defaultValue={wallet} options={walletOps} bordered={false} onChange={setWallet} />
            </div>
            <Table rowSelection={rowSelection} columns={columns} rowKey='id' dataSource={msgs} footer={footer} pagination={false} />
        </>
    )

    return ret(msgTable)
}



const sortState = function (a, b) {
    const weight = {
        // UnKnown
        0: 5,
        // UnFillMsg
        1: 4,
        // FillMsg
        2: 3,
        // NonceConflictMsg
        5: 2,
        // FailedMsg
        4: 1,
        // onChainMsg
        3: 0,
    }
    if (weight[a.state] < weight[b.state]) {
        return 1;
    }
    if (weight[a.state] > weight[b.state]) {
        return -1;
    }
    // state equal
    if (a.exitCode < b.exitCode) {
        return -1;
    }
    if (a.exitCode > b.exitCode) {
        return 1;
    }
    return 0;
}


const sortTimeStr = function (a, b) {
    const timeA = new Date(a.time)
    const timeB = new Date(b.time)
    if (timeA < timeB) {
        return 1;
    }
    if (timeA > timeB) {
        return -1;
    }
    return 0;
}



const renderState = function (record) {
    switch (record.state) {
        case 1:
            // UnFillMsg
            if (record.exitCode === 0) {
                return (<Popover content={'UnFillMsg'} >
                    <ClockCircleOutlined style={{ color: 'darkOrange' }} />
                </Popover>)
            } else {
                return (<Popover overlayStyle={{ width: '50%' }} content={record.errInfo} title="UnFillMsg">
                    <ExclamationCircleOutlined style={{ color: 'darkOrange' }} />
                </Popover>)
            }
        case 2:
            // FillMsg
            return (<Popover content={'FillMsg'} >
                <ClockCircleOutlined style={{ color: 'darkblue' }} />
            </Popover>)

        case 3:
            // OnChainMsg
            if (record.exitCode === 0) {
                // exec success
                return (<Popover content={'OnChainMsg'} >
                    <CheckCircleOutlined style={{ color: 'darkgreen' }} />
                </Popover>)
            } else {
                return (<Popover content={`OnChainMsg (exit:${record.exitCode})`} >
                    <ExclamationCircleOutlined style={{ color: 'darkgreen' }} />
                </Popover>)
            }
        case 4:
            // FailedMsg
            return (<Popover content={`FailedMsg (exit:${record.exitCode})`} >
                <CloseCircleOutlined style={{ color: 'darkred' }} />
            </Popover>)
        case 5:
            // NonceConflictMsg
            return (<Popover content={'NonceConflictMsg'} >
                <ExclamationCircleOutlined style={{ color: 'darkred' }} />
            </Popover>)
        case 0:
        default:
            // UnKnown
            return (<Popover content='UnKnownState' >
                <QuestionCircleOutlined style={{ color: 'darkgrey' }} />
            </Popover>)
    }
}

// message 
const msgList = {
    'f3w7bx7wuvbqtkeitfvs352of6mpmi6ognjmck2d5sjjv2tpsygo3svnvbsut5twkafvhdnma5yuaumdnark2q': [
        {
            id: "9098cc29-5a53-4fc5-8e3c-a8088c0a12d9",
            from: "f3w7bx7wuvbqtkeitfvs352of6mpmi6ognjmck2d5sjjv2tpsygo3svnvbsut5twkafvhdnma5yuaumdnark2q",
            to: "f3v2vtyk7ydf6jqglbknyvdbgfameloqhwpqsnfd56xcx36znqg5sq5q7dbtt72qmb2a77yvjzhbgmhn7ov6qa",
            nonce: 0,
            value: "100 FIL",
            gasLimit: 7311518,
            gasFeeCap: "101649",
            gasPremium: "100595",
            method: "Send",
            state: 0,
            exitCode: 0,
            errInfo: "",
            time: "2023-02-23 06:53:20",
        },
        {
            id: "9098cc29-5a53-4fc5-8e3c-a8088c0a12v0",
            from: "f3w7bx7wuvbqtkeitfvs352of6mpmi6ognjmck2d5sjjv2tpsygo3svnvbsut5twkafvhdnma5yuaumdnark2q",
            to: "f3v2vtyk7ydf6jqglbknyvdbgfameloqhwpqsnfd56xcx36znqg5sq5q7dbtt72qmb2a77yvjzhbgmhn7ov6qa",
            nonce: 1,
            value: "100 FIL",
            gasLimit: 7311518,
            gasFeeCap: 101649,
            gasPremium: 100595,
            method: "Send",
            state: 1,
            exitCode: 0,
            errInfo: "",
            time: "2023-02-23 06:53:20",
        },
        {
            id: "38c8rcbf-ef0t-4952-b92a-de330d1b430d",
            from: "f3w7bx7wuvbqtkeitfvs352of6mpmi6ognjmck2d5sjjv2tpsygo3svnvbsut5twkafvhdnma5yuaumdnark2q",
            to: "f3v2vtyk7ydf6jqglbknyvdbgfameloqhwpqsnfd56xcx36znqg5sq5q7dbtt72qmb2a77yvjzhbgmhn7ov6qa",
            nonce: 2,
            value: "10000 FIL",
            gasLimit: 0,
            gasFeeCap: 0,
            gasPremium: 0,
            method: "Send",
            state: 1,
            exitCode: -1,
            errInfo: "gas estimate: estimating gas limit: message execution failed: exit SysErrInsufficientFunds(6), reason: message failed with backtrace: --> caused by: send:: send-- sender does not have funds to transfer(balance 899.99999926389071059, transfer 10000.0)(5: insufficient funds) (RetCode = 6)",
            time: "2023-03-03 02:47:07",
        },
        {
            id: "9098cc29-5a53-4fc5-8e3c-a8088c0a1rd0",
            from: "f3w7bx7wuvbqtkeitfvs352of6mpmi6ognjmck2d5sjjv2tpsygo3svnvbsut5twkafvhdnma5yuaumdnark2q",
            to: "f3v2vtyk7ydf6jqglbknyvdbgfameloqhwpqsnfd56xcx36znqg5sq5q7dbtt72qmb2a77yvjzhbgmhn7ov6qa",
            nonce: 1,
            value: "100 FIL",
            gasLimit: 7311518,
            gasFeeCap: 101649,
            gasPremium: 100595,
            method: "Send",
            state: 2,
            exitCode: 0,
            errInfo: "",
            time: "2023-02-23 06:53:20",
        },
        {
            id: "9098cc29-5a53-4fc5-8e3c-a8088c0a12d0",
            from: "f3w7bx7wuvbqtkeitfvs352of6mpmi6ognjmck2d5sjjv2tpsygo3svnvbsut5twkafvhdnma5yuaumdnark2q",
            to: "f3v2vtyk7ydf6jqglbknyvdbgfameloqhwpqsnfd56xcx36znqg5sq5q7dbtt72qmb2a77yvjzhbgmhn7ov6qa",
            nonce: 1,
            value: "100 FIL",
            gasLimit: 7311518,
            gasFeeCap: 101649,
            gasPremium: 100595,
            method: "Send",
            state: 3,
            exitCode: 0,
            errInfo: "",
            time: "2023-02-23 06:53:20",
        },
        {
            id: "9098cc29-5a53-4fc5-8e3c-a808ic0a12d0",
            from: "f3w7bx7wuvbqtkeitfvs352of6mpmi6ognjmck2d5sjjv2tpsygo3svnvbsut5twkafvhdnma5yuaumdnark2q",
            to: "f3v2vtyk7ydf6jqglbknyvdbgfameloqhwpqsnfd56xcx36znqg5sq5q7dbtt72qmb2a77yvjzhbgmhn7ov6qa",
            nonce: 1,
            value: "100 FIL",
            gasLimit: 7311518,
            gasFeeCap: 101649,
            gasPremium: 100595,
            method: "Send",
            state: 3,
            exitCode: -1,
            errInfo: "",
            time: "2023-02-23 06:53:20",
        },
        {
            id: "38c8acbf-ef09-4952-b92a-de330d1b430d",
            from: "f3w7bx7wuvbqtkeitfvs352of6mpmi6ognjmck2d5sjjv2tpsygo3svnvbsut5twkafvhdnma5yuaumdnark2q",
            to: "f3v2vtyk7ydf6jqglbknyvdbgfameloqhwpqsnfd56xcx36znqg5sq5q7dbtt72qmb2a77yvjzhbgmhn7ov6qa",
            nonce: 2,
            value: "10000 FIL",
            gasLimit: 0,
            gasFeeCap: 0,
            gasPremium: 0,
            method: "Init",
            state: 4,
            exitCode: -1,
            errInfo: "gas estimate: estimating gas limit: message execution failed: exit SysErrInsufficientFunds(6), reason: message failed with backtrace: --> caused by: send:: send-- sender does not have funds to transfer(balance 899.99999926389071059, transfer 10000.0)(5: insufficient funds) (RetCode = 6)",
            time: "2023-03-03 02:47:07",
        },
        {
            id: "38c8acbf-ef0t-4952-b92a-de330d1b430d",
            from: "f3w7bx7wuvbqtkeitfvs352of6mpmi6ognjmck2d5sjjv2tpsygo3svnvbsut5twkafvhdnma5yuaumdnark2q",
            to: "f3v2vtyk7ydf6jqglbknyvdbgfameloqhwpqsnfd56xcx36znqg5sq5q7dbtt72qmb2a77yvjzhbgmhn7ov6qa",
            nonce: 2,
            value: "10000 FIL",
            gasLimit: 0,
            gasFeeCap: 0,
            gasPremium: 0,
            method: "Send",
            state: 5,
            exitCode: -1,
            errInfo: "gas estimate: estimating gas limit: message execution failed: exit SysErrInsufficientFunds(6), reason: message failed with backtrace: --> caused by: send:: send-- sender does not have funds to transfer(balance 899.99999926389071059, transfer 10000.0)(5: insufficient funds) (RetCode = 6)",
            time: "2023-03-03 02:47:07",
        },

        {
            id: "9098cc29-5a53-4fc5-8e3c-a8088c0a12d9q",
            from: "f3w7bx7wuvbqtkeitfvs352of6mpmi6ognjmck2d5sjjv2tpsygo3svnvbsut5twkafvhdnma5yuaumdnark2q",
            to: "f3v2vtyk7ydf6jqglbknyvdbgfameloqhwpqsnfd56xcx36znqg5sq5q7dbtt72qmb2a77yvjzhbgmhn7ov6qa",
            nonce: 0,
            value: "100 FIL",
            gasLimit: 7311518,
            gasFeeCap: "101649",
            gasPremium: "100595",
            method: "Send",
            state: 0,
            exitCode: 0,
            errInfo: "",
            time: "2023-02-23 06:53:20",
        },
        {
            id: "9098cc29-5a53-4fc5-8e3c-a8088c0a12v0w",
            from: "f3w7bx7wuvbqtkeitfvs352of6mpmi6ognjmck2d5sjjv2tpsygo3svnvbsut5twkafvhdnma5yuaumdnark2q",
            to: "f3v2vtyk7ydf6jqglbknyvdbgfameloqhwpqsnfd56xcx36znqg5sq5q7dbtt72qmb2a77yvjzhbgmhn7ov6qa",
            nonce: 1,
            value: "100 FIL",
            gasLimit: 7311518,
            gasFeeCap: 101649,
            gasPremium: 100595,
            method: "Send",
            state: 1,
            exitCode: 0,
            errInfo: "",
            time: "2023-02-23 06:53:20",
        },
        {
            id: "38c8rcbf-ef0t-4952-b92a-de330d1b430de",
            from: "f3w7bx7wuvbqtkeitfvs352of6mpmi6ognjmck2d5sjjv2tpsygo3svnvbsut5twkafvhdnma5yuaumdnark2q",
            to: "f3v2vtyk7ydf6jqglbknyvdbgfameloqhwpqsnfd56xcx36znqg5sq5q7dbtt72qmb2a77yvjzhbgmhn7ov6qa",
            nonce: 2,
            value: "10000 FIL",
            gasLimit: 0,
            gasFeeCap: 0,
            gasPremium: 0,
            method: "Send",
            state: 1,
            exitCode: -1,
            errInfo: "gas estimate: estimating gas limit: message execution failed: exit SysErrInsufficientFunds(6), reason: message failed with backtrace: --> caused by: send:: send-- sender does not have funds to transfer(balance 899.99999926389071059, transfer 10000.0)(5: insufficient funds) (RetCode = 6)",
            time: "2023-03-03 02:47:07",
        },
        {
            id: "9098cc29-5a53-4fc5-8e3c-a8088c0a1rd0r",
            from: "f3w7bx7wuvbqtkeitfvs352of6mpmi6ognjmck2d5sjjv2tpsygo3svnvbsut5twkafvhdnma5yuaumdnark2q",
            to: "f3v2vtyk7ydf6jqglbknyvdbgfameloqhwpqsnfd56xcx36znqg5sq5q7dbtt72qmb2a77yvjzhbgmhn7ov6qa",
            nonce: 1,
            value: "100 FIL",
            gasLimit: 7311518,
            gasFeeCap: 101649,
            gasPremium: 100595,
            method: "Send",
            state: 2,
            exitCode: 0,
            errInfo: "",
            time: "2023-02-23 06:53:20",
        },
        {
            id: "9098cc29-5a53-4fc5-8e3c-a8088c0a12d0t",
            from: "f3w7bx7wuvbqtkeitfvs352of6mpmi6ognjmck2d5sjjv2tpsygo3svnvbsut5twkafvhdnma5yuaumdnark2q",
            to: "f3v2vtyk7ydf6jqglbknyvdbgfameloqhwpqsnfd56xcx36znqg5sq5q7dbtt72qmb2a77yvjzhbgmhn7ov6qa",
            nonce: 1,
            value: "100 FIL",
            gasLimit: 7311518,
            gasFeeCap: 101649,
            gasPremium: 100595,
            method: "Send",
            state: 3,
            exitCode: 0,
            errInfo: "",
            time: "2023-02-23 06:53:20",
        },
        {
            id: "9098cc29-5a53-4fc5-8e3c-a808ic0a12d0t",
            from: "f3w7bx7wuvbqtkeitfvs352of6mpmi6ognjmck2d5sjjv2tpsygo3svnvbsut5twkafvhdnma5yuaumdnark2q",
            to: "f3v2vtyk7ydf6jqglbknyvdbgfameloqhwpqsnfd56xcx36znqg5sq5q7dbtt72qmb2a77yvjzhbgmhn7ov6qa",
            nonce: 1,
            value: "100 FIL",
            gasLimit: 7311518,
            gasFeeCap: 101649,
            gasPremium: 100595,
            method: "Send",
            state: 3,
            exitCode: -1,
            errInfo: "",
            time: "2023-02-23 06:53:20",
        },
        {
            id: "38c8acbf-ef09-4952-b92a-de330d1b430dy",
            from: "f3w7bx7wuvbqtkeitfvs352of6mpmi6ognjmck2d5sjjv2tpsygo3svnvbsut5twkafvhdnma5yuaumdnark2q",
            to: "f3v2vtyk7ydf6jqglbknyvdbgfameloqhwpqsnfd56xcx36znqg5sq5q7dbtt72qmb2a77yvjzhbgmhn7ov6qa",
            nonce: 2,
            value: "10000 FIL",
            gasLimit: 0,
            gasFeeCap: 0,
            gasPremium: 0,
            method: "Init",
            state: 4,
            exitCode: -1,
            errInfo: "gas estimate: estimating gas limit: message execution failed: exit SysErrInsufficientFunds(6), reason: message failed with backtrace: --> caused by: send:: send-- sender does not have funds to transfer(balance 899.99999926389071059, transfer 10000.0)(5: insufficient funds) (RetCode = 6)",
            time: "2023-03-03 02:47:07",
        },
        {
            id: "38c8acbf-ef0t-4952-b92a-de330d1b430du",
            from: "f3w7bx7wuvbqtkeitfvs352of6mpmi6ognjmck2d5sjjv2tpsygo3svnvbsut5twkafvhdnma5yuaumdnark2q",
            to: "f3v2vtyk7ydf6jqglbknyvdbgfameloqhwpqsnfd56xcx36znqg5sq5q7dbtt72qmb2a77yvjzhbgmhn7ov6qa",
            nonce: 2,
            value: "10000 FIL",
            gasLimit: 0,
            gasFeeCap: 0,
            gasPremium: 0,
            method: "Send",
            state: 5,
            exitCode: -1,
            errInfo: "gas estimate: estimating gas limit: message execution failed: exit SysErrInsufficientFunds(6), reason: message failed with backtrace: --> caused by: send:: send-- sender does not have funds to transfer(balance 899.99999926389071059, transfer 10000.0)(5: insufficient funds) (RetCode = 6)",
            time: "2023-03-03 02:47:07",
        }
    ],
    'f3w7bx7wuvbqtkeitfvs352of6mpmi6ognjmck2d5sjjv2tpsygo3svnvbsut5twkafvhdnma5yuaumdnark5q': [

    ],

} 
