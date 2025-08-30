"use client";
import { useEffect, useState } from "react";
import { publicClient } from "@/lib/web3/net";
import { ADDR } from "@/lib/web3/addresses";
import erc721Json from "@/abi/ERC721.json";
const erc721Abi = (erc721Json as any).abi || (erc721Json as any);

type Stats = { members: number; treasuryEth: string; monthlyRevenueEth: string; distributions: number };

export function useDaoStats() {
  const [data, setData] = useState<Stats>({ members: 0, treasuryEth: "0", monthlyRevenueEth: "0", distributions: 0 });
  useEffect(() => {
    (async () => {
      try {
        let members = 0;
        if (ADDR.ERC721) {
          try {
            const totalSupply = await publicClient.readContract({ address: ADDR.ERC721, abi: erc721Abi, functionName: "totalSupply" });
            members = Number(totalSupply || 0);
          } catch {}
        }
        let treasuryEth = "0";
        if (ADDR.TREASURY) {
          const bal = await publicClient.getBalance({ address: ADDR.TREASURY });
          treasuryEth = (Number(bal) / 1e18).toFixed(4);
        }
        // placeholders calculés côté client
        const monthlyRevenueEth = (members * 0.01).toFixed(2);
        const distributions = Math.max(0, Math.floor(members / 10));
        setData({ members, treasuryEth, monthlyRevenueEth, distributions });
      } catch {
        setData((d)=>d);
      }
    })();
  }, []);
  return data;
}

