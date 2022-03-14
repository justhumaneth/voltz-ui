import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Periphery, PeripheryInterface } from "../Periphery";
export declare class Periphery__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Periphery>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Periphery;
    connect(signer: Signer): Periphery__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50611118806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063040a5dc11461005c5780630ccba0af146100875780630ebc11a9146100b05780633ec0a1a1146100f3578063add915c914610106575b600080fd5b61006f61006a366004610cab565b610127565b60405160029190910b81526020015b60405180910390f35b610098610095366004610cab565b90565b6040516001600160a01b03909116815260200161007e565b6100c36100be366004610e00565b6101b1565b604080519687526020870195909552938501929092526060840152608083015260020b60a082015260c00161007e565b610098610101366004610cab565b6104c8565b610119610114366004610d56565b610549565b60405190815260200161007e565b600080610133836104c8565b9050806001600160a01b03166380a0f76c6040518163ffffffff1660e01b815260040160606040518083038186803b15801561016e57600080fd5b505afa158015610182573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101a69190610eb9565b602001519392505050565b60008060008060008086602001516001600160a01b0316336001600160a01b0316146101f85760405162461bcd60e51b81526004016101ef90610f6d565b60405180910390fd5b600061020788600001516104c8565b9050600088604001511561022057506060880151610231565b886060015161022e90611075565b90505b6000826001600160a01b031663d0c93a7c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561026c57600080fd5b505afa158015610280573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102a49190610ce3565b905060006040518060a00160405280336001600160a01b031681526020018481526020018c608001516001600160a01b03166000146102e7578c60800151610325565b8c604001511561030e5761030960016c1fa71f3f5f68a90479ee3f8fec611018565b610325565b6103256b0816769404766de590afe04e6001610fa2565b6001600160a01b031681526020018c60a0015160020b60001461034c578c60a00151610355565b61035584611054565b60020b81526020018c60c0015160020b600014610376578c60c00151610378565b835b600290810b909152604080516333bac73760e11b815283516001600160a01b0390811660048301526020850151602483015291840151821660448201526060840151830b6064820152608084015190920b6084830152919250908516906367758e6e9060a40160a060405180830381600087803b1580156103f857600080fd5b505af115801561040c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104309190610d17565b809a50819b50829c50839d50849e505050505050836001600160a01b03166380a0f76c6040518163ffffffff1660e01b815260040160606040518083038186803b15801561047d57600080fd5b505afa158015610491573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b59190610eb9565b6020015194505050505091939550919395565b6000808290506000816001600160a01b031663e098372c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561050957600080fd5b505afa15801561051d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105419190610cc7565b949350505050565b600081602001516001600160a01b0316336001600160a01b0316146105805760405162461bcd60e51b81526004016101ef90610f6d565b600061058f83600001516104c8565b905060006105a08460400151610705565b905060006105b18560600151610705565b905060006105c483838860800151610b0f565b9050600094508560a001511561066a57602086015160408088015160608901519151635c6651a760e11b81526001600160a01b0388169363b8cca34e936106119391928790600401610f3a565b602060405180830381600087803b15801561062b57600080fd5b505af115801561063f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106639190610cff565b94506106fc565b602086015160408088015160608901519151631f2f089360e01b81526001600160a01b03881693631f2f0893936106a79391928790600401610f3a565b602060405180830381600087803b1580156106c157600080fd5b505af11580156106d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f99190610cff565b94505b50505050919050565b60008060008360020b1261071c578260020b610729565b8260020b61072990611075565b905061073862010deb19611054565b60020b81111561076e5760405162461bcd60e51b81526020600482015260016024820152601560fa1b60448201526064016101ef565b60006001821661078257600160801b610794565b6ffffcb933bd6fad37aa2d162d1a5940015b6001600160881b0316905060028216156107c95760806107c4826ffff97272373d413259a46990580e213a610ff9565b901c90505b60048216156107f35760806107ee826ffff2e50f5f656932ef12357cf3c7fdcc610ff9565b901c90505b600882161561081d576080610818826fffe5caca7e10e4e61c3624eaa0941cd0610ff9565b901c90505b6010821615610847576080610842826fffcb9843d60f6159c9db58835c926644610ff9565b901c90505b602082161561087157608061086c826fff973b41fa98c081472e6896dfb254c0610ff9565b901c90505b604082161561089b576080610896826fff2ea16466c96a3843ec78b326b52861610ff9565b901c90505b60808216156108c55760806108c0826ffe5dee046a99a2a811c461f1969c3053610ff9565b901c90505b6101008216156108f05760806108eb826ffcbe86c7900a88aedcffc83b479aa3a4610ff9565b901c90505b61020082161561091b576080610916826ff987a7253ac413176f2b074cf7815e54610ff9565b901c90505b610400821615610946576080610941826ff3392b0822b70005940c7a398e4b70f3610ff9565b901c90505b61080082161561097157608061096c826fe7159475a2c29b7443b29c7fa6e889d9610ff9565b901c90505b61100082161561099c576080610997826fd097f3bdfd2022b8845ad8f792aa5825610ff9565b901c90505b6120008216156109c75760806109c2826fa9f746462d870fdf8a65dc1f90e061e5610ff9565b901c90505b6140008216156109f25760806109ed826f70d869a156d2a1b890bb3df62baf32f7610ff9565b901c90505b618000821615610a1d576080610a18826f31be135f97d08fd981231505542fcfa6610ff9565b901c90505b62010000821615610a49576080610a44826f09aa508b5b7a84e1c677de54f3e99bc9610ff9565b901c90505b62020000821615610a74576080610a6f826e5d6af8dedb81196699c329225ee604610ff9565b901c90505b62040000821615610a9e576080610a99826d2216e584f5fa1ea926041bedfe98610ff9565b901c90505b62080000821615610ac6576080610ac1826b048a170391f7dc42444e8fa2610ff9565b901c90505b60008460020b1315610ae157610ade81600019610fe5565b90505b610aef600160201b82611040565b15610afb576001610afe565b60005b6105419060ff16602083901c610fcd565b6000826001600160a01b0316846001600160a01b03161115610b2f579192915b610b58610b5383600160601b610b458888611018565b6001600160a01b0316610b62565b610c75565b90505b9392505050565b600080806000198587098587029250828110838203039150508060001415610bd25760008411610bc75760405162461bcd60e51b815260206004820152601060248201526f4469766973696f6e206279207a65726f60801b60448201526064016101ef565b508290049050610b5b565b808411610c0c5760405162461bcd60e51b81526020600482015260086024820152676f766572666c6f7760c01b60448201526064016101ef565b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b806001600160801b0381168114610c8b57600080fd5b919050565b80358015158114610c8b57600080fd5b8035610c8b816110d3565b600060208284031215610cbc578081fd5b8135610b5b816110bb565b600060208284031215610cd8578081fd5b8151610b5b816110bb565b600060208284031215610cf4578081fd5b8151610b5b816110d3565b600060208284031215610d10578081fd5b5051919050565b600080600080600060a08688031215610d2e578081fd5b5050835160208501516040860151606087015160809097015192989197509594509092509050565b600060c08284031215610d67578081fd5b60405160c081016001600160401b0381118282101715610d9557634e487b7160e01b83526041600452602483fd5b6040528235610da3816110bb565b81526020830135610db3816110bb565b60208201526040830135610dc6816110d3565b60408201526060830135610dd9816110d3565b606082015260808381013590820152610df460a08401610c90565b60a08201529392505050565b600060e08284031215610e11578081fd5b60405160e081016001600160401b0381118282101715610e3f57634e487b7160e01b83526041600452602483fd5b6040528235610e4d816110bb565b81526020830135610e5d816110bb565b6020820152610e6e60408401610c90565b6040820152606083013560608201526080830135610e8b816110bb565b6080820152610e9c60a08401610ca0565b60a0820152610ead60c08401610ca0565b60c08201529392505050565b600060608284031215610eca578081fd5b604051606081016001600160401b0381118282101715610ef857634e487b7160e01b83526041600452602483fd5b6040528251610f06816110bb565b81526020830151610f16816110d3565b6020820152604083015160ff81168114610f2e578283fd5b60408201529392505050565b6001600160a01b03949094168452600292830b6020850152910b60408301526001600160801b0316606082015260800190565b6020808252818101527f6d73672e73656e646572206d7573742062652074686520726563697069656e74604082015260600190565b60006001600160a01b03828116848216808303821115610fc457610fc461108f565b01949350505050565b60008219821115610fe057610fe061108f565b500190565b600082610ff457610ff46110a5565b500490565b60008160001904831182151516156110135761101361108f565b500290565b60006001600160a01b03838116908316818110156110385761103861108f565b039392505050565b60008261104f5761104f6110a5565b500690565b60008160020b627fffff1981141561106e5761106e61108f565b9003919050565b6000600160ff1b82141561108b5761108b61108f565b0390565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b6001600160a01b03811681146110d057600080fd5b50565b8060020b81146110d057600080fdfea2646970667358221220cf84d9de76735b4e03ea56fa1cfe96f7e5ea643228ee99cfe67c3120272e8e2064736f6c63430008040033";
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
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    } | {
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
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
    })[];
    static createInterface(): PeripheryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Periphery;
}
//# sourceMappingURL=Periphery__factory.d.ts.map