<script lang="ts">
	import { onMount } from 'svelte'
	import type { SecretNetworkClient } from 'secretjs'
	import { setupKeplr } from '$lib/keplr'
	import { compactAddress } from '$lib/utils'
	import { chains } from '$lib/config'
	import {
		amberBalance,
		scrtBalance,
		isAccountAvailable,
		keplrKey,
		secretClient,
		secretAddress,
		viewingKeyStore
	} from '$lib/stores'
	import type { Key } from '@keplr-wallet/types'
	import type { SecretAddress } from '$lib/tokens'

	const SECRET_CHAIN_ID = chains['Secret Network'].chain_id

	onMount(() => {
		window.addEventListener('keplr_keystorechange', () => {
			console.log('Key store in Keplr is changed. You may need to refetch the account info.')
			setupKeplr(isAccountAvailable, keplrKey, secretClient, secretAddress)
		})
	})

	function connect() {
		setupKeplr(isAccountAvailable, keplrKey, secretClient, secretAddress)
	}

	let connected: boolean
	isAccountAvailable.subscribe((value) => {
		connected = value
	})

	let keplr: Key
	keplrKey.subscribe((value) => {
		keplr = value
	})

	let secretjs: SecretNetworkClient
	secretClient.subscribe((value) => {
		secretjs = value
	})

	let viewingKeys: Map<SecretAddress, string>
	viewingKeyStore.subscribe((value) => {
		viewingKeys = value
	})

	let scrtBalanceValue: string
	scrtBalance.subscribe((value) => {
		scrtBalanceValue = value
	})

	// async function connectKeplr() {
	//     if (!window.keplr) {
	//         alert("Please install keplr extension")
	//     } else {
	//         await window.keplr!.enable(CHAIN_ID)
	//             .catch((error) => console.log(error))

	//         const key = await window.keplr!.getKey(CHAIN_ID)

	//         const keplrOfflineSigner = window.keplr!.getOfflineSignerOnlyAmino(CHAIN_ID)
	//         const [{ address: walletAddress }] = await keplrOfflineSigner.getAccounts()
	//         const client = new SecretNetworkClient({
	//             url,
	//             chainId: CHAIN_ID,
	//             wallet: keplrOfflineSigner,
	//             walletAddress: walletAddress,
	//             encryptionUtils: window.keplr!.getEnigmaUtils(CHAIN_ID),
	//         })

	//         keplrKey.set(key)
	//         secretClient.set(client)
	//         getBalances()
	//         connected = true
	//     }
	// }

	async function getBalances() {
		const response = await secretjs.query.bank.balance({
			address: secretjs.address,
			denom: 'uscrt'
		})
		scrtBalance.set(Number((response.balance?.amount as any) / 1e6).toString())

		try {
			const vk = await window.keplr?.getSecret20ViewingKey(
				SECRET_CHAIN_ID,
				'secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852'
			)
			const snip20Response = await secretjs.query.snip20.getBalance({
				contract: {
					address: 'secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
					code_hash: '5a085bd8ed89de92b35134ddd12505a602c7759ea25fb5c089ba03c8535b3042'
				},
				address: secretjs.address,
				auth: {
					key: vk
				}
			})
			amberBalance.set(Number((snip20Response.balance.amount as any) / 1e6).toString())
		} catch {
			amberBalance.set('... ')
		}
	}
</script>

<div class="wallet">
	<button on:click={() => connect()} class:connected={connected == true}>
		{connected == false ? 'Connect' : compactAddress(keplr.bech32Address)}
	</button>
	{#if keplr}
		<div class="balance">
			[ {keplr.name} ]
		</div>
	{/if}
</div>

<style>
	.wallet {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-flow: row-reverse nowrap;
		margin: 5px 25px 5px auto;
		gap: 15px;
		transition: all ease 1s;
	}
	.wallet .balance {
		color: var(--color-theme-2);
		font-weight: 700;
		transition: all ease 1s;
	}
	button {
		cursor: pointer;
		min-width: 140px;
		width: fit-content;
		height: min-content;
		padding: 10px;
		border-radius: 10px;
		border: 2px solid var(--color-theme-1);
		box-shadow: inset 0px 0px 3px var(--color-theme-1), 0px 0px 3px var(--color-theme-1);
		background-color: var(--color-bg-3);
		background-color: rgba(0, 0, 0, 0.2);
		color: var(--color-text-strong);
		color: var(--color-theme-1);
		font-size: small;
		font-weight: 700;
		letter-spacing: 1px;
		transition: all ease 1s;
		z-index: 4;
	}
	button:hover {
		filter: brightness(120%);
	}
	.connected {
		border: 2px solid var(--color-theme-2);
		box-shadow: inset 0px 0px 3px var(--color-theme-2), 0px 0px 3px var(--color-theme-2);
		color: rgba(254, 255, 255, 0.9);
	}
</style>
