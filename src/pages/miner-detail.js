
import Card from "@/component/card"
import { Descriptions, Space } from "antd"
import { useParams } from "react-router-dom"
import SectorList from "../component/sector-list"


export default function (props) {
    const params = useParams()
    let { id, data } = props
    const title = "Miner Info"
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
                        <Descriptions.Item label="owner">{data.Owner}</Descriptions.Item>
                        <Descriptions.Item label="worker">{data.Worker}</Descriptions.Item>
                        <Descriptions.Item label="NewWorker">{data.NewWorker}</Descriptions.Item>
                        <Descriptions.Item label="WorkerChangeEpoch">{data.WorkerChangeEpoch}</Descriptions.Item>
                        <Descriptions.Item label="ControlAddresses">{data.ControlAddresses}</Descriptions.Item>
                        <Descriptions.Item label="peerId">{data.PeerId}</Descriptions.Item>
                        <Descriptions.Item label="multiaddrs">{data.Multiaddrs}</Descriptions.Item>
                        <Descriptions.Item label="sectorSize">{data.SectorSize}</Descriptions.Item>
                        <Descriptions.Item label="WindowPoStProofType">{data.WindowPoStProofType}</Descriptions.Item>
                        <Descriptions.Item label="windowPoStPartitionSectors">{data.WindowPoStPartitionSectors}</Descriptions.Item>
                        <Descriptions.Item label="ConsensusFaultElapsed">{data.ConsensusFaultElapsed}</Descriptions.Item>
                        <Descriptions.Item label="Beneficiary">{data.Beneficiary}</Descriptions.Item>
                        {/* <Descriptions.Item label="BeneficiaryTerm">{data.BeneficiaryTerm}</Descriptions.Item> */}
                        {/* <Descriptions.Item label="PendingBeneficiaryTerm">{data.PendingBeneficiaryTerm}</Descriptions.Item> */}
                        {/* <Descriptions.Item label="TotalPower">{data.TotalPower}</Descriptions.Item> */}
                        <Descriptions.Item label="AvailBalance">{data.AvailBalance}</Descriptions.Item>
                        <Descriptions.Item label="vestingFunds">{data.vestingFunds}</Descriptions.Item>
                        {/* <Descriptions.Item label="Deadline">{data.Deadline}</Descriptions.Item> */}
                    </Descriptions>
                </Card>

                <SectorList />

            </Space>
        </>
    )
}


function getDataById(id) {
    return {
        "Owner": "f0100",
        "Worker": "f0100",
        "NewWorker": "\u003cempty\u003e",
        "ControlAddresses": null,
        "WorkerChangeEpoch": -1,
        "PeerId": "12D3KooWCZ3tmK8D5s43hjDaoZPBhs9JVRLwsURCrzqgrHwg5jis",
        "Multiaddrs": null,
        "WindowPoStProofType": 5,
        "SectorSize": 2048,
        "WindowPoStPartitionSectors": 2,
        "ConsensusFaultElapsed": -1,
        "Beneficiary": "f0100",
        "BeneficiaryTerm": {
            "Quota": "0",
            "UsedQuota": "0",
            "Expiration": 0
        },
        "PendingBeneficiaryTerm": null,
        "MinerPower": {
            "RawBytePower": "4096",
            "QualityAdjPower": "40960"
        },
        "TotalPower": {
            "RawBytePower": "4096",
            "QualityAdjPower": "40960"
        },
        "HasMinPower": true,
        "AvailBalance": "2283934807580701430497338",
        "Deadline": {
            "CurrentEpoch": 170851,
            "PeriodStart": 170578,
            "Index": 4,
            "Open": 170818,
            "Close": 170878,
            "Challenge": 170798,
            "FaultCutoff": 170748,
            "WPoStPeriodDeadlines": 48,
            "WPoStProvingPeriod": 2880,
            "WPoStChallengeWindow": 60,
            "WPoStChallengeLookback": 20,
            "FaultDeclarationCutoff": 70
        }
    }
}
