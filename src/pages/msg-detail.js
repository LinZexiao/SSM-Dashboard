import Card from "@/component/card"
import { Descriptions } from "antd"
import { useParams } from "react-router-dom"

export default function (props) {
    const params = useParams()
    let { id, data } = props
    // check data
    if (!data) {
        if (!id) {
            id = params.id
        }
        data = getDataById(id)
    }
    return (
        <>
            <Card title={"Message Info"}>
                <Descriptions
                    column={1}
                    bordered
                    size="small"
                >
                    <Descriptions.Item label="id">{data.id}</Descriptions.Item>
                    <Descriptions.Item label="from">{data.from}</Descriptions.Item>
                    <Descriptions.Item label="to">{data.to}</Descriptions.Item>
                    <Descriptions.Item label="value">{data.value}</Descriptions.Item>
                    <Descriptions.Item label="method">{data.method}</Descriptions.Item>
                    <Descriptions.Item label="params">{data.params}</Descriptions.Item>
                    <Descriptions.Item label="nonce">{data.nonce}</Descriptions.Item>
                    <Descriptions.Item label="gasPrice">{data.gasPrice}</Descriptions.Item>
                    <Descriptions.Item label="gasLimit">{data.gasLimit}</Descriptions.Item>
                    <Descriptions.Item label="gasFeeCap">{data.gasFeeCap}</Descriptions.Item>
                    <Descriptions.Item label="gasPremium">{data.gasPremium}</Descriptions.Item>
                    <Descriptions.Item label="signature">{data.signature}</Descriptions.Item>
                </Descriptions>
            </Card>
        </>
    )
}


function getDataById(id) {
    return {
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
    }
}
