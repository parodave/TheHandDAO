import { base, baseSepolia, mainnet, polygon, sepolia } from "viem/chains";
import type { Chain } from "viem";

export function getChainByEnv(name?: string): Chain {
  switch ((name || "").toLowerCase()) {
    case "base":
      return base;
    case "basesepolia":
    case "base-sepolia":
      return baseSepolia;
    case "polygon":
      return polygon;
    case "sepolia":
      return sepolia;
    default:
      return mainnet;
  }
}

