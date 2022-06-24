import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { E2ESetup, E2ESetupInterface } from "../E2ESetup";
export declare class E2ESetup__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<E2ESetup>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): E2ESetup;
    connect(signer: Signer): E2ESetup__factory;
    static readonly bytecode = "0x60806040526000600255600060055534801561001a57600080fd5b50612c148061002a6000396000f3fe6080604052600436106101eb5760003560e01c80623b80dc146101f057806302b3b4c41461022f57806302b660a81461024f5780630a4855451461028f5780631677450f146102bc5780631b5ac4b5146102e95780631c893ab3146103175780631f27dbfc146103445780632d483bec146103815780632df1bfb5146103a1578063381a0e8b146103de5780633c0ce413146103fe5780633e668c881461043b5780633faf68fe1461045b578063402836981461047b578063447877711461049b5780634cb71222146104bb5780634cccf05f146104f857806351e4569a1461051857806369696dbf1461053857806369e527da1461055857806378d91872146105785780637a0a98dd146105985780637e3ffefd146105c557806383e345e7146105db578063840047eb146105ee57806398923f971461060e578063a16c458e1461062e578063a54b6c881461066b578063bac0764e1461068b578063be6e9a2c146106e8578063c6e34d3714610708578063cdc86793146107b3578063d1f323c8146107c9578063dc888684146107e9578063e203b4921461081f578063e3435906146108bd578063e9ae4bc8146108dd578063e9d337b8146108fd578063f08af47e1461091d578063f0f1f5701461093d578063f32aaeb31461096a578063fc35a80a14610998575b600080fd5b3480156101fc57600080fd5b5061022d61020b36600461234f565b600a80546001600160a01b0319166001600160a01b0392909216919091179055565b005b34801561023b57600080fd5b5061022d61024a36600461237e565b6109c5565b61026261025d366004612452565b610d67565b604080519586526020860194909452928401919091526060830152608082015260a0015b60405180910390f35b34801561029b57600080fd5b50600a546102af906001600160a01b031681565b6040516102869190612502565b3480156102c857600080fd5b506102dc6102d7366004612516565b610e66565b604051610286919061255b565b3480156102f557600080fd5b506103096103043660046125e8565b611009565b604051908152602001610286565b34801561032357600080fd5b5061030961033236600461234f565b60046020526000908152604090205481565b34801561035057600080fd5b5061022d61035f36600461234f565b600b80546001600160a01b0319166001600160a01b0392909216919091179055565b34801561038d57600080fd5b5061022d61039c3660046125e8565b61102b565b3480156103ad57600080fd5b5061022d6103bc36600461234f565b600c80546001600160a01b0319166001600160a01b0392909216919091179055565b3480156103ea57600080fd5b506103096103f9366004612601565b61127f565b34801561040a57600080fd5b5061022d61041936600461234f565b600d80546001600160a01b0319166001600160a01b0392909216919091179055565b34801561044757600080fd5b50600d546102af906001600160a01b031681565b34801561046757600080fd5b50610262610476366004612665565b61136e565b34801561048757600080fd5b5061022d6104963660046126fd565b611534565b3480156104a757600080fd5b5061022d6104b636600461234f565b61158c565b3480156104c757600080fd5b5061022d6104d636600461234f565b601080546001600160a01b0319166001600160a01b0392909216919091179055565b34801561050457600080fd5b5061022d61051336600461273b565b611604565b34801561052457600080fd5b5061022d610533366004612516565b6117e9565b34801561054457600080fd5b5061022d61055336600461279c565b61183f565b34801561056457600080fd5b506010546102af906001600160a01b031681565b34801561058457600080fd5b5061022d61059336600461234f565b611ac0565b3480156105a457600080fd5b506103096105b33660046125e8565b60016020526000908152604090205481565b3480156105d157600080fd5b5061030960055481565b6103096105e93660046127de565b611b19565b3480156105fa57600080fd5b5061022d61060936600461234f565b611bf4565b34801561061a57600080fd5b5061022d6106293660046128a5565b611c64565b34801561063a57600080fd5b5061022d61064936600461234f565b600f80546001600160a01b0319166001600160a01b0392909216919091179055565b34801561067757600080fd5b5061022d610686366004612516565b611d39565b34801561069757600080fd5b506106d96106a63660046125e8565b6000602081905290815260409020546001600160a01b03811690600160a01b8104600290810b91600160b81b9004900b83565b604051610286939291906128f2565b3480156106f457600080fd5b50600e546102af906001600160a01b031681565b34801561071457600080fd5b50610778610723366004612917565b6006602052816000526040600020602052806000526040600020600091509150508060000154908060010154908060020154908060030154908060040154908060050154908060060154908060070154905088565b604080519889526020890197909752958701949094526060860192909252608085015260a084015260c083015260e082015261010001610286565b3480156107bf57600080fd5b5061030960025481565b3480156107d557600080fd5b50600c546102af906001600160a01b031681565b3480156107f557600080fd5b506102af6108043660046125e8565b6003602052600090815260409020546001600160a01b031681565b34801561082b57600080fd5b5061088661083a366004612917565b60086020908152600092835260408084209091529082529020805460018201546002830154600384015460048501546005860154600690960154949593949293919260ff909116919087565b6040805197885260208801969096529486019390935260608501919091521515608084015260a083015260c082015260e001610286565b3480156108c957600080fd5b5061022d6108d8366004612601565b611e25565b3480156108e957600080fd5b5061022d6108f836600461279c565b611eb6565b34801561090957600080fd5b50600f546102af906001600160a01b031681565b34801561092957600080fd5b50600b546102af906001600160a01b031681565b34801561094957600080fd5b506103096109583660046125e8565b60076020526000908152604090205481565b34801561097657600080fd5b5061098a610985366004612516565b611ff4565b604051610286929190612939565b3480156109a457600080fd5b506103096109b33660046125e8565b60096020526000908152604090205481565b6040516314a96d9160e31b8152309063a54b6c88906109ec908990899089906004016128f2565b600060405180830381600087803b158015610a0657600080fd5b505af1158015610a1a573d6000803e3d6000fd5b50506040516314a96d9160e31b815230925063a54b6c889150610a45908690869086906004016128f2565b600060405180830381600087803b158015610a5f57600080fd5b505af1158015610a73573d6000803e3d6000fd5b505050506000600a60009054906101000a90046001600160a01b03166001600160a01b0316632495a5996040518163ffffffff1660e01b815260040160206040518083038186803b158015610ac757600080fd5b505afa158015610adb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aff91906129c4565b6001600160a01b03166370a08231886040518263ffffffff1660e01b8152600401610b2a9190612502565b60206040518083038186803b158015610b4257600080fd5b505afa158015610b56573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b7a91906129e1565b600a5460405163cacdd72360e01b81526001600160a01b039182166004820152600286810b602483015285900b6044820152868216606482015291925088169063cacdd72390608401600060405180830381600087803b158015610bdd57600080fd5b505af1158015610bf1573d6000803e3d6000fd5b505050506000600a60009054906101000a90046001600160a01b03166001600160a01b0316632495a5996040518163ffffffff1660e01b815260040160206040518083038186803b158015610c4557600080fd5b505afa158015610c59573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c7d91906129c4565b6001600160a01b03166370a08231896040518263ffffffff1660e01b8152600401610ca89190612502565b60206040518083038186803b158015610cc057600080fd5b505afa158015610cd4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cf891906129e1565b905080821115610d5d5760405162461bcd60e51b815260206004820152602560248201527f6c69717569646174696f6e207265776172642073686f756c6420626520706f73604482015264697469766560d81b60648201526084015b60405180910390fd5b5050505050505050565b6000806000806000610d828787608001518860a00151611d39565b600e54604080516256cc1560e31b81526001600160a01b0392831660048201528851831660248201526020890151151560448201529088015160648201526060880151821660848201526080880151600290810b60a483015260a0890151900b60c482015260c088015160e4820152908816906302b660a89034906101040160a0604051808303818588803b158015610e1a57600080fd5b505af1158015610e2e573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610e5391906129fa565b939b929a50909850965090945092505050565b60606000848484604051602001610e7f93929190612a3a565b60408051601f198184030181529181528151602092830120600081815260079093529082205490925090816001600160401b03811115610ec157610ec16123f6565b604051908082528060200260200182016040528015610f3a57816020015b610f2760405180610100016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b815260200190600190039081610edf5790505b50905060005b82811015610ffc57600084815260066020526040812090610f62836001612a79565b81526020019081526020016000206040518061010001604052908160008201548152602001600182015481526020016002820154815260200160038201548152602001600482015481526020016005820154815260200160068201548152602001600782015481525050828281518110610fde57610fde612a91565b60200260200101819052508080610ff490612aa7565b915050610f40565b50925050505b9392505050565b6000808212156110225761101c82612ac2565b92915050565b5090565b919050565b600d546040805163045fecad60e31b815290516000926001600160a01b0316916322ff6568916004808301926020929190829003018186803b15801561107057600080fd5b505afa158015611084573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110a89190612adf565b90506000600d60009054906101000a90046001600160a01b03166001600160a01b0316636f307dc36040518163ffffffff1660e01b815260040160206040518083038186803b1580156110fa57600080fd5b505afa15801561110e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061113291906129c4565b90508160ff16600114156111a757600f54604051631157b80360e21b81526001600160a01b038381166004830152602482018690529091169063455ee00c90604401600060405180830381600087803b15801561118e57600080fd5b505af11580156111a2573d6000803e3d6000fd5b505050505b8160ff166002141561121257601054604051636d83470760e11b8152600481018590526001600160a01b039091169063db068e0e90602401600060405180830381600087803b1580156111f957600080fd5b505af115801561120d573d6000803e3d6000fd5b505050505b600d60009054906101000a90046001600160a01b03166001600160a01b0316637aa4db136040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561126257600080fd5b505af1158015611276573d6000803e3d6000fd5b50505050505050565b6040516314a96d9160e31b8152600090309063a54b6c88906112a9908890889088906004016128f2565b600060405180830381600087803b1580156112c357600080fd5b505af11580156112d7573d6000803e3d6000fd5b5050600b546040516322a1d8ed60e21b81526001600160a01b03808a169450638a8763b493506113139216908990899089908990600401612b02565b602060405180830381600087803b15801561132d57600080fd5b505af1158015611341573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061136591906129e1565b95945050505050565b8051606082015160808301516040516314a96d9160e31b81526000938493849384938493309363a54b6c88936113a6936004016128f2565b600060405180830381600087803b1580156113c057600080fd5b505af11580156113d4573d6000803e3d6000fd5b50508751600b546040805163022769c960e11b81526001600160a01b0392831660048201528b518316602482015260208c01516044820152908b01518216606482015260608b0151600290810b608483015260808c0151900b60a48201529116925063044ed392915060c40160a060405180830381600087803b15801561145a57600080fd5b505af115801561146e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061149291906129fa565b8a5160608c015160808d0151604051634cccf05f60e01b81526001600160a01b039093166004840152600291820b6024840152900b6044820152606481018390526084810185905260a48101849052949950929750909550935091503090634cccf05f9060c401600060405180830381600087803b15801561151357600080fd5b505af1158015611527573d6000803e3d6000fd5b5050505091939590929450565b600a5460405163080506d360e31b81526001600160a01b03918216600482015283821660248201528215156044820152908416906340283698906064015b600060405180830381600087803b15801561126257600080fd5b6001600160a01b038116600090815260046020526040902054156115ad5750565b6001600560008282546115c09190612a79565b909155505060058054600090815260036020908152604080832080546001600160a01b039096166001600160a01b0319909616861790559254938252600490522055565b600086868660405160200161161b93929190612a3a565b60408051601f198184030181528282528051602091820120600a546324fb6d1560e21b855292519094506000936001600160a01b03909316926393edb454926004808301939192829003018186803b15801561167657600080fd5b505afa15801561168a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116ae91906129e1565b905060006116e46116da6116c96116c488611009565b61218d565b6116d56116c48a611009565b6121da565b6116d5606461218d565b905060006001905060006040518060e001604052808381526020016117076121ef565b815260200185815260200161171b8a611009565b815260200160008a1361172f576001611732565b60005b1515815260200184815260200187815250905060016009600087815260200190815260200160002060008282546117699190612a79565b90915550506000948552600860209081526040808720600983528188205488528252958690208251815590820151600182015594810151600286015560608101516003860155608081015160048601805460ff191691151591909117905560a0810151600586015560c00151600690940193909355505050505050505050565b6117f4838383611d39565b600a5460405163303958f360e01b81526001600160a01b03918216600482015290841660248201819052600284810b604484015283900b60648301529063303958f390608401611572565b6118488361158c565b600a5460408051632495a59960e01b815290516000926001600160a01b031691632495a599916004808301926020929190829003018186803b15801561188d57600080fd5b505afa1580156118a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118c591906129c4565b600a546040516370a0823160e01b81526001600160a01b03928316926370a08231926118f692911690600401612502565b60206040518083038186803b15801561190e57600080fd5b505afa158015611922573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061194691906129e1565b600c546040516369696dbf60e01b81529192506001600160a01b03808716926369696dbf9261197d92169087908790600401612b3f565b600060405180830381600087803b15801561199757600080fd5b505af11580156119ab573d6000803e3d6000fd5b505050506000600a60009054906101000a90046001600160a01b03166001600160a01b0316632495a5996040518163ffffffff1660e01b815260040160206040518083038186803b1580156119ff57600080fd5b505afa158015611a13573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a3791906129c4565b600a546040516370a0823160e01b81526001600160a01b03928316926370a0823192611a6892911690600401612502565b60206040518083038186803b158015611a8057600080fd5b505afa158015611a94573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ab891906129e1565b505050505050565b611af760405180604001604052806015815260200174736574205f7065726970686572794164647265737360581b815250826121ff565b600e80546001600160a01b0319166001600160a01b0392909216919091179055565b6000611b2e8383602001518460400151611d39565b600e54604080516383e345e760e01b81526001600160a01b0392831660048201528451831660248201526020850151600290810b60448301529185015190910b6064820152606084015160848201526080840151151560a482015260a084015160c4820152908416906383e345e790349060e4016020604051808303818588803b158015611bbb57600080fd5b505af1158015611bcf573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061100291906129e1565b611bfd8161158c565b600c5460405163840047eb60e01b81526001600160a01b038381169263840047eb92611c2f9290911690600401612502565b600060405180830381600087803b158015611c4957600080fd5b505af1158015611c5d573d6000803e3d6000fd5b5050505050565b6040516314a96d9160e31b8152309063a54b6c8890611c8b908790879087906004016128f2565b600060405180830381600087803b158015611ca557600080fd5b505af1158015611cb9573d6000803e3d6000fd5b5050600a546040516318defb9f60e11b81526001600160a01b03918216600482015290871660248201819052600287810b604484015286900b60648301526084820185905292506331bdf73e915060a4015b600060405180830381600087803b158015611d2557600080fd5b505af1158015610d5d573d6000803e3d6000fd5b6000838383604051602001611d5093929190612a3a565b60408051601f1981840301815291815281516020928301206000818152600190935291205490915015611d835750505050565b600160026000828254611d969190612a79565b9091555050604080516060810182526001600160a01b039586168152600294850b602080830191825294860b82840190815286546000908152808752848120935184549351925199166001600160b81b031990931692909217600160a01b62ffffff928316021762ffffff60b81b1916600160b81b919098160296909617905592549084526001909152912055565b6040516314a96d9160e31b8152309063a54b6c8890611e4c908790879087906004016128f2565b600060405180830381600087803b158015611e6657600080fd5b505af1158015611e7a573d6000803e3d6000fd5b5050600b5460405163292a60d560e01b81526001600160a01b03808916945063292a60d59350611d0b9216908890889088908890600401612b02565b611ebf8361158c565b600a5460408051632495a59960e01b815290516000926001600160a01b031691632495a599916004808301926020929190829003018186803b158015611f0457600080fd5b505afa158015611f18573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f3c91906129c4565b600a546040516370a0823160e01b81526001600160a01b03928316926370a0823192611f6d92911690600401612502565b60206040518083038186803b158015611f8557600080fd5b505afa158015611f99573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fbd91906129e1565b600c54604051631d35c97960e31b81529192506001600160a01b038087169263e9ae4bc89261197d92169087908790600401612b3f565b606060008085858560405160200161200e93929190612a3a565b60408051601f198184030181529181528151602092830120600081815260099093529082205490925090816001600160401b03811115612050576120506123f6565b6040519080825280602002602001820160405280156120c357816020015b6120b06040518060e001604052806000815260200160008152602001600081526020016000815260200160001515815260200160008152602001600081525090565b81526020019060019003908161206e5790505b50905060005b82811015612180576000848152600860205260408120906120eb836001612a79565b81526020808201929092526040908101600020815160e0810183528154815260018201549381019390935260028101549183019190915260038101546060830152600481015460ff1615156080830152600581015460a08301526006015460c0820152825183908390811061216257612162612a91565b6020026020010181905250808061217890612aa7565b9150506120c9565b5097909650945050505050565b60007812725dd1d243aba0e75fe645cc4873f9e65afe688c928e1f218211156121cc57604051633492ffd960e01b815260048101839052602401610d54565b50670de0b6b3a76400000290565b600061100283670de0b6b3a764000084612248565b60006121fa4261218d565b905090565b6122448282604051602401612215929190612b78565b60408051601f198184030181529190526020810180516001600160e01b031663319af33360e01b179052612316565b5050565b6000808060001985870985870292508281108382030391505080600014156122835783828161227957612279612b62565b0492505050611002565b8381106122ad57604051631dcf306360e21b81526004810182905260248101859052604401610d54565b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b6001600160a01b038116811461234c57600080fd5b50565b60006020828403121561236157600080fd5b813561100281612337565b8035600281900b811461102657600080fd5b60008060008060008060c0878903121561239757600080fd5b86356123a281612337565b95506123b06020880161236c565b94506123be6040880161236c565b935060608701356123ce81612337565b92506123dc6080880161236c565b91506123ea60a0880161236c565b90509295509295509295565b634e487b7160e01b600052604160045260246000fd5b60405160e081016001600160401b038111828210171561243c57634e487b7160e01b600052604160045260246000fd5b60405290565b8035801515811461102657600080fd5b60008082840361010081121561246757600080fd5b833561247281612337565b925060e0601f198201121561248657600080fd5b5061248f61240c565b602084013561249d81612337565b81526124ab60408501612442565b60208201526060840135604082015260808401356124c881612337565b60608201526124d960a0850161236c565b60808201526124ea60c0850161236c565b60a082015260e0939093013560c08401525092909150565b6001600160a01b0391909116815260200190565b60008060006060848603121561252b57600080fd5b833561253681612337565b92506125446020850161236c565b91506125526040850161236c565b90509250925092565b602080825282518282018190526000919060409081850190868401855b828110156125db5781518051855286810151878601528581015186860152606080820151908601526080808201519086015260a0808201519086015260c0808201519086015260e090810151908501526101009093019290850190600101612578565b5091979650505050505050565b6000602082840312156125fa57600080fd5b5035919050565b6000806000806080858703121561261757600080fd5b843561262281612337565b93506126306020860161236c565b925061263e6040860161236c565b915060608501356001600160801b038116811461265a57600080fd5b939692955090935050565b600060a0828403121561267757600080fd5b60405160a081016001600160401b03811182821017156126a757634e487b7160e01b600052604160045260246000fd5b60405282356126b581612337565b81526020838101359082015260408301356126cf81612337565b60408201526126e06060840161236c565b60608201526126f16080840161236c565b60808201529392505050565b60008060006060848603121561271257600080fd5b833561271d81612337565b9250602084013561272d81612337565b915061255260408501612442565b60008060008060008060c0878903121561275457600080fd5b863561275f81612337565b955061276d6020880161236c565b945061277b6040880161236c565b9350606087013592506080870135915060a087013590509295509295509295565b6000806000606084860312156127b157600080fd5b83356127bc81612337565b92506020840135915060408401356127d381612337565b809150509250925092565b60008082840360e08112156127f257600080fd5b83356127fd81612337565b925060c0601f198201121561281157600080fd5b5060405160c081016001600160401b038111828210171561284257634e487b7160e01b600052604160045260246000fd5b604052602084013561285381612337565b81526128616040850161236c565b60208201526128726060850161236c565b60408201526080840135606082015261288d60a08501612442565b608082015260c0939093013560a08401525092909150565b600080600080608085870312156128bb57600080fd5b84356128c681612337565b93506128d46020860161236c565b92506128e26040860161236c565b9396929550929360600135925050565b6001600160a01b03939093168352600291820b6020840152900b604082015260600190565b6000806040838503121561292a57600080fd5b50508035926020909101359150565b6040808252835182820181905260009190606090818501906020808901865b838110156129b05781518051865283810151848701528781015188870152868101518787015260808082015115159087015260a0808201519087015260c0908101519086015260e09094019390820190600101612958565b505095909501959095525092949350505050565b6000602082840312156129d657600080fd5b815161100281612337565b6000602082840312156129f357600080fd5b5051919050565b600080600080600060a08688031215612a1257600080fd5b5050835160208501516040860151606087015160809097015192989197509594509092509050565b60609390931b6001600160601b031916835260e891821b6014840152901b6017820152601a0190565b634e487b7160e01b600052601160045260246000fd5b60008219821115612a8c57612a8c612a63565b500190565b634e487b7160e01b600052603260045260246000fd5b6000600019821415612abb57612abb612a63565b5060010190565b6000600160ff1b821415612ad857612ad8612a63565b5060000390565b600060208284031215612af157600080fd5b815160ff8116811461100257600080fd5b6001600160a01b039586168152939094166020840152600291820b6040840152900b60608201526001600160801b03909116608082015260a00190565b6001600160a01b0393841681526020810192909252909116604082015260600190565b634e487b7160e01b600052601260045260246000fd5b604081526000835180604084015260005b81811015612ba65760208187018101516060868401015201612b89565b81811115612bb8576000606083860101525b506001600160a01b0393909316602083015250601f91909101601f19160160600191905056fea26469706673582212201e61b0a17c01eace8ea0200357b8e26fd7f32ac34f5275c79cf8089cbfc3cacf64736f6c63430008090033";
    static readonly abi: ({
        inputs: {
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
        outputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        stateMutability: string;
        type: string;
    } | {
        inputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): E2ESetupInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): E2ESetup;
}
//# sourceMappingURL=E2ESetup__factory.d.ts.map