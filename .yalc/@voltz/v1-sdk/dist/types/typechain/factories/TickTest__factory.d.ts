import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TickTest, TickTestInterface } from "../TickTest";
export declare class TickTest__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TickTest>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TickTest;
    connect(signer: Signer): TickTest__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610d24806100206000396000f3fe608060405234801561001057600080fd5b50600436106100835760003560e01c806334fabea5146100885780633d3506691461010c57806344057fb8146101325780636c0e7c3c146101455780639ede8b8814610158578063b04039b51461017b578063b613524a146101a1578063d267849c146101e6578063f30dba93146101f9575b600080fd5b61010a610096366004610a57565b600291820b820b60009081526020818152604091829020835191840151600f0b6001600160801b03908116600160801b0292169190911781559082015160018201556060820151928101929092556080810151600383015560a001516004909101805491151560ff19909216919091179055565b005b61011f61011a3660046109d5565b610286565b6040519081526020015b60405180910390f35b61011f6101403660046109d5565b61029e565b61011f6101533660046109d5565b6102dd565b61016b610166366004610954565b61031c565b6040519015158152602001610129565b61018e610189366004610a1f565b61033c565b604051600f9190910b8152602001610129565b61010a6101af366004610901565b600290810b810b6000908152602081905260408120818155600181018290559182018190556003820155600401805460ff19169055565b61010a6101f4366004610922565b61034b565b61024a610207366004610901565b600060208190529081526040902080546001820154600283015460038401546004909401546001600160801b03841694600160801b909404600f0b939060ff1686565b604080516001600160801b039097168752600f9590950b60208701529385019290925260608401526080830152151560a082015260c001610129565b60006102958186868686610359565b95945050505050565b600061029560405180608001604052808760020b81526020018660020b81526020018560020b81526020018481525060006103cf90919063ffffffff16565b600061029560405180608001604052808760020b81526020018660020b81526020018560020b815260200184815250600061048c90919063ffffffff16565b600061032f818a8a8a8a8a8a8a8a610522565b9998505050505050505050565b600061029581868686866106c4565b610355828261072a565b5050565b600284810b80820b60009081526020889052604080822087850b850b835290822091939092849187900b126103935750600382015461039c565b50600382015484035b60008760020b8760020b12156103b7575060038201546103c0565b50600382015485035b01909303979650505050505050565b8051600290810b810b60009081526020848152604080832091850151840b840b83528083208551918601519394929390928592810b91900b126104175750600282015461042e565b8260020154856060015161042b9190610c1e565b90505b6000856020015160020b866040015160020b121561045157506002820154610468565b826002015486606001516104659190610c1e565b90505b6104728183610b62565b86606001516104819190610c1e565b979650505050505050565b8051600290810b810b60009081526020848152604080832091850151840b840b83528083208551918601519394929390928592810b91900b126104d4575060018201546104eb565b826001015485606001516104e89190610c1e565b90505b6000856020015160020b866040015160020b121561050e57506001820154610468565b826001015486606001516104659190610c1e565b600288810b900b600090815260208a90526040812080546001600160801b03168261054d8a83610b11565b600f0b12156105a25760405162461bcd60e51b815260206004820152601c60248201527b3737ba1032b737bab3b4103634b8bab4b234ba3c903a3790313ab93760211b60448201526064015b60405180910390fd5b60006105ae828b6107eb565b9050846001600160801b0316816001600160801b031611156105f75760405162461bcd60e51b81526020600482015260026024820152614c4f60f01b6044820152606401610599565b6001600160801b038281161590821615811415945015610644578a60020b8c60020b13610634576003830187905560018301899055600283018890555b60048301805460ff191660011790555b82546001600160801b0319166001600160801b0382161783558561067e578254610679908b90600160801b9004600f0b610b11565b610695565b8254610695908b90600160801b9004600f0b610bce565b8354600f9190910b6001600160801b03908116600160801b0291161790925550909a9950505050505050505050565b600284810b900b600090815260208690526040812060038101546106e89084610c85565b600382015560018101546106fc9086610c1e565b600182015560028101546107109085610c1e565b600282015554600160801b9004600f0b9695505050505050565b8060020b8260020b126107655760405162461bcd60e51b8152602060048201526003602482015262544c5560e81b6044820152606401610599565b62010deb19600283900b12156107a35760405162461bcd60e51b8152602060048201526003602482015262544c4d60e81b6044820152606401610599565b6107b062010deb19610cc2565b60020b8160020b13156103555760405162461bcd60e51b815260206004820152600360248201526254554d60e81b6044820152606401610599565b60008082600f0b1215610858576001600160801b03831661080b83610c9c565b6108159085610c5d565b9150816001600160801b0316106108535760405162461bcd60e51b81526020600482015260026024820152614c5360f01b6044820152606401610599565b6108ab565b6001600160801b03831661086c8385610ba3565b9150816001600160801b031610156108ab5760405162461bcd60e51b81526020600482015260026024820152614c4160f01b6044820152606401610599565b92915050565b803580151581146108c157600080fd5b919050565b8035600f81900b81146108c157600080fd5b8035600281900b81146108c157600080fd5b80356001600160801b03811681146108c157600080fd5b600060208284031215610912578081fd5b61091b826108d8565b9392505050565b60008060408385031215610934578081fd5b61093d836108d8565b915061094b602084016108d8565b90509250929050565b600080600080600080600080610100898b031215610970578384fd5b610979896108d8565b975061098760208a016108d8565b965061099560408a016108c6565b9550606089013594506080890135935060a089013592506109b860c08a016108b1565b91506109c660e08a016108ea565b90509295985092959890939650565b600080600080608085870312156109ea578384fd5b6109f3856108d8565b9350610a01602086016108d8565b9250610a0f604086016108d8565b9396929550929360600135925050565b60008060008060808587031215610a34578384fd5b610a3d856108d8565b966020860135965060408601359560600135945092505050565b60008082840360e0811215610a6a578283fd5b610a73846108d8565b925060c0601f1982011215610a86578182fd5b5060405160c081016001600160401b0381118282101715610ab557634e487b7160e01b83526041600452602483fd5b604052610ac4602085016108ea565b8152610ad2604085016108c6565b6020820152606084013560408201526080840135606082015260a08401356080820152610b0160c085016108b1565b60a0820152809150509250929050565b6000600f82810b9084900b828212801560016001607f1b0384900383131615610b3c57610b3c610cd8565b60016001607f1b03198390038212811615610b5957610b59610cd8565b50019392505050565b600080821280156001600160ff1b0384900385131615610b8457610b84610cd8565b600160ff1b8390038412811615610b9d57610b9d610cd8565b50500190565b60006001600160801b03828116848216808303821115610bc557610bc5610cd8565b01949350505050565b6000600f82810b9084900b828112801560016001607f1b0319830184121615610bf957610bf9610cd8565b60016001607f1b0382018313811615610c1457610c14610cd8565b5090039392505050565b60008083128015600160ff1b850184121615610c3c57610c3c610cd8565b6001600160ff1b0384018313811615610c5757610c57610cd8565b50500390565b60006001600160801b0383811690831681811015610c7d57610c7d610cd8565b039392505050565b600082821015610c9757610c97610cd8565b500390565b6000600f82900b60016001607f1b0319811415610cbb57610cbb610cd8565b9003919050565b60008160020b627fffff19811415610cbb57610cbb5b634e487b7160e01b600052601160045260246000fdfea26469706673582212201036d7c31e08d8d47907df0f096ea261766298a114e44a4210be2b8df1a441b064736f6c63430008040033";
    static readonly abi: ({
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
        outputs: never[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): TickTestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TickTest;
}
//# sourceMappingURL=TickTest__factory.d.ts.map