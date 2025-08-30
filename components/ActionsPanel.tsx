"use client";
import { useState } from "react";
import { registerMember, joinCompany, mintToken, distribute, vote } from "@/lib/web3/contracts";
type Props = { walletAddress: string | null; isConnected: boolean };
const tabs = ["register", "join", "mint", "distribute", "vote"] as const;
export default function ActionsPanel({ walletAddress, isConnected }: Props) {
  const [active, setActive] = useState<typeof tabs[number]>("register");
  const [companyId, setCompanyId] = useState("C-01");
  const [qty, setQty] = useState(1);
  const [amount, setAmount] = useState(100);
  const [proposalId, setProposalId] = useState("P-001");
  const [choice, setChoice] = useState<0 | 1>(1);
  const [msg, setMsg] = useState("");

  const guard = () => {
    if (!isConnected || !walletAddress) throw new Error("Wallet non connecté.");
  };

  async function onSubmit() {
    try {
      setMsg("");
      if (active === "register") {
        guard(); await registerMember(walletAddress!); setMsg("Inscription OK");
      } else if (active === "join") {
        guard(); await joinCompany(companyId); setMsg(`Rejoint ${companyId}`);
      } else if (active === "mint") {
        guard(); await mintToken(companyId, qty); setMsg(`Mint ${qty} pour ${companyId}`);
      } else if (active === "distribute") {
        guard(); await distribute(companyId, amount); setMsg(`Distribué $${amount} à ${companyId}`);
      } else if (active === "vote") {
        guard(); await vote(proposalId, choice); setMsg(`Vote ${proposalId} = ${choice ? "Oui" : "Non"}`);
      }
    } catch (e: any) {
      setMsg(`Erreur: ${e.message}`);
    }
  }

  return (
    <div className="border border-neutral-200">
      <div className="flex flex-wrap">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`px-4 py-2 border-r border-neutral-200 ${active===t ? "underline" : ""}`}
          >
            {t.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="p-4 space-y-3">
        {active !== "register" && (
          <div className="flex gap-3 flex-wrap">
            <input
              className="border border-neutral-200 px-3 py-2"
              placeholder="Company ID"
              value={companyId}
              onChange={(e) => setCompanyId(e.target.value)}
            />
            {active === "mint" && (
              <input
                type="number"
                className="border border-neutral-200 px-3 py-2 w-28"
                value={qty}
                min={1}
                onChange={(e) => setQty(Number(e.target.value))}
              />
            )}
            {active === "distribute" && (
              <input
                type="number"
                className="border border-neutral-200 px-3 py-2 w-36"
                value={amount}
                min={1}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
            )}
            {active === "vote" && (
              <>
                <input
                  className="border border-neutral-200 px-3 py-2"
                  placeholder="Proposal ID"
                  value={proposalId}
                  onChange={(e) => setProposalId(e.target.value)}
                />
                <select
                  className="border border-neutral-200 px-3 py-2"
                  value={choice}
                  onChange={(e) => setChoice(Number(e.target.value) as 0 | 1)}
                >
                  <option value={1}>Oui</option>
                  <option value={0}>Non</option>
                </select>
              </>
            )}
          </div>
        )}
        <button onClick={onSubmit} className="btn">{isConnected ? "Exécuter" : "Connecter le wallet"}</button>
        {msg && <p className="text-sm">{msg}</p>}
      </div>
    </div>
  );
}
