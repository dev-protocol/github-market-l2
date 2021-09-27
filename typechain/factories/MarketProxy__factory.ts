/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
	Signer,
	utils,
	BytesLike,
	Contract,
	ContractFactory,
	Overrides,
} from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type { MarketProxy, MarketProxyInterface } from '../MarketProxy'

const _abi = [
	{
		inputs: [
			{
				internalType: 'address',
				name: '_logic',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'admin_',
				type: 'address',
			},
			{
				internalType: 'bytes',
				name: '_data',
				type: 'bytes',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'previousAdmin',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'newAdmin',
				type: 'address',
			},
		],
		name: 'AdminChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'beacon',
				type: 'address',
			},
		],
		name: 'BeaconUpgraded',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'implementation',
				type: 'address',
			},
		],
		name: 'Upgraded',
		type: 'event',
	},
	{
		stateMutability: 'payable',
		type: 'fallback',
	},
	{
		inputs: [],
		name: 'admin',
		outputs: [
			{
				internalType: 'address',
				name: 'admin_',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newAdmin',
				type: 'address',
			},
		],
		name: 'changeAdmin',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'implementation',
		outputs: [
			{
				internalType: 'address',
				name: 'implementation_',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newImplementation',
				type: 'address',
			},
		],
		name: 'upgradeTo',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newImplementation',
				type: 'address',
			},
			{
				internalType: 'bytes',
				name: 'data',
				type: 'bytes',
			},
		],
		name: 'upgradeToAndCall',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		stateMutability: 'payable',
		type: 'receive',
	},
]

