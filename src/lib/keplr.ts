import { SecretNetworkClient } from "secretjs"
import { chains } from "./config"
import type { Writable } from "svelte/store"
import type { Key } from "@keplr-wallet/types"

const SECRET_CHAIN_ID = chains["Secret Network"].chain_id;
const SECRET_LCD = chains["Secret Network"].lcd;

export async function setupKeplr(
  isAccountAvailable: Writable<boolean>,
  keplrKey: Writable<Key>,
  secretClient: Writable<SecretNetworkClient>,
  secretAddress: Writable<string>
) {
  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
console.log("hello")
  while (
    !window.keplr ||
    !window.keplr.getEnigmaUtils ||
    !window.keplr.getOfflineSignerOnlyAmino
  ) {
    await sleep(50);
  }

  await window.keplr.enable(SECRET_CHAIN_ID);
  window.keplr.defaultOptions = {
    sign: {
      preferNoSetFee: false,
      disableBalanceCheck: true,
    },
  };

  const keplrOfflineSigner = window.keplr.getOfflineSignerOnlyAmino(SECRET_CHAIN_ID);
  const accounts = await keplrOfflineSigner.getAccounts();

  const address = accounts[0].address;

  const secretjs = new SecretNetworkClient({
    url: SECRET_LCD,
    chainId: SECRET_CHAIN_ID,
    wallet: keplrOfflineSigner,
    walletAddress: address,
    encryptionUtils: window.keplr.getEnigmaUtils(SECRET_CHAIN_ID),
  });

  const key = await window.keplr.getKey(SECRET_CHAIN_ID)

  isAccountAvailable.set(true)
  keplrKey.set(key)
  secretAddress.set(address)
  secretClient.set(secretjs)
}

export async function setKeplrViewingKey(token: string) {
  if (!window.keplr) {
    console.error("Keplr not present")
    return
  }

  await window.keplr.suggestToken(SECRET_CHAIN_ID, token);
}

export async function getKeplrViewingKey(
  token: string
): Promise<string | null> {
  if (!window.keplr) {
    console.error("Keplr not present")
    return null
  }

  try {
    return await window.keplr.getSecret20ViewingKey(SECRET_CHAIN_ID, token)
  } catch (e) {
    return null
  }
}
