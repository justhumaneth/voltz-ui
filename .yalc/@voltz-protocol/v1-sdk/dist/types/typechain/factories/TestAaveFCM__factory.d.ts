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
    static readonly bytecode = "0x60a0604052306080523480156200001557600080fd5b50606354610100900460ff16620000335760635460ff16156200003d565b6200003d620000e2565b620000a55760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b606354610100900460ff16158015620000c8576063805461ffff19166101011790555b8015620000db576063805461ff00191690555b5062000106565b6000620000fa306200010060201b620019d71760201c565b15905090565b3b151590565b6080516132f0620001376000396000818161082e0152818161086e01528181610dad0152610ded01526132f06000f3fe6080604052600436106101255760003560e01c80624006e01461012a578063037422741461015a5780631119e4fe1461019a5780632495a599146101c8578063357d8b5e146101e85780633659cfe6146102065780634342891f1461019a578063485cc955146102285780634badfdfc146102485780634dd366bc146102685780634f1ef2861461028657806355468a8b146102995780635c975abb146102b9578063715018a6146102dc5780637653f275146101e85780638da5cb5b146102f157806392a88fa21461030657806398f4b1b21461036f5780639a2f48f51461038d5780639b6b02bc146103e2578063c1ccfa6814610400578063e098372c146103e2578063e9d337b814610268578063ebc9b02e14610420578063f2fde38b14610435575b600080fd5b34801561013657600080fd5b506001546001600160a01b03165b6040516101519190612aa0565b60405180910390f35b34801561016657600080fd5b5061017a610175366004612ac9565b610455565b604080519485526020850193909352918301526060820152608001610151565b3480156101a657600080fd5b506101ba6101b5366004612af9565b6107f9565b604051908152602001610151565b3480156101d457600080fd5b50600454610144906001600160a01b031681565b3480156101f457600080fd5b506032546001600160a01b0316610144565b34801561021257600080fd5b50610226610221366004612af9565b610823565b005b34801561023457600080fd5b50610226610243366004612b16565b6108ec565b34801561025457600080fd5b506101ba610263366004612b44565b610d67565b34801561027457600080fd5b506031546001600160a01b0316610144565b610226610294366004612bee565b610da2565b3480156102a557600080fd5b5061017a6102b4366004612ac9565b610e5c565b3480156102c557600080fd5b5060c85460ff166040519015158152602001610151565b3480156102e857600080fd5b5061022661117b565b3480156102fd57600080fd5b506101446111b6565b34801561031257600080fd5b5061034d610321366004612af9565b600360208190526000918252604090912080546001820154600283015492909301549092919060ff1684565b6040805194855260208501939093529183015215156060820152608001610151565b34801561037b57600080fd5b506000546001600160a01b0316610144565b34801561039957600080fd5b506103ad6103a8366004612af9565b6111c5565b604051610151919081518152602080830151908201526040808301519082015260609182015115159181019190915260800190565b3480156103ee57600080fd5b506002546001600160a01b0316610144565b34801561040c57600080fd5b5061022661041b366004612c95565b611242565b34801561042c57600080fd5b506101ba6113e8565b34801561044157600080fd5b50610226610450366004612af9565b61193a565b3360009081526003602052604081206002810154829182918291908212156104c15760405162461bcd60e51b815260206004820152601a6024820152795472616465722056542062616c616e636520706f73697469766560301b60448201526064015b60405180910390fd5b8681600201546104d090612cd7565b101561051e5760405162461bcd60e51b815260206004820152601d60248201527f6e6f74696f6e616c20746f20756e77696e64203e206e6f74696f6e616c00000060448201526064016104b8565b60006040518060a00160405280306001600160a01b031681526020016105438a6119dd565b61054c90612cd7565b81526001600160a01b038916602082015260015460409091019061057990600160a01b900460020b612cf4565b600290810b8252600154600160a01b9004810b602090920191909152546040516333bac73760e11b81529192506001600160a01b0316906367758e6e906105c4908490600401612d17565b60a060405180830381600087803b1580156105de57600080fd5b505af11580156105f2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106169190612d63565b509298509096509450925060008512156106665760405162461bcd60e51b815260206004820152601160248201527056542064656c7461206e6567617469766560781b60448201526064016104b8565b600080610674848989611a4b565b6031546004805460405163d15e005360e01b81529496509294506000936001600160a01b039283169363d15e0053936106b09391169101612aa0565b60206040518083038186803b1580156106c857600080fd5b505afa1580156106dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107009190612da3565b9050600061070e8983611a86565b865461071a9190612dbc565b808755905061072a848483611b05565b600154600454610749916001600160a01b03918216913391168b611b7f565b603254610760906001600160a01b0316338b611c13565b336001600160a01b03167f6acfc9440f6cbb04b516cd21204df4411f56488a61afeb29b0f25531809ccdb28d8d8b8e8e8d6040516107a396959493929190612dd3565b60405180910390a2336001600160a01b03166000805160206132548339815191528760000154886001015489600201546040516107e293929190612e04565b60405180910390a250505050505092959194509250565b6001600160a01b0381166000908152600360205260408120805461081c90611c92565b9392505050565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016141561086c5760405162461bcd60e51b81526004016104b890612e1a565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661089e611d27565b6001600160a01b0316146108c45760405162461bcd60e51b81526004016104b890612e54565b6108cd81611d43565b604080516000808252602082019092526108e991839190611d72565b50565b606354610100900460ff166109075760635460ff161561090b565b303b155b61096e5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016104b8565b606354610100900460ff16158015610990576063805461ffff19166101011790555b6001600160a01b0383166109d85760405162461bcd60e51b815260206004820152600f60248201526e1d985b5b481b5d5cdd08195e1a5cdd608a1b60448201526064016104b8565b6001600160a01b038216610a295760405162461bcd60e51b81526020600482015260186024820152771b585c99da5b88195b99da5b99481b5d5cdd08195e1a5cdd60421b60448201526064016104b8565b600280546001600160a01b038086166001600160a01b03199283161790925560018054928516929091168217905560408051634c7a58d960e11b815290516398f4b1b291600480820192602092909190829003018186803b158015610a8d57600080fd5b505afa158015610aa1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac59190612e8e565b600080546001600160a01b0319166001600160a01b0392909216918217905560408051631d3a66f760e31b8152905163e9d337b891600480820192602092909190829003018186803b158015610b1a57600080fd5b505afa158015610b2e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b529190612e8e565b603180546001600160a01b0319166001600160a01b0392831617905560015460408051632495a59960e01b815290519190921691632495a599916004808301926020929190829003018186803b158015610bab57600080fd5b505afa158015610bbf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610be39190612e8e565b600480546001600160a01b0319166001600160a01b0392831690811782556031546040516335ea6a7560e01b815260009491909116926335ea6a7592610c2b92909101612aa0565b6101806040518083038186803b158015610c4457600080fd5b505afa158015610c58573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c7c9190612f39565b60e0810151603280546001600160a01b0319166001600160a01b03928316179055600254604080516334324e9f60e21b8152905193945091169163d0c93a7c91600480820192602092909190829003018186803b158015610cdc57600080fd5b505afa158015610cf0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d149190613026565b6001805462ffffff92909216600160a01b0262ffffff60a01b19909216919091179055610d3f611eb2565b610d47611ee9565b610d4f611f20565b508015610d62576063805461ff00191690555b505050565b6001600160a01b0384166000908152600360205260408120600181015460028201548391610d9791888888611f57565b979650505050505050565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415610deb5760405162461bcd60e51b81526004016104b890612e1a565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610e1d611d27565b6001600160a01b031614610e435760405162461bcd60e51b81526004016104b890612e54565b610e4c82611d43565b610e5882826001611d72565b5050565b600080808085610e9d5760405162461bcd60e51b815260206004820152600c60248201526b06e6f74696f6e616c203d20360a41b60448201526064016104b8565b60006040518060a00160405280306001600160a01b03168152602001610ec2896119dd565b81526001600160a01b0388166020820152600154604090910190610eef90600160a01b900460020b612cf4565b600290810b8252600154600160a01b9004810b602090920191909152546040516333bac73760e11b81529192506001600160a01b0316906367758e6e90610f3a908490600401612d17565b60a060405180830381600087803b158015610f5457600080fd5b505af1158015610f68573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f8c9190612d63565b50929750909550935091506000841315610fd85760405162461bcd60e51b815260206004820152600d60248201526c2b2a103232b63a309039b4b3b760991b60448201526064016104b8565b3360009081526003602052604080822060315460048054935163d15e005360e01b81529294936001600160a01b039283169363d15e00539361101d9392169101612aa0565b60206040518083038186803b15801561103557600080fd5b505afa158015611049573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061106d9190612da3565b905060006110848261107e89612cd7565b90611a86565b83546110909190613049565b80845590506110a0838989611a4b565b50506110c53330896110b190612cd7565b6032546001600160a01b0316929190611b7f565b6001546004546110e4916001600160a01b039182169133911689611b7f565b336001600160a01b03167f3d4e16ab2c61731f475c393d983859da40555d340dbe3b2a164616aca9e75f988b8b898c8c8b60405161112796959493929190612dd3565b60405180910390a2336001600160a01b031660008051602061325483398151915284600001548560010154866002015460405161116693929190612e04565b60405180910390a25050505092959194509250565b336111846111b6565b6001600160a01b0316146111aa5760405162461bcd60e51b81526004016104b890613061565b6111b46000611fc0565b565b6096546001600160a01b031690565b6111f260405180608001604052806000815260200160008152602001600081526020016000151581525090565b506001600160a01b031660009081526003602081815260409283902083516080810185528154815260018201549281019290925260028101549382019390935291015460ff161515606082015290565b6001546001600160a01b0316331461126d57604051630a0d349f60e21b815260040160405180910390fd5b60c85460ff16156112b35760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104b8565b600480546032546040516370a0823160e01b815284936001600160a01b03938416936370a08231936112e89391169101612aa0565b60206040518083038186803b15801561130057600080fd5b505afa158015611314573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113389190612da3565b106113d15760315460048054604051631a4ca37b60e21b81526001600160a01b0391821692810192909252602482018490528481166044830152909116906369328dec90606401602060405180830381600087803b15801561139957600080fd5b505af11580156113ad573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d629190612da3565b603254610e58906001600160a01b03168383611c13565b60006113f2612012565b600160009054906101000a90046001600160a01b03166001600160a01b03166393edb4546040518163ffffffff1660e01b815260040160206040518083038186803b15801561144057600080fd5b505afa158015611454573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114789190612da3565b1115611497576040516301730b8160e11b815260040160405180910390fd5b33600090815260036020908152604080832060018082015460028301549154845163652c30b760e01b815294519396956117409592946001600160a01b039092169263652c30b79260048083019392829003018186803b1580156114fa57600080fd5b505afa15801561150e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115329190612da3565b600160009054906101000a90046001600160a01b03166001600160a01b03166393edb4546040518163ffffffff1660e01b815260040160206040518083038186803b15801561158057600080fd5b505afa158015611594573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115b89190612da3565b6000546001546040805163652c30b760e01b815290516001600160a01b03938416936325f258dd93169163652c30b7916004808301926020929190829003018186803b15801561160757600080fd5b505afa15801561161b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061163f9190612da3565b600160009054906101000a90046001600160a01b03166001600160a01b03166393edb4546040518163ffffffff1660e01b815260040160206040518083038186803b15801561168d57600080fd5b505afa1580156116a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116c59190612da3565b6040516001600160e01b031960e085901b16815260048101929092526024820152604401602060405180830381600087803b15801561170357600080fd5b505af1158015611717573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061173b9190612da3565b611f57565b9050611769826001015461175390612cd7565b836002015461176190612cd7565b849190611a4b565b5050600081121561181c576031546004805460405163d15e005360e01b81526000936001600160a01b039081169363d15e0053936117aa9392169101612aa0565b60206040518083038186803b1580156117c257600080fd5b505afa1580156117d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117fa9190612da3565b9050600061180b8261107e85612cd7565b84546118179190612dbc565b845550505b600061182b8360000154611c92565b60008455905061183a83612022565b603254611851906001600160a01b03163383611c13565b60008213156118bf5760015460405163efcfc3f960e01b8152336004820152602481018490526001600160a01b039091169063efcfc3f990604401600060405180830381600087803b1580156118a657600080fd5b505af11580156118ba573d6000803e3d6000fd5b505050505b60405182815233907f2761931c2b8dc26fc26290447a831f72789013b635b9d8af518a0ff79bda796f9060200160405180910390a2336001600160a01b031660008051602061325483398151915284600001548560010154866002015460405161192b93929190612e04565b60405180910390a25091505090565b336119436111b6565b6001600160a01b0316146119695760405162461bcd60e51b81526004016104b890613061565b6001600160a01b0381166119ce5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016104b8565b6108e981611fc0565b3b151590565b60006001600160ff1b03821115611a475760405162461bcd60e51b815260206004820152602860248201527f53616665436173743a2076616c756520646f65736e27742066697420696e2061604482015267371034b73a191a9b60c11b60648201526084016104b8565b5090565b600080838560010154611a5e9190613096565b9150828560020154611a709190613096565b6001860183905560029095018590555093915050565b604080518082019091526002815261035360f41b602082015260009082611ac05760405162461bcd60e51b81526004016104b89190613103565b506000611ace60028461314c565b90508281611ae7676765c793fa10079d601b1b8761316e565b611af19190613049565b611afb919061314c565b9150505b92915050565b6000611b1083612cd7565b9050600081611b1e84611c92565b611b28919061318d565b90506000611b368686612079565b90506000811215611b775781611b4b82612cd7565b1315611b7757611b5b8184613096565b6040516341d5a83b60e01b81526004016104b891815260200190565b505050505050565b60006040516323b872dd60e01b81526001600160a01b03851660048201526001600160a01b038416602482015282604482015260008060648360008a5af1915050611bc981612373565b611c0c5760405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b60448201526064016104b8565b5050505050565b600060405163a9059cbb60e01b81526001600160a01b03841660048201528260248201526000806044836000895af1915050611c4e81612373565b611c8c5760405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b60448201526064016104b8565b50505050565b6031546004805460405163d15e005360e01b815260009384936001600160a01b039182169363d15e005393611ccb939091169101612aa0565b60206040518083038186803b158015611ce357600080fd5b505afa158015611cf7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d1b9190612da3565b905061081c83826123ba565b600080516020613274833981519152546001600160a01b031690565b33611d4c6111b6565b6001600160a01b0316146108e95760405162461bcd60e51b81526004016104b890613061565b6000611d7c611d27565b9050611d8784612409565b600083511180611d945750815b15611da557611da3848461249c565b505b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd9143805460ff16611c0c57805460ff19166001178155604051611e20908690611df1908590602401612aa0565b60408051601f198184030181529190526020810180516001600160e01b0316631b2ce7f360e11b17905261249c565b50805460ff19168155611e31611d27565b6001600160a01b0316826001600160a01b031614611ea95760405162461bcd60e51b815260206004820152602f60248201527f45524331393637557067726164653a207570677261646520627265616b73206660448201526e75727468657220757067726164657360881b60648201526084016104b8565b611c0c85612587565b606354610100900460ff16611ed95760405162461bcd60e51b81526004016104b8906131cc565b611ee16125c7565b6111b46125ee565b606354610100900460ff16611f105760405162461bcd60e51b81526004016104b8906131cc565b611f186125c7565b6111b461261e565b606354610100900460ff16611f475760405162461bcd60e51b81526004016104b8906131cc565b611f4f6125c7565b6111b46125c7565b600080611f6387612651565b90506000611f7087612651565b90506000611f8a611f83600189896126dc565b84906127ab565b90506000611f9883876127ab565b90506000611fa68284613096565b670de0b6b3a764000090059b9a5050505050505050505050565b609680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600061201d42612870565b905090565b600381015460ff16156120695760405162461bcd60e51b815260206004820152600f60248201526e185b1c9958591e481cd95d1d1b1959608a1b60448201526064016104b8565b600301805460ff19166001179055565b60008061208584612651565b9050600061209284612651565b905060006121b4836121af60018060009054906101000a90046001600160a01b03166001600160a01b031663652c30b76040518163ffffffff1660e01b815260040160206040518083038186803b1580156120ec57600080fd5b505afa158015612100573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121249190612da3565b600160009054906101000a90046001600160a01b03166001600160a01b03166393edb4546040518163ffffffff1660e01b815260040160206040518083038186803b15801561217257600080fd5b505afa158015612186573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121aa9190612da3565b6126dc565b6127ab565b600080546001546040805163652c30b760e01b8152905194955092936001600160a01b03928316936325f258dd939092169163652c30b7916004808301926020929190829003018186803b15801561220b57600080fd5b505afa15801561221f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122439190612da3565b600160009054906101000a90046001600160a01b03166001600160a01b03166393edb4546040518163ffffffff1660e01b815260040160206040518083038186803b15801561229157600080fd5b505afa1580156122a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122c99190612da3565b6040516001600160e01b031960e085901b16815260048101929092526024820152604401602060405180830381600087803b15801561230757600080fd5b505af115801561231b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061233f9190612da3565b9050600061234d84836127ab565b9050600061235b8285613096565b670de0b6b3a764000090059998505050505050505050565b60003d8261238557806000803e806000fd5b806020811461239d5780156123ae57600092506123b3565b816000803e600051151592506123b3565b600192505b5050919050565b60008215806123c7575081155b156123d457506000611aff565b676765c793fa10079d601b1b6123eb60028261314c565b6123f5848661316e565b6123ff9190613049565b61081c919061314c565b803b61246d5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084016104b8565b60008051602061327483398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b6060823b6124fb5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016104b8565b600080846001600160a01b0316846040516125169190613217565b600060405180830381855af49150503d8060008114612551576040519150601f19603f3d011682016040523d82523d6000602084013e612556565b606091505b509150915061257e8282604051806060016040528060278152602001613294602791396128af565b95945050505050565b61259081612409565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b606354610100900460ff166111b45760405162461bcd60e51b81526004016104b8906131cc565b606354610100900460ff166126155760405162461bcd60e51b81526004016104b8906131cc565b6111b433611fc0565b606354610100900460ff166126455760405162461bcd60e51b81526004016104b8906131cc565b60c8805460ff19169055565b60007809392ee8e921d5d073aff322e62439fcf32d7f344649470f8f198212156126915760405163e608e18b60e01b8152600481018390526024016104b8565b7809392ee8e921d5d073aff322e62439fcf32d7f344649470f908213156126ce576040516371f72a3160e01b8152600481018390526024016104b8565b50670de0b6b3a76400000290565b60008282116127165760405162461bcd60e51b81526004016104b890602080825260049082015263453c3d5360e01b604082015260600190565b6000612720612012565b90508381101561275a5760405162461bcd60e51b8152602060048201526005602482015264422e543c5360d81b60448201526064016104b8565b600085806127685750838210155b1561277e576127778585612dbc565b905061278b565b6127888583612dbc565b90505b6000612796826128e8565b9050610d978168056bc75e2d631000006128fb565b6000600160ff1b8314806127c25750600160ff1b82145b156127e057604051630d01a11b60e21b815260040160405180910390fd5b600080600085126127f157846127f6565b846000035b915060008412612806578361280b565b836000035b905060006128198383612910565b90506001600160ff1b038111156128465760405163bf79e8d960e01b8152600481018290526024016104b8565b60001980871390861380821860011461285f5782612864565b826000035b98975050505050505050565b60007812725dd1d243aba0e75fe645cc4873f9e65afe688c928e1f218211156126ce57604051633492ffd960e01b8152600481018390526024016104b8565b606083156128be57508161081c565b8251156128ce5782518084602001fd5b8160405162461bcd60e51b81526004016104b89190613103565b6000611aff826a1a1601fc4ea7109e0000005b600061081c83670de0b6b3a7640000846129d2565b60008080600019848609848602925082811083820303915050670de0b6b3a764000081106129545760405163698d9a0160e11b8152600481018290526024016104b8565b600080670de0b6b3a76400008688099150506706f05b59d3b1ffff81118261298e5780670de0b6b3a7640000850401945050505050611aff565b620400008285030493909111909103600160ee1b02919091177faccb18165bd6fe31ae1cf318dc5b51eee0e1ba569b88cd74c1773b91fac106690201905092915050565b600080806000198587098587029250828110838203039150508060001415612a0d57838281612a0357612a03613136565b049250505061081c565b838110612a3757604051631dcf306360e21b815260048101829052602481018590526044016104b8565b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b6001600160a01b0391909116815260200190565b6001600160a01b03811681146108e957600080fd5b60008060408385031215612adc57600080fd5b823591506020830135612aee81612ab4565b809150509250929050565b600060208284031215612b0b57600080fd5b813561081c81612ab4565b60008060408385031215612b2957600080fd5b8235612b3481612ab4565b91506020830135612aee81612ab4565b60008060008060808587031215612b5a57600080fd5b8435612b6581612ab4565b966020860135965060408601359560600135945092505050565b634e487b7160e01b600052604160045260246000fd5b60405161018081016001600160401b0381118282101715612bb857612bb8612b7f565b60405290565b604051601f8201601f191681016001600160401b0381118282101715612be657612be6612b7f565b604052919050565b60008060408385031215612c0157600080fd5b8235612c0c81612ab4565b91506020838101356001600160401b0380821115612c2957600080fd5b818601915086601f830112612c3d57600080fd5b813581811115612c4f57612c4f612b7f565b612c61601f8201601f19168501612bbe565b91508082528784828501011115612c7757600080fd5b80848401858401376000848284010152508093505050509250929050565b60008060408385031215612ca857600080fd5b8235612cb381612ab4565b946020939093013593505050565b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b821415612ced57612ced612cc1565b5060000390565b60008160020b627fffff19811415612d0e57612d0e612cc1565b60000392915050565b600060a08201905060018060a01b038084511683526020840151602084015280604085015116604084015250606083015160020b6060830152608083015160020b608083015292915050565b600080600080600060a08688031215612d7b57600080fd5b5050835160208501516040860151606087015160809097015192989197509594509092509050565b600060208284031215612db557600080fd5b5051919050565b600082821015612dce57612dce612cc1565b500390565b9586526001600160a01b0394909416602086015260408501929092526060840152608083015260a082015260c00190565b9283526020830191909152604082015260600190565b6020808252602c9082015260008051602061323483398151915260408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c9082015260008051602061323483398151915260408201526b6163746976652070726f787960a01b606082015260800190565b600060208284031215612ea057600080fd5b815161081c81612ab4565b600060208284031215612ebd57600080fd5b604051602081016001600160401b0381118282101715612edf57612edf612b7f565b6040529151825250919050565b80516001600160801b0381168114612f0357600080fd5b919050565b805164ffffffffff81168114612f0357600080fd5b8051612f0381612ab4565b805160ff81168114612f0357600080fd5b60006101808284031215612f4c57600080fd5b612f54612b95565b612f5e8484612eab565b8152612f6c60208401612eec565b6020820152612f7d60408401612eec565b6040820152612f8e60608401612eec565b6060820152612f9f60808401612eec565b6080820152612fb060a08401612eec565b60a0820152612fc160c08401612f08565b60c0820152612fd260e08401612f1d565b60e0820152610100612fe5818501612f1d565b90820152610120612ff7848201612f1d565b90820152610140613009848201612f1d565b9082015261016061301b848201612f28565b908201529392505050565b60006020828403121561303857600080fd5b81518060020b811461081c57600080fd5b6000821982111561305c5761305c612cc1565b500190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600080821280156001600160ff1b03849003851316156130b8576130b8612cc1565b600160ff1b83900384128116156130d1576130d1612cc1565b50500190565b60005b838110156130f25781810151838201526020016130da565b83811115611c8c5750506000910152565b60208152600082518060208401526131228160408501602087016130d7565b601f01601f19169190910160400192915050565b634e487b7160e01b600052601260045260246000fd5b60008261316957634e487b7160e01b600052601260045260246000fd5b500490565b600081600019048311821515161561318857613188612cc1565b500290565b60008083128015600160ff1b8501841216156131ab576131ab612cc1565b6001600160ff1b03840183138116156131c6576131c6612cc1565b50500390565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b600082516132298184602087016130d7565b919091019291505056fe46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682085f7a754cbb9fd93ae8f2b8606ccb555835a917e569742c9d2e818e3073c8c9d360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212206b60237370eb66cd6c1b8d328fee499bf65d4536a43fb2ea8443d4b3bb4927e864736f6c63430008090033";
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