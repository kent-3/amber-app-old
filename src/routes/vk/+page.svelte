<script lang="ts">
    import { base } from '$app/paths'
    import { getKeplrViewingKey, setKeplrViewingKey } from "$lib/keplr"
    import type { BasicToken, ComplexToken, SecretAddress, Token } from "$lib/tokens"
    import { tokenList as localTokens } from "$lib/tokens"
    import { tokenStore } from "$lib/stores"
	  import { blur, scale } from "svelte/transition";

    let tokens: Array<BasicToken>

    tokenStore.subscribe(value => {
        if (value) {
          tokens = [...value].map(([address, token]) => ( token )) as BasicToken[]
        }
        else tokens
    })

    const loadTokens = async () => {
      //   setLoading(true);
      
      const tokens = new Map<SecretAddress, Token>();
      const relatedTokens = new Map<SecretAddress, Set<SecretAddress>>();

      for (const token of localTokens) {
        if (token.address in tokens) {
          console.error(`Duplicate tokens ${token} and ${tokens.get(token.address)}`);
        }

        if (token.type == "LP") {
          const [asset1, asset2] = token.assets;

          if (!tokens.has(asset1) || !tokens.has(asset2)) {
            console.log(`Skipping LP token ${token.address} because ${asset1} or ${asset2} is unknown.`);
            continue;
          }

          relatedTokens.set(asset1, new Set([...new Set(relatedTokens.get(asset1)), token.address]));
          relatedTokens.set(asset2, new Set([...new Set(relatedTokens.get(asset2)), token.address]));

          tokens.set(token.address, token);

          continue;
        } else if (token.type == "REWARDS") {
          const [lockToken, rewardsToken] = token.assets;

          if (!tokens.has(lockToken) || !tokens.has(rewardsToken)) {
            console.log(`Skipping Rewards token ${token.address} because ${lockToken} or ${rewardsToken} is unknown.`);
            continue;
          }

          relatedTokens.set(rewardsToken, new Set([...new Set(relatedTokens.get(rewardsToken)), token.address]));

          if (tokens.get(lockToken)?.type === "LP") {
            const [asset1, asset2] = (tokens.get(lockToken) as ComplexToken).assets;
            token.assets = [asset1, asset2, rewardsToken];

            relatedTokens.set(asset1, new Set([...new Set(relatedTokens.get(asset1)), token.address]));
            relatedTokens.set(asset2, new Set([...new Set(relatedTokens.get(asset2)), token.address]));
          } else {
            relatedTokens.set(lockToken, new Set([...new Set(relatedTokens.get(lockToken)), token.address]));
          }

          tokens.set(token.address, token);

          continue;
        }

        tokens.set(token.address, token);
      }

    tokenStore.set(tokens);
    //   setRelatedTokens(relatedTokens);
    //   setLoading(false);
    }

    loadTokens()

</script>


<div class="container" in:blur>
  
  {#each tokens as token}
  <div class="card">
    <!-- add a way to check if user already has viewing key for a given token -->
    {#if false }
    <p> <img src={token.logo} alt="logo"/>
      {token.symbol} <button style="cursor:default;" disabled> key found </button>
    </p>
    {:else}
    <p> <img src='{base}{token.logo}' alt="logo"/>
      {token.symbol} <button on:click={() => setKeplrViewingKey(token.address)}> set key </button>
    </p>
    {/if}
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
  }
  .card {
    display: flex;
    flex-flow: row wrap;
    width: 300px;
    justify-content: space-evenly;
    filter: drop-shadow(0px 0px 5px rgba(0,0,0,0.5));
  }
  .card:hover img {
    rotate: -360deg;
    filter: drop-shadow(0px 0px 5px var(--color-theme-2));
  }
  .card:hover {
    filter:brightness(110%);
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