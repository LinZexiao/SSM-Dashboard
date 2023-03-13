
// message 
const msgList = [
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
        state: "OnChainMsg",
        exitCode: 0,
        errInfo: "",
        time: "2023-02-23 06:53:20",
    },
    {
        id: "9098cc29-5a53-4fc5-8e3c-a8088c0a12d9",
        from: "f3w7bx7wuvbqtkeitfvs352of6mpmi6ognjmck2d5sjjv2tpsygo3svnvbsut5twkafvhdnma5yuaumdnark2q",
        to: "f3v2vtyk7ydf6jqglbknyvdbgfameloqhwpqsnfd56xcx36znqg5sq5q7dbtt72qmb2a77yvjzhbgmhn7ov6qa",
        nonce: 1,
        value: "100 FIL",
        gasLimit: 7311518,
        gasFeeCap: 101649,
        gasPremium: 100595,
        method: "Send",
        state: "OnChainMsg",
        exitCode: 0,
        errInfo: "",
        time: "2023-02-23 06:53:20",
    },
    {
        id: "38c8acbf-ef09-4952-b92a-de330d1b430d",
        from: "f3w7bx7wuvbqtkeitfvs352of6mpmi6ognjmck2d5sjjv2tpsygo3svnvbsut5twkafvhdnma5yuaumdnark2q",
        to: "f3v2vtyk7ydf6jqglbknyvdbgfameloqhwpqsnfd56xcx36znqg5sq5q7dbtt72qmb2a77yvjzhbgmhn7ov6qa",
        nonce: 0,
        value: "10000 FIL",
        gasLimit: 0,
        gasFeeCap: 0,
        gasPremium: 0,
        method: "Send",
        state: "UnFillMsg",
        exitCode: -1,
        errInfo: "gas estimate: estimating gas limit: message execution failed: exit SysErrInsufficientFunds(6), reason: message failed with backtrace: --> caused by: send:: send-- sender does not have funds to transfer(balance 899.99999926389071059, transfer 10000.0)(5: insufficient funds) (RetCode = 6)",
        time: "2023-03-03 02:47:07",
    }
]

// ProposalCid  DealId  State  PieceState  Client  Provider  Size  Price  Duration

