"use client";
import { useEffect, useState } from "react";

type Report = {
  network: string; chainId: number; latestBlock: string; rpcLatencyMs: number;
  rainbowkitProjectIdPresent: boolean;
  addresses: { governor?: string; treasury?: string; erc721?: string; snapshotSpace?: string; };
  governor: { quorum: string };
  erc721: { name: string; symbol: string; totalSupply: string };
};

export default function Health() {
  const [data, setData] = useState<Report|null>(null);
  useEffect(() => {
    fetch("/dao-report.json").then(r => r.ok ? r.json() : null).then(setData).catch(()=>{});
  }, []);
  return (
    <main className="min-h-screen bg-white text-black p-8">
      <h1 className="text-2xl mb-6 tracking-wide uppercase">DAO Health</h1>
      {!data ? <p>Run <code className="border px-2">npm run dao:audit</code> then refresh.</p> :
        <div className="space-y-4">
          <div className="border p-4">
            <div>Network: <b>{data.network}</b> | ChainId: {data.chainId} | Block: {data.latestBlock}</div>
            <div>RPC latency: {data.rpcLatencyMs} ms</div>
            <div>RainbowKit configured: {String(data.rainbowkitProjectIdPresent)}</div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border p-4">
              <h2 className="uppercase text-sm mb-2">Addresses</h2>
              <ul className="space-y-1">
                <li>Governor: {data.addresses.governor || "n/a"}</li>
                <li>Treasury: {data.addresses.treasury || "n/a"}</li>
                <li>ERC721: {data.addresses.erc721 || "n/a"}</li>
                <li>Snapshot: {data.addresses.snapshotSpace || "n/a"}</li>
              </ul>
            </div>
            <div className="border p-4">
              <h2 className="uppercase text-sm mb-2">Contracts</h2>
              <div>Governor quorum: {data.governor.quorum}</div>
              <div>NFT: {data.erc721.name} ({data.erc721.symbol}) — totalSupply {data.erc721.totalSupply}</div>
            </div>
          </div>
        </div>
      }
    </main>
  );
}

