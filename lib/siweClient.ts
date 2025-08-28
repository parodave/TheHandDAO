"use client";
import { createWalletClient, custom } from "viem";
import { mainnet } from "viem/chains";

export async function getNonce() {
  const r = await fetch("/api/siwe/nonce"); return (await r.json()).nonce as string;
}
export async function signMessageWithWallet(message: string): Promise<`0x${string}`> {
  // @ts-expect-error - injected provider typings
  const eth = window.ethereum; if (!eth) throw new Error("No wallet");
  const [account] = await eth.request({ method: "eth_requestAccounts" });
  const client = createWalletClient({ chain: mainnet, transport: custom(eth) });
  return client.signMessage({ account, message });
}
export async function verifySignature(address: string, message: string, signature: string) {
  const r = await fetch("/api/siwe/verify", { method:"POST", headers:{ "content-type":"application/json" }, body: JSON.stringify({ address, message, signature }) });
  return r.ok;
}
export async function getStatus(){ const r=await fetch("/api/siwe/status",{cache:"no-store"}); return (await r.json()).member as boolean; }
export async function logout(){ await fetch("/api/siwe/logout",{method:"POST"}); }
