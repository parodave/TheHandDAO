"use client";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import StatCard from "@/components/StatCard";
import ActionsPanel from "@/components/ActionsPanel";
import CompaniesGrid from "@/components/CompaniesGrid";
import TableMinimal from "@/components/TableMinimal";
import { useDaoStats } from "@/lib/hooks/useDaoStats";
import { useTreasury } from "@/lib/hooks/useTreasury";
import { useVotes } from "@/lib/hooks/useVotes";
import MintNFT from "@/components/MintNFT";

export default function DashboardPage() {
  const { address, isConnected } = useAccount();
  const { members, monthlyRevenue, distributions } = useDaoStats();
  const { treasuryUsd } = useTreasury();
  const { history } = useVotes();

  return (
    <main className="min-h-screen p-6 md:p-12 space-y-10">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold tracking-tight">Dashboard</h1>
        <div className="border border-neutral-200 p-3">
          <ConnectButton />
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Membres" value={members.toString()} />
        <StatCard title="Trésor" value={`$${treasuryUsd.toLocaleString()}`} />
        <StatCard title="Revenus mensuels" value={`$${monthlyRevenue.toLocaleString()}`} />
        <StatCard title="Distributions" value={`$${distributions.toLocaleString()}`} />
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-medium uppercase tracking-wide">Entreprises</h2>
        <CompaniesGrid />
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-medium uppercase tracking-wide">Actions</h2>
        <ActionsPanel walletAddress={address ?? null} isConnected={isConnected} />
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-medium uppercase tracking-wide">Mint NFT</h2>
        <div className="border border-neutral-200 p-6">
          <MintNFT />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-medium uppercase tracking-wide">Historique</h2>
        <TableMinimal
          columns={["Date", "Action", "Montant"]}
          rows={history.map((h) => [h.date, h.action, h.amount])}
        />
      </section>
    </main>
  );
}
