import { http, createPublicClient } from "viem";
import { base, baseSepolia } from "viem/chains";

export const useSepolia = process.env.NEXT_PUBLIC_USE_SEPOLIA === "true";
export const chain = useSepolia ? baseSepolia : base;
const rpc = useSepolia
  ? (process.env.NEXT_PUBLIC_BASE_SEPOLIA_RPC || "https://sepolia.base.org")
  : (process.env.NEXT_PUBLIC_BASE_RPC || "https://mainnet.base.org");

export const publicClient = createPublicClient({ chain, transport: http(rpc) });

