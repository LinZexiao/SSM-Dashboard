
import Card from "@/component/card"
import { Descriptions } from "antd"
import { useParams } from "react-router-dom"


export default function (props) {
    const params = useParams()
    let { id, data } = props
    const title = "Deal Info"
    // check data
    if (!data) {
        if (!id) {
            id = params.id
        }
        data = getDataById(id)
    }
    return (
        <>
            <Card title={title}>
                <Descriptions
                    column={1}
                    bordered
                    size="small"
                >
                    <Descriptions.Item label="proposalCid">{data.proposalCid}</Descriptions.Item>
                    <Descriptions.Item label="deal id">{data.dealId}</Descriptions.Item>
                    <Descriptions.Item label="state">{data.state}</Descriptions.Item>
                    <Descriptions.Item label="provider">{data.provider}</Descriptions.Item>
                    <Descriptions.Item label="client">{data.client}</Descriptions.Item>
                    <Descriptions.Item label="publishCid">{data.publishCid}</Descriptions.Item>
                    <Descriptions.Item label="pieceState">{data.pieceState}</Descriptions.Item>
                    <Descriptions.Item label="size">{data.size}</Descriptions.Item>
                    <Descriptions.Item label="pricePerEpoch">{data.pricePerEpoch}</Descriptions.Item>
                    <Descriptions.Item label="duration">{data.duration}</Descriptions.Item>
                    <Descriptions.Item label="activationEpoch">{data.activationEpoch}</Descriptions.Item>
                    <Descriptions.Item label="startEpoch">{data.startEpoch}</Descriptions.Item>
                    <Descriptions.Item label="message">{data.message}</Descriptions.Item>
                </Descriptions>
            </Card>
        </>
    )
}


function getDataById(id) {
    return {
        proposalCid: "bafyreihcvsqldlahiro5navwbnnmzsgink44ibdikgnm5fxrzndccc3cbq",
        dealId: 33088,
        state: "StorageDealActive",
        client: "t3wlvbp6kpxqn63dduejsxjyp5a2qhevmitkdl3agmxwf3vxsalhyu2epbzlj2p7tl76d64edvv6en22c5pbra",
        provider: "t04079",
        publishCid: "bafk4bzacicjda3jf2c53rkpxxfcg6qduzbkt4tlbv4qqvts2fddnt7kyjahanexuc2cvsljwyu2kqvguwolke7vfp2ofowdsuwbhojc65qmqg2d4",
        pieceState: "Proving",
        size: 16384,
        pricePerEpoch: 0.000000015849369564,
        duration: 1038758,
        activationEpoch: 1676972225794208810,
        startEpoch: 1676972225794208810,
        message: "",
    }
}
