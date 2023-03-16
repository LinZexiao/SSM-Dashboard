import { FilInShort, PowerInShort } from "@/util"
import { Row, Col, Statistic } from "antd"
import Card from "./card"



const shortFil = FilInShort
const shortPower = PowerInShort

export default function Summary(props) {


    let availBalance = 0
    let totalQualityAdjPower = 0
    let totalRawBytePower = 0

    let minerCollateral = 0
    let marketCollateral = 0

    let winCount = 0
    let gasUsed = 0



    // miner calculation
    for (let miner in minerList) {
        availBalance += minerList[miner].AvailBalance
        availBalance += minerList[miner].MarketBalance.Available

        minerCollateral += minerList[miner].LockFunds.InitialPledge
        minerCollateral += minerList[miner].LockFunds.PreCommitDeposits
        minerCollateral += minerList[miner].LockFunds.VestingFunds
        marketCollateral += minerList[miner].MarketBalance.Locked

        totalQualityAdjPower += minerList[miner].MinerPower.QualityAdjPower
        totalRawBytePower += minerList[miner].MinerPower.RawBytePower
    }

    // wallet calculation
    for (let wallet of walletList) {
        availBalance += wallet.balance
    }


    return (
        <div style={{ textAlign: 'center' }}>
            <Card
                title={"Summary"}
            >
                <Row gutter={16}>
                    <Col span={6}>
                        <Statistic title="Available Balance" value={shortFil(availBalance)} />
                    </Col>
                    <Col span={6}>
                        <Statistic title="Total Collateral" value={shortFil(minerCollateral + marketCollateral)} />
                    </Col>
                    <Col span={6}>
                        <Statistic title="Raw Byte Power" value={shortPower(totalRawBytePower)} />
                    </Col>
                    <Col span={6}>
                        <Statistic title="Quality Adjust Power" value={shortPower(totalQualityAdjPower)} />
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={6}>
                        <Statistic title="Gas Used" value={`${gasUsed} aFIL/24h`} />
                    </Col>
                    <Col span={6}>
                        <Statistic title="Win Count" value={`${winCount} /week`} />
                    </Col>
                    <Col span={6}>
                        <Statistic title="Miner Collateral" value={shortFil(minerCollateral)} />
                    </Col>
                    <Col span={6}>
                        <Statistic title="Market Collateral" value={shortFil(marketCollateral)} />
                    </Col>
                </Row>
            </Card>
        </div>
    )
}


// wallet list
const walletList = [
    {
        address: "t3wlvbp6kpxqn63dduejsxjyp5a2qhevmitkdl3agmxwf3vxsalhyu2epbzlj2p7tl76d64edvv6en22c5pbra",
        balance: 2283934807580701430497338,
        nonce: 0,
        type: "bls",
    },
    {
        address: "t3wlvbp6kpxqn63dduejsxjyp5a2qhevmitkdl3agmxwf3vxsalhyu2epbzlj2p7tl76d64edvv6en22c5pbra",
        balance: 2283934807580701430497338,
        nonce: 0,
        type: "secp256k1",
    },
]

// miner list
const minerList = {
    'f01001': {
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
            "RawBytePower": 4096,
            "QualityAdjPower": 40960
        },
        "TotalPower": {
            "RawBytePower": 4096,
            "QualityAdjPower": 40960,
        },
        "HasMinPower": true,
        "AvailBalance": 2283934807580701430497338,
        "LockFunds": {
            "InitialPledge": 2,
            "PreCommitDeposits": 0,
            "VestingFunds": 2283934807580701430497338,
        },
        "MarketBalance": {
            "Locked": 0,
            "Available": 0
        },
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
    },
    'f01002': {
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
            "RawBytePower": 4096,
            "QualityAdjPower": 40960
        },
        "TotalPower": {
            "RawBytePower": 4096,
            "QualityAdjPower": 40960,
        },
        "HasMinPower": true,
        "AvailBalance": 2283934807580701430497338,
        "LockFunds": {
            "InitialPledge": 2,
            "PreCommitDeposits": 0,
            "VestingFunds": 2283934807580701430497338,
        },
        "MarketBalance": {
            "Locked": 0,
            "Available": 0
        },
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
        },
    },
}
