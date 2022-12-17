import type { Key } from '@keplr-wallet/types'
import type { SecretNetworkClient } from 'secretjs'
import { type Writable, writable } from 'svelte/store'
import type { SecretAddress, Token } from './tokens'

export const isAccountAvailable: Writable<boolean> = writable(false)
export const keplrKey: Writable<Key> = writable()
export const secretClient: Writable<SecretNetworkClient> = writable()
export const secretAddress: Writable<string> = writable()
export const viewingKeyStore: Writable<Map<SecretAddress, string>> = writable()

export const scrtBalance: Writable<string> = writable('... ')
export const amberBalance: Writable<string> = writable('... ')

export const tokenStore: Writable<Map<SecretAddress, Token>> = writable()
