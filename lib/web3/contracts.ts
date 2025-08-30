"use client";
import { useCallback } from "react";
import { writeContract, waitForTransactionReceipt, simulateContract, sendTransaction } from "@wagmi/core";
import { parseEther } from "viem";
import governorJson from "@/abi/Governor.json";
import erc721Json from "@/abi/ERC721.json";
import { ADDR } from "./addresses";
import { config } from "@/lib/wagmi/config"; // suppose que wagmi config existe déjà

const governorAbi = (governorJson as any).abi || (governorJson as any);
const erc721Abi = (erc721Json as any).abi || (erc721Json as any);

export function useDaoActions() {
  const mintToken = useCallback(async (to: `0x${string}`, uri: string) => {
    if (!ADDR.ERC721) throw new Error("ERC721 address missing");
    const sim = await simulateContract(config, { address: ADDR.ERC721, abi: erc721Abi, functionName: "safeMint", args: [to, uri] });
    const hash = await writeContract(config, sim.request);
    const rcpt = await waitForTransactionReceipt(config, { hash });
    return rcpt.transactionHash;
  }, []);

  const distribute = useCallback(async (amountEth: string) => {
    if (!ADDR.TREASURY) throw new Error("Treasury address missing");
    const hash = await sendTransaction(config, { to: ADDR.TREASURY, value: parseEther(amountEth) });
    const rcpt = await waitForTransactionReceipt(config, { hash });
    return rcpt.transactionHash;
  }, []);

  const vote = useCallback(async (proposalId: bigint, support: 0|1|2, reason?: string) => {
    if (!ADDR.GOVERNOR) throw new Error("Governor address missing");
    try {
      const sim = await simulateContract(config, { address: ADDR.GOVERNOR, abi: governorAbi, functionName: reason?"castVoteWithReason":"castVote", args: reason ? [proposalId, support, reason] : [proposalId, support] });
      const hash = await writeContract(config, sim.request);
      const rcpt = await waitForTransactionReceipt(config, { hash });
      return rcpt.transactionHash;
    } catch (e) {
      throw e;
    }
  }, []);

  const getMemberStatus = useCallback(async (addr: `0x${string}`) => {
    try {
      const balanceOf = { name: "balanceOf", type: "function", stateMutability: "view", inputs:[{name:"owner",type:"address"}], outputs:[{type:"uint256"}] } as const;
      const sim = await simulateContract(config, { address: ADDR.ERC721, abi: [balanceOf] as any, functionName: "balanceOf", args: [addr] });
      // simulate is not used for reads here; fallback to unknown to keep this example minimal
      throw new Error("switch to read via viem public client");
    } catch {
      return { isMember: false, reason: "unknown" } as const;
    }
  }, []);

  return { mintToken, distribute, vote, getMemberStatus };
}


// Ajout d’un mock minimal pour le mint si aucun contrat n’est fourni
export async function mintNftMock(quantity: number) {
  await new Promise((r) => setTimeout(r, 800));
  return { ok: true, quantity };
}


// Stubs web3; à câbler avec wagmi/ethers
export async function getMemberStatus(_addr: string) {
  return { isMember: true };
}
export async function registerMember(_addr: string) {
  return { txHash: "0x-register" };
}
export async function joinCompany(_companyId: string) {
  return { txHash: "0x-join" };
}
export async function mintToken(_companyId: string, _qty: number) {
  return { txHash: "0x-mint" };
}
export async function distribute(_companyId: string, _amount: number) {
  return { txHash: "0x-distribute" };
}
export async function vote(_proposalId: string, _choice: 0 | 1) {
  return { txHash: "0x-vote" };
}
