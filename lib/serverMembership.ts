import { cookies } from "next/headers";
import { Address, createPublicClient, getAddress, http } from "viem";
import { getChainByEnv } from "@/lib/chains";

const ERC721_ABI = [
  { type:"function", name:"balanceOf", stateMutability:"view",
    inputs:[{name:"owner", type:"address"}], outputs:[{type:"uint256"}] },
] as const;

const ERC1155_ABI = [
  { type:"function", name:"balanceOf", stateMutability:"view",
    inputs:[{name:"account", type:"address"}, {name:"id", type:"uint256"}],
    outputs:[{type:"uint256"}] },
] as const;

export async function isMemberServer(addr?: string|null): Promise<boolean> {
  const cookieStore = await cookies();
  const cookieMember = cookieStore.get("member")?.value === "1";
  if (cookieMember) return true;
  // NFT path (optional)
  const nft = process.env.NEXT_PUBLIC_MEMBER_NFT_ADDRESS;
  if (!nft || !addr) return false;
  try {
    const standard = (process.env.NEXT_PUBLIC_MEMBER_NFT_STANDARD || "ERC721").toUpperCase();
    const chain = getChainByEnv(process.env.NEXT_PUBLIC_TREASURY_CHAIN);
    const client = createPublicClient({ chain, transport: http() });
    const address = getAddress(addr) as Address;
    const contract = getAddress(nft) as Address;
    if (standard === "ERC1155") {
      const id = BigInt(process.env.NEXT_PUBLIC_MEMBER_NFT_ID || "0");
      const bal = await client.readContract({ address: contract, abi: ERC1155_ABI, functionName: "balanceOf", args: [address, id] });
      return (bal as bigint) > BigInt(0);
    }
    const bal = await client.readContract({ address: contract, abi: ERC721_ABI, functionName: "balanceOf", args: [address] });
    return (bal as bigint) > BigInt(0);
  } catch { return false; }
}

export function isAdminAddress(addr?: string|null): boolean {
  if (!addr) return false;
  const list = (process.env.ADMIN_ADDRESSES || "")
    .split(",")
    .map(s => s.trim().toLowerCase())
    .filter(Boolean);
  return list.includes(addr.toLowerCase());
}

