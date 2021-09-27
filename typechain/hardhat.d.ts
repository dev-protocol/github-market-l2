/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from 'ethers'
import {
	FactoryOptions,
	HardhatEthersHelpers as HardhatEthersHelpersBase,
} from '@nomiclabs/hardhat-ethers/types'

import * as Contracts from '.'

declare module 'hardhat/types/runtime' {
	interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
		getContractFactory(
			name: 'IAddressRegistry',
			signerOrOptions?: ethers.Signer | FactoryOptions
		): Promise<Contracts.IAddressRegistry__factory>
		getContractFactory(
			name: 'IMarket',
			signerOrOptions?: ethers.Signer | FactoryOptions
		): Promise<Contracts.IMarket__factory>
		getContractFactory(
			name: 'IMarketBehavior',
			signerOrOptions?: ethers.Signer | FactoryOptions
		): Promise<Contracts.IMarketBehavior__factory>
		getContractFactory(
			name: 'AccessControlUpgradeable',
			signerOrOptions?: ethers.Signer | FactoryOptions
		): Promise<Contracts.AccessControlUpgradeable__factory>
		getContractFactory(
			name: 'IAccessControlUpgradeable',
			signerOrOptions?: ethers.Signer | FactoryOptions
		): Promise<Contracts.IAccessControlUpgradeable__factory>
		getContractFactory(
			name: 'OwnableUpgradeable',
			signerOrOptions?: ethers.Signer | FactoryOptions
		): Promise<Contracts.OwnableUpgradeable__factory>
		getContractFactory(
			name: 'PausableUpgradeable',
			signerOrOptions?: ethers.Signer | FactoryOptions
		): Promise<Contracts.PausableUpgradeable__factory>
		getContractFactory(
			name: 'ERC165Upgradeable',
			signerOrOptions?: ethers.Signer | FactoryOptions
		): Promise<Contracts.ERC165Upgradeable__factory>
		getContractFactory(
			name: 'IERC165Upgradeable',
			signerOrOptions?: ethers.Signer | FactoryOptions
		): Promise<Contracts.IERC165Upgradeable__factory>
		getContractFactory(
			name: 'Ownable',
			signerOrOptions?: ethers.Signer | FactoryOptions
		): Promise<Contracts.Ownable__factory>
		getContractFactory(
			name: 'IBeacon',
			signerOrOptions?: ethers.Signer | FactoryOptions
		): Promise<Contracts.IBeacon__factory>
		getContractFactory(
			name: 'ERC1967Proxy',
			signerOrOptions?: ethers.Signer | FactoryOptions
		): Promise<Contracts.ERC1967Proxy__factory>
		getContractFactory(
			name: 'ERC1967Upgrade',
			signerOrOptions?: ethers.Signer | FactoryOptions
		): Promise<Contracts.ERC1967Upgrade__factory>
		getContractFactory(
			name: 'Proxy',
			signerOrOptions?: ethers.Signer | FactoryOptions
		): Promise<Contracts.Proxy__factory>
		getContractFactory(
			name: 'ProxyAdmin',
			signerOrOptions?: ethers.Signer | FactoryOptions
		): Promise<Contracts.ProxyAdmin__factory>
		getContractFactory(
			name: 'TransparentUpgradeableProxy',
			signerOrOptions?: ethers.Signer | FactoryOptions
		): Promise<Contracts.TransparentUpgradeableProxy__factory>
		getContractFactory(
			name: 'Pausable',
			signerOrOptions?: ethers.Signer | FactoryOptions
		): Promise<Contracts.Pausable__factory>
		getContractFactory(
			name: 'MarketAdmin',
			signerOrOptions?: ethers.Signer | FactoryOptions
		): Promise<Contracts.MarketAdmin__factory>
		getContractFactory(
			name: 'GitHubMarket',
			signerOrOptions?: ethers.Signer | FactoryOptions
		): Promise<Contracts.GitHubMarket__factory>
		getContractFactory(
			name: 'MarketProxy',
			signerOrOptions?: ethers.Signer | FactoryOptions
		): Promise<Contracts.MarketProxy__factory>
		getContractFactory(
			name: 'MockAddressRegistry',
			signerOrOptions?: ethers.Signer | FactoryOptions
		): Promise<Contracts.MockAddressRegistry__factory>
		getContractFactory(
			name: 'MockMarket',
			signerOrOptions?: ethers.Signer | FactoryOptions
		): Promise<Contracts.MockMarket__factory>

		// default types
		getContractFactory(
			name: string,
			signerOrOptions?: ethers.Signer | FactoryOptions
		): Promise<ethers.ContractFactory>
		getContractFactory(
			abi: any[],
			bytecode: ethers.utils.BytesLike,
			signer?: ethers.Signer
		): Promise<ethers.ContractFactory>
	}
}
