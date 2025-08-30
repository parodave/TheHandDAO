"use client";
import { useState } from "react";
import { writeContract } from "wagmi/actions";
import { useAccount } from "wagmi";
import { abi as erc721Abi } from "@/lib/web3/erc721mintable_abi";
import { mintNftMock } from "@/lib/web3/contracts";

const PRICE_USD = 999;     // prix fixe
const MAX_SUPPLY = 999;    // supply max

export default function MintNFT() {
  const { address, isConnected } = useAccount();
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  async function onMint() {
    if (!isConnected) {
      setStatus("Veuillez connecter votre portefeuille.");
      return;
    }
    if (qty < 1) return;
    setLoading(true);
    setStatus(null);
    try {
      const addr = process.env.NEXT_PUBLIC_NFT_ADDRESS as `0x${string}` | undefined;
      if (addr) {
        const tx = await writeContract({
          address: addr as `0x${string}`,
          abi: erc721Abi,
          functionName: "mint",
          args: [BigInt(qty)],
        } as any);
        setStatus(`Transaction envoyée: ${tx}`);
      } else {
        await mintNftMock(qty);
        setStatus("Mint simulé avec succès.");
      }
    } catch (e: any) {
      setStatus(e?.shortMessage || e?.message || "Erreur lors du mint.");
    } finally {
      setLoading(false);
    }
  }



  async function payWithStripe() {
    if (!isConnected || !address) return setStatus("Connectez votre wallet avant de payer.");
    setLoading(true); setStatus(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          qty,
          wallet: address,
          locale: typeof window !== "undefined" && window.location.pathname.startsWith("/en") ? "en" : "fr",
        }),
      });
      if (!res.ok) throw new Error("Création de session Stripe échouée.");
      const { url } = await res.json();
      window.location.href = url;
    } catch (e:any) {
      setStatus(e?.message || "Erreur Stripe");
    } finally { setLoading(false); }
  }
  return (
    <section className="border border-neutral-200 p-6 space-y-4">
      <header className="flex items-baseline justify-between">
        <h2 className="text-xl font-semibold">Mint NFT</h2>
        <div className="text-sm text-neutral-600">Supply max: {MAX_SUPPLY}</div>
      </header>

      <div className="text-sm">Prix unitaire: <span className="font-medium">${PRICE_USD}</span></div>

      <div className="flex items-center gap-3">
        <label className="text-sm uppercase tracking-wide">Quantité</label>
        <input
          type="number"
          min={1}
          max={MAX_SUPPLY}
          value={qty}
          onChange={(e) => setQty(Math.max(1, Math.min(MAX_SUPPLY, Number(e.target.value))))}
          className="h-10 w-24 border border-neutral-300 px-3"
        />
        <button
          onClick={onMint}
          disabled={loading}
          className="inline-flex h-10 px-6 border border-neutral-900 bg-white text-black hover:bg-black hover:text-white transition"
        >
          {loading ? "Minting..." : "Mint"}
        </button>
        <button onClick={payWithStripe} disabled={loading}
          className="inline-flex h-10 px-6 border border-neutral-900 bg-white text-black hover:bg-black hover:text-white transition">
          {loading ? "..." : "Payer avec Stripe"}
        </button>
      </div>

      <div className="text-sm text-neutral-600">
        Total: <span className="font-medium">${(qty * PRICE_USD).toLocaleString()}</span>
      </div>

      {status && <div className="text-sm">{status}</div>}
    </section>
  );
}
