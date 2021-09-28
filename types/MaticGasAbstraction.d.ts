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

interface MaticGasAbstractionInterface extends ethers.utils.Interface {
  functions: {
    "APPROVE_WITH_AUTHORIZATION_TYPEHASH()": FunctionFragment;
    "CANCEL_AUTHORIZATION_TYPEHASH()": FunctionFragment;
    "DECREASE_ALLOWANCE_WITH_AUTHORIZATION_TYPEHASH()": FunctionFragment;
    "DOMAIN_SEPARATOR()": FunctionFragment;
    "INCREASE_ALLOWANCE_WITH_AUTHORIZATION_TYPEHASH()": FunctionFragment;
    "TRANSFER_WITH_AUTHORIZATION_TYPEHASH()": FunctionFragment;
    "WITHDRAW_WITH_AUTHORIZATION_TYPEHASH()": FunctionFragment;
    "authorizationState(address,bytes32)": FunctionFragment;
    "c_0x33ca6d66(bytes32)": FunctionFragment;
    "c_0xbee145fe(bytes32)": FunctionFragment;
    "c_0xcb881478(bytes32)": FunctionFragment;
    "c_0xfa242dff(bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "APPROVE_WITH_AUTHORIZATION_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CANCEL_AUTHORIZATION_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DECREASE_ALLOWANCE_WITH_AUTHORIZATION_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DOMAIN_SEPARATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "INCREASE_ALLOWANCE_WITH_AUTHORIZATION_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TRANSFER_WITH_AUTHORIZATION_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "WITHDRAW_WITH_AUTHORIZATION_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "authorizationState",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "c_0x33ca6d66",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "c_0xbee145fe",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "c_0xcb881478",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "c_0xfa242dff",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "APPROVE_WITH_AUTHORIZATION_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CANCEL_AUTHORIZATION_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DECREASE_ALLOWANCE_WITH_AUTHORIZATION_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DOMAIN_SEPARATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "INCREASE_ALLOWANCE_WITH_AUTHORIZATION_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TRANSFER_WITH_AUTHORIZATION_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "WITHDRAW_WITH_AUTHORIZATION_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "authorizationState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_0x33ca6d66",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_0xbee145fe",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_0xcb881478",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "c_0xfa242dff",
    data: BytesLike
  ): Result;

  events: {
    "AuthorizationCanceled(address,bytes32)": EventFragment;
    "AuthorizationUsed(address,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuthorizationCanceled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuthorizationUsed"): EventFragment;
}

export type AuthorizationCanceledEvent = TypedEvent<
  [string, string] & { authorizer: string; nonce: string }
>;

export type AuthorizationUsedEvent = TypedEvent<
  [string, string] & { authorizer: string; nonce: string }
>;

export class MaticGasAbstraction extends BaseContract {
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

  interface: MaticGasAbstractionInterface;

