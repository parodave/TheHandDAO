'use client';
import { useAccount, useBalance } from 'wagmi';
import { useEffect, useMemo, useState } from 'react';
import { getVote, setVote } from '@/lib/daoClient';

export default function DAOPage() {
  const { address, isConnected, chain } = useAccount();
  const { data: bal } = useBalance({
    address,
    chainId: chain?.id,
    query: { enabled: !!address },
  });

  const proposals = useMemo(
    () => [
      {
        id: 'p1',
        title: 'Adopt monochrome brand',
        text: 'Keep pure black & white UI.',
      },
      {
        id: 'p2',
        title: 'Mint membership NFT',
        text: 'Issue ERC-1155 membership token.',
      },
      {
        id: 'p3',
        title: 'Create community Telegram',
        text: 'Open official chat.',
      },
    ],
    []
  );

  function VoteRow({
    id,
    title,
    text,
  }: {
    id: string;
    title: string;
    text: string;
  }) {
    const { address } = useAccount();
    const [choice, setChoice] = useState<string | undefined>(undefined);
    useEffect(() => {
      setChoice(getVote(address, id));
    }, [address, id]);
    return (
      <div className="border p-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm mb-3">{text}</p>
        <div className="flex gap-3">
          <button
            className={`border px-3 py-1 ${choice === 'yes' ? 'font-semibold' : ''}`}
            onClick={() =>
              address && (setVote(address, id, 'yes'), setChoice('yes'))
            }
          >
            Yes
          </button>
          <button
            className={`border px-3 py-1 ${choice === 'no' ? 'font-semibold' : ''}`}
            onClick={() =>
              address && (setVote(address, id, 'no'), setChoice('no'))
            }
          >
            No
          </button>
          <span className="text-sm opacity-70">
            {choice ? `Your vote: ${choice}` : 'No vote yet'}
          </span>
        </div>
      </div>
    );
  }

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
            <p>
              Address: <span className="font-mono">{address}</span>
            </p>
            <p>Chain: {chain?.name ?? 'Unknown'}</p>
            <p>Balance: {bal ? `${bal.formatted} ${bal.symbol}` : '…'}</p>
          </div>
        )}
      </section>

      <section className="mb-10">
        <h2 className="font-semibold mb-3">Proposals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {proposals.map((p) => (
            <VoteRow key={p.id} {...p} />
          ))}
        </div>
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