const _bytecode =
	'0x60806040523480156200001157600080fd5b5060405162001a2d38038062001a2d8339818101604052810190620000379190620006da565b828282828160017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd60001c6200006e9190620009a8565b60001b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b14620000ca577f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b620000de828260006200018b60201b60201c565b505060017fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610460001c620001129190620009a8565b60001b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610360001b146200016e577f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b6200017f82620001ce60201b60201c565b50505050505062000c03565b6200019c836200022c60201b60201c565b600082511180620001aa5750805b15620001c957620001c783836200028360201b6200034f1760201c565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f620001ff620002b960201b60201c565b826040516200021092919062000860565b60405180910390a162000229816200031d60201b60201c565b50565b6200023d816200040e60201b60201c565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b6060620002b1838360405180606001604052806027815260200162001a0660279139620004e460201b60201c565b905092915050565b6000620002f47fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610360001b620005c860201b6200037c1760201c565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141562000390576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200038790620008b1565b60405180910390fd5b80620003ca7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610360001b620005c860201b6200037c1760201c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6200042481620005d260201b620003861760201c565b62000466576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200045d90620008d3565b60405180910390fd5b80620004a07f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b620005c860201b6200037c1760201c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6060620004f784620005d260201b60201c565b62000539576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200053090620008f5565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff168560405162000563919062000847565b600060405180830381855af49150503d8060008114620005a0576040519150601f19603f3d011682016040523d82523d6000602084013e620005a5565b606091505b5091509150620005bd828286620005e560201b60201c565b925050509392505050565b6000819050919050565b600080823b905060008111915050919050565b60608315620005f7578290506200064a565b6000835111156200060b5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200064191906200088d565b60405180910390fd5b9392505050565b600062000668620006628462000940565b62000917565b9050828152602081018484840111156200068157600080fd5b6200068e84828562000a21565b509392505050565b600081519050620006a78162000be9565b92915050565b600082601f830112620006bf57600080fd5b8151620006d184826020860162000651565b91505092915050565b600080600060608486031215620006f057600080fd5b6000620007008682870162000696565b9350506020620007138682870162000696565b925050604084015167ffffffffffffffff8111156200073157600080fd5b6200073f86828701620006ad565b9150509250925092565b6200075481620009e3565b82525050565b6000620007678262000976565b6200077381856200098c565b93506200078581856020860162000a21565b80840191505092915050565b60006200079e8262000981565b620007aa818562000997565b9350620007bc81856020860162000a21565b620007c78162000aeb565b840191505092915050565b6000620007e160268362000997565b9150620007ee8262000afc565b604082019050919050565b600062000808602d8362000997565b9150620008158262000b4b565b604082019050919050565b60006200082f60268362000997565b91506200083c8262000b9a565b604082019050919050565b60006200085582846200075a565b915081905092915050565b600060408201905062000877600083018562000749565b62000886602083018462000749565b9392505050565b60006020820190508181036000830152620008a9818462000791565b905092915050565b60006020820190508181036000830152620008cc81620007d2565b9050919050565b60006020820190508181036000830152620008ee81620007f9565b9050919050565b60006020820190508181036000830152620009108162000820565b9050919050565b60006200092362000936565b905062000931828262000a57565b919050565b6000604051905090565b600067ffffffffffffffff8211156200095e576200095d62000abc565b5b620009698262000aeb565b9050602081019050919050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000620009b58262000a17565b9150620009c28362000a17565b925082821015620009d857620009d762000a8d565b5b828203905092915050565b6000620009f082620009f7565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b8381101562000a4157808201518184015260208101905062000a24565b8381111562000a51576000848401525b50505050565b62000a628262000aeb565b810181811067ffffffffffffffff8211171562000a845762000a8362000abc565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f455243313936373a206e65772061646d696e20697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b7f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60008201527f6e74726163740000000000000000000000000000000000000000000000000000602082015250565b62000bf481620009e3565b811462000c0057600080fd5b50565b610df38062000c136000396000f3fe60806040526004361061004e5760003560e01c80633659cfe6146100675780634f1ef286146100905780635c60da1b146100ac5780638f283970146100d7578063f851a440146101005761005d565b3661005d5761005b61012b565b005b61006561012b565b005b34801561007357600080fd5b5061008e600480360381019061008991906108f2565b610145565b005b6100aa60048036038101906100a5919061091b565b6101ac565b005b3480156100b857600080fd5b506100c161024a565b6040516100ce9190610a8f565b60405180910390f35b3480156100e357600080fd5b506100fe60048036038101906100f991906108f2565b6102a2565b005b34801561010c57600080fd5b506101156102f7565b6040516101229190610a8f565b60405180910390f35b610133610399565b61014361013e610419565b610428565b565b61014d61044e565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156101a05761019b816040518060200160405280600081525060006104a5565b6101a9565b6101a861012b565b5b50565b6101b461044e565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561023c576102378383838080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505060016104a5565b610245565b61024461012b565b5b505050565b600061025461044e565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156102965761028f610419565b905061029f565b61029e61012b565b5b90565b6102aa61044e565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156102eb576102e6816104d1565b6102f4565b6102f361012b565b5b50565b600061030161044e565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156103435761033c61044e565b905061034c565b61034b61012b565b5b90565b60606103748383604051806060016040528060278152602001610d976027913961051d565b905092915050565b6000819050919050565b600080823b905060008111915050919050565b6103a161044e565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561040f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161040690610b55565b60405180910390fd5b6104176105ea565b565b60006104236105ec565b905090565b3660008037600080366000845af43d6000803e8060008114610449573d6000f35b3d6000fd5b600061047c7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610360001b61037c565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6104ae83610643565b6000825111806104bb5750805b156104cc576104ca838361034f565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6104fa61044e565b82604051610509929190610aaa565b60405180910390a161051a81610692565b50565b606061052884610386565b610567576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055e90610b35565b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff168560405161058f9190610a78565b600060405180830381855af49150503d80600081146105ca576040519150601f19603f3d011682016040523d82523d6000602084013e6105cf565b606091505b50915091506105df828286610773565b925050509392505050565b565b600061061a7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61037c565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61064c816107da565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610702576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f990610af5565b60405180910390fd5b8061072f7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610360001b61037c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60608315610783578290506107d3565b6000835111156107965782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ca9190610ad3565b60405180910390fd5b9392505050565b6107e381610386565b610822576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081990610b15565b60405180910390fd5b8061084f7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61037c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000813590506108a281610d7f565b92915050565b60008083601f8401126108ba57600080fd5b8235905067ffffffffffffffff8111156108d357600080fd5b6020830191508360018202830111156108eb57600080fd5b9250929050565b60006020828403121561090457600080fd5b600061091284828501610893565b91505092915050565b60008060006040848603121561093057600080fd5b600061093e86828701610893565b935050602084013567ffffffffffffffff81111561095b57600080fd5b610967868287016108a8565b92509250509250925092565b61097c81610ba7565b82525050565b600061098d82610b75565b6109978185610b8b565b93506109a7818560208601610bd9565b80840191505092915050565b60006109be82610b80565b6109c88185610b96565b93506109d8818560208601610bd9565b6109e181610c0c565b840191505092915050565b60006109f9602683610b96565b9150610a0482610c1d565b604082019050919050565b6000610a1c602d83610b96565b9150610a2782610c6c565b604082019050919050565b6000610a3f602683610b96565b9150610a4a82610cbb565b604082019050919050565b6000610a62604283610b96565b9150610a6d82610d0a565b606082019050919050565b6000610a848284610982565b915081905092915050565b6000602082019050610aa46000830184610973565b92915050565b6000604082019050610abf6000830185610973565b610acc6020830184610973565b9392505050565b60006020820190508181036000830152610aed81846109b3565b905092915050565b60006020820190508181036000830152610b0e816109ec565b9050919050565b60006020820190508181036000830152610b2e81610a0f565b9050919050565b60006020820190508181036000830152610b4e81610a32565b9050919050565b60006020820190508181036000830152610b6e81610a55565b9050919050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000610bb282610bb9565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60005b83811015610bf7578082015181840152602081019050610bdc565b83811115610c06576000848401525b50505050565b6000601f19601f8301169050919050565b7f455243313936373a206e65772061646d696e20697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b7f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60008201527f6e74726163740000000000000000000000000000000000000000000000000000602082015250565b7f5472616e73706172656e745570677261646561626c6550726f78793a2061646d60008201527f696e2063616e6e6f742066616c6c6261636b20746f2070726f7879207461726760208201527f6574000000000000000000000000000000000000000000000000000000000000604082015250565b610d8881610ba7565b8114610d9357600080fd5b5056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122065697e49884407c99de6c51d685900fbd202b762165d5c71620195885924212564736f6c63430008040033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564'

