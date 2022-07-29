/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FixedAndVariableMath,
  FixedAndVariableMathInterface,
} from "../FixedAndVariableMath";

const _abi = [
  {
    inputs: [],
    name: "ONE_HUNDRED_IN_WAD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SECONDS_IN_YEAR_IN_WAD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60aa610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610603d5760003560e01c8063652ec9bf146042578063cee7121f146063575b600080fd5b605168056bc75e2d6310000081565b60405190815260200160405180910390f35b60516a1a1601fc4ea7109e0000008156fea2646970667358221220b51799cf2b549aac4640aa8bcbabe503b74716e30f513a13cca7c06dfae4b24664736f6c63430008090033";

export class FixedAndVariableMath__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FixedAndVariableMath> {
    return super.deploy(overrides || {}) as Promise<FixedAndVariableMath>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FixedAndVariableMath {
    return super.attach(address) as FixedAndVariableMath;
  }
  connect(signer: Signer): FixedAndVariableMath__factory {
    return super.connect(signer) as FixedAndVariableMath__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FixedAndVariableMathInterface {
    return new utils.Interface(_abi) as FixedAndVariableMathInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FixedAndVariableMath {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as FixedAndVariableMath;
  }
}
