"use client";
import { useAccount, useBalance } from "wagmi";

export default function DAOPage() {
  const { address, isConnected, chain } = useAccount();
  const { data: bal } = useBalance({
    address,
    chainId: chain?.id,
    query: { enabled: !!address },
  });

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-5xl font-bold mb-2">DAO Dashboard</h1>
      <p className="mb-8">Basic overview. Live data will be added later.</p>

      <section className="mb-8 border p-4">
        <h2 className="font-semibold mb-2">Wallet</h2>
        {!isConnected ? (
          <p>Not connected. Use the button in the header.</p>
        ) : (
          <div className="space-y-1">
            <p>Address: <span className="font-mono">{address}</span></p>
            <p>Chain: {chain?.name ?? "Unknown"}</p>
            <p>Balance: {bal ? `${bal.formatted} ${bal.symbol}` : "…"}</p>
          </div>
        )}
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border p-6">
          <h3 className="font-semibold mb-2">Members</h3>
          <p>Coming soon</p>
        </div>
        <div className="border p-6">
          <h3 className="font-semibold mb-2">Treasury</h3>
          <p>Coming soon</p>
        </div>
        <div className="border p-6">
          <h3 className="font-semibold mb-2">Proposals</h3>
          <p>Coming soon</p>
        </div>
      </div>
    </main>
  );
}