export class MarketProxy__factory extends ContractFactory {
	constructor(signer?: Signer) {
		super(_abi, _bytecode, signer)
	}

	deploy(
		_logic: string,
		admin_: string,
		_data: BytesLike,
		overrides?: Overrides & { from?: string | Promise<string> }
	): Promise<MarketProxy> {
		return super.deploy(
			_logic,
			admin_,
			_data,
			overrides || {}
		) as Promise<MarketProxy>
	}
	getDeployTransaction(
		_logic: string,
		admin_: string,
		_data: BytesLike,
		overrides?: Overrides & { from?: string | Promise<string> }
	): TransactionRequest {
		return super.getDeployTransaction(_logic, admin_, _data, overrides || {})
	}
	attach(address: string): MarketProxy {
		return super.attach(address) as MarketProxy
	}
	connect(signer: Signer): MarketProxy__factory {
		return super.connect(signer) as MarketProxy__factory
	}
	static readonly bytecode = _bytecode
	static readonly abi = _abi
	static createInterface(): MarketProxyInterface {
		return new utils.Interface(_abi) as MarketProxyInterface
	}
	static connect(
		address: string,
		signerOrProvider: Signer | Provider
	): MarketProxy {
		return new Contract(address, _abi, signerOrProvider) as MarketProxy
	}
}
