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
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface UsingLiquidityProtectionServiceInterface
  extends ethers.utils.Interface {
  functions: {
    "disableProtection()": FunctionFragment;
    "isProtected()": FunctionFragment;
    "revokeBlocked(address[],address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "disableProtection",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isProtected",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "revokeBlocked",
    values: [string[], string]
  ): string;

  decodeFunctionResult(
    functionFragment: "disableProtection",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isProtected",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeBlocked",
    data: BytesLike
  ): Result;

  events: {};
}

export class UsingLiquidityProtectionService extends BaseContract {
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

  interface: UsingLiquidityProtectionServiceInterface;

  functions: {
    disableProtection(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isProtected(overrides?: CallOverrides): Promise<[boolean]>;

    revokeBlocked(
      _holders: string[],
      _revokeTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  disableProtection(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isProtected(overrides?: CallOverrides): Promise<boolean>;

  revokeBlocked(
    _holders: string[],
    _revokeTo: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    disableProtection(overrides?: CallOverrides): Promise<void>;

    isProtected(overrides?: CallOverrides): Promise<boolean>;

    revokeBlocked(
      _holders: string[],
      _revokeTo: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    disableProtection(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isProtected(overrides?: CallOverrides): Promise<BigNumber>;

    revokeBlocked(
      _holders: string[],
      _revokeTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    disableProtection(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isProtected(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    revokeBlocked(
      _holders: string[],
      _revokeTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}