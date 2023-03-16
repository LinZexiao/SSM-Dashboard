import logo from '@/asset/venus-hero-logo.png'
import { Col, Row, Select, Input, Affix, Descriptions } from 'antd';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Search = Input.Search

const tittleStyle = {
    fontSize: '35px',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
    fontWeight: 'bold',
    color: '#fce62d'
}

export default function Header(props) {
    const nullSearchResult = {
        key: null,
        type: null,
        data: null,
    }
    const [affixed, setAffixed] = useState(false)
    const [searchResult, setSearchResult] = useState(nullSearchResult)

    const navigate = useNavigate()

    const searchStyle = {
        verticalAlign: 'middle',
    }

    if (affixed) {
        searchStyle["backgroundColor"] = '#eaeaee'
        searchStyle["boxShadow"] = 'rgb(50 50 93 / 25%) 0px 6px 12px -2px, rgb(0 0 0 / 30%) 0px 3px 7px -3px'
    }

    const onSearch = value => {
        let l = value.length
        if (l === 0) {
            return
        } else if (l < 10) {
            // miner address
            navigate(`/miner/${value}`)
        } else if (l < 55) {
            // message id
            navigate(`/message/${value}`)
        } else if (l < 66) {
            // deal cid
            navigate(`/deal/${value}`)
        } else if (l < 88) {
            // wallet address
            navigate(`/wallet/${value}`)
        } else {
            navigate(`/search/${value}`)
        }
    }

    return (
        <div>
            <Row align="middle" >
                <Col span={2} >
                    <div style={{ height: '64px' }} >
                        <Link to={'/'} >
                            <img src={logo} style={{ height: '64px' }} alt="Venus" />
                        </Link>
                    </div>
                </Col>
                <Col span={2} >
                    <Link to={'/'} ><div style={tittleStyle}>  SSM </div> </Link>
                </Col>
                <Col offset={2} span={12} >
                    <Affix offsetTop={0} onChange={setAffixed}>
                        <Search style={searchStyle} size='middle' className='App-search' placeholder='enter cid or address' width={400} allowClear onSearch={onSearch} />
                    </Affix>
                </Col>
                <Col offset={4} span={2} >
                    <Select size='small' defaultValue={"en"} options={[{ label: 'zh', value: 'zhCN' }, { label: 'en', value: 'enUS' }]} />
                </Col>
            </Row>

        </div>
    )
}



const SearchResult = (props) => {
    const { data } = props

    const Message = (props) => {
        const { data } = props
        return (
            <>

                <Descriptions
                    column={1}
                    bordered
                    title="Message"
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
            </>
        )
    }

    const Miner = (props) => {
        const { data } = props
        return (
            <>
                <Descriptions
                    column={1}
                    bordered
                    title="Miner"
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
            </>
        )
    }

    const Wallet = (props) => {
        const { data } = props
        return (
            <>
                <Descriptions
                    column={1}
                    bordered
                    title="Wallet"
                >
                    <Descriptions.Item label="id">{data.id}</Descriptions.Item>
                    <Descriptions.Item label="address">{data.address}</Descriptions.Item>
                    <Descriptions.Item label="balance">{data.balance}</Descriptions.Item>
                    <Descriptions.Item label="nonce">{data.nonce}</Descriptions.Item>
                </Descriptions>
            </>
        )
    }

    const Deal = (props) => {
        const { data } = props
        return (
            <>
                <Descriptions
                    column={1}
                    bordered
                    title="Deal"
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
            </>
        )
    }





    switch (data.type) {
        case 'message':
            return <Message data={data.data} />
        case 'miner':
            return <Miner data={data.data} />
        case 'wallet':
            return <Wallet data={data.data} />
        case 'deal':
            return <Deal data={data.data} />
        default:
            return <div>Not Found</div>
    }
}


const search = value => {
    // is uuid
    // is cid
    // is address
    // is miner

    const dataBase = {
        '9098cc29-5a53-4fc5-8e3c-a8088c0a12d9': {
            type: 'message',
            data: {
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
        },
        'bafyreig7qtada4mnnfeaqtn5kg74z5qlcocjmvuqeh5sxcpeehlv32rhcq': {
            type: 'deal',
            data: {
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
            }
        },
        'bafyreihcvsqldlahiro5navwbnnmzsgink44ibdikgnm5fxrzndcc3cbq': {
            type: 'deal',
            data: {
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
        },
        't3wlvbp6kpxqn63dduejsxjyp5a2qhevmitkdl3agmxwf3vxsalhyu2epbzlj2p7tl76d64edvv6en22c5pbra':
        {
            type: 'wallet',
            data: {
                address: "t3wlvbp6kpxqn63dduejsxjyp5a2qhevmitkdl3agmxwf3vxsalhyu2epbzlj2p7tl76d64edvv6en22c5pbra",
                balance: "0.000000000000000000",
                nonce: 0,
                type: "bls",
            }
        },
        't3wlvbp6kpxqn63dduejsxjyp5a2qhevmitkdl3agmxwf3vxslhyu2epbzlj2p7tl76d64edvv6en22c5pbra': {
            type: 'wallet', data: {
                address: "t3wlvbp6kpxqn63dduejsxjyp5a2qhevmitkdl3agmxwf3vxsalhyu2epbzlj2p7tl76d64edvv6en22c5pbra",
                balance: "0.000000000000000000",
                nonce: 0,
                type: "secp256k1",
            }
        },
        'f01001': {
            type: 'miner',
            data: {
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
        },
    }

    // if value in dataBase
    if (dataBase[value]) {
        return dataBase[value];
    } else {
        // if value not in dataBase
        return {
            type: 'notfound',
            data: null,
        }
    }
}
