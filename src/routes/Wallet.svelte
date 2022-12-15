<script lang="ts">

    import { onMount } from "svelte"
    import { SecretNetworkClient } from "secretjs";
    import { amberBalance, scrtBalance, secretClient, keplrKey, viewingKeyStore } from "../utils/stores";
	import type { Key } from "@keplr-wallet/types";
	import type { SecretAddress } from "../tokens/tokens";

    onMount( ()=> {
        window.addEventListener("keplr_keystorechange", () => {
        console.log("Key store in Keplr is changed. You may need to refetch the account info.")
        connectKeplr()
        })
    })

    let connected: boolean = false

    let keplr: Key
    keplrKey.subscribe(value => {
        keplr = value
    })
    
    let secretjs: SecretNetworkClient
    secretClient.subscribe(value => {
        secretjs = value
    })

    let viewingKeys: Map<SecretAddress, string>
    viewingKeyStore.subscribe(value => {
        viewingKeys = value
    })

    let scrtBalanceValue:string
    scrtBalance.subscribe(value => {
		scrtBalanceValue = value;
	})
    
    const CHAIN_ID = "secret-4"
    const url = "https://lcd.spartanapi.dev"

    async function connectKeplr() {
        if (!window.keplr) {
            alert("Please install keplr extension");
        } else {
            await window.keplr!.enable(CHAIN_ID)
                .catch((error) => console.log(error))

            const key = await window.keplr!.getKey(CHAIN_ID)

            const keplrOfflineSigner = window.keplr!.getOfflineSignerOnlyAmino(CHAIN_ID)
            const [{ address: walletAddress }] = await keplrOfflineSigner.getAccounts()
            const client = new SecretNetworkClient({
                url,
                chainId: CHAIN_ID,
                wallet: keplrOfflineSigner,
                walletAddress: walletAddress,
                encryptionUtils: window.keplr!.getEnigmaUtils(CHAIN_ID),
            })
            
            keplrKey.set(key)
            secretClient.set(client)
            getBalances()
            connected = true
        }
    }

    function compactAddress(longAddress: string): string {
        const shortAddress = longAddress.substring(0,6) + '...' + longAddress.substring(39)
        return shortAddress
    }

    async function getViewingKey(tokenAddress: SecretAddress) {
        const vk = await window.keplr?.getSecret20ViewingKey(CHAIN_ID, tokenAddress)
        viewingKeyStore.update(keysList => keysList.set(tokenAddress, vk!))
    }

    async function getBalances() {

        const response = await secretjs.query.bank.balance(
            {
                address: secretjs.address,
                denom: "uscrt",
            } 
        )
        scrtBalance.set(Number(response.balance?.amount! as any / 1e6).toString())

        try { 
            const vk = await window.keplr?.getSecret20ViewingKey(CHAIN_ID, "secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852")
            const snip20Response = await secretjs.query.snip20.getBalance(
            {
                contract: {
                    address: "secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852",
                    code_hash: "5a085bd8ed89de92b35134ddd12505a602c7759ea25fb5c089ba03c8535b3042"
                },
                address: secretjs.address,
                auth: {
                    key: vk
                }
            })
            amberBalance.set(Number(snip20Response.balance.amount as any / 1e6).toString())
        } catch {
            amberBalance.set("... ")
        }

        
    }

</script>

<div class="wallet">
    {#if keplr }
        <div class="balance">
            {keplr.name}
        </div>
    {/if}

    <button on:click={connectKeplr}>
        {connected == false ? 'Connect' : compactAddress(keplr.bech32Address)}
    </button>
</div>

<style>
    .wallet {
        display: flex;
        flex-flow: row nowrap;
        justify-content: right;
        margin-top: 25px;
        margin-right: 50px;
        gap: 25px;
    }
    .wallet .balance {
        color: var(--color-theme-1);
        font-weight: 700;
    }
    button {
        cursor: pointer;
        width: fit-content;
        padding: 10px;
        border-radius: 10px;
        border-color: var(--color-theme-1);
        background-color: var(--color-bg-3);
        color: var(--color-text-strong);
        font-size: small;
        font-weight: 700;
        letter-spacing: 1px;
    }
</style>