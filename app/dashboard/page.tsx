"use client";
import { useAccount } from "wagmi";
import { useDaoStats } from "@/lib/hooks/useDaoStats";
import { useDaoActions } from "@/lib/web3/contracts";
import { useState } from "react";

export default function Dashboard() {
  const { address, isConnected } = useAccount();
  const stats = useDaoStats();
  const { mintToken, distribute, vote } = useDaoActions();
  const [tx, setTx] = useState<string|undefined>();
  const [loading, setLoading] = useState(false);

  if (!isConnected) return <main className="p-8">Connect wallet</main>;

  async function onMint() {
    if (!address) return;
    setLoading(true); try { const h = await mintToken(address, "ipfs://metadata.json"); setTx(h);} finally { setLoading(false);} }
  async function onDistribute() {
    setLoading(true); try { const h = await distribute("0.001"); setTx(h);} finally { setLoading(false);} }
  async function onVote() {
    setLoading(true); try { const h = await vote(0n, 1, "support"); setTx(h);} finally { setLoading(false);} }

  return (
    <main className="min-h-screen bg-white text-black p-8 space-y-8">
      <header className="flex items-center justify-between border-b pb-4">
        <h1 className="uppercase tracking-wide">Overview</h1>
        <div className="text-sm">{address}</div>
      </header>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="border p-4"><div className="text-xs uppercase">Membres</div><div className="text-2xl">{stats.members}</div></div>
        <div className="border p-4"><div className="text-xs uppercase">Trésor</div><div className="text-2xl">{stats.treasuryEth} ETH</div></div>
        <div className="border p-4"><div className="text-xs uppercase">Revenus mensuels</div><div className="text-2xl">{stats.monthlyRevenueEth} ETH</div></div>
        <div className="border p-4"><div className="text-xs uppercase">Distributions</div><div className="text-2xl">{stats.distributions}</div></div>
      </section>

      <section className="border p-4">
        <div className="mb-4 text-xs uppercase">Actions</div>
        <div className="flex gap-3">
          <button onClick={onMint} disabled={loading} className="btn">Mint</button>
          <button onClick={onDistribute} disabled={loading} className="btn">Distribute</button>
          <button onClick={onVote} disabled={loading} className="btn">Vote</button>
        </div>
        {tx && <div className="mt-3 text-sm break-all">Tx: {tx}</div>}
      </section>

      <section className="border p-4">
        <div className="text-xs uppercase mb-2">Historique</div>
        <ul className="text-sm space-y-1">
          <li>Placeholder. Brancher TheGraph ou explorer plus tard.</li>
        </ul>
      </section>
    </main>
  );
}
