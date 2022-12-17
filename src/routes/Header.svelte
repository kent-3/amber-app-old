<script>
	import { page } from '$app/stores'
	import { base } from '$app/paths'
	import logo from '$lib/images/amber-logo-1.svg'
	import github from '$lib/images/github.svg'
	import telegram from '$lib/images/telegram.svg'
	import twitter from '$lib/images/twitter.svg'
	import Wallet from './Wallet.svelte'
</script>

<header>
	<div class="corner">
		<a href="https://www.amberdao.io" target="_blank" rel="noopener noreferrer">
			<img src={logo} alt="AmberDAO" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="{base}/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/wrap' ? 'page' : undefined}>
				<a href="{base}/wrap">Wrap</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/swap') ? 'page' : undefined}>
				<a href="{base}/swap">Swap</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/vk') ? 'page' : undefined}>
				<a href="{base}/vk">Keys</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/nft') ? 'page' : undefined}>
				<a href="{base}/nft">NFTs</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<!-- <a href="https://twitter.com/AmberDAO_" target="_blank" rel="noopener noreferrer">
			<img src={twitter} alt="Twitter" />
		</a>
		<a href="https://t.me/AmberDAOscrt" target="_blank" rel="noopener noreferrer">
			<img src={telegram} alt="Telegram" />
		</a> -->
		<a href="https://github.com/kent-3/amber-app" target="_blank" rel="noopener noreferrer">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
		justify-content: flex-end;
		display: flex;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
		transition: all ease 300ms;
		margin: 0 1em;
	}

	.corner img:hover {
		scale: 125%;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.1);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
