"use client";
import { useAccount, useBalance } from 'wagmi';
import { useEffect, useMemo, useState } from 'react';
import { getVote, setVote } from '@/lib/daoClient';
import { getStatus } from "@/lib/siweClient";
import { tokenIssue, tokenStatus } from "@/lib/tokenClient";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

export default function DAOPage() {
  const { address, isConnected, chain } = useAccount();
  const { data: bal } = useBalance({
    address,
    chainId: chain?.id,
    query: { enabled: !!address },
  });

  const [isMember, setIsMember] = useState(false);
  useEffect(()=>{ getStatus().then(setIsMember).catch(()=>setIsMember(false)); },[]);
  const [hasToken, setHasToken] = useState(false);
  useEffect(()=>{ tokenStatus().then((r:any)=>setHasToken(!!r.ok)).catch(()=>setHasToken(false)); },[]);
  async function handleIssue(address?: string){
    if (!address) return;
    const ok = await tokenIssue(address);
    if (ok) location.reload();
  }

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
      <Card>
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
      </Card>
    );
  }

  return (
    <main>
      <Section className="py-12">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.h1 className="text-5xl font-bold mb-2" variants={fadeUp}>DAO Dashboard</motion.h1>
          <motion.p className="mb-8" variants={fadeUp}>Basic overview. Live data will be added later.</motion.p>

          <motion.div variants={fadeUp} className="mb-8">
            <Card>
              <h2 className="font-semibold mb-2">Wallet</h2>
              {!isConnected ? (
                <p>Not connected. Use the button in the header.</p>
              ) : (
                <div className="space-y-1">
                  <p>Address: <span className="font-mono">{address}</span></p>
                  <p>Chain: {chain?.name ?? 'Unknown'}</p>
                  <p>Balance: {bal ? `${bal.formatted} ${bal.symbol}` : '…'}</p>
                </div>
              )}
            </Card>
          </motion.div>

          {!isMember && (
            <motion.div variants={fadeUp} className="mb-8">
              <Card>
                <p className="mb-2">You are not verified as a member on this browser.</p>
                <a href="/join" className="border px-3 py-1">Verify wallet on /join</a>
              </Card>
            </motion.div>
          )}

          {!hasToken && isMember && (
            <motion.div variants={fadeUp} className="mb-8">
              <Card>
                <p className="mb-2">Get your access token to enter the members area.</p>
                <button className="border px-3 py-1" onClick={()=>handleIssue(address)}>Get access token</button>
                <span className="ml-3 text-sm opacity-70">Requires verified membership.</span>
              </Card>
            </motion.div>
          )}

          <motion.div variants={fadeUp} className="mb-10">
            <h2 className="font-semibold mb-3">Proposals</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {proposals.map((p) => (
                <VoteRow key={p.id} {...p} />
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <h3 className="font-semibold mb-2">Members</h3>
              <p>Coming soon</p>
            </Card>
            <Card>
              <h3 className="font-semibold mb-2">Treasury</h3>
              <p>Coming soon</p>
            </Card>
            <Card>
              <h3 className="font-semibold mb-2">Proposals</h3>
              <p>Coming soon</p>
            </Card>
          </div>
        </motion.div>
      </Section>
    </main>
  );
}