// Creation         Verified  ProposalCid                                                  DealId  State                         PieceState  Client                                                                                  Provider  Size    Price                     Duration  TransferChannelID                                                                                                              AddFundCid  PublishCid                                                                                                         Message
// Feb 21 02: 11: 45  false     bafyreiebmsh2kgyugj5myaqfzeh7zkjgokky2jllsvszv2rtifhrabd3yq  27871   StorageDealActive             Proving     t3wlvbp6kpxqn63dduejsxjyp5a2qhevmitkdl3agmxwf3vxsalhyu2epbzlj2p7tl76d64edvv6en22c5pbra  t04079    8KiB    0.000000007931749236 FIL  1039684   12D3KooWDauUEtYfQaYoNCAQKWzdmY3eB9Bz8HxSFUEK6srzU4jJ - 12D3KooWR9v5bkinxHh4QyqQENb3DV7skfVqMva8LjLwBcwFN6Fm - 1675833169705342655              bafk4bzacibl3twbul5vmzp3f2fgqy5y3xzh7ntptfrskskoz67ldszjnlp4bxvbm4qbibaw3r5sdqwqgwyare44hggo42mca5fks7sqgar52fv3d
// Feb 21 09: 37: 05  false     bafyreig7qtada4mnnfeaqtn5kg74z5qlcocjmvuqeh5sxcpeehlv32rhcq  33087   StorageDealFailing            Undefine    t3wlvbp6kpxqn63dduejsxjyp5a2qhevmitkdl3agmxwf3vxsalhyu2epbzlj2p7tl76d64edvv6en22c5pbra  t04079    16MiB   0.0000162315 FIL          1038816   12D3KooWDauUEtYfQaYoNCAQKWzdmY3eB9Bz8HxSFUEK6srzU4jJ - 12D3KooWR9v5bkinxHh4QyqQENb3DV7skfVqMva8LjLwBcwFN6Fm - 1676972225794208809              bafk4bzacic2v2ujktaqgqgpaiohyudqvwgn2ebsbclzsy2abn2eiuuox6sh7iblixe63z2yt2pjexrhnm7ag76ul4unkjzllwk66gvibhxvaustx  packing piece baga6ea4seaqohk5jbxgckkqikvbws7ixr66jnas7r5icx3cwp7ylevn2wbtacfa: unable to select a piece storage that have enough space for piece(13207844)
// Feb 21 09: 55: 43  false     bafyreihcvsqldlahiro5navwbnnmzsgink44ibdikgnm5fxrzndccc3cbq  33088   StorageDealActive             Proving     t3wlvbp6kpxqn63dduejsxjyp5a2qhevmitkdl3agmxwf3vxsalhyu2epbzlj2p7tl76d64edvv6en22c5pbra  t04079    16KiB   0.000000015849369564 FIL  1038758   12D3KooWDauUEtYfQaYoNCAQKWzdmY3eB9Bz8HxSFUEK6srzU4jJ - 12D3KooWR9v5bkinxHh4QyqQENb3DV7skfVqMva8LjLwBcwFN6Fm - 1676972225794208810              bafk4bzacicjda3jf2c53rkpxxfcg6qduzbkt4tlbv4qqvts2fddnt7kyjahanexuc2cvsljwyu2kqvguwolke7vfp2ofowdsuwbhojc65qmqg2d4
// Feb 24 03: 37: 09  false     bafyreiali7lqcrskxz7c2wgo5uevbdb7l4g7fu77a43n7cxyla7cesbcha  33746   StorageDealActive             Proving     t3wlvbp6kpxqn63dduejsxjyp5a2qhevmitkdl3agmxwf3vxsalhyu2epbzlj2p7tl76d64edvv6en22c5pbra  t04079    256KiB  0.00000025378450656 FIL   1039504   12D3KooWDauUEtYfQaYoNCAQKWzdmY3eB9Bz8HxSFUEK6srzU4jJ - 12D3KooWR9v5bkinxHh4QyqQENb3DV7skfVqMva8LjLwBcwFN6Fm - 1677144917499804599              bafk4bzaciaxgpnoq6tcrntsbusojqx66o24t6ziogp43bhjtolgmpm6zidi2wjwcf4gg5rfmcfnbcbyax4hfqjp7fobuyprwkgauae5nsdebfqxd
// Feb 28 11: 05: 39  false     bafyreib3fypy6aoa3fptwg3ovvjs4qtlryfhbb2hyd2kupfvzykniy622i  37156   StorageDealAwaitingPreCommit  Assigned    t3wlvbp6kpxqn63dduejsxjyp5a2qhevmitkdl3agmxwf3vxsalhyu2epbzlj2p7tl76d64edvv6en22c5pbra  t05114    512KiB  0.000000507192611411 FIL  1038731   12D3KooWDauUEtYfQaYoNCAQKWzdmY3eB9Bz8HxSFUEK6srzU4jJ - 12D3KooWR9v5bkinxHh4QyqQENb3DV7skfVqMva8LjLwBcwFN6Fm - 1677144917499804601              bafk4bzacicjxy3mhjnmn33hjrvopsn5btu3v3a4hvi762neykgnbouqatxaorwbcwklausyq5qytbbhtwccm3zuptq27bloyu2eilvpsk4iq4z24
const dealList = [
    {
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
    },
    {
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
    },
    {
        proposalCid: "bafyreiali7lqcrskxz7c2wgo5uevbdb7l4g7fu77a43n7cxyla7cesbcha",
        dealId: 33746,
        state: "StorageDealActive",
        client: "t3wlvbp6kpxqn63dduejsxjyp5a2qhevmitkdl3agmxwf3vxsalhyu2epbzlj2p7tl76d64edvv6en22c5pbra",
        provider: "t04079",
        publishCid: "bafk4bzaciaxgpnoq6tcrntsbusojqx66o24t6ziogp43bhjtolgmpm6zidi2wjwcf4gg5rfmcfnbcbyax4hfqjp7fobuyprwkgauae5nsdebfqxd",
        pieceState: "Proving",
        size: 256,
        pricePerEpoch: 0.00000025378450656,
        duration: 1039504,
        activationEpoch: 1677144917499804599,
        startEpoch: 1677144917499804599,
        message: "",
    },
    {
        proposalCid: "bafyreib3fypy6aoa3fptwg3ovvjs4qtlryfhbb2hyd2kupfvzykniy622i",
        dealId: 37156,
        state: "StorageDealAwaitingPreCommit",
        client: "t3wlvbp6kpxqn63dduejsxjyp5a2qhevmitkdl3agmxwf3vxsalhyu2epbzlj2p7tl76d64edvv6en22c5pbra",
        provider: "t05114",
        publishCid: "bafk4bzacicjxy3mhjnmn33hjrvopsn5btu3v3a4hvi762neykgnbouqatxaorwbcwklausyq5qytbbhtwccm3zuptq27bloyu2eilvpsk4iq4z24",
        pieceState: "Assigned",
        size: 524288,
        pricePerEpoch: 0.000000507192611411,
        duration: 1038731,
        activationEpoch: 1677144917499804601,
        startEpoch: 1677144917499804601,
        message: "",
    },
]

