import { Signer, BigNumberish, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestCompoundBorrowRateOracle, TestCompoundBorrowRateOracleInterface } from "../TestCompoundBorrowRateOracle";
export declare class TestCompoundBorrowRateOracle__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(cToken: string, ethPool: boolean, underlying: string, _decimals: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TestCompoundBorrowRateOracle>;
    getDeployTransaction(cToken: string, ethPool: boolean, underlying: string, _decimals: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TestCompoundBorrowRateOracle;
    connect(signer: Signer): TestCompoundBorrowRateOracle__factory;
    static readonly bytecode = "0x60e06040523480156200001157600080fd5b5060405162003e3938038062003e39833981016040819052620000349162000b55565b83838383600060405190808252806020026020018201604052801562000064578160200160208202803683370190505b5060408051600081526020810190915283620000803362000249565b6001600160a01b038116608052436201000455620000a962000299602090811b620010cf17901c565b62010003805463ffffffff9290921663ffffffff199283161790556201000580549091166105dc17905550606462010006556001600160a01b03861660a05284806200017c5750836001600160a01b031660a0516001600160a01b0316636f307dc36040518163ffffffff1660e01b815260040160206040518083038186803b1580156200013657600080fd5b505afa1580156200014b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000171919062000bdc565b6001600160a01b0316145b620001ce5760405162461bcd60e51b815260206004820152601360248201527f546f6b656e7320646f206e6f74206d617463680000000000000000000000000060448201526064015b60405180910390fd5b6001600160a01b038416620002265760405162461bcd60e51b815260206004820152601560248201527f756e6465726c79696e67206d75737420657869737400000000000000000000006044820152606401620001c5565b60ff831660c052620002398282620002ab565b5050505050505050505062000d98565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000620002a64262000536565b905090565b620002ba600261ffff62000c12565b825110620002dc5760405162461bcd60e51b8152600401620001c59062000c35565b8151815161ffff821614620003055760405162461bcd60e51b8152600401620001c59062000c53565b60006200031482600162000c7f565b61ffff166001600160401b0381111562000332576200033262000bc6565b6040519080825280602002602001820160405280156200035c578160200160208202803683370190505b50905060006200036e83600162000c7f565b61ffff166001600160401b038111156200038c576200038c62000bc6565b604051908082528060200260200182016040528015620003b6578160200160208202803683370190505b50905060005b8361ffff168110156200046757858181518110620003de57620003de62000ca8565b6020026020010151838281518110620003fb57620003fb62000ca8565b602002602001019063ffffffff16908163ffffffff16815250508481815181106200042a576200042a62000ca8565b602002602001015182828151811062000447576200044762000ca8565b6020908102919091010152806200045e8162000cbe565b915050620003bc565b50600080620004756200057d565b9150915081848661ffff168151811062000493576200049362000ca8565b602002602001019063ffffffff16908163ffffffff168152505080838661ffff1681518110620004c757620004c762000ca8565b602002602001018181525050620004f084846004620007bc60201b620010df179092919060201c565b6003805461ffff948516620100000263ffff0000199486166401000000000265ffff0000ffff199092169590931694909417939093179190911617905550505050505050565b8063ffffffff81168114620005785760405162461bcd60e51b815260206004820152600760248201526654534f464c4f5760c81b6044820152606401620001c5565b919050565b600080600060a0516001600160a01b031663f8f9da286040518163ffffffff1660e01b815260040160206040518083038186803b158015620005be57600080fd5b505afa158015620005d3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620005f9919062000cdc565b905065048c27395000811115620006535760405162461bcd60e51b815260206004820152601c60248201527f626f72726f772072617465206973206162737572646c792068696768000000006044820152606401620001c5565b600060a0516001600160a01b0316636c540baf6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200069157600080fd5b505afa158015620006a6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620006cc919062000cdc565b620006d8904362000cf6565b90506000620006fc6040518060200160405280858152508362000a0160201b60201c565b9050600060a0516001600160a01b031663aa5af0fd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200073c57600080fd5b505afa15801562000751573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000777919062000cdc565b905060006200078883838062000a3a565b90506200079f6200029960201b620010cf1760201c565b620007af82633b9aca0062000d10565b9650965050505050509091565b600080600061ffff855110620007e65760405162461bcd60e51b8152600401620001c59062000c35565b8451845161ffff8216146200080f5760405162461bcd60e51b8152600401620001c59062000c53565b60008161ffff16116200084a5760405162461bcd60e51b81526020600482015260026024820152610c1560f21b6044820152606401620001c5565b6000805b8261ffff168161ffff161015620009e057878161ffff168151811062000878576200087862000ca8565b602002602001015163ffffffff168263ffffffff1610620008ce5760405162461bcd60e51b815260206004820152600f60248201526e1a5b9c1d5d081d5b9bdc99195c9959608a1b6044820152606401620001c5565b62000920888261ffff1681518110620008eb57620008eb62000ca8565b6020026020010151888361ffff16815181106200090c576200090c62000ca8565b602002602001015162000a6a60201b60201c565b898261ffff1661ffff81106200093a576200093a62000ca8565b82519101805460208401516040909401511515600160f81b026001600160f81b036001600160d81b03909516640100000000027fff0000000000000000000000000000000000000000000000000000000000000090921663ffffffff9094169390931717929092161790558751889061ffff8316908110620009c057620009c062000ca8565b602002602001015191508080620009d79062000d32565b9150506200084e565b508180620009f060018262000d57565b945094509450505093509350939050565b604080516020810190915260008152604051806020016040528062000a3185600001518562000af960201b60201c565b90529392505050565b60008062000a49858562000a01565b905062000a6162000a5a8262000b0e565b8462000b2e565b95945050505050565b60408051606081018252600080825260208201819052918101919091526001600160d81b0382111562000ac95760405162461bcd60e51b8152600401620001c5906020808252600490820152631f19189b60e11b604082015260600190565b506040805160608101825263ffffffff9390931683526001600160d81b0391909116602083015260019082015290565b600062000b07828462000d10565b9392505050565b805160009062000b2890670de0b6b3a76400009062000c12565b92915050565b600062000b07828462000d7d565b6001600160a01b038116811462000b5257600080fd5b50565b6000806000806080858703121562000b6c57600080fd5b845162000b798162000b3c565b6020860151909450801515811462000b9057600080fd5b604086015190935062000ba38162000b3c565b606086015190925060ff8116811462000bbb57600080fd5b939692955090935050565b634e487b7160e01b600052604160045260246000fd5b60006020828403121562000bef57600080fd5b815162000b078162000b3c565b634e487b7160e01b600052601160045260246000fd5b60008262000c3057634e487b7160e01b600052601260045260246000fd5b500490565b6020808252600490820152631350561560e21b604082015260600190565b602080825260129082015271098cadccee8d0e640daeae6e840dac2e8c6d60731b604082015260600190565b600061ffff80831681851680830382111562000c9f5762000c9f62000bfc565b01949350505050565b634e487b7160e01b600052603260045260246000fd5b600060001982141562000cd55762000cd562000bfc565b5060010190565b60006020828403121562000cef57600080fd5b5051919050565b60008282101562000d0b5762000d0b62000bfc565b500390565b600081600019048311821515161562000d2d5762000d2d62000bfc565b500290565b600061ffff8083168181141562000d4d5762000d4d62000bfc565b6001019392505050565b600061ffff8381169083168181101562000d755762000d7562000bfc565b039392505050565b6000821982111562000d935762000d9362000bfc565b500190565b60805160a05160c05161305c62000ddd60003960006102ac01526000818161049d015281816108c1015281816109ab0152610a660152600061036c015261305c6000f3fe608060405234801561001057600080fd5b50600436106101965760003560e01c806301320aad1461019b5780631195082e146101b6578063163e9c4f146101e157806317221ef1146101f457806322ff65681461020757806324b18b1714610221578063252c09d71461025557806325f258dd14610294578063313ce567146102a757806332148f67146102ce5780633c155bd5146102e3578063414535281461030b57806354124c641461031e57806356da9775146103315780636e035c05146103545780636f307dc314610367578063715018a6146103a65780637aa4db13146103ae5780637cf2cc9f146103b65780638a6b8c5d146103bf5780638da5cb5b146103c757806391aa375d146103cf57806393556dbd146103fa57806395f3e6051461040d578063bdb050921461042e578063c330c98d14610441578063c7db359b14610450578063ccf3eb9f14610498578063e9b69c0d146104bf578063efdf5d8b146104d2578063f2fde38b146104da578063f739670c146104ed578063f90ce5ba14610500578063fe115fbe14610518575b600080fd5b6101a3610520565b6040519081526020015b60405180910390f35b6101a36101c4366004612cfa565b600160209081526000928352604080842090915290825290205481565b6101a36101ef366004612d2d565b610587565b6101a3610202366004612d2d565b610599565b61020f600681565b60405160ff90911681526020016101ad565b620100055462010006546102399163ffffffff169082565b6040805163ffffffff90931683526020830191909152016101ad565b610268610263366004612d2d565b6105a5565b6040805163ffffffff90941684526001600160d81b0390921660208401521515908201526060016101ad565b6101a36102a2366004612d46565b6105df565b61020f7f000000000000000000000000000000000000000000000000000000000000000081565b6102e16102dc366004612d68565b610655565b005b6102f66102f1366004612d68565b6106da565b604080519283526020830191909152016101ad565b6101a3610319366004612d46565b610747565b6101a361032c366004612d8c565b61075b565b61034461033f366004612d46565b6107b0565b60405190151581526020016101ad565b6101a3610362366004612d46565b610816565b61038e7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016101ad565b6102e1610829565b6102e161086d565b6101a360025481565b6102396108ba565b61038e610b29565b6201000654620100055463ffffffff165b6040805192835263ffffffff9091166020830152016101ad565b6101a3610408366004612d46565b610b38565b61042061041b366004612db8565b610bc8565b6040516101ad929190612dfd565b6102e161043c366004612d2d565b610c00565b6101a3670de0b6b3a764000081565b6003546104739061ffff80821691620100008104821691600160201b9091041683565b6040805161ffff948516815292841660208401529216918101919091526060016101ad565b61038e7f000000000000000000000000000000000000000000000000000000000000000081565b6102f66104cd366004612db8565b610c74565b6101a3610cd0565b6102e16104e8366004612e18565b610d58565b6101a36104fb366004612d46565b610df5565b620100035462010004546102399163ffffffff169082565b6103e0610eff565b600354600090819060049061ffff90811690811061054057610540612e41565b60408051606081018252919092015463ffffffff81168252600160201b81046001600160d81b031660208301819052600160f81b90910460ff161515919092015292915050565b60006105938242610df5565b92915050565b60006105938242610b38565b60048161ffff81106105b657600080fd5b015463ffffffff81169150600160201b81046001600160d81b031690600160f81b900460ff1683565b6000806105ec8484611322565b9092509050801561064e57600061060c670de0b6b3a76400008604611460565b90506000610623670de0b6b3a76400008604611460565b63ffffffff928316600090815260016020908152604080832095909316825293909352909120839055505b5092915050565b600354600160201b900461ffff166000610671600483856114a5565b6003805461ffff808416600160201b810261ffff60201b19909316929092179092559192508316146106d55760405161ffff821681527f8a96a9c4bca0fb28be0fc5c84e95aff121a64e2533021e9d638bdc1f03b14ece9060200160405180910390a15b505050565b600080600060048461ffff1661ffff81106106f7576106f7612e41565b60408051606081018252919092015463ffffffff8116808352600160201b82046001600160d81b031660208401819052600160f81b90920460ff1615159290930191909152909590945092505050565b60006107538383611322565b509392505050565b60008061076783611597565b9050600061077d670de0b6b3a764000086612e6d565b9050600061078b82846115ae565b90506000610798826115ed565b90506107a48882611617565b98975050505050505050565b60006b033b2e3cadb136f08f6400006b033b2e3c91efc989409c0000826107d78584611617565b905060006107e58684611617565b90508187111580156107f75750808710155b15610809576001945050505050610593565b6000945050505050610593565b60006108228383611625565b9392505050565b33610832610b29565b6001600160a01b0316146108615760405162461bcd60e51b815260040161085890612e85565b60405180910390fd5b61086b600061168a565b565b6003546108929061ffff80821691620100008104821691600160201b909104166116da565b6003805463ffffffff19166201000061ffff9384160261ffff19161792909116919091179055565b60008060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f8f9da286040518163ffffffff1660e01b815260040160206040518083038186803b15801561091857600080fd5b505afa15801561092c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109509190612eba565b905065048c273950008111156109a75760405162461bcd60e51b815260206004820152601c60248201527b0c4dee4e4deee40e4c2e8ca40d2e640c2c4e6eae4c8d8f240d0d2ced60231b6044820152606401610858565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636c540baf6040518163ffffffff1660e01b815260040160206040518083038186803b158015610a0257600080fd5b505afa158015610a16573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a3a9190612eba565b610a449043612ed3565b90506000610a606040518060200160405280858152508361187d565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663aa5af0fd6040518163ffffffff1660e01b815260040160206040518083038186803b158015610abd57600080fd5b505afa158015610ad1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af59190612eba565b90506000610b048383846118ae565b9050610b0e6110cf565b610b1c82633b9aca00612eea565b9650965050505050509091565b6000546001600160a01b031690565b600081831115610b7d5760405162461bcd60e51b815260206004820152601060248201526f4d69736f72646572656420646174657360801b6044820152606401610858565b6000610b898484610df5565b90506000610b978585612ed3565b90506000610ba4826118cf565b90506000610bb182611597565b9050610bbd8482611625565b979650505050505050565b610bd0612cc6565b610bd8612cc6565b600354610bf790600490859061ffff808216916201000090041661191c565b91509150915091565b33610c09610b29565b6001600160a01b031614610c2f5760405162461bcd60e51b815260040161085890612e85565b8060025414610c715760028190556040518181527f88bd1242a1ad7dbba4967e0120324f17c382e4e3006e01dc3ffc0bf43e4b2a399060200160405180910390a15b50565b6000806000610c81610cd0565b9050600080610caf86610c926110cf565b6003546004929190879061ffff8082169162010000900416611ace565b6020918201519101516001600160d81b039182169891169650945050505050565b6000806000610cdd6108ba565b91509150610ce96110cf565b63ffffffff168263ffffffff1610610d015792915050565b600080610d0c610eff565b915091508063ffffffff168285610d216110cf565b610d2b9190612f09565b63ffffffff16610d3b9190612eea565b610d459190612f44565b610d4f9084612e6d565b94505050505090565b33610d61610b29565b6001600160a01b031614610d875760405162461bcd60e51b815260040161085890612e85565b6001600160a01b038116610dec5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610858565b610c718161168a565b600081831115610e335760405162461bcd60e51b815260206004820152600960248201526866726f6d203e20746f60b81b6044820152606401610858565b81831415610e4357506000610593565b6000610e4d6110cf565b90506000610e5a85611460565b90506000610e6785611460565b600354909150600090610e8b908590859061ffff8082169162010000900416611c81565b600354909150600090610eaf908690859061ffff8082169162010000900416611c81565b905081811115610ef1576000610ee3676765c793fa10079d601b1b610ed48486611ecd565b610ede9190612ed3565b611edb565b965061059395505050505050565b600095505050505050610593565b600354600090819061ffff16816001821015610f3357600354610f2e9060019062010000900461ffff16612f58565b610f46565b600354610f469060019061ffff16612f58565b60035490915060026201000090910461ffff1610801590610f87575060048161ffff1661ffff8110610f7a57610f7a612e41565b0154600160f81b900460ff165b8015610fe4575060048261ffff1661ffff8110610fa657610fa6612e41565b0154600160201b90046001600160d81b0316600461ffff838116908110610fcf57610fcf612e41565b0154600160201b90046001600160d81b031611155b6110165760405162461bcd60e51b815260206004820152600360248201526204e45560ec1b6044820152606401610858565b60048161ffff1661ffff811061102e5761102e612e41565b0154600160201b90046001600160d81b0316600461ffff84811690811061105757611057612e41565b01546110739190600160201b90046001600160d81b0316612f73565b6001600160d81b0316935060048161ffff1661ffff811061109657611096612e41565b015463ffffffff16600461ffff8085169081106110b5576110b5612e41565b01546110c7919063ffffffff16612f09565b925050509091565b60006110da42611460565b905090565b600080600061ffff85511061111f5760405162461bcd60e51b8152600401610858906020808252600490820152631350561560e21b604082015260600190565b8451845161ffff82161461116a5760405162461bcd60e51b8152602060048201526012602482015271098cadccee8d0e640daeae6e840dac2e8c6d60731b6044820152606401610858565b60008161ffff16116111a35760405162461bcd60e51b81526020600482015260026024820152610c1560f21b6044820152606401610858565b6000805b8261ffff168161ffff16101561130357878161ffff16815181106111cd576111cd612e41565b602002602001015163ffffffff168263ffffffff16106112215760405162461bcd60e51b815260206004820152600f60248201526e1a5b9c1d5d081d5b9bdc99195c9959608a1b6044820152606401610858565b611265888261ffff168151811061123a5761123a612e41565b6020026020010151888361ffff168151811061125857611258612e41565b6020026020010151611f67565b898261ffff1661ffff811061127c5761127c612e41565b82519101805460208401516040909401511515600160f81b026001600160f81b036001600160d81b03909516600160201b026001600160f81b031990921663ffffffff9094169390931717929092161790558751889061ffff83169081106112e6576112e6612e41565b6020026020010151915080806112fb90612f93565b9150506111a7565b508180611311600182612f58565b945094509450505093509350939050565b60008080611339670de0b6b3a76400008604611460565b90506000611350670de0b6b3a76400008604611460565b905060008263ffffffff1611801561136e575060008163ffffffff16115b6113a25760405162461bcd60e51b8152602060048201526005602482015264554e49545360d81b6044820152606401610858565b63ffffffff808316600090815260016020908152604080832093851683529290522054156113f85763ffffffff808316600090815260016020908152604080832093851683529290529081205494509250611457565b8063ffffffff166114076110cf565b63ffffffff1610611433576114288263ffffffff168263ffffffff16610df5565b935060019250611457565b6114508263ffffffff166114456110cf565b63ffffffff16610df5565b9350600092505b50509250929050565b8063ffffffff811681146114a05760405162461bcd60e51b815260206004820152600760248201526654534f464c4f5760c81b6044820152606401610858565b919050565b6000808361ffff16116114de5760405162461bcd60e51b81526020600482015260016024820152604960f81b6044820152606401610858565b61ffff8261ffff16106115225760405162461bcd60e51b815260206004820152600c60248201526b189d5999995c881b1a5b5a5d60a21b6044820152606401610858565b8261ffff168261ffff1611611538575081610822565b825b8261ffff168161ffff16101561158e576001858261ffff1661ffff811061156357611563612e41565b01805463ffffffff191663ffffffff929092169190911790558061158681612f93565b91505061153a565b50909392505050565b6000610593826a1a1601fc4ea7109e000000611fdf565b6000826115d35781156115c25760006115cc565b670de0b6b3a76400005b9050610593565b6108226115e86115e285611ff4565b846120a4565b6120b0565b60008061160d670de0b6b3a7640000676765c793fa10079d601b1b612f44565b6108229084612eea565b6000610822838360016120f6565b60008261163457506000610593565b600061164961164360016118cf565b84611fdf565b9050600061166b8561165b60016118cf565b6116659190612e6d565b836115ae565b905061167760016118cf565b6116819082612ed3565b95945050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080600060048661ffff1661ffff81106116f7576116f7612e41565b60408051606081018252929091015463ffffffff811683526001600160d81b03600160201b820416602084015260ff600160f81b9091041615159082015290506000806117426108ba565b600254855192945090925061175c9163ffffffff16612e6d565b8263ffffffff16101561177757878794509450505050611875565b7f5aec68e6980e788266f2f59f6fddb85f3e256ce6da46fdfab920b9b06aaa73756117a06121a9565b6040805191825230602083015261ffff8b81168383015263ffffffff86166060840152608083018590528a811660a0840152891660c0830152519081900360e00190a162010004546117f29043612ed3565b6201000655620100035463ffffffff1661180a6110cf565b6118149190612f09565b62010005805463ffffffff191663ffffffff9290921691909117905543620100045561183e6110cf565b62010003805463ffffffff191663ffffffff92831617905561186d906004908a90859085908c908c906121b416565b945094505050505b935093915050565b60408051602081019091526000815260405180602001604052806118a58560000151856122fb565b90529392505050565b6000806118bb858561187d565b90506116816118c982612307565b8461231f565b60007812725dd1d243aba0e75fe645cc4873f9e65afe688c928e1f2182111561190e57604051633492ffd960e01b815260048101839052602401610858565b50670de0b6b3a76400000290565b611924612cc6565b61192c612cc6565b60008361193a866001612fb5565b6119449190612fdb565b61ffff169050600060018561ffff168361195e9190612e6d565b6119689190612ed3565b905060005b60016119798385612e6d565b901c90508861198c61ffff881683612ffc565b61ffff811061199d5761199d612e41565b60408051606081018252919092015463ffffffff81168252600160201b81046001600160d81b03166020830152600160f81b900460ff16151591810182905295506119f4576119ed816001612e6d565b925061196d565b8861ffff8716611a05836001612e6d565b611a0f9190612ffc565b61ffff8110611a2057611a20612e41565b60408051606081018252919092015463ffffffff8082168352600160201b82046001600160d81b03166020840152600160f81b90910460ff1615159282019290925286519095508982169116118015908190611a8c5750846000015163ffffffff168963ffffffff1611155b15611a975750611ac2565b80611aae57611aa7600183612ed3565b9250611abc565b611ab9826001612e6d565b93505b5061196d565b50505094509492505050565b611ad6612cc6565b611ade612cc6565b878461ffff1661ffff8110611af557611af5612e41565b60408051606081018252919092015463ffffffff808216808452600160201b83046001600160d81b03166020850152600160f81b90920460ff1615159383019390935290935090881610611b74578663ffffffff16826000015163ffffffff161415611b6057611c76565b81611b6b8787611f67565b91509150611c76565b8783611b81866001612fb5565b611b8b9190612fdb565b61ffff1661ffff8110611ba057611ba0612e41565b60408051606081018252919092015463ffffffff81168252600160201b81046001600160d81b03166020830152600160f81b900460ff1615159181018290529250611c255760408051606081018252895463ffffffff81168252600160201b81046001600160d81b03166020830152600160f81b900460ff1615159181019190915291505b815163ffffffff80891691161115611c655760405162461bcd60e51b815260206004820152600360248201526213d31160ea1b6044820152606401610858565b611c718888868661191c565b915091505b965096945050505050565b60008363ffffffff168563ffffffff161015611cb057604051632ff198e560e21b815260040160405180910390fd5b8363ffffffff168563ffffffff161415611d5857611ccc612cc6565b60048461ffff1661ffff8110611ce457611ce4612e41565b60408051606081018252919092015463ffffffff808216808452600160201b83046001600160d81b03166020850152600160f81b90920460ff1615159383019390935290925090871614611d4157611d3a610cd0565b9150611d52565b80602001516001600160d81b031691505b50611ec5565b6000611d62610cd0565b9050600080611d766004888a868a8a611ace565b91509150816000015163ffffffff168763ffffffff161415611da75781602001516001600160d81b03169350611ec1565b805163ffffffff88811691161415611dce5780602001516001600160d81b03169350611ec1565b600082602001516001600160d81b031682602001516001600160d81b03161115611e3d576000676765c793fa10079d601b1b611e2484602001516001600160d81b031686602001516001600160d81b0316611ecd565b611e2e9190612ed3565b9050611e3981611edb565b9150505b82518251600091611e7091670de0b6b3a764000091611e5b91612f09565b63ffffffff16611e6b9190612eea565b611597565b90506000611e7e8383611625565b9050611ebb85602001516001600160d81b031682670de0b6b3a764000088600001518e611eab9190612f09565b63ffffffff1661032c9190612eea565b96505050505b5050505b949350505050565b60006108228383600161232b565b600080611efb670de0b6b3a7640000676765c793fa10079d601b1b612f44565b611f059084612f44565b90506002611f26670de0b6b3a7640000676765c793fa10079d601b1b612f44565b611f309190612f44565b611f4d670de0b6b3a7640000676765c793fa10079d601b1b612f44565b611f579085612ffc565b1061059357610822600182612e6d565b611f6f612cc6565b6001600160d81b03821115611faf5760405162461bcd60e51b8152600401610858906020808252600490820152631f19189b60e11b604082015260600190565b506040805160608101825263ffffffff9390931683526001600160d81b0391909116602083015260019082015290565b600061082283670de0b6b3a7640000846123c6565b6000670de0b6b3a764000082101561202257604051633621413760e21b815260048101839052602401610858565b6000612037670de0b6b3a76400008404612494565b670de0b6b3a7640000808202935090915083821c9081141561205a575050919050565b6706f05b59d3b200005b801561209c57670de0b6b3a7640000828002049150671bc16d674ec800008210612094579283019260019190911c905b60011c612064565b505050919050565b60006108228383612572565b6000680a688906bd8b00000082106120de57604051634a4f26f160e01b815260048101839052602401610858565b670de0b6b3a7640000604083901b0461082281612634565b6000831580612103575082155b1561211057506000610822565b600182600181111561212457612124613010565b1461213757670de0b6b3a7640000612144565b676765c793fa10079d601b1b5b600183600181111561215857612158613010565b14612175576121706002670de0b6b3a7640000612f44565b61218b565b61218b6002676765c793fa10079d601b1b612f44565b6121958587612eea565b61219f9190612e6d565b611ec59190612f44565b60006110da426118cf565b6000806000888861ffff1661ffff81106121d0576121d0612e41565b60408051606081018252919092015463ffffffff808216808452600160201b83046001600160d81b03166020850152600160f81b90920460ff16151593830193909352909250908816141561222b5787859250925050611c76565b8461ffff168461ffff161180156122535750612248600186612f58565b61ffff168861ffff16145b1561226057839150612264565b8491505b81612270896001612fb5565b61227a9190612fdb565b92506122868787611f67565b898461ffff1661ffff811061229d5761229d612e41565b82519101805460208401516040909401511515600160f81b026001600160f81b036001600160d81b03909516600160201b026001600160f81b031990921663ffffffff90941693909317179290921617905550965096945050505050565b60006108228284612eea565b805160009061059390670de0b6b3a764000090612f44565b60006108228284612e6d565b6000826123635760405162461bcd60e51b8152600401610858906020808252600490820152630444956360e41b604082015260600190565b6000612370600285612f44565b90508381600185600181111561238857612388613010565b1461239b57670de0b6b3a76400006123a8565b676765c793fa10079d601b1b5b6123b29088612eea565b6123bc9190612e6d565b6116819190612f44565b600080806000198587098587029250828110838203039150508060001415612401578382816123f7576123f7612f2e565b0492505050610822565b83811061242b57604051631dcf306360e21b81526004810182905260248101859052604401610858565b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b6000600160801b82106124b457608091821c916124b19082612e6d565b90505b600160401b82106124d257604091821c916124cf9082612e6d565b90505b600160201b82106124f057602091821c916124ed9082612e6d565b90505b62010000821061250d57601091821c9161250a9082612e6d565b90505b610100821061252957600891821c916125269082612e6d565b90505b6010821061254457600491821c916125419082612e6d565b90505b6004821061255f57600291821c9161255c9082612e6d565b90505b600282106114a057610593600182612e6d565b60008080600019848609848602925082811083820303915050670de0b6b3a764000081106125b65760405163698d9a0160e11b815260048101829052602401610858565b600080670de0b6b3a76400008688099150506706f05b59d3b1ffff8111826125f05780670de0b6b3a7640000850401945050505050610593565b620400008285030493909111909103600160ee1b02919091177faccb18165bd6fe31ae1cf318dc5b51eee0e1ba569b88cd74c1773b91fac106690201905092915050565b600160bf1b6001603f1b8216156126545768016a09e667f3bcc9090260401c5b6001603e1b82161561266f576801306fe0a31b7152df0260401c5b6001603d1b82161561268a576801172b83c7d517adce0260401c5b6001603c1b8216156126a55768010b5586cf9890f62a0260401c5b6001603b1b8216156126c0576801059b0d31585743ae0260401c5b6001603a1b8216156126db57680102c9a3e778060ee70260401c5b600160391b8216156126f65768010163da9fb33356d80260401c5b600160381b82161561271157680100b1afa5abcbed610260401c5b600160371b82161561272c5768010058c86da1c09ea20260401c5b600160361b821615612747576801002c605e2e8cec500260401c5b600160351b82161561276257680100162f3904051fa10260401c5b600160341b82161561277d576801000b175effdc76ba0260401c5b600160331b82161561279857680100058ba01fb9f96d0260401c5b600160321b8216156127b35768010002c5cc37da94920260401c5b600160311b8216156127ce576801000162e525ee05470260401c5b600160301b8216156127e95768010000b17255775c040260401c5b6001602f1b821615612804576801000058b91b5bc9ae0260401c5b6001602e1b82161561281f57680100002c5c89d5ec6d0260401c5b6001602d1b82161561283a5768010000162e43f4f8310260401c5b6001602c1b82161561285557680100000b1721bcfc9a0260401c5b6001602b1b8216156128705768010000058b90cf1e6e0260401c5b6001602a1b82161561288b576801000002c5c863b73f0260401c5b600160291b8216156128a657680100000162e430e5a20260401c5b600160281b8216156128c1576801000000b1721835510260401c5b600160271b8216156128dc57680100000058b90c0b490260401c5b600160261b8216156128f75768010000002c5c8601cc0260401c5b600160251b821615612912576801000000162e42fff00260401c5b600160241b82161561292d5768010000000b17217fbb0260401c5b600160231b821615612948576801000000058b90bfce0260401c5b600160221b82161561296357680100000002c5c85fe30260401c5b600160211b82161561297e5768010000000162e42ff10260401c5b600160201b82161561299957680100000000b17217f80260401c5b63800000008216156129b45768010000000058b90bfc0260401c5b63400000008216156129cf576801000000002c5c85fe0260401c5b63200000008216156129ea57680100000000162e42ff0260401c5b6310000000821615612a05576801000000000b17217f0260401c5b6308000000821615612a2057680100000000058b90c00260401c5b6304000000821615612a3b5768010000000002c5c8600260401c5b6302000000821615612a56576801000000000162e4300260401c5b6301000000821615612a715768010000000000b172180260401c5b62800000821615612a8b576801000000000058b90c0260401c5b62400000821615612aa557680100000000002c5c860260401c5b62200000821615612abf5768010000000000162e430260401c5b62100000821615612ad957680100000000000b17210260401c5b62080000821615612af35768010000000000058b910260401c5b62040000821615612b0d576801000000000002c5c80260401c5b62020000821615612b2757680100000000000162e40260401c5b62010000821615612b405761b172600160401b010260401c5b618000821615612b58576158b9600160401b010260401c5b614000821615612b7057612c5d600160401b010260401c5b612000821615612b885761162e600160401b010260401c5b611000821615612ba057610b17600160401b010260401c5b610800821615612bb85761058c600160401b010260401c5b610400821615612bd0576102c6600160401b010260401c5b610200821615612be857610163600160401b010260401c5b610100821615612bff5760b1600160401b010260401c5b6080821615612c15576059600160401b010260401c5b6040821615612c2b57602c600160401b010260401c5b6020821615612c41576016600160401b010260401c5b6010821615612c5757600b600160401b010260401c5b6008821615612c6d576006600160401b010260401c5b6004821615612c83576003600160401b010260401c5b6002821615612c99576001600160401b010260401c5b6001821615612caf576001600160401b010260401c5b670de0b6b3a76400000260409190911c60bf031c90565b604080516060810182526000808252602082018190529181019190915290565b803563ffffffff811681146114a057600080fd5b60008060408385031215612d0d57600080fd5b612d1683612ce6565b9150612d2460208401612ce6565b90509250929050565b600060208284031215612d3f57600080fd5b5035919050565b60008060408385031215612d5957600080fd5b50508035926020909101359150565b600060208284031215612d7a57600080fd5b813561ffff8116811461082257600080fd5b600080600060608486031215612da157600080fd5b505081359360208301359350604090920135919050565b600060208284031215612dca57600080fd5b61082282612ce6565b805163ffffffff1682526020808201516001600160d81b0316908301526040908101511515910152565b60c08101612e0b8285612dd3565b6108226060830184612dd3565b600060208284031215612e2a57600080fd5b81356001600160a01b038116811461082257600080fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115612e8057612e80612e57565b500190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600060208284031215612ecc57600080fd5b5051919050565b600082821015612ee557612ee5612e57565b500390565b6000816000190483118215151615612f0457612f04612e57565b500290565b600063ffffffff83811690831681811015612f2657612f26612e57565b039392505050565b634e487b7160e01b600052601260045260246000fd5b600082612f5357612f53612f2e565b500490565b600061ffff83811690831681811015612f2657612f26612e57565b60006001600160d81b0383811690831681811015612f2657612f26612e57565b600061ffff80831681811415612fab57612fab612e57565b6001019392505050565b600061ffff808316818516808303821115612fd257612fd2612e57565b01949350505050565b600061ffff80841680612ff057612ff0612f2e565b92169190910692915050565b60008261300b5761300b612f2e565b500690565b634e487b7160e01b600052602160045260246000fdfea264697066735822122076e2db554ccc12f331bc9d211eb8295ec2f81dc0a823af603a957e479f2d348b64736f6c63430008090033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
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
    })[];
    static createInterface(): TestCompoundBorrowRateOracleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TestCompoundBorrowRateOracle;
}
//# sourceMappingURL=TestCompoundBorrowRateOracle__factory.d.ts.map