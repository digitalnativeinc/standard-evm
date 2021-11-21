---
eip: 4469
title: Wrapped metaverse token
description: Defines a standard interface for viewing the addresses and balances of wrapped metaverse tokens.
author: Hyungsuk Kang (@hskang9)
discussions-to: https://ethereum-magicians.org/t/eip-4469-wrapping-erc1155-into-erc20s/7516
status: Draft
type: Standards Track
category: ERC
created: 2021-11-21
---

## Abstract

Metaverses(e.g. Decentraland, SandBox, etc) are now emerging in Ethereum ecosystem, and the standard of the tokens in each metaverse are all aggregated into ERC-1155 for efficiency.
Invented by Witek Radomski from Enjin, this has made many metaverse/game project to accomodate their assets to provide ownerships. 
However, current ERC-1155 has been sacrificing its interoperability to other universes and current defi ecosystem due to different data structure and mechanics. A certain contract to bridge them into prepared ERC-20 could be possible, but this just can create duplicate datas in the global state if source is not uniform. Due to this, I propose the standard wrapped metaverse token contract to wrap metaverse assets into the most widely used ERC-20 tokens. 

This EIP introduces a simple interface for exposing the addresses of all wrapped ERC-1155 tokens in metaverses, as well as querying wrapped assets' balances.

## Motivation
Many metaverse(or game) projects are choosing ERC-1155 for efficiently generating their assets. Choosing ERC-1155 for managing non-fungible tokens or other tokens in the game has brought memory efficiencies and less contract address for systems to operate. However, this has brought incompatibility between other existing defi infrastructure(e.g. Dexes, Lending, etc). When a user wants to liquidate their game assets or metaverse assets, he or she needs to change it to intermediary assets to acquire it then change it to ETH then buy other assets in different metaverse. This is very inefficient for interoperability between connecting ecosystems between metaverses as well due to gas fees required to convert one asset with another. Just as Wrapped ether has been invented, I propose to have wrapped ERC-1155 asset that can be both backward compatible to existing decentralized finance infrastructure and free trade between metaverses.

### Example

For example, if a user wants to sell their assets from existing metaverse, he or she wraps through the wrapper 

## Specification
Using `create2`, Wrapped metaverse tokens must be generated from creating wrapped ERC-20 from the owner of ERC-1155.
Once wrapped ERC-20 of metaverse assets are created, people can deposit ERC-1155 to the contract then get the same kind and amount of designated ERC-20 tokens.
Deposited ERC-1155 tokens can be withdrawn from the contract by depositing designated wrapped ERC-20 token. 


## Rationale
The specification designates a corresponding wrapped ERC-20 token assigned to the ERC-1155 token contract.
Wrapped ERC-20 tokens are identified via their assetId, ERC-1155 address, and data(for receiver).
ERC 1155 does not require any change.

### Introspection

Contracts implementing this standard should make their interface available, such as `IMeta` for unwrapping and wrapping.

## Backwards Compatibility

This EIP is backwards compatible with all existing contracts, as it only provides new view functions. Wrapped ERC-20 in this specifcation adds data for receiver, assetId/ERC-1155 address to identify itself, but it fully manages to support other ERC-20 functionalities. ERC721 can also be included for wrapping(WIP)

## Security Considerations

There may be security concerns regarding create2 as it has not yet been tested for this use case.
Other than that, this EIP does not introduce any significant security concerns, as it simply standardizes the access to information that is already available in many contracts.

It should be noted that this EIP does not enforce any guarantees about the validity of the information provided. A token could easily report inaccurate balance data, potentially misleading or scamming users.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).