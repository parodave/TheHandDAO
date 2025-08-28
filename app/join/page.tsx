'use client';
import { useAccount } from 'wagmi';
import { useState } from 'react';
import Link from 'next/link';

type JoinData = { name: string; email: string; wallet: string };

export default function JoinPage() {
  const { address, isConnected } = useAccount();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(null);
    const fd = new FormData(e.currentTarget);
    const payload: JoinData = {
      name: String(fd.get('name') || '').trim(),
      email: String(fd.get('email') || '').trim(),
      wallet: address || '',
    };
    if (!payload.name || !payload.email || !payload.wallet) {
      setErr('All fields are required.');
      return;
    }
    try {
      setLoading(true);
      // Appel API interne (mock/collecte). Côté serveur on log l'inscription.
      await fetch('/api/join', {
        method: 'POST',
        body: JSON.stringify(payload),
      });
      // Sauvegarde locale
      localStorage.setItem('join:last', JSON.stringify(payload));
      setSent(true);
    } catch {
      setErr('Submit failed. Try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-2xl px-6 py-10">
      <h1 className="text-5xl font-bold mb-3">Join DAO</h1>
      <p className="mb-8">
        Register to join the community. Wallet connection required.
      </p>

      {!isConnected ? (
        <div className="border p-6">
          <p className="mb-3">Connect your wallet first.</p>
          <Link href="/" className="border px-3 py-1">
            Go to header and connect
          </Link>
        </div>
      ) : sent ? (
        <div className="border p-6">
          <p className="mb-2">Request received.</p>
          <p className="text-sm">
            We recorded: <span className="font-mono">{address}</span>
          </p>
          <div className="mt-4 flex gap-3">
            <Link href="/dao" className="border px-3 py-1">
              Go to Dashboard
            </Link>
            <Link href="/" className="border px-3 py-1">
              Home
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              name="name"
              className="w-full border px-3 py-2"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              name="email"
              type="email"
              className="w-full border px-3 py-2"
              placeholder="you@domain.com"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Wallet</label>
            <input
              readOnly
              value={address || ''}
              className="w-full border px-3 py-2 bg-neutral-50"
            />
          </div>
          {err && <p className="text-red-600 text-sm">{err}</p>}
          <button disabled={loading} className="border px-4 py-2">
            {loading ? 'Sending…' : 'Request access'}
          </button>
        </form>
      )}
    </main>
  );
}
