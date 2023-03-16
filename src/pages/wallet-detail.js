
import Card from "@/component/card"
import { Descriptions, Space } from "antd"
import { useParams } from "react-router-dom"
import MessageList from "@/component/msg-list"


export default function (props) {
    const params = useParams()
    let { id, data } = props
    const title = "Wallet Info"
    // check data
    if (!data) {
        if (!id) {
            id = params.id
        }
        data = getDataById(id)
    }
    return (
        <>
            <Space style={{ width: '100%' }} direction='vertical' size={'large'}>
                <Card title={title}>
                    <Descriptions
                        column={1}
                        bordered
                        size="small"
                    >
                        <Descriptions.Item label="address">{data.address}</Descriptions.Item>
                        <Descriptions.Item label="balance">{data.balance}</Descriptions.Item>
                        <Descriptions.Item label="nonce">{data.nonce}</Descriptions.Item>
                    </Descriptions>
                </Card>
                <MessageList pageSize={20} wallets={[id]} />
            </Space>
        </>
    )
}


function getDataById(id) {
    return {
        address: "t3wlvbp6kpxqn63dduejsxjyp5a2qhevmitkdl3agmxwf3vxsalhyu2epbzlj2p7tl76d64edvv6en22c5pbra",
        balance: "0.000000000000000000",
        nonce: 20,
        type: "secp256k1",
    }
}