  functions: {
    APPROVE_WITH_AUTHORIZATION_TYPEHASH(
      overrides?: CallOverrides
    ): Promise<[string]>;

    CANCEL_AUTHORIZATION_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;

    DECREASE_ALLOWANCE_WITH_AUTHORIZATION_TYPEHASH(
      overrides?: CallOverrides
    ): Promise<[string]>;

    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;

    INCREASE_ALLOWANCE_WITH_AUTHORIZATION_TYPEHASH(
      overrides?: CallOverrides
    ): Promise<[string]>;

    TRANSFER_WITH_AUTHORIZATION_TYPEHASH(
      overrides?: CallOverrides
    ): Promise<[string]>;

    WITHDRAW_WITH_AUTHORIZATION_TYPEHASH(
      overrides?: CallOverrides
    ): Promise<[string]>;

    authorizationState(
      authorizer: string,
      nonce: BytesLike,
      overrides?: CallOverrides
    ): Promise<[number]>;

    c_0x33ca6d66(
      c__0x33ca6d66: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    c_0xbee145fe(
      c__0xbee145fe: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    c_0xcb881478(
      c__0xcb881478: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    c_0xfa242dff(
      c__0xfa242dff: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  APPROVE_WITH_AUTHORIZATION_TYPEHASH(
    overrides?: CallOverrides
  ): Promise<string>;

  CANCEL_AUTHORIZATION_TYPEHASH(overrides?: CallOverrides): Promise<string>;

  DECREASE_ALLOWANCE_WITH_AUTHORIZATION_TYPEHASH(
    overrides?: CallOverrides
  ): Promise<string>;

  DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

  INCREASE_ALLOWANCE_WITH_AUTHORIZATION_TYPEHASH(
    overrides?: CallOverrides
  ): Promise<string>;

  TRANSFER_WITH_AUTHORIZATION_TYPEHASH(
    overrides?: CallOverrides
  ): Promise<string>;

  WITHDRAW_WITH_AUTHORIZATION_TYPEHASH(
    overrides?: CallOverrides
  ): Promise<string>;

  authorizationState(
    authorizer: string,
    nonce: BytesLike,
    overrides?: CallOverrides
  ): Promise<number>;

  c_0x33ca6d66(
    c__0x33ca6d66: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  c_0xbee145fe(
    c__0xbee145fe: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  c_0xcb881478(
    c__0xcb881478: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  c_0xfa242dff(
    c__0xfa242dff: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    APPROVE_WITH_AUTHORIZATION_TYPEHASH(
      overrides?: CallOverrides
    ): Promise<string>;

    CANCEL_AUTHORIZATION_TYPEHASH(overrides?: CallOverrides): Promise<string>;

    DECREASE_ALLOWANCE_WITH_AUTHORIZATION_TYPEHASH(
      overrides?: CallOverrides
    ): Promise<string>;

    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

    INCREASE_ALLOWANCE_WITH_AUTHORIZATION_TYPEHASH(
      overrides?: CallOverrides
    ): Promise<string>;

    TRANSFER_WITH_AUTHORIZATION_TYPEHASH(
      overrides?: CallOverrides
    ): Promise<string>;

    WITHDRAW_WITH_AUTHORIZATION_TYPEHASH(
      overrides?: CallOverrides
    ): Promise<string>;

    authorizationState(
      authorizer: string,
      nonce: BytesLike,
      overrides?: CallOverrides
    ): Promise<number>;

    c_0x33ca6d66(
      c__0x33ca6d66: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    c_0xbee145fe(
      c__0xbee145fe: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    c_0xcb881478(
      c__0xcb881478: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    c_0xfa242dff(
      c__0xfa242dff: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AuthorizationCanceled(address,bytes32)"(
      authorizer?: string | null,
      nonce?: BytesLike | null
    ): TypedEventFilter<
      [string, string],
      { authorizer: string; nonce: string }
    >;

    AuthorizationCanceled(
      authorizer?: string | null,
      nonce?: BytesLike | null
    ): TypedEventFilter<
      [string, string],
      { authorizer: string; nonce: string }
    >;

    "AuthorizationUsed(address,bytes32)"(
      authorizer?: string | null,
      nonce?: BytesLike | null
    ): TypedEventFilter<
      [string, string],
      { authorizer: string; nonce: string }
    >;

    AuthorizationUsed(
      authorizer?: string | null,
      nonce?: BytesLike | null
    ): TypedEventFilter<
      [string, string],
      { authorizer: string; nonce: string }
    >;
  };

  estimateGas: {
    APPROVE_WITH_AUTHORIZATION_TYPEHASH(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    CANCEL_AUTHORIZATION_TYPEHASH(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    DECREASE_ALLOWANCE_WITH_AUTHORIZATION_TYPEHASH(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;

    INCREASE_ALLOWANCE_WITH_AUTHORIZATION_TYPEHASH(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    TRANSFER_WITH_AUTHORIZATION_TYPEHASH(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    WITHDRAW_WITH_AUTHORIZATION_TYPEHASH(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    authorizationState(
      authorizer: string,
      nonce: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    c_0x33ca6d66(
      c__0x33ca6d66: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    c_0xbee145fe(
      c__0xbee145fe: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    c_0xcb881478(
      c__0xcb881478: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    c_0xfa242dff(
      c__0xfa242dff: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    APPROVE_WITH_AUTHORIZATION_TYPEHASH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    CANCEL_AUTHORIZATION_TYPEHASH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    DECREASE_ALLOWANCE_WITH_AUTHORIZATION_TYPEHASH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    INCREASE_ALLOWANCE_WITH_AUTHORIZATION_TYPEHASH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    TRANSFER_WITH_AUTHORIZATION_TYPEHASH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    WITHDRAW_WITH_AUTHORIZATION_TYPEHASH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    authorizationState(
      authorizer: string,
      nonce: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    c_0x33ca6d66(
      c__0x33ca6d66: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    c_0xbee145fe(
      c__0xbee145fe: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    c_0xcb881478(
      c__0xcb881478: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    c_0xfa242dff(
      c__0xfa242dff: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
