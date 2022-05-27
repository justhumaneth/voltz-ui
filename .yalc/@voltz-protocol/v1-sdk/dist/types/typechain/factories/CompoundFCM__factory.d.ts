import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CompoundFCM, CompoundFCMInterface } from "../CompoundFCM";
export declare class CompoundFCM__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<CompoundFCM>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): CompoundFCM;
    connect(signer: Signer): CompoundFCM__factory;
    static readonly bytecode = "0x60a0604052306080523480156200001557600080fd5b50606454610100900460ff16620000335760645460ff16156200003d565b6200003d620000e2565b620000a55760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b606454610100900460ff16158015620000c8576064805461ffff19166101011790555b8015620000db576064805461ff00191690555b5062000106565b6000620000fa306200010060201b62001a081760201c565b15905090565b3b151590565b60805161334762000137600039600081816108a5015281816108e501528181610caa0152610cea01526133476000f3fe6080604052600436106100ee5760003560e01c80624006e0146100f357806303742274146101235780630d211954146101635780632495a599146101855780633659cfe6146101a5578063485cc955146101c55780634f1ef286146101e557806355468a8b146101f85780635c975abb1461021857806369e527da14610249578063715018a6146102675780638da5cb5b1461027c57806392a88fa21461029157806398f4b1b2146102fa5780639a2f48f514610318578063bc61f02d1461036d578063c1ccfa68146103b1578063e098372c146103d1578063ebc9b02e146103ef578063f2fde38b14610404575b600080fd5b3480156100ff57600080fd5b506001546001600160a01b03165b60405161011a9190612c53565b60405180910390f35b34801561012f57600080fd5b5061014361013e366004612c7c565b610424565b60408051948552602085019390935291830152606082015260800161011a565b34801561016f57600080fd5b5061018361017e366004612cba565b610851565b005b34801561019157600080fd5b5060045461010d906001600160a01b031681565b3480156101b157600080fd5b506101836101c0366004612cd7565b61089a565b3480156101d157600080fd5b506101836101e0366004612cf4565b610963565b6101836101f3366004612d38565b610c9f565b34801561020457600080fd5b50610143610213366004612c7c565b610d59565b34801561022457600080fd5b5060045461023990600160a01b900460ff1681565b604051901515815260200161011a565b34801561025557600080fd5b506031546001600160a01b031661010d565b34801561027357600080fd5b506101836110dd565b34801561028857600080fd5b5061010d611118565b34801561029d57600080fd5b506102d86102ac366004612cd7565b600360208190526000918252604090912080546001820154600283015492909301549092919060ff1684565b604080519485526020850193909352918301521515606082015260800161011a565b34801561030657600080fd5b506000546001600160a01b031661010d565b34801561032457600080fd5b50610338610333366004612cd7565b611127565b60405161011a919081518152602080830151908201526040808301519082015260609182015115159181019190915260800190565b34801561037957600080fd5b506103a3610388366004612cd7565b6001600160a01b031660009081526003602052604090205490565b60405190815260200161011a565b3480156103bd57600080fd5b506101836103cc366004612dfb565b6111a4565b3480156103dd57600080fd5b506002546001600160a01b031661010d565b3480156103fb57600080fd5b506103a36113cb565b34801561041057600080fd5b5061018361041f366004612cd7565b61196b565b600080600080600460149054906101000a900460ff16156104605760405162461bcd60e51b815260040161045790612e27565b60405180910390fd5b3360009081526003602052604081206002810154909112156104c15760405162461bcd60e51b815260206004820152601a6024820152795472616465722056542062616c616e636520706f73697469766560301b6044820152606401610457565b600160ff1b8160020154136105105760405162461bcd60e51b81526020600482015260156024820152742a3930b232b9102b2a103130b630b731b29036b4b760591b6044820152606401610457565b86816002015461051f90612e5d565b101561056d5760405162461bcd60e51b815260206004820152601d60248201527f6e6f74696f6e616c20746f20756e77696e64203e206e6f74696f6e616c0000006044820152606401610457565b60006040518060a00160405280306001600160a01b031681526020016105928a611a0e565b61059b90612e5d565b81526001600160a01b03891660208201526001546040909101906105c890600160a01b900460020b612e7a565b600290810b8252600154600160a01b9004810b602090920191909152546040516333bac73760e11b81529192506001600160a01b0316906367758e6e90610613908490600401612e9d565b60a060405180830381600087803b15801561062d57600080fd5b505af1158015610641573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106659190612ee9565b509298509096509450925060008512156106b55760405162461bcd60e51b815260206004820152601160248201527056542064656c7461206e6567617469766560781b6044820152606401610457565b6000806106c3848989611a7c565b915091506000603160009054906101000a90046001600160a01b03166001600160a01b031663182df0f56040518163ffffffff1660e01b815260040160206040518083038186803b15801561071757600080fd5b505afa15801561072b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061074f9190612f29565b9050600061075d8983611ab7565b905060008187600001546107719190612f42565b8088559050610781858583611ace565b6001546004546107a0916001600160a01b03918216913391168c611c0e565b6031546107b7906001600160a01b03163384611c7f565b336001600160a01b03167f6acfc9440f6cbb04b516cd21204df4411f56488a61afeb29b0f25531809ccdb28e8e8c8f8f8e6040516107fa96959493929190612f59565b60405180910390a2336001600160a01b03166000805160206132ab833981519152886000015489600101548a6002015460405161083993929190612f8a565b60405180910390a25050505050505092959194509250565b6001546001600160a01b0316331461087c57604051630a0d349f60e21b815260040160405180910390fd5b60048054911515600160a01b0260ff60a01b19909216919091179055565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156108e35760405162461bcd60e51b815260040161045790612fa0565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610915611c9e565b6001600160a01b03161461093b5760405162461bcd60e51b815260040161045790612fda565b61094481611cba565b6040805160008082526020820190925261096091839190611ce9565b50565b606454610100900460ff1661097e5760645460ff1615610982565b303b155b6109e55760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610457565b606454610100900460ff16158015610a07576064805461ffff19166101011790555b600280546001600160a01b038086166001600160a01b03199283161790925560018054928516929091168217905560408051634c7a58d960e11b815290516398f4b1b291600480820192602092909190829003018186803b158015610a6b57600080fd5b505afa158015610a7f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aa39190613014565b600080546001600160a01b0319166001600160a01b0392831617905560015460408051632495a59960e01b815290519190921691632495a599916004808301926020929190829003018186803b158015610afc57600080fd5b505afa158015610b10573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b349190613014565b600480546001600160a01b0319166001600160a01b039283161781556000546040805163ccf3eb9f60e01b81529051919093169263ccf3eb9f9281810192602092909190829003018186803b158015610b8c57600080fd5b505afa158015610ba0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc49190613014565b603180546001600160a01b0319166001600160a01b03928316179055600254604080516334324e9f60e21b81529051919092169163d0c93a7c916004808301926020929190829003018186803b158015610c1d57600080fd5b505afa158015610c31573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c559190613031565b6001805462ffffff92909216600160a01b0262ffffff60a01b19909216919091179055610c80611e30565b610c88611e67565b8015610c9a576064805461ff00191690555b505050565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415610ce85760405162461bcd60e51b815260040161045790612fa0565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610d1a611c9e565b6001600160a01b031614610d405760405162461bcd60e51b815260040161045790612fda565b610d4982611cba565b610d5582826001611ce9565b5050565b600080600080600460149054906101000a900460ff1615610d8c5760405162461bcd60e51b815260040161045790612e27565b85610dc85760405162461bcd60e51b815260206004820152600c60248201526b06e6f74696f6e616c203d20360a41b6044820152606401610457565b60006040518060a00160405280306001600160a01b03168152602001610ded89611a0e565b81526001600160a01b0388166020820152600154604090910190610e1a90600160a01b900460020b612e7a565b600290810b8252600154600160a01b9004810b602090920191909152546040516333bac73760e11b81529192506001600160a01b0316906367758e6e90610e65908490600401612e9d565b60a060405180830381600087803b158015610e7f57600080fd5b505af1158015610e93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eb79190612ee9565b50929750909550935091506000841315610f035760405162461bcd60e51b815260206004820152600d60248201526c2b2a103232b63a309039b4b3b760991b6044820152606401610457565b600160ff1b8413610f455760405162461bcd60e51b815260206004820152600c60248201526b2b2a103232b63a309036b4b760a11b6044820152606401610457565b336000908152600360209081526040808320603154825163bd6d894d60e01b815292519194936001600160a01b039091169263bd6d894d926004808301939282900301818787803b158015610f9957600080fd5b505af1158015610fad573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fd19190612f29565b90506000610fe882610fe289612e5d565b90611ab7565b90506000818460000154610ffc9190613054565b808555905061100c848a8a611a7c565b5050603154611026906001600160a01b0316333085611c0e565b600154600454611045916001600160a01b03918216913391168a611c0e565b336001600160a01b03167f3d4e16ab2c61731f475c393d983859da40555d340dbe3b2a164616aca9e75f988c8c8a8d8d8c60405161108896959493929190612f59565b60405180910390a2336001600160a01b03166000805160206132ab8339815191528560000154866001015487600201546040516110c793929190612f8a565b60405180910390a2505050505092959194509250565b336110e6611118565b6001600160a01b03161461110c5760405162461bcd60e51b81526004016104579061306c565b6111166000611e9e565b565b6097546001600160a01b031690565b61115460405180608001604052806000815260200160008152602001600081526020016000151581525090565b506001600160a01b031660009081526003602081815260409283902083516080810185528154815260018201549281019290925260028101549382019390935291015460ff161515606082015290565b6001546001600160a01b031633146111cf57604051630a0d349f60e21b815260040160405180910390fd5b600454600160a01b900460ff16156111f95760405162461bcd60e51b815260040161045790612e27565b600480546031546040516370a0823160e01b815284936001600160a01b03938416936370a082319361122e9391169101612c53565b60206040518083038186803b15801561124657600080fd5b505afa15801561125a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061127e9190612f29565b106113225760315460405163852a12e360e01b8152600481018390526001600160a01b039091169063852a12e390602401602060405180830381600087803b1580156112c957600080fd5b505af11580156112dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113019190612f29565b1561130b57600080fd5b600454610d55906001600160a01b03168383611c7f565b610d55826113b8603160009054906101000a90046001600160a01b03166001600160a01b031663bd6d894d6040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561137957600080fd5b505af115801561138d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113b19190612f29565b8490611ab7565b6031546001600160a01b03169190611c7f565b60006113d5611ef0565b600160009054906101000a90046001600160a01b03166001600160a01b03166393edb4546040518163ffffffff1660e01b815260040160206040518083038186803b15801561142357600080fd5b505afa158015611437573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061145b9190612f29565b111561147a576040516301730b8160e11b815260040160405180910390fd5b600454600160a01b900460ff16156114a45760405162461bcd60e51b815260040161045790612e27565b33600090815260036020908152604080832060018082015460028301549154845163652c30b760e01b8152945193969561174d9592946001600160a01b039092169263652c30b79260048083019392829003018186803b15801561150757600080fd5b505afa15801561151b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061153f9190612f29565b600160009054906101000a90046001600160a01b03166001600160a01b03166393edb4546040518163ffffffff1660e01b815260040160206040518083038186803b15801561158d57600080fd5b505afa1580156115a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115c59190612f29565b6000546001546040805163652c30b760e01b815290516001600160a01b03938416936325f258dd93169163652c30b7916004808301926020929190829003018186803b15801561161457600080fd5b505afa158015611628573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061164c9190612f29565b600160009054906101000a90046001600160a01b03166001600160a01b03166393edb4546040518163ffffffff1660e01b815260040160206040518083038186803b15801561169a57600080fd5b505afa1580156116ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116d29190612f29565b6040516001600160e01b031960e085901b16815260048101929092526024820152604401602060405180830381600087803b15801561171057600080fd5b505af1158015611724573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117489190612f29565b611f00565b9050611776826001015461176090612e5d565b836002015461176e90612e5d565b849190611a7c565b5050600081121561185c57600160ff1b81136117bd5760405162461bcd60e51b815260206004820152600660248201526529a19036b4b760d11b6044820152606401610457565b6031546040805163182df0f560e01b815290516000926001600160a01b03169163182df0f5916004808301926020929190829003018186803b15801561180257600080fd5b505afa158015611816573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061183a9190612f29565b9050600061184b82610fe285612e5d565b84546118579190612f42565b845550505b81546000835561186b83611f69565b603154611882906001600160a01b03163383611c7f565b60008213156118f05760015460405163efcfc3f960e01b81526001600160a01b039091169063efcfc3f9906118bd90339086906004016130a1565b600060405180830381600087803b1580156118d757600080fd5b505af11580156118eb573d6000803e3d6000fd5b505050505b60405182815233907f2761931c2b8dc26fc26290447a831f72789013b635b9d8af518a0ff79bda796f9060200160405180910390a2336001600160a01b03166000805160206132ab83398151915284600001548560010154866002015460405161195c93929190612f8a565b60405180910390a25091505090565b33611974611118565b6001600160a01b03161461199a5760405162461bcd60e51b81526004016104579061306c565b6001600160a01b0381166119ff5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610457565b61096081611e9e565b3b151590565b60006001600160ff1b03821115611a785760405162461bcd60e51b815260206004820152602860248201527f53616665436173743a2076616c756520646f65736e27742066697420696e2061604482015267371034b73a191a9b60c11b6064820152608401610457565b5090565b600080838560010154611a8f91906130ba565b9150828560020154611aa191906130ba565b6001860183905560029095018590555093915050565b6000611ac583836000611fc0565b90505b92915050565b6000821315611b0a5760405162461bcd60e51b81526020600482015260086024820152672b2a211039b4b3b760c11b6044820152606401610457565b600160ff1b8213611b475760405162461bcd60e51b81526020600482015260076024820152662b2a211036b4b760c91b6044820152606401610457565b6000611b5283612e5d565b90506000611b5f82611a0e565b611b70611b6b85612066565b611a0e565b611b7a91906130fb565b90506000611b8886866120fb565b90506000811215611c0657600160ff1b8113611bd05760405162461bcd60e51b81526020600482015260076024820152662929a19036b4b760c91b6044820152606401610457565b81611bda82612e5d565b1315611c0657611bea81846130ba565b6040516341d5a83b60e01b815260040161045791815260200190565b505050505050565b6040516001600160a01b0380851660248301528316604482015260648101829052611c799085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526123f5565b50505050565b610c9a8363a9059cbb60e01b8484604051602401611c429291906130a1565b6000805160206132cb833981519152546001600160a01b031690565b33611cc3611118565b6001600160a01b0316146109605760405162461bcd60e51b81526004016104579061306c565b6000611cf3611c9e565b9050611cfe84612476565b600083511180611d0b5750815b15611d1c57611d1a8484612509565b505b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd9143805460ff16611e2957805460ff19166001178155604051611d97908690611d68908590602401612c53565b60408051601f198184030181529190526020810180516001600160e01b0316631b2ce7f360e11b179052612509565b50805460ff19168155611da8611c9e565b6001600160a01b0316826001600160a01b031614611e205760405162461bcd60e51b815260206004820152602f60248201527f45524331393637557067726164653a207570677261646520627265616b73206660448201526e75727468657220757067726164657360881b6064820152608401610457565b611e29856125f4565b5050505050565b606454610100900460ff16611e575760405162461bcd60e51b81526004016104579061313a565b611e5f612634565b61111661265b565b606454610100900460ff16611e8e5760405162461bcd60e51b81526004016104579061313a565b611e96612634565b611116612634565b609780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000611efb4261268b565b905090565b600080611f0c876126d8565b90506000611f19876126d8565b90506000611f33611f2c60018989612755565b849061282a565b90506000611f41838761282a565b90506000611f4f82846130ba565b670de0b6b3a764000090059b9a5050505050505050505050565b600381015460ff1615611fb05760405162461bcd60e51b815260206004820152600f60248201526e185b1c9958591e481cd95d1d1b1959608a1b6044820152606401610457565b600301805460ff19166001179055565b600082611ff85760405162461bcd60e51b8152600401610457906020808252600490820152630444956360e41b604082015260600190565b600061200560028561319b565b90508381600185600181111561201d5761201d6131bd565b1461203057670de0b6b3a764000061203d565b676765c793fa10079d601b1b5b61204790886131d3565b6120519190613054565b61205b919061319b565b9150505b9392505050565b600080603160009054906101000a90046001600160a01b03166001600160a01b031663182df0f56040518163ffffffff1660e01b815260040160206040518083038186803b1580156120b757600080fd5b505afa1580156120cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120ef9190612f29565b905061205f83826128ef565b600080612107846126d8565b90506000612114846126d8565b905060006122368361223160018060009054906101000a90046001600160a01b03166001600160a01b031663652c30b76040518163ffffffff1660e01b815260040160206040518083038186803b15801561216e57600080fd5b505afa158015612182573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121a69190612f29565b600160009054906101000a90046001600160a01b03166001600160a01b03166393edb4546040518163ffffffff1660e01b815260040160206040518083038186803b1580156121f457600080fd5b505afa158015612208573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061222c9190612f29565b612755565b61282a565b600080546001546040805163652c30b760e01b8152905194955092936001600160a01b03928316936325f258dd939092169163652c30b7916004808301926020929190829003018186803b15801561228d57600080fd5b505afa1580156122a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122c59190612f29565b600160009054906101000a90046001600160a01b03166001600160a01b03166393edb4546040518163ffffffff1660e01b815260040160206040518083038186803b15801561231357600080fd5b505afa158015612327573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061234b9190612f29565b6040516001600160e01b031960e085901b16815260048101929092526024820152604401602060405180830381600087803b15801561238957600080fd5b505af115801561239d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123c19190612f29565b905060006123cf848361282a565b905060006123dd82856130ba565b670de0b6b3a764000090059998505050505050505050565b600061242183836040518060400160405280600781526020016629aa261032b93960c91b8152506128fd565b805190915015610c9a578080602001905181019061243f91906131f2565b610c9a5760405162461bcd60e51b815260206004820152600860248201526714d5130819985a5b60c21b6044820152606401610457565b803b6124da5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401610457565b6000805160206132cb83398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b6060823b6125685760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610457565b600080846001600160a01b031684604051612583919061323b565b600060405180830381855af49150503d80600081146125be576040519150601f19603f3d011682016040523d82523d6000602084013e6125c3565b606091505b50915091506125eb82826040518060600160405280602781526020016132eb602791396129a7565b95945050505050565b6125fd81612476565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b606454610100900460ff166111165760405162461bcd60e51b81526004016104579061313a565b606454610100900460ff166126825760405162461bcd60e51b81526004016104579061313a565b61111633611e9e565b60007812725dd1d243aba0e75fe645cc4873f9e65afe688c928e1f218211156126ca57604051633492ffd960e01b815260048101839052602401610457565b50670de0b6b3a76400000290565b60007809392ee8e921d5d073aff322e62439fcf32d7f344649470f8f198212156127185760405163e608e18b60e01b815260048101839052602401610457565b7809392ee8e921d5d073aff322e62439fcf32d7f344649470f908213156126ca576040516371f72a3160e01b815260048101839052602401610457565b600082821161278f5760405162461bcd60e51b815260040161045790602080825260049082015263453c3d5360e01b604082015260600190565b6000612799611ef0565b9050838110156127d35760405162461bcd60e51b8152602060048201526005602482015264422e543c5360d81b6044820152606401610457565b600085806127e15750838210155b156127f7576127f08585612f42565b9050612804565b6128018583612f42565b90505b61282068056bc75e2d6310000061281a836129e0565b906129f3565b9695505050505050565b6000600160ff1b8314806128415750600160ff1b82145b1561285f57604051630d01a11b60e21b815260040160405180910390fd5b600080600085126128705784612875565b846000035b915060008412612885578361288a565b836000035b905060006128988383612a08565b90506001600160ff1b038111156128c55760405163bf79e8d960e01b815260048101829052602401610457565b6000198087139086138082186001146128de57826128e3565b826000035b98975050505050505050565b6000611ac583836000612aca565b6060833b61293c5760405162461bcd60e51b815260206004820152600c60248201526b1b9bdb8b58dbdb9d1c9858dd60a21b6044820152606401610457565b600080856001600160a01b0316600086604051612959919061323b565b60006040518083038185875af1925050503d8060008114612996576040519150601f19603f3d011682016040523d82523d6000602084013e61299b565b606091505b50915091506128208282865b606083156129b657508161205f565b8251156129c65782518084602001fd5b8160405162461bcd60e51b81526004016104579190613257565b6000611ac8826a1a1601fc4ea7109e0000005b6000611ac583670de0b6b3a764000084612b85565b60008080600019848609848602925082811083820303915050670de0b6b3a76400008110612a4c5760405163698d9a0160e11b815260048101829052602401610457565b600080670de0b6b3a76400008688099150506706f05b59d3b1ffff811182612a865780670de0b6b3a7640000850401945050505050611ac8565b620400008285030493909111909103600160ee1b02919091177faccb18165bd6fe31ae1cf318dc5b51eee0e1ba569b88cd74c1773b91fac106690201905092915050565b6000831580612ad7575082155b15612ae45750600061205f565b6001826001811115612af857612af86131bd565b14612b0b57670de0b6b3a7640000612b18565b676765c793fa10079d601b1b5b6001836001811115612b2c57612b2c6131bd565b14612b4957612b446002670de0b6b3a764000061319b565b612b5f565b612b5f6002676765c793fa10079d601b1b61319b565b612b6985876131d3565b612b739190613054565b612b7d919061319b565b949350505050565b600080806000198587098587029250828110838203039150508060001415612bc057838281612bb657612bb6613185565b049250505061205f565b838110612bea57604051631dcf306360e21b81526004810182905260248101859052604401610457565b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b6001600160a01b0391909116815260200190565b6001600160a01b038116811461096057600080fd5b60008060408385031215612c8f57600080fd5b823591506020830135612ca181612c67565b809150509250929050565b801515811461096057600080fd5b600060208284031215612ccc57600080fd5b813561205f81612cac565b600060208284031215612ce957600080fd5b813561205f81612c67565b60008060408385031215612d0757600080fd5b8235612d1281612c67565b91506020830135612ca181612c67565b634e487b7160e01b600052604160045260246000fd5b60008060408385031215612d4b57600080fd5b8235612d5681612c67565b915060208301356001600160401b0380821115612d7257600080fd5b818501915085601f830112612d8657600080fd5b813581811115612d9857612d98612d22565b604051601f8201601f19908116603f01168101908382118183101715612dc057612dc0612d22565b81604052828152886020848701011115612dd957600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60008060408385031215612e0e57600080fd5b8235612e1981612c67565b946020939093013593505050565b60208082526006908201526514185d5cd95960d21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b821415612e7357612e73612e47565b5060000390565b60008160020b627fffff19811415612e9457612e94612e47565b60000392915050565b600060a08201905060018060a01b038084511683526020840151602084015280604085015116604084015250606083015160020b6060830152608083015160020b608083015292915050565b600080600080600060a08688031215612f0157600080fd5b5050835160208501516040860151606087015160809097015192989197509594509092509050565b600060208284031215612f3b57600080fd5b5051919050565b600082821015612f5457612f54612e47565b500390565b9586526001600160a01b0394909416602086015260408501929092526060840152608083015260a082015260c00190565b9283526020830191909152604082015260600190565b6020808252602c9082015260008051602061328b83398151915260408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c9082015260008051602061328b83398151915260408201526b6163746976652070726f787960a01b606082015260800190565b60006020828403121561302657600080fd5b815161205f81612c67565b60006020828403121561304357600080fd5b81518060020b811461205f57600080fd5b6000821982111561306757613067612e47565b500190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6001600160a01b03929092168252602082015260400190565b600080821280156001600160ff1b03849003851316156130dc576130dc612e47565b600160ff1b83900384128116156130f5576130f5612e47565b50500190565b60008083128015600160ff1b85018412161561311957613119612e47565b6001600160ff1b038401831381161561313457613134612e47565b50500390565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b634e487b7160e01b600052601260045260246000fd5b6000826131b857634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052602160045260246000fd5b60008160001904831182151516156131ed576131ed612e47565b500290565b60006020828403121561320457600080fd5b815161205f81612cac565b60005b8381101561322a578181015183820152602001613212565b83811115611c795750506000910152565b6000825161324d81846020870161320f565b9190910192915050565b602081526000825180602084015261327681604085016020870161320f565b601f01601f1916919091016040019291505056fe46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682085f7a754cbb9fd93ae8f2b8606ccb555835a917e569742c9d2e818e3073c8c9d360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212208fd11cfbde1daae5cffd0eeed7eaa328c5b0bfd154bf1e447ba4ef2e3cfaccb264736f6c63430008090033";
    static readonly abi: ({
        inputs: never[];
        stateMutability: string;
        type: string;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
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
        stateMutability?: undefined;
        outputs?: undefined;
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
    static createInterface(): CompoundFCMInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CompoundFCM;
}
//# sourceMappingURL=CompoundFCM__factory.d.ts.map