// wallet list
const walletList = [
    {
        address: "t3wlvbp6kpxqn63dduejsxjyp5a2qhevmitkdl3agmxwf3vxsalhyu2epbzlj2p7tl76d64edvv6en22c5pbra",
        balance: "0.000000000000000000",
        nonce: 0,
        type: "bls",
    },
    {
        address: "t3wlvbp6kpxqn63dduejsxjyp5a2qhevmitkdl3agmxwf3vxsalhyu2epbzlj2p7tl76d64edvv6en22c5pbra",
        balance: "0.000000000000000000",
        nonce: 0,
        type: "secp256k1",
    },
]

// Chain: [sync ok][basefee 100 aFIL]
// Miner: t01000(2 KiB sectors)
// Power: 40 Ki / 40 Ki(100.0000 %)
// Raw: 4 KiB / 4 KiB(100.0000 %)
// Committed: 4 KiB
// Proving: 4 KiB
// Projected average block win rate: 20024.16 / week(every 30s)
// Projected block win with 99.9 % probability every 41s
//     (projections DO NOT account for future network and miner growth)

// Miner Balance: 10058951.536 FIL
// PreCommit: 0
// Pledge: 2 aFIL
// Vesting: 5498595.395 FIL
// Available: 4560356.141 FIL
// Market Balance: 0
// Locked: 0
// Available: 0
// Worker Balance: 49989000 FIL
// Total Spendable: 54549356.14 FIL
// Beneficiary: t0100
// Sectors:
// Total: 0
// Workers: Seal(1) WdPoSt(0) WinPoSt(0)
// Storage Deals: 0, 0 B
// Retrieval Deals(complete): 0, 0 B


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
    },
}


// thread list 

// Index  Loc                        Plan    SectorID       Paused  PausedElapsed  State           LastErr
// 0 /mnt/mount/litao/t05114/test11  sealer  s-t05114-14  true    13h5m22s       TicketAssigned  permanent:child process exited:pc1
// 1 /mnt/mount/litao/t05114/test12  sealer  s-t05114-16  true    13h5m22s       TicketAssigned  permanent:child process exited:pc1
// 2 /mnt/mount/litao/t05114/test13  sealer  s-t05114-17  true    12h53m16s      TicketAssigned  permanent:child process exited:pc1
// 3 /mnt/mount/litao/t05114/test14  sealer  s-t05114-15  true    13h5m22s       TicketAssigned  permanent:child process exited:pc1

// Name                 Dest                  Threads  Empty  Paused  Errors  LastPing(with ! if expired)
// 200.25               192.168.200.25:17891  6        0      0       0       451h37m31.660624218s(!)
// calib-t04097         127.0.0.1:17891       7        0      0       0       186h29m38.660637643s(!)
// calib-t04097-200.25  192.168.200.25:17891  1        0      1       1       473h48m55.660643464s(!)
// litao                192.168.200.6:17891   4        4      0       0       201h18m58.660649936s(!)

const wokerList = [
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
        ]
    },
]
