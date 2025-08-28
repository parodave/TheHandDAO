"use client";
import { useAccount } from "wagmi";
import { useState } from "react";
import Link from "next/link";
import { signMessageWithWallet, getNonce, verifySignature } from "@/lib/siweClient";

type JoinData = { name: string; email: string; wallet: string };

export default function JoinPage() {
  const { address, isConnected } = useAccount();
  const [sent, setSent] = useState(false);
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(null);
    const fd = new FormData(e.currentTarget);
    const payload: JoinData = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      wallet: address || "",
    };
    if (!payload.name || !payload.email || !payload.wallet) { setErr("All fields are required."); return; }
    setLoading(true);
    await fetch("/api/join", { method:"POST", body: JSON.stringify(payload) });
    localStorage.setItem("join:last", JSON.stringify(payload));
    setSent(true);
    setLoading(false);
  }

  async function onVerify() {
    try {
      setErr(null); setLoading(true);
      if (!address) throw new Error("No address");
      const nonce = await getNonce();
      const message = `The Hand DAO wants to verify your wallet.\n\nNonce: ${nonce}\nAddress: ${address}`;
      const signature = await signMessageWithWallet(message);
      const ok = await verifySignature(address, message, signature);
      if (!ok) throw new Error("Verification failed");
      setVerified(true);
    } catch (e:any) {
      setErr(e?.message || "Verification failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-2xl px-6 py-10">
      <h1 className="text-5xl font-bold mb-3">Join DAO</h1>
      <p className="mb-8">Register and verify your wallet to become a member.</p>

      {!isConnected ? (
        <div className="border p-6">
          <p className="mb-3">Connect your wallet first.</p>
          <Link href="/" className="border px-3 py-1">Go to header and connect</Link>
        </div>
      ) : (
        <>
          {!sent && (
            <form onSubmit={onSubmit} className="space-y-4 mb-6">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input name="name" className="w-full border px-3 py-2" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input name="email" type="email" className="w-full border px-3 py-2" placeholder="you@domain.com" />
              </div>
              <div>
                <label className="block text-sm mb-1">Wallet</label>
                <input readOnly value={address || ""} className="w-full border px-3 py-2 bg-neutral-50" />
              </div>
              {err && <p className="text-red-600 text-sm">{err}</p>}
              <button disabled={loading} className="border px-4 py-2">{loading ? "Sending…" : "Request access"}</button>
            </form>
          )}

          <div className="border p-6">
            <h2 className="font-semibold mb-2">Wallet verification</h2>
            <p className="text-sm mb-3">
              Sign a message to prove wallet ownership. This sets a secure cookie on this browser.
            </p>
            {verified ? (
              <div className="flex items-center gap-3">
                <span className="border px-2 py-1 text-xs">Verified ✓</span>
                <Link href="/dao" className="border px-3 py-1">Go to Dashboard</Link>
              </div>
            ) : (
              <button onClick={onVerify} disabled={loading} className="border px-4 py-2">
                {loading ? "Verifying…" : "Verify wallet"}
              </button>
            )}
            {err && <p className="text-red-600 text-sm mt-2">{err}</p>}
          </div>
        </>
      )}
    </main>
  );
}
