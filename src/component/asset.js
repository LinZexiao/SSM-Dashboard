import { Tag } from "antd";
import { useNavigate } from "react-router-dom";
import Card from "./card";
import Short from "./short";


export default function Asset({ wallets, miners }) {
    if (!wallets) wallets = []
    if (!miners) miners = []

    const navigate = useNavigate()

    const walletTagss = wallets.map((wallet) => {
        return (
            <Tag color={'gold'} key={wallet} onClick={() => { navigate(`/wallet/${wallet}`) }} style={{ cursor: "pointer" }}>
                <Short text={wallet} />
            </Tag>
        )
    })
    const minerTagss = miners.map((miner) => {
        return (
            <Tag color={'purple'} key={miner} onClick={() => { navigate(`/miner/${miner}`) }} style={{ cursor: "pointer" }}>
                <Short text={miner} />
            </Tag>
        )
    })


    return (
        <>
            <Card title={"Asset"} >
                {walletTagss}
                {minerTagss}
            </Card>
        </>
    )
}
