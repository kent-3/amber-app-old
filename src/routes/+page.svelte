<script>
	import { blur, draw } from 'svelte/transition'
	import { onMount } from 'svelte'

	let ready = false
	onMount(() => (ready = true))
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section in:blur>
	{#if ready}
		<svg
			width="300"
			height="300"
			viewBox="0 0 59 59"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				in:draw={{ duration: 3000 }}
				d="M29.5 57C44.6878 57 57 44.6878 57 29.5C57 14.3122 44.6878 2 29.5 2C14.3122 2 2 14.3122 2 29.5C2 44.6878 14.3122 57 29.5 57Z"
				fill="none"
				stroke="#798498"
				stroke-width="2.0122"
				stroke-miterlimit="10"
			/>
			<path
				d="M20.3672 18.8621L26.0882 15.8511L24.5827 22.1743L35.1214 28.3094L40.8425 33.6164L40.2403 40.2408L36.0248 42.3485L35.1214 36.3264L24.2816 30.3042L19.4639 24.5832L20.3672 18.8621Z"
				fill="none"
			/>
			<path
				in:draw={{ duration: 3000 }}
				d="M28.9569 44.8452C31.7683 44.9192 36.2073 43.4395 36.2813 40.1102C36.5772 30.6403 19.0431 33.3777 19.413 22.4281C19.561 17.4712 25.5536 14.2899 30.5105 14.5119"
				stroke="#798498"
				stroke-width="2.0122"
				stroke-miterlimit="10"
			/>
			<path
				in:draw={{ duration: 3000 }}
				d="M41.2382 19.8387C38.7227 16.8794 35.8374 14.8078 31.6203 14.5119C28.8089 14.29 24.8138 15.6217 24.5179 18.9509C23.704 28.2729 42.126 26.5712 41.1642 37.5208C40.7203 42.4777 34.1357 44.9932 28.9569 44.8452C24.7398 44.6972 21.1146 42.7737 18.1553 39.5184"
				stroke="#798498"
				stroke-width="2.0122"
				stroke-miterlimit="10"
			/>
		</svg>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	svg {
		filter: drop-shadow(0 0 2px #798498);
		transition: all ease 1s;
	}

	svg path {
		transition: all ease 1s;
	}

	svg:hover {
		filter: drop-shadow(0 0 6px #798498);
	}

	/* h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
		color: rgb(254, 255, 255);
		color: #798498
	} */

	/* .welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	} */
</style>
