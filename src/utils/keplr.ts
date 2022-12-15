import type { SecretAddress } from "../tokens/tokens";


export const chainId = "secret-4"

export async function setKeplrViewingKeys(tokensToSet: Array<{ token: SecretAddress; viewingKey: string }>) {
    if (!window.keplr) {
      console.error("Keplr not present");
      return;
    }
  
    for (const { token, viewingKey } of tokensToSet) {
      console.log("setting vk", token, viewingKey);
  
      await window.keplr.suggestToken(chainId, token, viewingKey);
      console.log(`Viewing key ${viewingKey} saved for token ${token} in Keplr`);
    }
  }
  
export async function getKeplrViewingKey(token: SecretAddress): Promise<string | null> {
    if (!window.keplr) {
        console.error("Keplr not present");
        return null;
    }

    try {
        return await window.keplr.getSecret20ViewingKey(chainId, token);
    } catch (e) {
        return null;
    }
}
  