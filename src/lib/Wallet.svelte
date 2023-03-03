<script lang="ts" type="module">
	import { onMount } from 'svelte'
	import { setupKeplr, getKeplrViewingKey } from '$lib/keplr'
	import { chains } from '$lib/config'
	import { type Token, tokenList } from '$lib/tokens'
	import { compactAddress } from '$lib/utils'
	import {
		amberBalance,
		scrtBalance,
		isAccountAvailable,
		keplrKey,
		secretClient,
		secretAddress,
		viewingKeys,
		balances
	} from '$lib/stores'

	const SECRET_CHAIN_ID = chains['Secret Network'].chain_id

	onMount(() => {
		window.addEventListener('keplr_keystorechange', async () => {
			console.log('Key store in Keplr is changed. You may need to refetch the account info.')
			await connect()
		})
	})

	async function connect() {
		await setupKeplr(isAccountAvailable, keplrKey, secretClient, secretAddress)
		await getViewingKeys(tokenList as Token[])
		await getBalances()
	}
	
	async function getBalances() {

		const response = await $secretClient.query.bank.balance({
			address: $secretClient.address,
			denom: 'uscrt'
		})
		$scrtBalance = Number((response.balance?.amount as any) / 1e6).toString()

		console.log($scrtBalance)

		// const vk = await window.keplr?.getSecret20ViewingKey(
		// 	SECRET_CHAIN_ID,
		// 	'secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852'
		// )
		for (const token of tokenList) {
			const snip20Response = await $secretClient.query.snip20.getBalance({
				contract: {
					address: token.address,
					code_hash: token.codeHash
				},
				address: $secretClient.address,
				auth: {
					key: $viewingKeys.get(token.address)
				}
			})
			$balances.set(token.address, Number(snip20Response.balance.amount))
		}
		// $amberBalance = Number((snip20Response.balance.amount as any) / 1e6).toString()
		console.log($balances)
	}

	async function getViewingKeys(tokens:Token[]) {
		for (const token of tokens as Token[]) {
			const key = await getKeplrViewingKey(token.address)
			if (key != null) {
				viewingKeys.update(map => map.set(token.address, key))
			}
		}
		console.log($viewingKeys)
	}

</script>

<div class="wallet">
	<button on:click={() => connect()} class:connected={$isAccountAvailable == true}>
		{$isAccountAvailable == false ? 'Connect' : compactAddress($keplrKey.bech32Address)}
	</button>
	{#if $keplrKey}
		<div class="balance">
			[ {$keplrKey.name} ]
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
