<script lang="ts">
	import { base } from '$app/paths'
	import { setKeplrViewingKey } from '$lib/keplr'
	import type { SecretAddress, Token } from '$lib/tokens'
	import { tokenList } from '$lib/tokens'
	import { tokenStore, viewingKeys } from '$lib/stores'
	import { blur } from 'svelte/transition'

	let tokens: Token[]

	tokenStore.subscribe((value) => {
		if (value) {
			tokens = [...value].map(([address, token]) => token) as Token[]
		} else tokens
	})

	const loadTokens = async () => {
		//   setLoading(true);

		const tokens = new Map<SecretAddress, Token>()
		const relatedTokens = new Map<SecretAddress, Set<SecretAddress>>()

		for (const token of tokenList) {
			if (token.address in tokens) {
				console.error(`Duplicate tokens ${token} and ${tokens.get(token.address)}`)
			}
			tokens.set(token.address, token)
		}

		tokenStore.set(tokens)
		//   setRelatedTokens(relatedTokens);
		//   setLoading(false);
	}

	loadTokens()
</script>

<div class="container" in:blur>
	{#each tokens as token}
		<div class="card">
			<p>
				<img src="{base}{token.logo}" alt="logo" />
				{token.symbol}
				{#if $viewingKeys.has(token.address)}
					<button disabled style="cursor: default;"> key set </button>
				{:else}
					<button on:click={() => setKeplrViewingKey(token.address)}> set key </button>
				{/if}
			</p>
		</div>
	{/each}
</div>

<style>
	.container {
		margin-top: 25px;
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-items: center;
		height: 100%;
		row-gap: 10px;
	}
	.card {
		display: flex;
		flex-flow: row wrap;
		width: 300px;
		justify-content: space-evenly;
		filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
	}
	.card:hover img {
		rotate: -360deg;
		filter: drop-shadow(0px 0px 5px var(--color-theme-2));
	}
	.card:hover {
		filter: brightness(110%);
	}

	p {
		align-items: center;
		justify-content: flex-start;
		display: flex;
		flex-flow: row nowrap;
		gap: 20px 20px;
		font-weight: 700;
		margin: 5px 0px;
	}
	img {
		width: 40px;
		height: 40px;
		/* border-radius: 100%; */
		transition: all ease 500ms;
	}

	button {
		border-radius: 10px;
		background-color: var(--color-bg-3);
		color: var(--color-text-strong);
		padding: 2px 10px;
		cursor: pointer;
	}
</style>
