/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface InitializableInterface extends ethers.utils.Interface {
  functions: {
    "c_0x8ae370ac(bytes32)": FunctionFragment;
    "initialized()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "c_0x8ae370ac",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialized",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "c_0x8ae370ac",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initialized",
    data: BytesLike
  ): Result;

  events: {};
}

export class Initializable extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: InitializableInterface;

  functions: {
    c_0x8ae370ac(
      c__0x8ae370ac: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    initialized(overrides?: CallOverrides): Promise<[boolean]>;
  };

  c_0x8ae370ac(
    c__0x8ae370ac: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  initialized(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    c_0x8ae370ac(
      c__0x8ae370ac: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    initialized(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    c_0x8ae370ac(
      c__0x8ae370ac: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialized(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    c_0x8ae370ac(
      c__0x8ae370ac: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
