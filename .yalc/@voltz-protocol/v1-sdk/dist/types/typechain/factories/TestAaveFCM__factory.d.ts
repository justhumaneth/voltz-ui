import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestAaveFCM, TestAaveFCMInterface } from "../TestAaveFCM";
export declare class TestAaveFCM__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestAaveFCM>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestAaveFCM;
    connect(signer: Signer): TestAaveFCM__factory;
    static readonly bytecode = "0x60a0604052306080523480156200001557600080fd5b5060006200002460016200008b565b905080156200003d576063805461ff0019166101001790555b801562000084576063805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5062000197565b606354600090610100900460ff1615620000f6578160ff166001148015620000c65750620000c4306200013a60201b62001c0d1760201c565b155b620000ee5760405162461bcd60e51b8152600401620000e59062000149565b60405180910390fd5b506000919050565b60635460ff808416911610620001205760405162461bcd60e51b8152600401620000e59062000149565b506063805460ff191660ff92909216919091179055600190565b6001600160a01b03163b151590565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b608051613847620001cf600039600081816109500152818161099001528181610e7b01528181610ebb0152610f3701526138476000f3fe60806040526004361061013b5760003560e01c80624006e01461014057806303742274146101705780630d211954146101b05780631119e4fe146101d25780632495a59914610200578063357d8b5e146102205780633659cfe61461023e5780634342891f146101d2578063485cc9551461025e5780634badfdfc1461027e5780634dd366bc1461029e5780634f1ef286146102bc57806352d1902d146102cf57806355468a8b146102e45780635c975abb14610304578063715018a6146103355780637653f275146102205780638da5cb5b1461034a57806392a88fa21461035f57806398f4b1b2146103c85780639a2f48f5146103e65780639b6b02bc1461043b578063c1ccfa6814610459578063e098372c1461043b578063e9d337b81461029e578063ebc9b02e14610479578063f2fde38b1461048e575b600080fd5b34801561014c57600080fd5b506001546001600160a01b03165b6040516101679190612f17565b60405180910390f35b34801561017c57600080fd5b5061019061018b366004612f40565b6104ae565b604080519485526020850193909352918301526060820152608001610167565b3480156101bc57600080fd5b506101d06101cb366004612f7e565b6108d2565b005b3480156101de57600080fd5b506101f26101ed366004612f9b565b61091b565b604051908152602001610167565b34801561020c57600080fd5b5060045461015a906001600160a01b031681565b34801561022c57600080fd5b506032546001600160a01b031661015a565b34801561024a57600080fd5b506101d0610259366004612f9b565b610945565b34801561026a57600080fd5b506101d0610279366004612fb8565b610a0e565b34801561028a57600080fd5b506101f2610299366004612fe6565b610e35565b3480156102aa57600080fd5b506031546001600160a01b031661015a565b6101d06102ca366004613090565b610e70565b3480156102db57600080fd5b506101f2610f2a565b3480156102f057600080fd5b506101906102ff366004612f40565b610fd8565b34801561031057600080fd5b5060045461032590600160a01b900460ff1681565b6040519015158152602001610167565b34801561034157600080fd5b506101d0611367565b34801561035657600080fd5b5061015a6113a2565b34801561036b57600080fd5b506103a661037a366004612f9b565b600360208190526000918252604090912080546001820154600283015492909301549092919060ff1684565b6040805194855260208501939093529183015215156060820152608001610167565b3480156103d457600080fd5b506000546001600160a01b031661015a565b3480156103f257600080fd5b50610406610401366004612f9b565b6113b1565b604051610167919081518152602080830151908201526040808301519082015260609182015115159181019190915260800190565b34801561044757600080fd5b506002546001600160a01b031661015a565b34801561046557600080fd5b506101d0610474366004613137565b61142e565b34801561048557600080fd5b506101f26115b8565b34801561049a57600080fd5b506101d06104a9366004612f9b565b611b70565b600080600080600460149054906101000a900460ff16156104ea5760405162461bcd60e51b81526004016104e190613163565b60405180910390fd5b33600090815260036020526040812060028101549091121561054b5760405162461bcd60e51b815260206004820152601a6024820152795472616465722056542062616c616e636520706f73697469766560301b60448201526064016104e1565b600160ff1b81600201541361059a5760405162461bcd60e51b81526020600482015260156024820152742a3930b232b9102b2a103130b630b731b29036b4b760591b60448201526064016104e1565b8681600201546105a990613199565b10156105f75760405162461bcd60e51b815260206004820152601d60248201527f6e6f74696f6e616c20746f20756e77696e64203e206e6f74696f6e616c00000060448201526064016104e1565b60006040518060a00160405280306001600160a01b0316815260200161061c8a611c1c565b61062590613199565b81526001600160a01b038916602082015260015460409091019061065290600160a01b900460020b6131b6565b600290810b8252600154600160a01b9004810b602090920191909152546040516333bac73760e11b81529192506001600160a01b0316906367758e6e9061069d9084906004016131d9565b60a060405180830381600087803b1580156106b757600080fd5b505af11580156106cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ef9190613225565b5092985090965094509250600085121561073f5760405162461bcd60e51b815260206004820152601160248201527056542064656c7461206e6567617469766560781b60448201526064016104e1565b60008061074d848989611c8a565b6031546004805460405163d15e005360e01b81529496509294506000936001600160a01b039283169363d15e0053936107899391169101612f17565b60206040518083038186803b1580156107a157600080fd5b505afa1580156107b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107d99190613265565b905060006107e78983611cc5565b86546107f3919061327e565b8087559050610803848483611cdc565b600154600454610822916001600160a01b03918216913391168b611e1c565b603254610839906001600160a01b0316338b611e8d565b336001600160a01b03167f6acfc9440f6cbb04b516cd21204df4411f56488a61afeb29b0f25531809ccdb28d8d8b8e8e8d60405161087c96959493929190613295565b60405180910390a2336001600160a01b03166000805160206137ab8339815191528760000154886001015489600201546040516108bb939291906132c6565b60405180910390a250505050505092959194509250565b6001546001600160a01b031633146108fd57604051630a0d349f60e21b815260040160405180910390fd5b60048054911515600160a01b0260ff60a01b19909216919091179055565b6001600160a01b0381166000908152600360205260408120805461093e90611eac565b9392505050565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141561098e5760405162461bcd60e51b81526004016104e1906132dc565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166109c0611f41565b6001600160a01b0316146109e65760405162461bcd60e51b81526004016104e190613316565b6109ef81611f5d565b60408051600080825260208201909252610a0b91839190611f8c565b50565b6000610a1a6001612106565b90508015610a32576063805461ff0019166101001790555b6001600160a01b038316610a7a5760405162461bcd60e51b815260206004820152600f60248201526e1d985b5b481b5d5cdd08195e1a5cdd608a1b60448201526064016104e1565b6001600160a01b038216610acb5760405162461bcd60e51b81526020600482015260186024820152771b585c99da5b88195b99da5b99481b5d5cdd08195e1a5cdd60421b60448201526064016104e1565b600280546001600160a01b038086166001600160a01b03199283161790925560018054928516929091168217905560408051634c7a58d960e11b815290516398f4b1b291600480820192602092909190829003018186803b158015610b2f57600080fd5b505afa158015610b43573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b679190613350565b600080546001600160a01b0319166001600160a01b0392909216918217905560408051631d3a66f760e31b8152905163e9d337b891600480820192602092909190829003018186803b158015610bbc57600080fd5b505afa158015610bd0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf49190613350565b603180546001600160a01b0319166001600160a01b0392831617905560015460408051632495a59960e01b815290519190921691632495a599916004808301926020929190829003018186803b158015610c4d57600080fd5b505afa158015610c61573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c859190613350565b600480546001600160a01b0319166001600160a01b0392831690811782556031546040516335ea6a7560e01b815260009491909116926335ea6a7592610ccd92909101612f17565b6101806040518083038186803b158015610ce657600080fd5b505afa158015610cfa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d1e91906133f6565b60e0810151603280546001600160a01b0319166001600160a01b03928316179055600254604080516334324e9f60e21b8152905193945091169163d0c93a7c91600480820192602092909190829003018186803b158015610d7e57600080fd5b505afa158015610d92573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610db691906134e3565b6001805462ffffff92909216600160a01b0262ffffff60a01b19909216919091179055610de161219c565b610de96121cb565b508015610e30576063805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050565b6001600160a01b0384166000908152600360205260408120600181015460028201548391610e65918888886121f2565b979650505050505050565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415610eb95760405162461bcd60e51b81526004016104e1906132dc565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610eeb611f41565b6001600160a01b031614610f115760405162461bcd60e51b81526004016104e190613316565b610f1a82611f5d565b610f2682826001611f8c565b5050565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610fc55760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c6044820152771b1959081d1a1c9bdd59da0819195b1959d85d1958d85b1b60421b60648201526084016104e1565b506000805160206137cb83398151915290565b600080600080600460149054906101000a900460ff161561100b5760405162461bcd60e51b81526004016104e190613163565b856110475760405162461bcd60e51b815260206004820152600c60248201526b06e6f74696f6e616c203d20360a41b60448201526064016104e1565b60006040518060a00160405280306001600160a01b0316815260200161106c89611c1c565b81526001600160a01b038816602082015260015460409091019061109990600160a01b900460020b6131b6565b600290810b8252600154600160a01b9004810b602090920191909152546040516333bac73760e11b81529192506001600160a01b0316906367758e6e906110e49084906004016131d9565b60a060405180830381600087803b1580156110fe57600080fd5b505af1158015611112573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111369190613225565b509297509095509350915060008413156111825760405162461bcd60e51b815260206004820152600d60248201526c2b2a103232b63a309039b4b3b760991b60448201526064016104e1565b600160ff1b84136111c45760405162461bcd60e51b815260206004820152600c60248201526b2b2a103232b63a309036b4b760a11b60448201526064016104e1565b3360009081526003602052604080822060315460048054935163d15e005360e01b81529294936001600160a01b039283169363d15e0053936112099392169101612f17565b60206040518083038186803b15801561122157600080fd5b505afa158015611235573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112599190613265565b905060006112708261126a89613199565b90611cc5565b835461127c9190613506565b808455905061128c838989611c8a565b50506112b133308961129d90613199565b6032546001600160a01b0316929190611e1c565b6001546004546112d0916001600160a01b039182169133911689611e1c565b336001600160a01b03167f3d4e16ab2c61731f475c393d983859da40555d340dbe3b2a164616aca9e75f988b8b898c8c8b60405161131396959493929190613295565b60405180910390a2336001600160a01b03166000805160206137ab833981519152846000015485600101548660020154604051611352939291906132c6565b60405180910390a25050505092959194509250565b336113706113a2565b6001600160a01b0316146113965760405162461bcd60e51b81526004016104e19061351e565b6113a0600061225b565b565b6096546001600160a01b031690565b6113de60405180608001604052806000815260200160008152602001600081526020016000151581525090565b506001600160a01b031660009081526003602081815260409283902083516080810185528154815260018201549281019290925260028101549382019390935291015460ff161515606082015290565b6001546001600160a01b0316331461145957604051630a0d349f60e21b815260040160405180910390fd5b600454600160a01b900460ff16156114835760405162461bcd60e51b81526004016104e190613163565b600480546032546040516370a0823160e01b815284936001600160a01b03938416936370a08231936114b89391169101612f17565b60206040518083038186803b1580156114d057600080fd5b505afa1580156114e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115089190613265565b106115a15760315460048054604051631a4ca37b60e21b81526001600160a01b0391821692810192909252602482018490528481166044830152909116906369328dec90606401602060405180830381600087803b15801561156957600080fd5b505af115801561157d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e309190613265565b603254610f26906001600160a01b03168383611e8d565b60006115c26122ad565b600160009054906101000a90046001600160a01b03166001600160a01b03166393edb4546040518163ffffffff1660e01b815260040160206040518083038186803b15801561161057600080fd5b505afa158015611624573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116489190613265565b1115611667576040516301730b8160e11b815260040160405180910390fd5b600454600160a01b900460ff16156116915760405162461bcd60e51b81526004016104e190613163565b33600090815260036020908152604080832060018082015460028301549154845163652c30b760e01b8152945193969561193a9592946001600160a01b039092169263652c30b79260048083019392829003018186803b1580156116f457600080fd5b505afa158015611708573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061172c9190613265565b600160009054906101000a90046001600160a01b03166001600160a01b03166393edb4546040518163ffffffff1660e01b815260040160206040518083038186803b15801561177a57600080fd5b505afa15801561178e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117b29190613265565b6000546001546040805163652c30b760e01b815290516001600160a01b03938416936325f258dd93169163652c30b7916004808301926020929190829003018186803b15801561180157600080fd5b505afa158015611815573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118399190613265565b600160009054906101000a90046001600160a01b03166001600160a01b03166393edb4546040518163ffffffff1660e01b815260040160206040518083038186803b15801561188757600080fd5b505afa15801561189b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118bf9190613265565b6040516001600160e01b031960e085901b16815260048101929092526024820152604401602060405180830381600087803b1580156118fd57600080fd5b505af1158015611911573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119359190613265565b6121f2565b9050611963826001015461194d90613199565b836002015461195b90613199565b849190611c8a565b50506000811215611a5257600160ff1b81136119aa5760405162461bcd60e51b815260206004820152600660248201526529a19036b4b760d11b60448201526064016104e1565b6031546004805460405163d15e005360e01b81526000936001600160a01b039081169363d15e0053936119e09392169101612f17565b60206040518083038186803b1580156119f857600080fd5b505afa158015611a0c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a309190613265565b90506000611a418261126a85613199565b8454611a4d919061327e565b845550505b6000611a618360000154611eac565b600084559050611a70836122bd565b603254611a87906001600160a01b03163383611e8d565b6000821315611af55760015460405163efcfc3f960e01b81526001600160a01b039091169063efcfc3f990611ac29033908690600401613553565b600060405180830381600087803b158015611adc57600080fd5b505af1158015611af0573d6000803e3d6000fd5b505050505b60405182815233907f2761931c2b8dc26fc26290447a831f72789013b635b9d8af518a0ff79bda796f9060200160405180910390a2336001600160a01b03166000805160206137ab833981519152846000015485600101548660020154604051611b61939291906132c6565b60405180910390a25091505090565b33611b796113a2565b6001600160a01b031614611b9f5760405162461bcd60e51b81526004016104e19061351e565b6001600160a01b038116611c045760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016104e1565b610a0b8161225b565b6001600160a01b03163b151590565b60006001600160ff1b03821115611c865760405162461bcd60e51b815260206004820152602860248201527f53616665436173743a2076616c756520646f65736e27742066697420696e2061604482015267371034b73a191a9b60c11b60648201526084016104e1565b5090565b600080838560010154611c9d919061356c565b9150828560020154611caf919061356c565b6001860183905560029095018590555093915050565b6000611cd383836001612314565b90505b92915050565b6000821315611d185760405162461bcd60e51b81526020600482015260086024820152672b2a211039b4b3b760c11b60448201526064016104e1565b600160ff1b8213611d555760405162461bcd60e51b81526020600482015260076024820152662b2a211036b4b760c91b60448201526064016104e1565b6000611d6083613199565b90506000611d6d82611c1c565b611d7e611d7985611eac565b611c1c565b611d8891906135ad565b90506000611d9686866123b8565b90506000811215611e1457600160ff1b8113611dde5760405162461bcd60e51b81526020600482015260076024820152662929a19036b4b760c91b60448201526064016104e1565b81611de882613199565b1315611e1457611df8818461356c565b6040516341d5a83b60e01b81526004016104e191815260200190565b505050505050565b6040516001600160a01b0380851660248301528316604482015260648101829052611e879085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526126b2565b50505050565b610e308363a9059cbb60e01b8484604051602401611e50929190613553565b6031546004805460405163d15e005360e01b815260009384936001600160a01b039182169363d15e005393611ee5939091169101612f17565b60206040518083038186803b158015611efd57600080fd5b505afa158015611f11573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f359190613265565b905061093e8382612733565b6000805160206137cb833981519152546001600160a01b031690565b33611f666113a2565b6001600160a01b031614610a0b5760405162461bcd60e51b81526004016104e19061351e565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615611fbf57610e3083612741565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b158015611ff857600080fd5b505afa925050508015612028575060408051601f3d908101601f1916820190925261202591810190613265565b60015b61208b5760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b60648201526084016104e1565b6000805160206137cb83398151915281146120fa5760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b60648201526084016104e1565b50610e308383836127db565b606354600090610100900460ff1615612156578160ff166001148015612132575061213030611c0d565b155b61214e5760405162461bcd60e51b81526004016104e1906135ec565b506000919050565b60635460ff80841691161061217d5760405162461bcd60e51b81526004016104e1906135ec565b506063805460ff191660ff92909216919091179055600190565b919050565b606354610100900460ff166121c35760405162461bcd60e51b81526004016104e19061363a565b6113a0612800565b606354610100900460ff166113a05760405162461bcd60e51b81526004016104e19061363a565b6000806121fe87612830565b9050600061220b87612830565b9050600061222561221e600189896128bb565b8490612990565b905060006122338387612990565b90506000612241828461356c565b670de0b6b3a764000090059b9a5050505050505050505050565b609680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60006122b842612a55565b905090565b600381015460ff16156123045760405162461bcd60e51b815260206004820152600f60248201526e185b1c9958591e481cd95d1d1b1959608a1b60448201526064016104e1565b600301805460ff19166001179055565b60008261234c5760405162461bcd60e51b81526004016104e1906020808252600490820152630444956360e41b604082015260600190565b600061235960028561369b565b905083816001856001811115612371576123716136bd565b1461238457670de0b6b3a7640000612391565b676765c793fa10079d601b1b5b61239b90886136d3565b6123a59190613506565b6123af919061369b565b95945050505050565b6000806123c484612830565b905060006123d184612830565b905060006124f3836124ee60018060009054906101000a90046001600160a01b03166001600160a01b031663652c30b76040518163ffffffff1660e01b815260040160206040518083038186803b15801561242b57600080fd5b505afa15801561243f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124639190613265565b600160009054906101000a90046001600160a01b03166001600160a01b03166393edb4546040518163ffffffff1660e01b815260040160206040518083038186803b1580156124b157600080fd5b505afa1580156124c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124e99190613265565b6128bb565b612990565b600080546001546040805163652c30b760e01b8152905194955092936001600160a01b03928316936325f258dd939092169163652c30b7916004808301926020929190829003018186803b15801561254a57600080fd5b505afa15801561255e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125829190613265565b600160009054906101000a90046001600160a01b03166001600160a01b03166393edb4546040518163ffffffff1660e01b815260040160206040518083038186803b1580156125d057600080fd5b505afa1580156125e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126089190613265565b6040516001600160e01b031960e085901b16815260048101929092526024820152604401602060405180830381600087803b15801561264657600080fd5b505af115801561265a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061267e9190613265565b9050600061268c8483612990565b9050600061269a828561356c565b670de0b6b3a764000090059998505050505050505050565b60006126de83836040518060400160405280600781526020016629aa261032b93960c91b815250612a94565b805190915015610e3057808060200190518101906126fc91906136f2565b610e305760405162461bcd60e51b815260206004820152600860248201526714d5130819985a5b60c21b60448201526064016104e1565b6000611cd383836001612b42565b61274a81611c0d565b6127ac5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084016104e1565b6000805160206137cb83398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b6127e483612bfd565b6000825111806127f15750805b15610e3057611e878383612c3d565b606354610100900460ff166128275760405162461bcd60e51b81526004016104e19061363a565b6113a03361225b565b60007809392ee8e921d5d073aff322e62439fcf32d7f344649470f8f198212156128705760405163e608e18b60e01b8152600481018390526024016104e1565b7809392ee8e921d5d073aff322e62439fcf32d7f344649470f908213156128ad576040516371f72a3160e01b8152600481018390526024016104e1565b50670de0b6b3a76400000290565b60008282116128f55760405162461bcd60e51b81526004016104e190602080825260049082015263453c3d5360e01b604082015260600190565b60006128ff6122ad565b9050838110156129395760405162461bcd60e51b8152602060048201526005602482015264422e543c5360d81b60448201526064016104e1565b600085806129475750838210155b1561295d57612956858561327e565b905061296a565b612967858361327e565b90505b61298668056bc75e2d6310000061298083612d26565b90612d39565b9695505050505050565b6000600160ff1b8314806129a75750600160ff1b82145b156129c557604051630d01a11b60e21b815260040160405180910390fd5b600080600085126129d657846129db565b846000035b9150600084126129eb57836129f0565b836000035b905060006129fe8383612d4e565b90506001600160ff1b03811115612a2b5760405163bf79e8d960e01b8152600481018290526024016104e1565b600019808713908613808218600114612a445782612a49565b826000035b98975050505050505050565b60007812725dd1d243aba0e75fe645cc4873f9e65afe688c928e1f218211156128ad57604051633492ffd960e01b8152600481018390526024016104e1565b6060833b612ad35760405162461bcd60e51b815260206004820152600c60248201526b1b9bdb8b58dbdb9d1c9858dd60a21b60448201526064016104e1565b600080856001600160a01b0316600086604051612af0919061373b565b60006040518083038185875af1925050503d8060008114612b2d576040519150601f19603f3d011682016040523d82523d6000602084013e612b32565b606091505b5091509150612986828286612e10565b6000831580612b4f575082155b15612b5c5750600061093e565b6001826001811115612b7057612b706136bd565b14612b8357670de0b6b3a7640000612b90565b676765c793fa10079d601b1b5b6001836001811115612ba457612ba46136bd565b14612bc157612bbc6002670de0b6b3a764000061369b565b612bd7565b612bd76002676765c793fa10079d601b1b61369b565b612be185876136d3565b612beb9190613506565b612bf5919061369b565b949350505050565b612c0681612741565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6060612c4883611c0d565b612ca35760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016104e1565b600080846001600160a01b031684604051612cbe919061373b565b600060405180830381855af49150503d8060008114612cf9576040519150601f19603f3d011682016040523d82523d6000602084013e612cfe565b606091505b50915091506123af82826040518060600160405280602781526020016137eb60279139612e10565b6000611cd6826a1a1601fc4ea7109e0000005b6000611cd383670de0b6b3a764000084612e49565b60008080600019848609848602925082811083820303915050670de0b6b3a76400008110612d925760405163698d9a0160e11b8152600481018290526024016104e1565b600080670de0b6b3a76400008688099150506706f05b59d3b1ffff811182612dcc5780670de0b6b3a7640000850401945050505050611cd6565b620400008285030493909111909103600160ee1b02919091177faccb18165bd6fe31ae1cf318dc5b51eee0e1ba569b88cd74c1773b91fac106690201905092915050565b60608315612e1f57508161093e565b825115612e2f5782518084602001fd5b8160405162461bcd60e51b81526004016104e19190613757565b600080806000198587098587029250828110838203039150508060001415612e8457838281612e7a57612e7a613685565b049250505061093e565b838110612eae57604051631dcf306360e21b815260048101829052602481018590526044016104e1565b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b6001600160a01b0391909116815260200190565b6001600160a01b0381168114610a0b57600080fd5b60008060408385031215612f5357600080fd5b823591506020830135612f6581612f2b565b809150509250929050565b8015158114610a0b57600080fd5b600060208284031215612f9057600080fd5b813561093e81612f70565b600060208284031215612fad57600080fd5b813561093e81612f2b565b60008060408385031215612fcb57600080fd5b8235612fd681612f2b565b91506020830135612f6581612f2b565b60008060008060808587031215612ffc57600080fd5b843561300781612f2b565b966020860135965060408601359560600135945092505050565b634e487b7160e01b600052604160045260246000fd5b60405161018081016001600160401b038111828210171561305a5761305a613021565b60405290565b604051601f8201601f191681016001600160401b038111828210171561308857613088613021565b604052919050565b600080604083850312156130a357600080fd5b82356130ae81612f2b565b91506020838101356001600160401b03808211156130cb57600080fd5b818601915086601f8301126130df57600080fd5b8135818111156130f1576130f1613021565b613103601f8201601f19168501613060565b9150808252878482850101111561311957600080fd5b80848401858401376000848284010152508093505050509250929050565b6000806040838503121561314a57600080fd5b823561315581612f2b565b946020939093013593505050565b60208082526006908201526514185d5cd95960d21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b8214156131af576131af613183565b5060000390565b60008160020b627fffff198114156131d0576131d0613183565b60000392915050565b600060a08201905060018060a01b038084511683526020840151602084015280604085015116604084015250606083015160020b6060830152608083015160020b608083015292915050565b600080600080600060a0868803121561323d57600080fd5b5050835160208501516040860151606087015160809097015192989197509594509092509050565b60006020828403121561327757600080fd5b5051919050565b60008282101561329057613290613183565b500390565b9586526001600160a01b0394909416602086015260408501929092526060840152608083015260a082015260c00190565b9283526020830191909152604082015260600190565b6020808252602c9082015260008051602061378b83398151915260408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c9082015260008051602061378b83398151915260408201526b6163746976652070726f787960a01b606082015260800190565b60006020828403121561336257600080fd5b815161093e81612f2b565b60006020828403121561337f57600080fd5b604051602081016001600160401b03811182821017156133a1576133a1613021565b6040529151825250919050565b80516001600160801b038116811461219757600080fd5b805164ffffffffff8116811461219757600080fd5b805161219781612f2b565b805160ff8116811461219757600080fd5b6000610180828403121561340957600080fd5b613411613037565b61341b848461336d565b8152613429602084016133ae565b602082015261343a604084016133ae565b604082015261344b606084016133ae565b606082015261345c608084016133ae565b608082015261346d60a084016133ae565b60a082015261347e60c084016133c5565b60c082015261348f60e084016133da565b60e08201526101006134a28185016133da565b908201526101206134b48482016133da565b908201526101406134c68482016133da565b908201526101606134d88482016133e5565b908201529392505050565b6000602082840312156134f557600080fd5b81518060020b811461093e57600080fd5b6000821982111561351957613519613183565b500190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6001600160a01b03929092168252602082015260400190565b600080821280156001600160ff1b038490038513161561358e5761358e613183565b600160ff1b83900384128116156135a7576135a7613183565b50500190565b60008083128015600160ff1b8501841216156135cb576135cb613183565b6001600160ff1b03840183138116156135e6576135e6613183565b50500390565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b634e487b7160e01b600052601260045260246000fd5b6000826136b857634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052602160045260246000fd5b60008160001904831182151516156136ed576136ed613183565b500290565b60006020828403121561370457600080fd5b815161093e81612f70565b60005b8381101561372a578181015183820152602001613712565b83811115611e875750506000910152565b6000825161374d81846020870161370f565b9190910192915050565b602081526000825180602084015261377681604085016020870161370f565b601f01601f1916919091016040019291505056fe46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682085f7a754cbb9fd93ae8f2b8606ccb555835a917e569742c9d2e818e3073c8c9d360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220a9e0b8c37059b9ddf0dc4cb6ffd69a7406eeebc556de7abe8980fe17e5c9051f64736f6c63430008090033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        anonymous?: undefined;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): TestAaveFCMInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestAaveFCM;
}
//# sourceMappingURL=TestAaveFCM__factory.d.ts.map